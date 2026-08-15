import codecs

with codecs.open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

js = js.replace(r'\"I am', '"I am')
js = js.replace(r'hardware development.\",', 'hardware development.",')

js = js.replace(r'\"By taking', '"By taking')
js = js.replace(r'autonomous control boards.\",', 'autonomous control boards.",')

js = js.replace(r'\"Finally, I worked', '"Finally, I worked')
js = js.replace(r'DO-160 standards.\",', 'DO-160 standards.",')

with codecs.open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)
