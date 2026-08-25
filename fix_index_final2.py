import codecs
import re

# Read as raw bytes to preserve encoding exactly
with open('index.html', 'rb') as f:
    html = f.read()

# Add the visitor badge before </footer>
if b"count.svg" not in html:
    html = html.replace(b'</footer>', b'  <div style="display:flex; justify-content:center; margin-top:1rem;"><img src="https://profile-counter.glitch.me/ysfmrakdeniz.github.io/count.svg" alt="Ziyaretci Sayaci" style="opacity:0.85;"></div>\n  </footer>')

# Replace the modal buttons
html = re.sub(rb'<button id="modal-prev".*?</button>', rb'<button id="modal-prev" class="btn btn-ghost" data-i18n="modal_prev" style="padding: 0.5rem 1rem;">&#8592; Previous</button>', html)
html = re.sub(rb'<button id="modal-next".*?</button>', rb'<button id="modal-next" class="btn btn-ghost" data-i18n="modal_next" style="padding: 0.5rem 1rem;">Next &#8594;</button>', html)

with open('index.html', 'wb') as f:
    f.write(html)
