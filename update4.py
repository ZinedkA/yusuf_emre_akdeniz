import re, codecs

with codecs.open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Replace Typewriter texts
js = re.sub(
    r"typewriter_texts:\s*\[.*?\]",
    "typewriter_texts: [\n      'Mechatronics Engineer',\n      'Hardware Design Engineer',\n      'Embedded Systems Developer',\n    ]",
    js, count=1, flags=re.DOTALL
)

# Second occurrence
js = re.sub(
    r"typewriter_texts:\s*\[.*?\]",
    "typewriter_texts: [\n      'Mekatronik Mühendisi',\n      'Donanım Tasarım Mühendisi',\n      'Gömülü Sistemler Geliştiricisi',\n    ]",
    js, count=1, flags=re.DOTALL
)

# Replace hero desc
js = re.sub(r"hero_desc:\s*['\"].*?['\"],", r"hero_desc: 'Mechatronics Engineering MSc student at Düzce University. Seeking new opportunities in aviation, defense, and autonomous systems with over 4 years of avionics and rocket project experience, and 1+ year of industry experience.',", js, count=1, flags=re.DOTALL)

# Second occurrence
js = re.sub(r"hero_desc:\s*['\"].*?['\"],", r"hero_desc: 'Düzce Üniversitesi Mekatronik Mühendisliği Yüksek Lisans öğrencisi. 4 yılı aşkın aviyonik ve roket projesi, 1 yıl üzeri sektör deneyimimle havacılık, savunma ve otonom sistemler alanında yeni fırsatlar arıyorum.',", js, count=1, flags=re.DOTALL)

# About P1 EN
js = re.sub(r"about_p1:\s*['\"].*?['\"],", r"about_p1: \"I am continuing my master's degree in Mechatronics Engineering at Düzce University. I have over four years of hands-on experience in avionics system design, rocket technologies, and aerospace hardware development.\",", js, count=1, flags=re.DOTALL)
# About P2 EN
js = re.sub(r"about_p2:\s*['\"].*?['\"],", r"about_p2: \"By taking on the responsibilities of Avionics Team Captain and System Designer in TEKNOFEST and IREC competitions, I managed the processes of the projects from the concept stage to operation. Within the scope of these duties, I designed flight computers, telemetry systems, and autonomous control boards.\",", js, count=1, flags=re.DOTALL)
# About P3 EN
js = re.sub(r"about_p3:\s*['\"].*?['\"],", r"about_p3: \"Finally, I worked as a Hardware Design Engineer at Soylu Aerospace. I carried out the development processes of STM32H7-based autonomous flight control boards and various systems in accordance with MIL-STD-704 and DO-160 standards.\",", js, count=1, flags=re.DOTALL)

# About P1 TR
js = re.sub(r"about_p1:\s*['\"].*?['\"],", r"about_p1: 'Düzce Üniversitesi Mekatronik Mühendisliği bölümünde yüksek lisans eğitimime devam ediyorum. Aviyonik sistem tasarımı, roket teknolojileri ve havacılık donanım geliştirme alanlarında dört yılı aşkın uygulamalı tecrübem bulunuyor.',", js, count=1, flags=re.DOTALL)
# About P2 TR
js = re.sub(r"about_p2:\s*['\"].*?['\"],", r"about_p2: 'TEKNOFEST ve IREC yarışmalarında Aviyonik Takım Kaptanı ve Sistem Tasarımcısı sorumluluklarını üstlenerek projelerin konsept aşamasından operasyonuna kadar olan süreçleri yönettim. Bu görevler kapsamında uçuş bilgisayarları, telemetri sistemleri ve otonom kontrol kartları tasarladım.',", js, count=1, flags=re.DOTALL)
# About P3 TR
js = re.sub(r"about_p3:\s*['\"].*?['\"],", r"about_p3: 'Son olarak Soylu Aerospace bünyesinde Donanım Tasarım Mühendisi olarak görev yaptım. MIL-STD-704 ve DO-160 standartlarına uygun, STM32H7 tabanlı otonom uçuş kontrol kartlarını ve çeşitli sistemlerin geliştirme süreçlerini yürüttüm.',", js, count=1, flags=re.DOTALL)


# Let's fix the copyright footers
js = re.sub(r"footer_copy:\s*['\"].*?['\"],", r"footer_copy: '© 2026 Yusuf Emre Akdeniz - Mechatronics Engineer',", js, count=1, flags=re.DOTALL)
js = re.sub(r"footer_copy:\s*['\"].*?['\"],", r"footer_copy: '© 2026 Yusuf Emre Akdeniz - Mekatronik Mühendisi',", js, count=1, flags=re.DOTALL)

# Ensure details button exists
if 'proj_details_btn:' not in js:
    js = js.replace("proj_title: 'Competition & Projects',", "proj_title: 'Competition & Projects',\n    proj_details_btn: 'See Details',")
    js = js.replace("proj_title: 'Yarışmalar ve Projeler',", "proj_title: 'Yarışmalar ve Projeler',\n    proj_details_btn: 'Detayları Gör',")

with codecs.open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)
