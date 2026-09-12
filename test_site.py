import codecs
import re
import os

html_path = 'index.html'
js_path = 'script.js'

with codecs.open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

with codecs.open(js_path, 'r', encoding='utf-8') as f:
    js = f.read()

errors = []

# 1. Check Images
print("--- Checking Images ---")
images = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
for img in images:
    if img.startswith('http') or img.startswith('data:'):
        continue # Ignore external or base64 images
    if not os.path.exists(img):
        errors.append(f"Image not found on disk: {img}")
    else:
        print(f"OK: {img}")

# 2. Check Translations
print("\n--- Checking Translations ---")
i18n_keys_in_html = re.findall(r'data-i18n=["\']([^"\']+)["\']', html)
i18n_keys_in_html = set(i18n_keys_in_html)

# Extract en and tr dictionaries naively
# Find keys in JS like `hw_tag: '...'`
js_keys_en = set(re.findall(r'([a-zA-Z0-9_]+)\s*:\s*[\'"`]', js))
# This regex will catch lots of things (like variable names), but let's filter
missing_in_js = []
for key in i18n_keys_in_html:
    if key not in js_keys_en:
        missing_in_js.append(key)
        errors.append(f"HTML uses translation key '{key}' but it might be missing in script.js")

print(f"Found {len(i18n_keys_in_html)} translation keys in HTML.")
if not missing_in_js:
    print("All HTML translation keys seem to exist in script.js.")

# 3. Check Section Links
print("\n--- Checking Anchor Links ---")
links = re.findall(r'href=["\']#([^"\']+)["\']', html)
for link in links:
    # check if id exists
    if f'id="{link}"' not in html and f"id='{link}'" not in html:
        errors.append(f"Broken anchor link: #{link} (ID not found in HTML)")

# 4. Check for unclosed template strings / syntax hints in JS
if 'url(\'\')' in js:
    errors.append("JS syntax error: url('') without template literal")

print("\n--- Test Results ---")
if errors:
    for e in errors:
        print("ERROR:", e)
else:
    print("ALL TESTS PASSED! 0 Errors.")
