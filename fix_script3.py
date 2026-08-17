import codecs
import subprocess

result = subprocess.run(['C:\\Users\\ysfmr\\AppData\\Local\\GitHubDesktop\\app-3.4.19\\resources\\app\\git\\cmd\\git.exe', 'show', 'cbdf625:script.js'], capture_output=True)
js = result.stdout.decode('utf-8')

# Footer
js = js.replace('© 2025 Yusuf Emre', '© 2026 Yusuf Emre')

# Nav and proj details
js = js.replace("proj_title: 'Competition & Projects',", "proj_title: 'Competition & Projects',\n    proj_details_btn: 'See Details',\n    modal_prev: '&larr; Previous',\n    modal_next: 'Next &rarr;',")
js = js.replace("proj_title: 'Yarışmalar ve Projeler',", "proj_title: 'Yarışmalar ve Projeler',\n    proj_details_btn: 'Detayları Gör',\n    modal_prev: '&larr; Önceki',\n    modal_next: 'Sonraki &rarr;',")

# Typewriter
old_en_tw = '''    typewriter_texts: [
      'Hardware Design Engineer',
      'Avionics Team Captain',
      'Embedded Systems Developer',
    ],'''
new_en_tw = '''    typewriter_texts: [
      'Mechatronics Engineer',
      'Hardware Design Engineer',
      'Embedded Systems Developer',
    ],'''
js = js.replace(old_en_tw, new_en_tw)

old_tr_tw = '''    typewriter_texts: [
      'Donanım Tasarım Mühendisi',
      'Aviyonik Takım Kaptanı',
      'Gömülü Sistem Geliştirici',
    ],'''
new_tr_tw = '''    typewriter_texts: [
      'Mekatronik Mühendisi',
      'Donanım Tasarım Mühendisi',
      'Gömülü Sistemler Geliştiricisi',
    ],'''
js = js.replace(old_tr_tw, new_tr_tw)

# Hero Desc
old_en_hero = "hero_desc:          'Mechatronics MSc student at Düzce University. Avionics Team Captain at TEKNOFEST & IREC. Hardware designer for UAVs, rockets, and autonomous systems.',"
new_en_hero = "hero_desc: 'Mechatronics Engineering MSc student at Düzce University. Seeking new opportunities in aviation, defense, and autonomous systems with over 4 years of avionics and rocket project experience, and 1+ year of industry experience.',"
js = js.replace(old_en_hero, new_en_hero)

old_tr_hero = "hero_desc:          'Düzce Üniversitesi Mekatronik Mühendisliği Yüksek Lisans öğrencisi. TEKNOFEST ve IREC\\'te Aviyonik Takım Kaptanı. İHA, roket ve otonom sistemler için donanım tasarımcısı.',"
new_tr_hero = "hero_desc: 'Düzce Üniversitesi Mekatronik Mühendisliği Yüksek Lisans öğrencisi. 4 yılı aşkın aviyonik ve roket projesi, 1 yıl üzeri sektör deneyimimle havacılık, savunma ve otonom sistemler alanında yeni fırsatlar arıyorum.',"
js = js.replace(old_tr_hero, new_tr_hero)

# About EN
old_en_p1 = "about_p1:    \"I'm a <strong>Mechatronics Engineering MSc student</strong> at Düzce University with over 4 years of hands-on experience in avionics system design, rocket technologies, and aerospace hardware development.\","
new_en_p1 = 'about_p1: "I am continuing my master\\'s degree in Mechatronics Engineering at Düzce University. I have over four years of hands-on experience in avionics system design, rocket technologies, and aerospace hardware development.",'
js = js.replace(old_en_p1, new_en_p1)

old_en_p2 = "about_p2:    \"As an <strong>Avionics Team Captain and System Designer</strong> at TEKNOFEST and IREC competitions, I have led projects from concept to successful operation - designing flight computers, telemetry systems, and autonomous control cards.\","
new_en_p2 = 'about_p2: "By taking on the responsibilities of Avionics Team Captain and System Designer in TEKNOFEST and IREC competitions, I managed the processes of the projects from the concept stage to operation. Within the scope of these duties, I designed flight computers, telemetry systems, and autonomous control boards.",'
js = js.replace(old_en_p2, new_en_p2)

old_en_p3 = "about_p3:    \"Currently working as a <strong>Hardware Design Engineer</strong> at Soylu Aerospace, developing STM32H7-based autonomous flight control boards for VTOL and drone platforms following MIL-STD-704 and DO-160 standards.\","
new_en_p3 = 'about_p3: "Finally, I worked as a Hardware Design Engineer at Soylu Aerospace. I carried out the development processes of STM32H7-based autonomous flight control boards and various systems in accordance with MIL-STD-704 and DO-160 standards.",'
js = js.replace(old_en_p3, new_en_p3)

# About TR
old_tr_p1 = "about_p1:    'Düzce Üniversitesi\\'nde <strong>Mekatronik Mühendisliği Yüksek Lisans</strong> öğrencisiyim. Aviyonik sistem tasarımı, roket teknolojileri ve havacılık donanım geliştirme alanlarında 4 yılı aşkın uygulamalı deneyimim bulunmaktadır.',"
new_tr_p1 = "about_p1: 'Düzce Üniversitesi Mekatronik Mühendisliği bölümünde yüksek lisans eğitimime devam ediyorum. Aviyonik sistem tasarımı, roket teknolojileri ve havacılık donanım geliştirme alanlarında dört yılı aşkın uygulamalı tecrübem bulunuyor.',"
js = js.replace(old_tr_p1, new_tr_p1)

old_tr_p2 = "about_p2:    'TEKNOFEST ve IREC yarışmalarında <strong>Aviyonik Takım Kaptanı ve Sistem Tasarımcısı</strong> görevlerini üstlenerek projeleri konsept aşamasından operasyona kadar yönettim; uçuş bilgisayarları, telemetri sistemleri ve otonom kontrol kartları tasarladım.',"
new_tr_p2 = "about_p2: 'TEKNOFEST ve IREC yarışmalarında Aviyonik Takım Kaptanı ve Sistem Tasarımcısı sorumluluklarını üstlenerek projelerin konsept aşamasından operasyonuna kadar olan süreçleri yönettim. Bu görevler kapsamında uçuş bilgisayarları, telemetri sistemleri ve otonom kontrol kartları tasarladım.',"
js = js.replace(old_tr_p2, new_tr_p2)

old_tr_p3 = "about_p3:    'Şu anda Soylu Aerospace\\'te <strong>Donanım Tasarım Mühendisi</strong> olarak çalışıyor; MIL-STD-704 ve DO-160 standartlarına uygun STM32H7 tabanlı otonom uçuş kontrol kartları geliştiriyorum.',"
new_tr_p3 = "about_p3: 'Son olarak Soylu Aerospace bünyesinde Donanım Tasarım Mühendisi olarak görev yaptım. MIL-STD-704 ve DO-160 standartlarına uygun, STM32H7 tabanlı otonom uçuş kontrol kartlarını ve çeşitli sistemlerin geliştirme süreçlerini yürüttüm.',"
js = js.replace(old_tr_p3, new_tr_p3)

# IREC titles
js = js.replace("proj1_title: 'IREC - 2024 (USA)',", "proj1_title: 'IREC 2025 & 2026 (USA)',")
js = js.replace("proj2_title: 'TEKNOFEST - Mid Altitude Rocket 2024',", "proj2_title: 'TEKNOFEST - Mid Altitude Rocket 2022-2023-2024',")
js = js.replace("proj2_title: 'TEKNOFEST - Orta İrtifa Roket 2024',", "proj2_title: 'TEKNOFEST - Orta İrtifa Roket 2022-2023-2024',")

# Exp 1 (Soylu)
old_en_exp1_1 = "exp1_b1: 'Developing STM32H7-based autonomous flight control boards for various VTOL and drone platforms.',"
new_en_exp1_1 = "exp1_b1: 'Developed STM32H753-based Autonomous Flight Control Board for VTOL and drone platforms.',"
js = js.replace(old_en_exp1_1, new_en_exp1_1)

old_en_exp1_2 = "exp1_b2: 'Ensuring hardware design compliance with MIL-STD-704 and DO-160 aviation standards.',"
new_en_exp1_2 = "exp1_b2: 'Designed expansion boards featuring Ethernet switches, USB hubs, and Cube Orange interfaces.',"
js = js.replace(old_en_exp1_2, new_en_exp1_2)

old_en_exp1_3 = "exp1_b3: 'Conducting EMI/EMC tests and preparing system integration verification documentation.',"
new_en_exp1_3 = "exp1_b3: 'Developed a Static Thrust Test System with custom software and an automated battery charge/discharge station.',"
js = js.replace(old_en_exp1_3, new_en_exp1_3)

old_tr_exp1_1 = "exp1_b1: 'Çeşitli VTOL ve drone platformları için STM32H7 tabanlı otonom uçuş kontrol kartları geliştiriyorum.',"
new_tr_exp1_1 = "exp1_b1: 'VTOL ve drone platformları için STM32H753 tabanlı Otonom Uçuş Kontrol Kartı ve 6-60V girişli buck regülatör geliştirildi.',"
js = js.replace(old_tr_exp1_1, new_tr_exp1_1)

old_tr_exp1_2 = "exp1_b2: 'Donanım tasarımlarının MIL-STD-704 ve DO-160 havacılık standartlarına uyumluluğunu sağlıyorum.',"
new_tr_exp1_2 = "exp1_b2: 'Ethernet switch, USB hub ve Cube Orange arayüzü barındıran genişletme kartları tasarlandı.',"
js = js.replace(old_tr_exp1_2, new_tr_exp1_2)

old_tr_exp1_3 = "exp1_b3: 'EMI/EMC testlerini gerçekleştiriyor ve sistem entegrasyon doğrulama dokümanlarını hazırlıyorum.',"
new_tr_exp1_3 = "exp1_b3: 'Statik İtki Test Sistemi, yarı hareketli Drone Test sistemi ve otomatik batarya şarj istasyonu geliştirildi.',"
js = js.replace(old_tr_exp1_3, new_tr_exp1_3)

# Exp 2 (Puhu)
old_en_exp2_1 = "exp2_b1: 'Developed telemetry and payload avionics systems for experimental sounding rockets.',"
new_en_exp2_1 = "exp2_b1: 'Developed flight computer architecture and telemetry modules.',"
js = js.replace(old_en_exp2_1, new_en_exp2_1)

old_en_exp2_2 = "exp2_b2: 'Led the electronics integration team during field tests and launch campaigns.',"
new_en_exp2_2 = "exp2_b2: 'Integrated and tested autonomous control algorithms.',"
js = js.replace(old_en_exp2_2, new_en_exp2_2)

old_tr_exp2_1 = "exp2_b1: 'Deneysel sondaj roketleri için telemetri ve görev yükü aviyonik sistemleri geliştirildi.',"
new_tr_exp2_1 = "exp2_b1: 'Uçuş bilgisayarı mimarisi ve telemetri modülleri geliştirildi.',"
js = js.replace(old_tr_exp2_1, new_tr_exp2_1)

old_tr_exp2_2 = "exp2_b2: 'Saha testleri ve fırlatma kampanyaları sırasında elektronik entegrasyon ekibine liderlik edildi.',"
new_tr_exp2_2 = "exp2_b2: 'Otonom kontrol algoritmaları entegre edildi ve test süreçleri yürütüldü.',"
js = js.replace(old_tr_exp2_2, new_tr_exp2_2)

# initModal replacement
import re
old_modal_pattern = r"\(function initModal\(\) \{.*?\}\)\(\);"
new_modal = '''(function initModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.querySelector('.close-modal');
  const projectCards = Array.from(document.querySelectorAll('.project-card'));
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalGallery = document.getElementById('modal-gallery');
  const modalPrev = document.getElementById('modal-prev');
  const modalNext = document.getElementById('modal-next');
  let currentProjectIndex = -1;

  function openModalForCard(index) {
    if (index < 0 || index >= projectCards.length) return;
    currentProjectIndex = index;
    const card = projectCards[index];

    const title = card.querySelector('h3') ? card.querySelector('h3').innerHTML : '';
    let desc = '';
    if (card.querySelector('.project-desc-long')) {
      desc = card.querySelector('.project-desc-long').innerHTML;
    } else if (card.querySelector('.project-desc')) {
      desc = card.querySelector('.project-desc').innerHTML;
    }
    
    if(modalTitle) modalTitle.innerHTML = title;
    if(modalDesc) modalDesc.innerHTML = desc;
    
    if (modalGallery) {
      modalGallery.innerHTML = '';
      const imagesContainer = card.querySelector('.project-images');
      if (imagesContainer) {
        const imgs = imagesContainer.querySelectorAll('img');
        imgs.forEach(img => {
          const clone = document.createElement('img');
          clone.src = img.getAttribute('src');
          clone.style.width = '100%';
          clone.style.height = 'auto';
          clone.style.borderRadius = '8px';
          clone.style.objectFit = 'contain';
          clone.style.maxHeight = '400px';
          clone.style.backgroundColor = 'rgba(0,0,0,0.2)';
          modalGallery.appendChild(clone);
        });
      }
    }
    
    modal.classList.add('show');
  }

  projectCards.forEach((card, index) => {
    const imagesContainer = card.querySelector('.project-images');
    if (imagesContainer) {
      const firstImage = imagesContainer.querySelector('img');
      if (firstImage) {
        const bg = document.createElement('div');
        bg.className = 'project-card-bg';
        bg.style.backgroundImage = url('');
        card.prepend(bg);
      }
    }

    card.addEventListener('click', (e) => {
      if (e.target.isContentEditable) return;
      openModalForCard(index);
    });
  });

  if(closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('show'));
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('show')) return;
    if (e.key === 'Escape') {
      modal.classList.remove('show');
    } else if (e.key === 'ArrowLeft') {
      openModalForCard((currentProjectIndex - 1 + projectCards.length) % projectCards.length);
    } else if (e.key === 'ArrowRight') {
      openModalForCard((currentProjectIndex + 1) % projectCards.length);
    }
  });

  if(modalPrev) {
    modalPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      openModalForCard((currentProjectIndex - 1 + projectCards.length) % projectCards.length);
    });
  }
  
  if(modalNext) {
    modalNext.addEventListener('click', (e) => {
      e.stopPropagation();
      openModalForCard((currentProjectIndex + 1) % projectCards.length);
    });
  }
})();'''

js = re.sub(old_modal_pattern, new_modal, js, flags=re.DOTALL)

with codecs.open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)
