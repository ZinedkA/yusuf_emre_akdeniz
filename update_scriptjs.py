import codecs

with codecs.open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# English Typewriter
old_en_typewriter = '''    typewriter_texts: [
      'Hardware Design Engineer',
      'Avionics Team Captain',
      'Embedded Systems Developer',
    ],'''
new_en_typewriter = '''    typewriter_texts: [
      'Mechatronics Engineer',
      'Hardware Design Engineer',
      'Embedded Systems Developer',
    ],'''
js = js.replace(old_en_typewriter, new_en_typewriter)

# Turkish Typewriter
old_tr_typewriter = '''    typewriter_texts: [
      'Donanım Tasarım Mühendisi',
      'Aviyonik Takım Kaptanı',
      'Gömülü Sistem Geliştirici',
    ],'''
new_tr_typewriter = '''    typewriter_texts: [
      'Mekatronik Mühendisi',
      'Donanım Tasarım Mühendisi',
      'Gömülü Sistemler Geliştiricisi',
    ],'''
js = js.replace(old_tr_typewriter, new_tr_typewriter)

# EN Hero Desc
old_en_hero = '''    hero_desc:   "Mechatronics MSc student at Düzce University. Avionics Team Captain at TEKNOFEST & IREC. Hardware designer for UAVs, rockets, and autonomous systems.",'''
new_en_hero = '''    hero_desc:   "Mechatronics Engineering MSc student at Düzce University. Seeking new opportunities in aviation, defense, and autonomous systems with over 4 years of avionics and rocket project experience, and 1+ year of industry experience.",'''
js = js.replace(old_en_hero, new_en_hero)

# TR Hero Desc
old_tr_hero = '''    hero_desc:   'Düzce Üniversitesi Mekatronik Yüksek Lisans öğrencisi. TEKNOFEST ve IREC yarışmalarında Aviyonik Takım Kaptanı. İHA, roket ve otonom sistemler için donanım tasarımcısı.','''
new_tr_hero = '''    hero_desc:   'Düzce Üniversitesi Mekatronik Mühendisliği Yüksek Lisans öğrencisi. 4 yılı aşkın aviyonik ve roket projesi, 1 yıl üzeri sektör deneyimimle havacılık, savunma ve otonom sistemler alanında yeni fırsatlar arıyorum.','''
js = js.replace(old_tr_hero, new_tr_hero)

# EN About
old_en_p1 = '''    about_p1:    "I'm a <strong>Mechatronics Engineering MSc student</strong> at Düzce University with over 4 years of hands-on experience in avionics system design, rocket technologies, and aerospace hardware development.",'''
new_en_p1 = '''    about_p1:    "I am continuing my master's degree in Mechatronics Engineering at Düzce University. I have over four years of hands-on experience in avionics system design, rocket technologies, and aerospace hardware development.",'''
js = js.replace(old_en_p1, new_en_p1)

old_en_p2 = '''    about_p2:    "As an <strong>Avionics Team Captain and System Designer</strong> at TEKNOFEST and IREC competitions, I have led projects from concept to successful operation - designing flight computers, telemetry systems, and autonomous control cards.",'''
new_en_p2 = '''    about_p2:    "By taking on the responsibilities of Avionics Team Captain and System Designer in TEKNOFEST and IREC competitions, I managed the processes of the projects from the concept stage to operation. Within the scope of these duties, I designed flight computers, telemetry systems, and autonomous control boards.",'''
js = js.replace(old_en_p2, new_en_p2)

old_en_p3 = '''    about_p3:    "Currently working as a <strong>Hardware Design Engineer</strong> at Soylu Aerospace, developing STM32H7-based autonomous flight control boards for VTOL and drone platforms following MIL-STD-704 and DO-160 standards.",'''
new_en_p3 = '''    about_p3:    "Finally, I worked as a Hardware Design Engineer at Soylu Aerospace. I carried out the development processes of STM32H7-based autonomous flight control boards and various systems in accordance with MIL-STD-704 and DO-160 standards.",'''
js = js.replace(old_en_p3, new_en_p3)

# TR About
old_tr_p1 = '''    about_p1:    'Düzce Üniversitesi\\'nde <strong>Mekatronik Mühendisliği Yüksek Lisans</strong> öğrencisiyim. Aviyonik sistem tasarımı, roket teknolojileri ve havacılık donanım geliştirme alanlarında 4 yılı aşkın uygulamalı deneyimim bulunmaktadır.','''
new_tr_p1 = '''    about_p1:    'Düzce Üniversitesi Mekatronik Mühendisliği bölümünde yüksek lisans eğitimime devam ediyorum. Aviyonik sistem tasarımı, roket teknolojileri ve havacılık donanım geliştirme alanlarında dört yılı aşkın uygulamalı tecrübem bulunuyor.','''
js = js.replace(old_tr_p1, new_tr_p1)

old_tr_p2 = '''    about_p2:    'TEKNOFEST ve IREC yarışmalarında <strong>Aviyonik Takım Kaptanı ve Sistem Tasarımcısı</strong> görevlerini üstlenerek projeleri konsept aşamasından operasyona kadar yönettim; uçuş bilgisayarları, telemetri sistemleri ve otonom kontrol kartları tasarladım.','''
new_tr_p2 = '''    about_p2:    'TEKNOFEST ve IREC yarışmalarında Aviyonik Takım Kaptanı ve Sistem Tasarımcısı sorumluluklarını üstlenerek projelerin konsept aşamasından operasyonuna kadar olan süreçleri yönettim. Bu görevler kapsamında uçuş bilgisayarları, telemetri sistemleri ve otonom kontrol kartları tasarladım.','''
js = js.replace(old_tr_p2, new_tr_p2)

old_tr_p3 = '''    about_p3:    'Şu anda Soylu Aerospace\\'te <strong>Donanım Tasarım Mühendisi</strong> olarak çalışıyor; MIL-STD-704 ve DO-160 standartlarına uygun STM32H7 tabanlı otonom uçuş kontrol kartları geliştiriyorum.','''
new_tr_p3 = '''    about_p3:    'Son olarak Soylu Aerospace bünyesinde Donanım Tasarım Mühendisi olarak görev yaptım. MIL-STD-704 ve DO-160 standartlarına uygun, STM32H7 tabanlı otonom uçuş kontrol kartlarını ve çeşitli sistemlerin geliştirme süreçlerini yürüttüm.','''
js = js.replace(old_tr_p3, new_tr_p3)

# Re-apply previous footer/buttons updates that were lost by checkout
js = js.replace('© 2025 Yusuf Emre Akdeniz - Mechatronics Engineer', '© 2026 Yusuf Emre Akdeniz - Mechatronics Engineer')
js = js.replace('© 2025 Yusuf Emre Akdeniz - Mekatronik Mühendisi', '© 2026 Yusuf Emre Akdeniz - Mekatronik Mühendisi')

js = js.replace("proj_title: 'Competition & Projects',", "proj_title: 'Competition & Projects',\n    proj_details_btn: 'See Details',")
js = js.replace("proj_title: 'Yarışmalar ve Projeler',", "proj_title: 'Yarışmalar ve Projeler',\n    proj_details_btn: 'Detayları Gör',")

with codecs.open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)
