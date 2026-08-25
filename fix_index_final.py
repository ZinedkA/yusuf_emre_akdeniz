import codecs
import re

with codecs.open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix footer
old_footer = '''  <!-- ─── FOOTER ─── -->
  <footer>
    <div class="footer-content">
      <span data-i18n="footer_copy">© 2026 Yusuf Emre Akdeniz — Mechatronics Engineer</span>
    </div>
  </footer>'''

new_footer = '''  <!-- ─── FOOTER ─── -->
  <footer>
    <div class="footer-content" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
      <span data-i18n="footer_copy">© 2026 Yusuf Emre Akdeniz — Mechatronics Engineer</span>
      <img src="https://profile-counter.glitch.me/ysfmrakdeniz.github.io/count.svg" alt="Ziyaretçi Sayacı" style="opacity: 0.85;">
    </div>
  </footer>'''

html = html.replace(old_footer, new_footer)

# Fix modal buttons
html = re.sub(r'<button id="modal-prev".*?</button>', r'<button id="modal-prev" class="btn btn-ghost" data-i18n="modal_prev" style="padding: 0.5rem 1rem;">← Previous</button>', html)
html = re.sub(r'<button id="modal-next".*?</button>', r'<button id="modal-next" class="btn btn-ghost" data-i18n="modal_next" style="padding: 0.5rem 1rem;">Next →</button>', html)

with codecs.open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
