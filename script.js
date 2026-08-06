/* ─── script.js ─── */

/* ════════════════════════════════════════════
   TRANSLATIONS — i18n dictionary
════════════════════════════════════════════ */
const TRANSLATIONS = {
  en: {
    // Nav
    nav_about:      'About',
    nav_experience: 'Experience',
    nav_projects:   'Projects',
    nav_skills:     'Skills',
    nav_contact:    'Contact',
    nav_hire:       'Hire Me',

    // Hero
    hero_badge:         'Available for opportunities',
    hero_desc:          'Mechatronics MSc student at Düzce University. Avionics Team Captain at TEKNOFEST & IREC. Hardware designer for UAVs, rockets, and autonomous systems.',
    hero_btn_projects:  'View Projects',
    hero_btn_contact:   'Get in Touch',
    stat_experience:    'Years Experience',
    stat_projects:      'Competition Projects',

    // Typewriter texts
    typewriter_texts: [
      'Hardware Design Engineer',
      'Avionics Team Captain',
      'Embedded Systems Developer',
      'Rocket Systems Designer',
    ],

    // About
    about_tag:   '01 / About',
    about_title: 'Who I Am',
    about_p1:    "I'm a <strong>Mechatronics Engineering MSc student</strong> at Düzce University with over 4 years of hands-on experience in avionics system design, rocket technologies, and aerospace hardware development.",
    about_p2:    "As an <strong>Avionics Team Captain and System Designer</strong> at TEKNOFEST and IREC competitions, I have led projects from concept to successful operation — designing flight computers, telemetry systems, and autonomous control cards.",
    about_p3:    "Currently working as a <strong>Hardware Design Engineer</strong> at Soylu Aerospace, developing STM32H7-based autonomous flight control boards for VTOL and drone platforms following MIL-STD-704 and DO-160 standards.",
    about_location: 'Düzce, Turkey',
    edu_msc_degree: 'MSc — Mechatronics Engineering',
    edu_msc_thesis: 'Thesis: Early Fault Detection in Aircraft via Machine Learning',
    edu_bsc_degree: 'BSc — Mechatronics Engineering',
    lang_name:  'English',
    lang_level: 'B1 — Intermediate',

    // Experience
    exp_tag:   '02 / Experience',
    exp_title: 'Work History',
    exp1_title: 'Hardware Design Engineer',
    exp1_date:  'Nov 2024 — Present',
    exp1_b1: 'Designed <strong>STM32H7-based Autonomous Flight Control Board</strong> for VTOL and drone platforms',
    exp1_b2: 'Developed 260 A current-carrying <strong>Power Distribution Board</strong> with 5 A adjustable buck converter output and CAN module; conducted EMI/EMC compliance testing',
    exp1_b3: 'Designed tilt mechanism and thrust test systems; led electromechanical production',
    exp2_title: 'Embedded Software & Hardware Design Engineer',
    exp2_date:  'Jun 2024 — Oct 2024',
    exp2_b1: 'Designed electronic hardware and <strong>Embedded Linux applications</strong> for healthcare products',
    exp2_b2: 'Performed mechanical design and laboratory testing (DC load, oscilloscope) for medical devices',
    exp3_title: 'Intern Mechatronics Engineer',
    exp3_date:  'Feb 2024 — May 2024',
    exp3_b1: 'Operated PCB assembly line; documented linear motor and battery test results',

    // Projects
    proj_tag:   '03 / Projects',
    proj_title: 'Competition & Projects',
    proj1_badge: '🏆 Full Score',
    proj1_title: 'IREC 2025',
    proj1_sub:   'International Rocket Engineering Competition — USA',
    proj1_desc:  'Achieved full score on payload design at the prestigious US competition. Built a 3-node LoRa communication architecture transmitting GPS, IMU & message data between Ground Station, Transmitter, and Payload.',
    proj2_badge: '🎖️ Captain',
    proj2_title: 'TEKNOFEST — High Altitude Rocket 2025',
    proj2_sub:   'Avionics Team Captain',
    proj2_desc:  'Designed & manufactured the payload avionics system. Developed algorithm that estimates landing position from IMU data and transmits telemetry to the ground station in real-time.',
    proj3_badge: '🥈 Finalist',
    proj3_title: 'TEKNOFEST — Underwater Rocket 2025',
    proj3_sub:   'Autonomous Underwater Vehicle',
    proj3_desc:  'Developed the control board for an autonomous underwater rocket vehicle. Analog sensor signals digitised via OpAmp & ADC. Propulsion system built with BLDC and servo motors.',
    proj4_badge: '🥈 Finalist',
    proj4_title: 'TEKNOFEST — Air Defense Systems 2024',
    proj4_sub:   'Computer Vision Tracking System',
    proj4_desc:  'Balloon target detection using OpenCV & Haar Cascade trained model. Built autonomous tracking & termination algorithm with stepper and servo motors.',
    proj5_badge: '👑 Team Lead',
    proj5_title: 'TEKNOFEST — Mid Altitude Rocket 2024',
    proj5_sub:   'Team Captain — Flight Computer Design',
    proj5_desc:  'As team captain, designed the STM32-based MOSFET-triggered Flight Control Computer and payload computer managing recovery, separation, and communication systems.',
    proj6_badge: '🏅 Finalist',
    proj6_title: 'Silent Track — 2024',
    proj6_sub:   'Düzce-Bolu R&D Project Market Finalist',
    proj6_desc:  'GPS-independent positioning and route tracking using SSIM & INS technologies. Finalist at the Düzce-Bolu R&D Project Market.',
    proj7_badge: '🦉 Capstone',
    proj7_title: 'Baykuş Guidance Kit — 2024',
    proj7_sub:   'Capstone — ML-based Guidance System',
    proj7_desc:  'ML-powered target recognition and tracking guidance kit designed to counter Flare & Chaff countermeasures. Achieved <strong>>95% accuracy</strong> on clean images and <strong>>80%</strong> under countermeasures.',

    // Skills
    skills_tag:   '04 / Skills',
    skills_title: 'Technical Arsenal',
    skill_hw_title:    'Hardware & Design',
    skill_sw_title:    'Software & Algorithms',
    skill_tools_title: 'Tools & Software',
    skill_prog_title:  'Programming Languages',
    skill_proto_title: 'Protocols',
    skill_mcu_title:   'Microcontrollers & Platforms',
    skill_soft_title:  'Soft Skills',
    s_avionics:  'Avionics Design',
    s_schematic: 'Schematic Design',
    s_pcb:       'PCB Design',
    s_power:     'Power Management',
    s_test:      'Test Systems',
    s_doc:       'Technical Documentation',
    s_ml:        'Machine Learning',
    s_cv:        'Image Processing',
    s_ctrl:      'Control Systems',
    s_fusion:    'Sensor Fusion',
    s_lead:      'Team Leadership',
    s_prob:      'Problem Solving',
    s_detail:    'Detail-Oriented',
    s_multi:     'Multidisciplinary',

    // Contact
    contact_tag:        '05 / Contact',
    contact_title:      'Get in Touch',
    contact_desc:       'I am open to exciting opportunities in aerospace, embedded systems, and hardware design. Feel free to reach out.',
    contact_email_label:'Email',
    contact_phone_label:'Phone',
    contact_loc_label:  'Location',
    contact_loc_val:    'Düzce, Turkey',

    // Footer
    footer_copy: '© 2025 Yusuf Emre Akdeniz — Mechatronics Engineer',
  },

  tr: {
    // Nav
    nav_about:      'Hakkımda',
    nav_experience: 'Deneyim',
    nav_projects:   'Projeler',
    nav_skills:     'Yetenekler',
    nav_contact:    'İletişim',
    nav_hire:       'İşe Al',

    // Hero
    hero_badge:         'Fırsatlara açığım',
    hero_desc:          'Düzce Üniversitesi Mekatronik Mühendisliği Yüksek Lisans öğrencisi. TEKNOFEST ve IREC\'te Aviyonik Takım Kaptanı. İHA, roket ve otonom sistemler için donanım tasarımcısı.',
    hero_btn_projects:  'Projeleri Gör',
    hero_btn_contact:   'İletişime Geç',
    stat_experience:    'Yıllık Deneyim',
    stat_projects:      'Yarışma Projesi',

    // Typewriter texts
    typewriter_texts: [
      'Donanım Tasarım Mühendisi',
      'Aviyonik Takım Kaptanı',
      'Gömülü Sistem Geliştirici',
      'Roket Sistemleri Tasarımcısı',
    ],

    // About
    about_tag:   '01 / Hakkımda',
    about_title: 'Ben Kimim',
    about_p1:    'Düzce Üniversitesi\'nde <strong>Mekatronik Mühendisliği Yüksek Lisans</strong> öğrencisiyim. Aviyonik sistem tasarımı, roket teknolojileri ve havacılık donanım geliştirme alanlarında 4 yılı aşkın uygulamalı deneyimim bulunmaktadır.',
    about_p2:    'TEKNOFEST ve IREC yarışmalarında <strong>Aviyonik Takım Kaptanı ve Sistem Tasarımcısı</strong> olarak kavramdan başarılı operasyona kadar projeleri yönetim; uçuş bilgisayarları, telemetri sistemleri ve otonom kontrol kartları tasarladım.',
    about_p3:    'Şu anda Soylu Aerospace\'te <strong>Donanım Tasarım Mühendisi</strong> olarak çalışıyor; MIL-STD-704 ve DO-160 standartlarına uygun STM32H7 tabanlı otonom uçuş kontrol kartları geliştiriyorum.',
    about_location: 'Düzce, Türkiye',
    edu_msc_degree: 'Y. Lisans — Mekatronik Mühendisliği',
    edu_msc_thesis: 'Tez: Hava Araçlarında Makine Öğrenmesi ile Erken Arıza Tespiti',
    edu_bsc_degree: 'Lisans — Mekatronik Mühendisliği',
    lang_name:  'İngilizce',
    lang_level: 'B1 — Orta Seviye',

    // Experience
    exp_tag:   '02 / Deneyim',
    exp_title: 'İş Geçmişi',
    exp1_title: 'Donanım Tasarım Mühendisi',
    exp1_date:  'Kas 2024 — Devam ediyor',
    exp1_b1: 'VTOL ve drone platformları için <strong>STM32H7 tabanlı Otonom Uçuş Kontrol Kartı</strong> tasarlandı',
    exp1_b2: '5 A ayarlanabilir buck converter çıkışlı ve CAN modüllü 260 A akım kapasiteli <strong>Güç Dağıtım Kartı</strong> geliştirildi; EMI/EMC uyum testleri yürütüldü',
    exp1_b3: 'Tilt mekanizması ve itki test sistemleri tasarlandı; elektromekanik üretim süreci yönetildi',
    exp2_title: 'Gömülü Yazılım ve Donanım Tasarım Mühendisi',
    exp2_date:  'Haz 2024 — Eki 2024',
    exp2_b1: 'Sağlık ürünleri için elektronik donanım ve <strong>Gömülü Linux uygulamaları</strong> tasarlandı',
    exp2_b2: 'Tıbbi cihazlar için mekanik tasarım ve laboratuvar testleri (DC yük, osiloskop) gerçekleştirildi',
    exp3_title: 'Stajyer Mekatronik Mühendisi',
    exp3_date:  'Şub 2024 — May 2024',
    exp3_b1: 'PCB montaj hattı operasyonları yürütüldü; lineer motor ve pil test sonuçları raporlandı',

    // Projects
    proj_tag:   '03 / Projeler',
    proj_title: 'Yarışmalar ve Projeler',
    proj1_badge: '🏆 Tam Puan',
    proj1_title: 'IREC 2025',
    proj1_sub:   'Uluslararası Roket Mühendisliği Yarışması — ABD',
    proj1_desc:  'ABD\'de düzenlenen prestijli yarışmada görev yükü tasarımında tam puan alındı. Yer İstasyonu, İletimci ve Görev Yükü arasında GPS, IMU ve mesaj verisi aktaran 3 düğümlü LoRa haberleşme mimarisi kuruldu.',
    proj2_badge: '🎖️ Kaptan',
    proj2_title: 'TEKNOFEST — Yüksek İrtifa Roketi 2025',
    proj2_sub:   'Aviyonik Takım Kaptanı',
    proj2_desc:  'Görev yükü aviyonik sistemi tasarlandı ve üretildi. IMU verilerinden tahmini iniş konumu hesaplayıp telemetriyi yer istasyonuna gerçek zamanlı ileten algoritma geliştirildi.',
    proj3_badge: '🥈 Finalist',
    proj3_title: 'TEKNOFEST — Sualtı Roketi 2025',
    proj3_sub:   'Otonom Sualtı Aracı',
    proj3_desc:  'Otonom sualtı roket aracı için kontrol kartı geliştirildi. Analog sensör sinyalleri OpAmp ve ADC ile dijitale dönüştürüldü. BLDC ve servo motorlarla tahrik sistemi kuruldu.',
    proj4_badge: '🥈 Finalist',
    proj4_title: 'TEKNOFEST — Hava Savunma Sistemleri 2024',
    proj4_sub:   'Görüntü İşleme ile Takip Sistemi',
    proj4_desc:  'OpenCV ve Haar Cascade eğitimli model ile balon hedeflerin tespiti sağlandı. Step ve servo motorlarla otonom takip ve imha algoritması oluşturuldu.',
    proj5_badge: '👑 Takım Lideri',
    proj5_title: 'TEKNOFEST — Orta İrtifa Roketi 2024',
    proj5_sub:   'Takım Kaptanı — Uçuş Bilgisayarı Tasarımı',
    proj5_desc:  'Takım kaptanı olarak STM32 tabanlı, MOSFET tetiklemeli Uçuş Kontrol Bilgisayarı ve kurtarma, ayrılma, haberleşme yöneten görev yükü bilgisayarı tasarlandı.',
    proj6_badge: '🏅 Finalist',
    proj6_title: 'Silent Track — 2024',
    proj6_sub:   'Düzce-Bolu Ar-Ge Proje Pazarı Finalisti',
    proj6_desc:  'SSIM ve INS teknolojileri kullanılarak kesintisiz uydu ihtiyacı olmadan konum tespiti ve rota takibi hedeflendi. Düzce-Bolu Ar-Ge Proje Pazarı Finalisti.',
    proj7_badge: '🦉 Bitirme',
    proj7_title: 'Baykuş Güdüm Kiti — 2024',
    proj7_sub:   'Bitirme Projesi — ML tabanlı Güdüm Sistemi',
    proj7_desc:  'Flare ve Chaff gibi önleyici sistemleri aşmayı hedefleyen makine öğrenmesi tabanlı hedef tanıma ve takip güdüm kiti. Temiz görüntülerde <strong>>%95</strong>, önleyicili görüntülerde <strong>>%80</strong> doğruluk sağlandı.',

    // Skills
    skills_tag:   '04 / Yetenekler',
    skills_title: 'Teknik Yetkinlikler',
    skill_hw_title:    'Donanım ve Tasarım',
    skill_sw_title:    'Yazılım ve Algoritmalar',
    skill_tools_title: 'Araçlar ve Yazılımlar',
    skill_prog_title:  'Programlama Dilleri',
    skill_proto_title: 'Protokoller',
    skill_mcu_title:   'Mikrodenetleyiciler ve Platformlar',
    skill_soft_title:  'Kişisel Yetenekler',
    s_avionics:  'Aviyonik Tasarım',
    s_schematic: 'Şematik Tasarım',
    s_pcb:       'PCB Tasarımı',
    s_power:     'Güç Yönetimi',
    s_test:      'Test Sistemleri',
    s_doc:       'Teknik Dokümantasyon',
    s_ml:        'Makine Öğrenmesi',
    s_cv:        'Görüntü İşleme',
    s_ctrl:      'Kontrol Sistemleri',
    s_fusion:    'Sensör Füzyonu',
    s_lead:      'Takım Liderliği',
    s_prob:      'Problem Çözme',
    s_detail:    'Detay Odaklılık',
    s_multi:     'Multidisipliner Çalışma',

    // Contact
    contact_tag:        '05 / İletişim',
    contact_title:      'İletişime Geç',
    contact_desc:       'Havacılık, gömülü sistemler ve donanım tasarımı alanlarında fırsatlara açığım. Benimle iletişime geçmekten çekinmeyin.',
    contact_email_label:'E-posta',
    contact_phone_label:'Telefon',
    contact_loc_label:  'Konum',
    contact_loc_val:    'Düzce, Türkiye',

    // Footer
    footer_copy: '© 2025 Yusuf Emre Akdeniz — Mekatronik Mühendisi',
  },
};

/* ════════════════════════════════════════════
   1. STARFIELD CANVAS
════════════════════════════════════════════ */
(function initStarfield() {
  const canvas = document.getElementById('starfield');
  const ctx    = canvas.getContext('2d');
  let stars = [], W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.3 + 0.2,
        a: Math.random(),
        da: (Math.random() - 0.5) * 0.005,
        dx: (Math.random() - 0.5) * 0.12,
        dy: (Math.random() - 0.5) * 0.12,
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) {
      s.x += s.dx; s.y += s.dy;
      s.a  = Math.max(0.05, Math.min(1, s.a + s.da));
      if (s.a <= 0.05 || s.a >= 1) s.da *= -1;
      if (s.x < 0) s.x = W; if (s.x > W) s.x = 0;
      if (s.y < 0) s.y = H; if (s.y > H) s.y = 0;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(130, 185, 255, ${s.a * 0.65})`;
      ctx.fill();
    }
    requestAnimationFrame(drawStars);
  }

  resize(); createStars(180); drawStars();
  window.addEventListener('resize', () => { resize(); createStars(180); });
})();


/* ════════════════════════════════════════════
   2. THEME TOGGLE — dark (default) / light
════════════════════════════════════════════ */
(function initTheme() {
  const btn  = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Persist user preference
  const saved = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', saved);

  btn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();


/* ════════════════════════════════════════════
   3. LANGUAGE TOGGLE — EN (default) / TR
════════════════════════════════════════════ */
let currentLang = localStorage.getItem('lang') || 'en';
let typewriterTexts = TRANSLATIONS[currentLang].typewriter_texts;

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;

    // innerHTML for rich-text keys (with <strong> etc.)
    const richKeys = [
      'about_p1','about_p2','about_p3',
      'exp1_b1','exp1_b2','exp1_b3',
      'exp2_b1','exp2_b2','exp3_b1',
      'proj1_desc','proj2_desc','proj3_desc','proj4_desc',
      'proj5_desc','proj6_desc','proj7_desc',
    ];
    if (richKeys.includes(key)) {
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });
  typewriterTexts = t.typewriter_texts;
  document.documentElement.setAttribute('data-lang', lang);
}

(function initLang() {
  const btn   = document.getElementById('lang-toggle');
  const label = document.getElementById('lang-label');

  // Set initial
  applyTranslations(currentLang);
  label.textContent = currentLang === 'en' ? 'TR' : 'EN';

  btn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'tr' : 'en';
    localStorage.setItem('lang', currentLang);
    applyTranslations(currentLang);
    label.textContent = currentLang === 'en' ? 'TR' : 'EN';
  });
})();


/* ════════════════════════════════════════════
   4. NAVBAR — scroll + hamburger
════════════════════════════════════════════ */
(function initNav() {
  const navbar = document.getElementById('navbar');
  const burger = document.getElementById('hamburger');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 16);
  }, { passive: true });

  burger.addEventListener('click', () => navbar.classList.toggle('nav-open'));

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => navbar.classList.remove('nav-open'));
  });
})();


/* ════════════════════════════════════════════
   5. TYPEWRITER EFFECT
════════════════════════════════════════════ */
(function initTypewriter() {
  const el  = document.getElementById('typewriter');
  let ti    = 0;
  let ci    = 0;
  let del   = false;

  function type() {
    const texts   = typewriterTexts;
    const current = texts[ti % texts.length];
    if (!del) {
      el.textContent = current.slice(0, ci + 1);
      ci++;
      if (ci === current.length) { del = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = current.slice(0, ci - 1);
      ci--;
      if (ci === 0) {
        del = false;
        ti  = (ti + 1) % texts.length;
        setTimeout(type, 280);
        return;
      }
    }
    setTimeout(type, del ? 44 : 68);
  }
  setTimeout(type, 700);
})();


/* ════════════════════════════════════════════
   6. SCROLL REVEAL
════════════════════════════════════════════ */
(function initReveal() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }),
    { threshold: 0.11 }
  );
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();


/* ════════════════════════════════════════════
   7. ACTIVE NAV LINK
════════════════════════════════════════════ */
(function initActiveNav() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(a => a.classList.remove('active'));
          const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
          if (link) link.classList.add('active');
        }
      });
    },
    { threshold: 0.4 }
  );
  document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
})();


/* ════════════════════════════════════════════
   8. PROJECT CARDS STAGGER
════════════════════════════════════════════ */
document.querySelectorAll('.project-card.reveal').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.06}s`;
});
