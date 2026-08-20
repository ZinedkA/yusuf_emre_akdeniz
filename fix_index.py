import codecs
import re

with codecs.open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix the arrows
html = html.replace('&larr; Previous', '← Previous')
html = html.replace('Next &rarr;', 'Next →')
html = html.replace('&larr; Önceki', '← Önceki')
html = html.replace('Sonraki &rarr;', 'Sonraki →')

# Add the visitor badge to footer
old_footer = '''  <footer style="text-align: center; padding: 2rem; background: var(--nav-bg); border-top: 1px solid var(--border-color); margin-top: 4rem;">
    <p data-i18n="footer_copy">© 2026 Yusuf Emre Akdeniz — Mekatronik Mühendisi</p>
    <div style="margin-top: 1rem;">
      <a href="https://linkedin.com/in/ysfmrakdeniz" target="_blank" class="btn btn-ghost">LinkedIn</a>
      <a href="https://github.com/ysfmrakdeniz" target="_blank" class="btn btn-ghost">GitHub</a>
    </div>
  </footer>'''

new_footer = '''  <footer style="text-align: center; padding: 2rem; background: var(--nav-bg); border-top: 1px solid var(--border-color); margin-top: 4rem;">
    <p data-i18n="footer_copy">© 2026 Yusuf Emre Akdeniz — Mekatronik Mühendisi</p>
    <div style="margin-top: 1rem;">
      <a href="https://linkedin.com/in/ysfmrakdeniz" target="_blank" class="btn btn-ghost">LinkedIn</a>
      <a href="https://github.com/ysfmrakdeniz" target="_blank" class="btn btn-ghost">GitHub</a>
    </div>
    <div style="margin-top: 1.5rem; opacity: 0.85; display: flex; justify-content: center; align-items: center;">
      <img src="https://profile-counter.glitch.me/ysfmrakdeniz.github.io/count.svg" alt="Ziyaretçi Sayacı">
    </div>
  </footer>'''

# Try with 2026 first
if old_footer in html:
    html = html.replace(old_footer, new_footer)
else:
    # Try with 2025 if 2026 is not there
    old_footer_25 = old_footer.replace('2026', '2025')
    new_footer_25 = new_footer.replace('2026', '2025')
    html = html.replace(old_footer_25, new_footer_25)

with codecs.open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
