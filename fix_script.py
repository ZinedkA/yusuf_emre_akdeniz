import codecs
import re

with codecs.open('script_clean.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Update Footer
js = js.replace('© 2025 Yusuf Emre', '© 2026 Yusuf Emre')

# Add proj_details_btn and modal navs to EN
js = js.replace("proj_title: 'Competition & Projects',", "proj_title: 'Competition & Projects',\n    proj_details_btn: 'See Details',\n    modal_prev: '&larr; Previous',\n    modal_next: 'Next &rarr;',")

# Add proj_details_btn and modal navs to TR
js = js.replace("proj_title: 'Yarışmalar ve Projeler',", "proj_title: 'Yarışmalar ve Projeler',\n    proj_details_btn: 'Detayları Gör',\n    modal_prev: '&larr; Önceki',\n    modal_next: 'Sonraki &rarr;',")

# Update Typewriter EN
js = re.sub(
    r"typewriter_texts:\s*\[.*?\]",
    "typewriter_texts: [\n      'Mechatronics Engineer',\n      'Hardware Design Engineer',\n      'Embedded Systems Developer',\n    ]",
    js, count=1, flags=re.DOTALL
)

# Update Typewriter TR
js = re.sub(
    r"typewriter_texts:\s*\[.*?\]",
    "typewriter_texts: [\n      'Mekatronik Mühendisi',\n      'Donanım Tasarım Mühendisi',\n      'Gömülü Sistemler Geliştiricisi',\n    ]",
    js, count=1, flags=re.DOTALL
)

# Update Hero Desc EN
js = re.sub(r"hero_desc:\s*['\"].*?['\"],", r"hero_desc: 'Mechatronics Engineering MSc student at Düzce University. Seeking new opportunities in aviation, defense, and autonomous systems with over 4 years of avionics and rocket project experience, and 1+ year of industry experience.',", js, count=1, flags=re.DOTALL)

# Update Hero Desc TR
js = re.sub(r"hero_desc:\s*['\"].*?['\"],", r"hero_desc: 'Düzce Üniversitesi Mekatronik Mühendisliği Yüksek Lisans öğrencisi. 4 yılı aşkın aviyonik ve roket projesi, 1 yıl üzeri sektör deneyimimle havacılık, savunma ve otonom sistemler alanında yeni fırsatlar arıyorum.',", js, count=1, flags=re.DOTALL)

# Update About EN
js = re.sub(r"about_p1:\s*['\"].*?['\"],", r"about_p1: \"I am continuing my master's degree in Mechatronics Engineering at Düzce University. I have over four years of hands-on experience in avionics system design, rocket technologies, and aerospace hardware development.\",", js, count=1, flags=re.DOTALL)
js = re.sub(r"about_p2:\s*['\"].*?['\"],", r"about_p2: \"By taking on the responsibilities of Avionics Team Captain and System Designer in TEKNOFEST and IREC competitions, I managed the processes of the projects from the concept stage to operation. Within the scope of these duties, I designed flight computers, telemetry systems, and autonomous control boards.\",", js, count=1, flags=re.DOTALL)
js = re.sub(r"about_p3:\s*['\"].*?['\"],", r"about_p3: \"Finally, I worked as a Hardware Design Engineer at Soylu Aerospace. I carried out the development processes of STM32H7-based autonomous flight control boards and various systems in accordance with MIL-STD-704 and DO-160 standards.\",", js, count=1, flags=re.DOTALL)

# Update About TR
js = re.sub(r"about_p1:\s*['\"].*?['\"],", r"about_p1: 'Düzce Üniversitesi Mekatronik Mühendisliği bölümünde yüksek lisans eğitimime devam ediyorum. Aviyonik sistem tasarımı, roket teknolojileri ve havacılık donanım geliştirme alanlarında dört yılı aşkın uygulamalı tecrübem bulunuyor.',", js, count=1, flags=re.DOTALL)
js = re.sub(r"about_p2:\s*['\"].*?['\"],", r"about_p2: 'TEKNOFEST ve IREC yarışmalarında Aviyonik Takım Kaptanı ve Sistem Tasarımcısı sorumluluklarını üstlenerek projelerin konsept aşamasından operasyonuna kadar olan süreçleri yönettim. Bu görevler kapsamında uçuş bilgisayarları, telemetri sistemleri ve otonom kontrol kartları tasarladım.',", js, count=1, flags=re.DOTALL)
js = re.sub(r"about_p3:\s*['\"].*?['\"],", r"about_p3: 'Son olarak Soylu Aerospace bünyesinde Donanım Tasarım Mühendisi olarak görev yaptım. MIL-STD-704 ve DO-160 standartlarına uygun, STM32H7 tabanlı otonom uçuş kontrol kartlarını ve çeşitli sistemlerin geliştirme süreçlerini yürüttüm.',", js, count=1, flags=re.DOTALL)


# Update IREC titles
js = js.replace("proj1_title: 'IREC - 2024 (USA)',", "proj1_title: 'IREC 2025 & 2026 (USA)',")
js = js.replace("proj2_title: 'TEKNOFEST - Mid Altitude Rocket 2024',", "proj2_title: 'TEKNOFEST - Mid Altitude Rocket 2022-2023-2024',")
js = js.replace("proj2_title: 'TEKNOFEST - Orta İrtifa Roket 2024',", "proj2_title: 'TEKNOFEST - Orta İrtifa Roket 2022-2023-2024',")


# Update Exp 1 (Soylu Aerospace) EN
new_exp1_b1 = r"exp1_b1: 'Developed STM32H753-based Autonomous Flight Control Board for VTOL and drone platforms.',"
new_exp1_b2 = r"exp1_b2: 'Designed expansion boards featuring Ethernet switches, USB hubs, and Cube Orange interfaces.',"
new_exp1_b3 = r"exp1_b3: 'Developed a Static Thrust Test System with custom software and an automated battery charge/discharge station.',"
js = re.sub(r"exp1_b1:.*?,", new_exp1_b1, js, count=1, flags=re.DOTALL)
js = re.sub(r"exp1_b2:.*?,", new_exp1_b2, js, count=1, flags=re.DOTALL)
js = re.sub(r"exp1_b3:.*?,", new_exp1_b3, js, count=1, flags=re.DOTALL)

# Update Exp 1 TR
new_exp1_tr_b1 = r"exp1_b1: 'VTOL ve drone platformları için STM32H753 tabanlı Otonom Uçuş Kontrol Kartı ve 6-60V girişli buck regülatör geliştirildi.',"
new_exp1_tr_b2 = r"exp1_b2: 'Ethernet switch, USB hub ve Cube Orange arayüzü barındıran genişletme kartları tasarlandı.',"
new_exp1_tr_b3 = r"exp1_b3: 'Statik İtki Test Sistemi, yarı hareketli Drone Test sistemi ve otomatik batarya şarj istasyonu geliştirildi.',"
js = re.sub(r"exp1_b1:.*?,", new_exp1_tr_b1, js, count=1, flags=re.DOTALL)
js = re.sub(r"exp1_b2:.*?,", new_exp1_tr_b2, js, count=1, flags=re.DOTALL)
js = re.sub(r"exp1_b3:.*?,", new_exp1_tr_b3, js, count=1, flags=re.DOTALL)


# Update initModal function
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

with codecs.open('script_new.js', 'w', encoding='utf-8') as f:
    f.write(js)
