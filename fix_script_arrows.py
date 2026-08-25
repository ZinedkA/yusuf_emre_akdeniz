import codecs

with codecs.open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

js = js.replace('&larr; Previous', '&#8592; Previous')
js = js.replace('Next &rarr;', 'Next &#8594;')
js = js.replace('&larr; Önceki', '&#8592; Önceki')
js = js.replace('Sonraki &rarr;', 'Sonraki &#8594;')

with codecs.open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)
