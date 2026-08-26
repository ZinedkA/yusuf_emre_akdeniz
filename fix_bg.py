import codecs

with codecs.open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Fix the broken backgroundImage syntax
bad_line = "bg.style.backgroundImage = url('');"
good_line = "bg.style.backgroundImage = `url('${firstImage.getAttribute('src')}')`;"

if bad_line in js:
    js = js.replace(bad_line, good_line)

with codecs.open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)
