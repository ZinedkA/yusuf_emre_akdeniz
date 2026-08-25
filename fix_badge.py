import codecs

with open('index.html', 'rb') as f:
    html = f.read()

html = html.replace(b'https://profile-counter.glitch.me/ysfmrakdeniz.github.io/count.svg', b'https://visitor-badge.laobi.icu/badge?page_id=ysfmrakdeniz.github.io')

with open('index.html', 'wb') as f:
    f.write(html)
