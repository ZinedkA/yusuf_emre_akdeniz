import codecs

with codecs.open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

js = js.replace('&#8592; Previous', '← Previous')
js = js.replace('Next &#8594;', 'Next →')
js = js.replace('&#8592; Önceki', '← Önceki')
js = js.replace('Sonraki &#8594;', 'Sonraki →')

with codecs.open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)
