import re

def replace_nth(pattern, replacement, string, n):
    matches = list(re.finditer(pattern, string, re.DOTALL))
    if len(matches) >= n:
        m = matches[n-1]
        return string[:m.start()] + re.sub(pattern, replacement, string[m.start():m.end()], flags=re.DOTALL) + string[m.end():]
    return string

with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Update typewriter
js = re.sub(r"(typewriter_texts:\s*\[).*?(\],)", r"\1\n      'Mechatronics Engineer',\n      'Hardware Design Engineer',\n      'Embedded Systems Developer',\n    \2", js, count=1, flags=re.DOTALL)
js = replace_nth(r"(typewriter_texts:\s*\[).*?(\],)", r"\1\n      'Mekatronik Mühendisi',\n      'Donanım Tasarım Mühendisi',\n      'Gömülü Sistemler Geliştiricisi',\n    \2", js, 2)

# Update texts EN
js = re.sub(r"(hero_desc:\s*').*?(')", r"\1Mechatronics Engineering MSc student at Düzce University. Seeking new opportunities in aviation, defense, and autonomous systems with over 4 years of avionics and rocket project experience, and 1+ year of industry experience.\2", js, count=1, flags=re.DOTALL)
js = re.sub(r"(about_p1:\s*').*?(')", r"\1I am continuing my master\'s degree in Mechatronics Engineering at Düzce University. I have over four years of hands-on experience in avionics system design, rocket technologies, and aerospace hardware development.\2", js, count=1, flags=re.DOTALL)
js = re.sub(r"(about_p2:\s*').*?(')", r"\1By taking on the responsibilities of Avionics Team Captain and System Designer in TEKNOFEST and IREC competitions, I managed the processes of the projects from the concept stage to operation. Within the scope of these duties, I designed flight computers, telemetry systems, and autonomous control boards.\2", js, count=1, flags=re.DOTALL)
js = re.sub(r"(about_p3:\s*').*?(')", r"\1Finally, I worked as a Hardware Design Engineer at Soylu Aerospace. I carried out the development processes of STM32H7-based autonomous flight control boards and various systems in accordance with MIL-STD-704 and DO-160 standards.\2", js, count=1, flags=re.DOTALL)

# Update texts TR
js = replace_nth(r"(hero_desc:\s*').*?(')", r"\1Düzce Üniversitesi Mekatronik Mühendisliği Yüksek Lisans öğrencisi. 4 yılı aşkın aviyonik ve roket projesi, 1 yıl üzeri sektör deneyimimle havacılık, savunma ve otonom sistemler alanında yeni fırsatlar arıyorum.\2", js, 2)
js = replace_nth(r"(about_p1:\s*').*?(')", r"\1Düzce Üniversitesi Mekatronik Mühendisliği bölümünde yüksek lisans eğitimime devam ediyorum. Aviyonik sistem tasarımı, roket teknolojileri ve havacılık donanım geliştirme alanlarında dört yılı aşkın uygulamalı tecrübem bulunuyor.\2", js, 2)
js = replace_nth(r"(about_p2:\s*').*?(')", r"\1TEKNOFEST ve IREC yarışmalarında Aviyonik Takım Kaptanı ve Sistem Tasarımcısı sorumluluklarını üstlenerek projelerin konsept aşamasından operasyonuna kadar olan süreçleri yönettim. Bu görevler kapsamında uçuş bilgisayarları, telemetri sistemleri ve otonom kontrol kartları tasarladım.\2", js, 2)
js = replace_nth(r"(about_p3:\s*').*?(')", r"\1Son olarak Soylu Aerospace bünyesinde Donanım Tasarım Mühendisi olarak görev yaptım. MIL-STD-704 ve DO-160 standartlarına uygun, STM32H7 tabanlı otonom uçuş kontrol kartlarını ve çeşitli sistemlerin geliştirme süreçlerini yürüttüm.\2", js, 2)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r'(<p class="hero-desc reveal" data-i18n="hero_desc">).*?(</p>)', r'\1\n        Mechatronics Engineering MSc student at Düzce University. Seeking new opportunities in aviation, defense, and autonomous systems with over 4 years of avionics and rocket project experience, and 1+ year of industry experience.\n      \2', html, flags=re.DOTALL)
html = re.sub(r'(<p data-i18n="about_p1">).*?(</p>)', r'\1\n            I am continuing my master\'s degree in Mechatronics Engineering at Düzce University. I have over four years of hands-on experience in avionics system design, rocket technologies, and aerospace hardware development.\n          \2', html, flags=re.DOTALL)
html = re.sub(r'(<p data-i18n="about_p2">).*?(</p>)', r'\1\n            By taking on the responsibilities of Avionics Team Captain and System Designer in TEKNOFEST and IREC competitions, I managed the processes of the projects from the concept stage to operation. Within the scope of these duties, I designed flight computers, telemetry systems, and autonomous control boards.\n          \2', html, flags=re.DOTALL)
html = re.sub(r'(<p data-i18n="about_p3">).*?(</p>)', r'\1\n            Finally, I worked as a Hardware Design Engineer at Soylu Aerospace. I carried out the development processes of STM32H7-based autonomous flight control boards and various systems in accordance with MIL-STD-704 and DO-160 standards.\n          \2', html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
