import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('<div class="anim-item anim-uav">🚁</div>', '<div class="anim-item anim-uav">✈️</div>')
content = content.replace('© 2025 Yusuf Emre', '© 2026 Yusuf Emre')

pattern = re.compile(r'(<div class="project-tags">.*?</div>\s*)(</div>\s*</div>)', re.DOTALL)
content = pattern.sub(r'\1  <button class="btn btn-ghost" data-i18n="proj_details_btn" style="margin-top: 15px; width: 100%; pointer-events: none;">Detayları Gör</button>\n          \2', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

js = js.replace('© 2025 Yusuf', '© 2026 Yusuf')
js = js.replace("proj_title: 'Competition & Projects',", "proj_title: 'Competition & Projects',\n    proj_details_btn: 'See Details',")
js = js.replace("proj_title: 'Yarışmalar ve Projeler',", "proj_title: 'Yarışmalar ve Projeler',\n    proj_details_btn: 'Detayları Gör',")

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)
