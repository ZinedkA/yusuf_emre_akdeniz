import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

images_html = '''
            <div class="project-images" style="display: none;">
              <img src="hava-2024/1786711539411.jpg.jpeg" style="height: 120px; border-radius: 8px; cursor: pointer; object-fit: cover;" onclick="document.getElementById('project-modal').style.display='flex'; document.getElementById('modal-img').src=this.src;">
              <img src="hava-2024/1786711539461.jpg.jpeg" style="height: 120px; border-radius: 8px; cursor: pointer; object-fit: cover;" onclick="document.getElementById('project-modal').style.display='flex'; document.getElementById('modal-img').src=this.src;">
              <img src="hava-2024/1786711539537.jpg.jpeg" style="height: 120px; border-radius: 8px; cursor: pointer; object-fit: cover;" onclick="document.getElementById('project-modal').style.display='flex'; document.getElementById('modal-img').src=this.src;">
              <img src="hava-2024/2026-08-14 at 16.23.52.jpeg" style="height: 120px; border-radius: 8px; cursor: pointer; object-fit: cover;" onclick="document.getElementById('project-modal').style.display='flex'; document.getElementById('modal-img').src=this.src;">
            </div>
'''

# Find the insertion point for proj4
# After <div class="project-desc-long" data-i18n="proj4_desc_long" style="display: none;"> ... </div>
html = re.sub(
    r'(<div class="project-desc-long" data-i18n="proj4_desc_long" style="display: none;">.*?</div>)',
    r'\1' + images_html,
    html,
    flags=re.DOTALL
)

# Find the insertion point for proj6
html = re.sub(
    r'(<div class="project-desc-long" data-i18n="proj6_desc_long" style="display: none;">.*?</div>)',
    r'\1' + images_html,
    html,
    flags=re.DOTALL
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
