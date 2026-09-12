import codecs
import re

js_path = 'script.js'

with codecs.open(js_path, 'r', encoding='utf-8') as f:
    js = f.read()

# Fix the JS syntax error
bad_bg = "bg.style.backgroundImage = url('');"
good_bg = "bg.style.backgroundImage = `url('${firstImage.getAttribute('src')}')`;"
js = js.replace(bad_bg, good_bg)

# Fix the missing translation key
if "edu_bsc_thesis" not in js:
    # insert before edu_bsc_date
    en_thesis = "    edu_bsc_thesis: 'Thesis: Target Recognition and Tracking for Autonomous Systems',\n"
    tr_thesis = "    edu_bsc_thesis: 'Bitirme Tezi: Otonom Sistemler için Hedef Tanıma ve Takip',\n"
    
    js = js.replace("    edu_bsc_date: 'Sep 2019", en_thesis + "    edu_bsc_date: 'Sep 2019")
    js = js.replace("    edu_bsc_date: 'Eyl 2019", tr_thesis + "    edu_bsc_date: 'Eyl 2019")

with codecs.open(js_path, 'w', encoding='utf-8') as f:
    f.write(js)
