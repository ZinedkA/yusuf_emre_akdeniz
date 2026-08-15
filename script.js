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
    hero_desc: 'Düzce Üniversitesi Mekatronik Mühendisliği Yüksek Lisans öğrencisi. 4 yılı aşkın aviyonik ve roket projesi, 1 yıl üzeri sektör deneyimimle havacılık, savunma ve otonom sistemler alanında yeni fırsatlar arıyorum.',
    hero_btn_projects:  'View Projects',
    hero_btn_contact:   'Get in Touch',
    stat_experience:    'Years Experience',
    stat_projects:      'Competition Projects',

    // Typewriter texts
    typewriter_texts: [
      'Mekatronik Mühendisi',
      'Donanım Tasarım Mühendisi',
      'Gömülü Sistemler Geliştiricisi',
    ],

    // About
    about_tag:   '01 / About',
    about_title: 'Who I Am',
    about_p1: "I am continuing my master's degree in Mechatronics Engineering at Düzce University. I have over four years of hands-on experience in avionics system design, rocket technologies, and aerospace hardware development.",
    about_p2: "By taking on the responsibilities of Avionics Team Captain and System Designer in TEKNOFEST and IREC competitions, I managed the processes of the projects from the concept stage to operation. Within the scope of these duties, I designed flight computers, telemetry systems, and autonomous control boards.",
    about_p3: "Finally, I worked as a Hardware Design Engineer at Soylu Aerospace. I carried out the development processes of STM32H7-based autonomous flight control boards and various systems in accordance with MIL-STD-704 and DO-160 standards.",
    about_location: 'Düzce, Turkey',
    edu_msc_degree: 'MSc — Mechatronics Engineering',
    edu_msc_thesis: 'Thesis: Early Fault Detection in Aircraft via Machine Learning',
    edu_bsc_degree: 'BSc — Mechatronics Engineering',
    lang_name:  'English',
    lang_level: 'B1 — Intermediate',

    // Experience
    exp_tag:   '02 / Experience',
    exp_title: 'Work History',
    intern_tag: '02.5 / Internship',
    intern_title: 'Internship History',
    exp1_title: 'Hardware Design Engineer',
    exp1_date:  'Nov 2024 — Present',
    exp1_b1: 'Developed STM32H753-based Autonomous Flight Control Board for VTOL and drone platforms.',
    exp1_b2: 'Developed STM32F765 flight control board for FPV and mini drones.',
    exp1_b3: 'Developed adjustable multi-output Power Distribution Board with 260 A current capacity.',
    exp1_b4: 'Developed a buck regulator supporting 6-60V input voltage.',
    exp1_b5: 'Designed an expansion board featuring an Ethernet switch and USB hub.',
    exp1_b6: 'Designed an expansion board for Cube Orange.',
    exp1_b7: 'Developed the Static Thrust Test System and its software, and conducted tests.',
    exp1_b8: 'Developed a tilt mechanism and testing software.',
    exp1_b9: 'Developed a semi-mobile Drone Test system.',
    exp1_b10: 'Developed an automatic battery charge/discharge station.',
    exp2_title: 'Embedded Software & Hardware Design Engineer',
    exp2_date:  'Jun 2024 — Oct 2024',
    exp2_b1: 'Designed various PCBs for healthcare products.',
    exp2_b2: 'Developed Linux applications on embedded systems.',
    exp2_b3: 'Carried out mechanical design and prototype production for medical devices.',
    exp2_b4: 'Conducted various laboratory tests (DC load, oscilloscope).',
    exp2_b5: 'Worked on the PCB assembly line.',
    exp2_b6: 'Gained experience with semi-automatic solder paste printer (YS350), Pick and Place machine (Neoden 4), and Reflow Oven (IN6).',
    exp3_title: 'Intern Mechatronics Engineer',
    exp3_date:  'Feb 2024 — May 2024',
    exp3_b1: 'Assisted in the PCB assembly line.',
    exp3_b2: 'Created test fixtures for various medical PCBs.',
    exp3_b3: 'Conducted linear motor and battery tests.',

    // Projects
    proj_tag:   '03 / Projects',
    proj_title: 'Competition & Projects',
    proj_details_btn: 'See Details',
    proj_details_btn: 'See Details',
    proj1_badge: '🏆 Full Score',
    proj1_title: 'IREC 2025 & 2026',
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
    proj5_title: 'TEKNOFEST — Mid Altitude Rocket 2022-2023-2024',
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

    proj1_desc_long: 'The payload module of the rocket system participating in the International Rocket Engineering Competition (IREC) in the USA was developed. The end-to-end design, prototyping, and manufacturing processes of the payload\'s mechanical structure and avionics systems were completed. The system received full points from the competition judges and completed the planned flight missions within the margin of error. A 3-node LoRa communication architecture was designed to ensure uninterrupted data transfer during the project. This architecture provides bidirectional data flow between the ground station, an airborne transmitter (relay) module, and the main payload. Global Positioning System (GPS) coordinates, Inertial Measurement Unit (IMU) data, and system status messages obtained from sensors on the payload were transmitted to the ground station in real-time during flight. This infrastructure was optimized to transmit telemetry data losslessly at high altitudes and under harsh radio frequency conditions. Additionally, the mechanical integration of the payload inside the rocket was manufactured to withstand high acceleration and vibration conditions.',
    proj2_desc_long: 'Within the scope of the TEKNOFEST High Altitude Rocket Competition, I led the development of the rocket payload\'s hardware and software systems as the Avionics Team Captain. The payload\'s avionics board design, embedded software development phases, and manufacturing processes were personally conducted. The primary original task of this project was to develop a system capable of calculating the flight trajectory and estimated landing point without relying on satellite positioning data. The system performs real-time position, velocity, and orientation calculations using acceleration and angular velocity data obtained via the Inertial Measurement Unit (IMU). The obtained flight dynamics parameters were algorithmically processed, and the rocket\'s ballistic descent profile post-parachute deployment was modeled to derive the estimated landing coordinates. These calculated coordinates were packaged with standard flight telemetry data (altitude, temperature, pressure, battery status) and transmitted continuously to the ground station. During flight tests, the system operated with high accuracy, allowing recovery teams to quickly locate the rocket\'s landing zone.',
    proj3_desc_long: 'The main flight and dive control board was designed for the completely autonomous Underwater Rocket Vehicle developed for the TEKNOFEST Underwater Systems competition. Analog sensors were used to read environmental data in the system developed to meet the depth, sealing, and mission requirements specified in the competition specifications. To solve the problem of electrical noise and low signal levels brought by the underwater environment, raw analog signals obtained from the sensors were passed through operational amplifier (Op-Amp) circuits to be filtered and their amplitudes adjusted. Subsequently, these signals were converted into high-resolution digital data using Analog-to-Digital Converter (ADC) units. The vehicle\'s propulsion and steering systems were built using Brushless DC (BLDC) motors and servo motors suitable for underwater conditions. The developed control board drove these motors in accordance with autonomous navigation algorithms by processing sensor data. The manufactured rocket was successfully tested in marine conditions and reached finalist status in the competition.',
    proj4_desc_long: 'The computer vision software and electronic system integration processes of the project participating in the TEKNOFEST Air Defense Systems Competition were conducted. The main purpose of the developed system is to autonomously detect, track, and neutralize aerial target objects (balloons). Accordingly, the OpenCV library and Haar Cascade classifier algorithm were used for object detection. Images of target balloons under different lighting and background conditions were collected to create a dataset, and the machine learning model was trained. The target coordinate and area data obtained from the image processing algorithm were transferred to the physical pointing system. The pointing mechanism was designed using stepper and servo motors to provide dual-axis mobility. The developed closed-loop control algorithm performed the autonomous target tracking function by sending precise position commands to the motors to center the target in the camera viewfinder. The system operated stably, enabling the team to become a finalist.',
    proj5_desc_long: 'In this project where I served as the team captain, the electronic hardware designs of the main flight control computer and the secondary payload computer, which manage all avionics, communication, and ignition functions of the rocket, were carried out. The flight control computer was designed based on STM32 series microcontrollers. A reliable ignition circuit was established for the activation of the separation and recovery (parachute deployment) systems, which are critical stages of the rocket\'s flight profile. This circuit triggered pyrotechnic mechanisms precisely at designated altitudes by activating MOSFET components with signals generated by algorithms processing altitude and acceleration data from sensors. The system also fulfilled the function of modulating and transmitting flight telemetry to the ground station. In addition to electronic design and software development, contributions were made to the mechanical design processes ensuring the structural integrity of the rocket and the composite manufacturing stages of the aerodynamic fuselage. Designing critical systems in a redundant architecture increased flight success.',
    proj6_desc_long: 'The SilentTrack system, for which I was the project manager, was developed for air and land vehicles to perform uninterrupted positioning and autonomous route tracking in environments where Global Positioning System (GPS) signals are interrupted or unavailable. The system relies on a sensor fusion architecture combining image processing-based navigation techniques using Structural Similarity Index Measure (SSIM) and the Inertial Navigation System (INS). During navigation, instant images taken from the camera on the vehicle are compared with maps or satellite images previously loaded into the system using the SSIM algorithm to obtain visual position references. Simultaneously, acceleration and gyroscope data from Inertial Measurement Unit (IMU) sensors are integrated to perform dead reckoning via INS. The fusion of the two datasets minimized drift error and achieved high-accuracy position and orientation estimation. The project became a finalist at the Düzce Bolu R&D Project Market.',
    proj7_desc_long: 'The Baykuş Guidance Kit is a capstone project designed to transform standard, unguided free-fall munitions into smart munitions by integrating aerodynamic flight control surfaces and smart sensors. The core of the system is the electro-optical target recognition and tracking module based on machine learning and computer vision algorithms. The algorithm generates autonomous targeting commands by identifying the visual signature of the target. The most prominent technical goal of the project is to demonstrate resistance to electronic warfare and physical countermeasures. Feature extraction models were trained to distinguish preventive false targets like heat emitters (flares) and radar jammers (chaff) launched by aircraft from the actual target. In simulation and software tests, the machine learning model\'s correct target detection and tracking rate on clean images without countermeasures was measured at over 95%. In scenarios where deceptive elements such as flares or chaff were included in the image frame, the model\'s accuracy remained above 80%.',

    // Footer
    footer_copy: '© 2026 Yusuf Emre Akdeniz - Mekatronik Mühendisi',
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
    about_p1: 'Düzce Üniversitesi Mekatronik Mühendisliği bölümünde yüksek lisans eğitimime devam ediyorum. Aviyonik sistem tasarımı, roket teknolojileri ve havacılık donanım geliştirme alanlarında dört yılı aşkın uygulamalı tecrübem bulunuyor.',
    about_p2: 'TEKNOFEST ve IREC yarışmalarında Aviyonik Takım Kaptanı ve Sistem Tasarımcısı sorumluluklarını üstlenerek projelerin konsept aşamasından operasyonuna kadar olan süreçleri yönettim. Bu görevler kapsamında uçuş bilgisayarları, telemetri sistemleri ve otonom kontrol kartları tasarladım.',
    about_p3: 'Son olarak Soylu Aerospace bünyesinde Donanım Tasarım Mühendisi olarak görev yaptım. MIL-STD-704 ve DO-160 standartlarına uygun, STM32H7 tabanlı otonom uçuş kontrol kartlarını ve çeşitli sistemlerin geliştirme süreçlerini yürüttüm.',
    about_location: 'Düzce, Türkiye',
    edu_msc_degree: 'Y. Lisans — Mekatronik Mühendisliği',
    edu_msc_thesis: 'Tez: Hava Araçlarında Makine Öğrenmesi ile Erken Arıza Tespiti',
    edu_bsc_degree: 'Lisans — Mekatronik Mühendisliği',
    lang_name:  'İngilizce',
    lang_level: 'B1 — Orta Seviye',

    // Experience
    exp_tag:   '02 / Deneyim',
    exp_title: 'İş Geçmişi',
    intern_tag: '02.5 / Staj',
    intern_title: 'Staj Bilgisi',
    exp1_title: 'Donanım Tasarım Mühendisi',
    exp1_date:  'Kas 2024 — Devam ediyor',
    exp1_b1: 'VTOL ve drone platformları için STM32H753 tabanlı Otonom Uçuş Kontrol Kartı geliştirildi.',
    exp1_b2: 'FPV ve mini dronlar için STM32F765 uçuş kontrol kartı geliştirildi.',
    exp1_b3: 'Ayarlanabilir çoklu çıkışlı ve 260 A akım kapasiteli Güç Dağıtım Kartı geliştirildi.',
    exp1_b4: '6-60V giriş gerilimi destekleyen buck regülatör geliştirildi.',
    exp1_b5: 'Ethernet switch ve USB hub barındıran expansion board tasarlandı.',
    exp1_b6: 'Cube Orange için expansion board tasarlandı.',
    exp1_b7: 'Statik İtki Test Sistemi ile yazılımı geliştirildi ve testler gerçekleştirildi.',
    exp1_b8: 'Tilt mekanizması ve test yazılımı geliştirildi.',
    exp1_b9: 'Yarı hareketli Drone Test sistemi geliştirildi.',
    exp1_b10: 'Otomatik batarya şarj/deşarj istasyonu geliştirildi.',
    exp2_title: 'Gömülü Yazılım ve Donanım Tasarım Mühendisi',
    exp2_date:  'Haz 2024 - Eki 2024',
    exp2_b1: 'Sağlık ürünleri için çeşitli PCB\'ler tasarlandı.',
    exp2_b2: 'Gömülü sistemler üzerinde Linux uygulamaları yapıldı.',
    exp2_b3: 'Tıbbi cihazlar için mekanik tasarım ve prototip üretimleri yapıldı.',
    exp2_b4: 'Bazı laboratuvar testleri (DC yük, osiloskop) gerçekleştirildi.',
    exp2_b5: 'PCB Dizgi hattında görev alındı.',
    exp2_b6: 'Yarı otomatik krem lehim baskı makinesi (YS350), Dizgi makinesi (Neoden 4), Reflow Fırın (IN6) makinelerinde tecrübe edinildi.',
    exp3_title: 'Stajyer Mekatronik Mühendisi',
    exp3_date:  'Şub 2024 - May 2024',
    exp3_b1: 'PCB Dizgi hattında yardımcı olundu.',
    exp3_b2: 'Çeşitli medikal PCB\'leri için test fikstürleri yapıldı.',
    exp3_b3: 'Lineer motor ve pil testleri yapıldı.',

    // Projects
    proj_tag:   '03 / Projeler',
    proj_title: 'Yarışmalar ve Projeler',
    proj_details_btn: 'Detayları Gör',
    proj_details_btn: 'Detayları Gör',
    proj1_badge: '🏆 Tam Puan',
    proj1_title: 'IREC 2025 & 2026',
    proj1_sub:   'Uluslararası Roket Mühendisliği Yarışması — ABD',
    proj1_desc:  'ABD\'de düzenlenen prestijli yarışmada görev yükü tasarımında tam puan alındı. Yer İstasyonu, İletimci ve Görev Yükü arasında GPS, IMU ve mesaj verisi aktaran 3 düğümlü LoRa haberleşme mimarisi kuruldu.',
    proj1_desc_long: 'ABD\'de gerçekleştirilen Uluslararası Roket Mühendisliği Yarışması\'nda (IREC) yer alan roket sisteminin görev yükü modülü geliştirilmiştir. Görev yükünün mekanik yapısı ve aviyonik sistemlerinin uçtan uca tasarımı, prototiplenmesi ve üretim süreçleri tamamlanmıştır. Sistem, yarışma hakemlerinden tam puan almış ve planlanan uçuş görevlerini hata payı sınırları içinde tamamlamıştır. Proje kapsamında kesintisiz veri aktarımı sağlamak amacıyla üç noktalı bir LoRa haberleşme mimarisi tasarlanmıştır. Bu mimari; yer istasyonu, havada bulunan iletimci (röle) modül ve ana görev yükü arasında çift yönlü veri akışı sağlamaktadır. Uçuş esnasında görev yükü üzerinde bulunan sensörlerden elde edilen Küresel Konumlama Sistemi (GPS) koordinatları, Ataletsel Ölçüm Birimi (IMU) verileri ve sistem durum mesajları gerçek zamanlı olarak yer istasyonuna aktarılmıştır. Bu altyapı, telemetri verilerinin yüksek irtifada ve zorlu radyo frekansı koşullarında kayıpsız iletilmesini sağlamak üzere optimize edilmiştir. Ek olarak, görev yükünün roket içi mekanik entegrasyonu yüksek ivmelenme ve titreşim koşullarına dayanacak şekilde üretilmiştir.',
    proj2_badge: '🎖️ Kaptan',
    proj2_title: 'TEKNOFEST — Yüksek İrtifa Roketi 2025',
    proj2_sub:   'Aviyonik Takım Kaptanı',
    proj2_desc:  'Görev yükü aviyonik sistemi tasarlandı ve üretildi. IMU verilerinden tahmini iniş konumu hesaplayıp telemetriyi yer istasyonuna gerçek zamanlı ileten algoritma geliştirildi.',
    proj2_desc_long: 'TEKNOFEST Yüksek İrtifa Roket Yarışması kapsamında, Aviyonik Takım Kaptanı olarak roket görev yükünün donanım ve yazılım sistemlerinin geliştirilmesine liderlik edilmiştir. Görev yükünün aviyonik kart tasarımı, gömülü yazılım geliştirme aşamaları ve üretim süreçleri bizzat yürütülmüştür. Bu projenin temel özgün görevi, uydu konumlama verisine bağımlı kalmadan uçuş yörüngesini ve tahmini iniş noktasını hesaplayabilen bir sistemin geliştirilmesidir. Sistem, Ataletsel Ölçüm Birimi (IMU) üzerinden alınan ivme ve açısal hız verilerini kullanarak anlık konum, hız ve yönelim hesaplamaları gerçekleştirmektedir. Elde edilen uçuş dinamiği parametreleri algoritmik olarak işlenmiş ve roketin paraşüt açılma sonrasındaki balistik düşüş profili modellenerek tahmini iniş noktası koordinatları türetilmiştir. Hesaplanan bu koordinatlar, standart uçuş telemetri verileri (irtifa, sıcaklık, basınç, batarya durumu) ile paketlenerek yer istasyonuna kesintisiz bir şekilde aktarılmıştır. Uçuş testleri esnasında sistem yüksek doğrulukla çalışarak kurtarma ekiplerinin roketin düştüğü bölgeyi hızlıca tespit etmesine olanak tanımıştır.',
    proj3_badge: '🥈 Finalist',
    proj3_title: 'TEKNOFEST — Sualtı Roketi 2025',
    proj3_sub:   'Otonom Sualtı Aracı',
    proj3_desc:  'Otonom sualtı roket aracı için kontrol kartı geliştirildi. Analog sensör sinyalleri OpAmp ve ADC ile dijitale dönüştürüldü. BLDC ve servo motorlarla tahrik sistemi kuruldu.',
    proj3_desc_long: 'TEKNOFEST Sualtı Sistemleri yarışması için tasarlanan ve tamamen otonom olarak görev yapabilen Sualtı Roket Aracının ana uçuş ve dalış kontrol kartı tasarlanmıştır. Yarışma şartnamesinde belirtilen derinlik, sızdırmazlık ve görev isterlerini karşılamak üzere geliştirilen sistemde, çevresel verileri okumak için analog sensörler kullanılmıştır. Su altı ortamının getirdiği elektriksel gürültü ve düşük sinyal seviyeleri sorununu çözmek amacıyla, sensörlerden elde edilen ham analog sinyaller işlemsel yükselteç (Opamp) devreleri üzerinden geçirilerek filtrelenmiş ve genlikleri ayarlanmıştır. Ardından, Analog-Dijital Dönüştürücü (ADC) birimleri kullanılarak bu sinyallerin yüksek çözünürlüklü dijital verilere dönüşümü sağlanmıştır. Aracın tahrik ve yönlendirme sistemleri, Fırçasız DC (BLDC) motorlar ve su altı koşullarına uygun servo motorlar kullanılarak inşa edilmiştir. Geliştirilen kontrol kartı, sensör verilerini işleyerek bu motorları otonom seyrüsefer algoritmalarına uygun olarak sürmüştür. Üretilen roket, deniz koşullarında başarıyla test edilmiş ve yarışmada finalist statüsüne ulaşmıştır.',
    proj4_badge: '🥈 Finalist',
    proj4_title: 'TEKNOFEST — Hava Savunma Sistemleri 2024',
    proj4_sub:   'Görüntü İşleme ile Takip Sistemi',
    proj4_desc:  'OpenCV ve Haar Cascade eğitimli model ile balon hedeflerin tespiti sağlandı. Step ve servo motorlarla otonom takip ve imha algoritması oluşturuldu.',
    proj4_desc_long: 'TEKNOFEST Hava Savunma Sistemleri Yarışması\'nda yer alan projenin bilgisayarlı görü yazılımları ile elektronik sistem entegrasyonu süreçleri yürütülmüştür. Geliştirilen sistemin temel amacı, havada bulunan hedef nesneleri (balonları) otonom olarak tespit etmek, takip etmek ve etkisiz hale getirmektir. Bu doğrultuda, nesne tespiti için OpenCV kütüphanesi ve Haar Cascade sınıflandırıcı algoritması kullanılmıştır. Hedef balonların farklı ışık ve arka plan koşullarındaki görüntüleri toplanarak veri seti oluşturulmuş ve makine öğrenmesi modeli eğitilmiştir. Görüntü işleme algoritmasından elde edilen hedef koordinat ve alan verileri fiziksel yönlendirme sistemine aktarılmıştır. Yönlendirme mekanizması, step ve servo motor kullanılarak iki eksenli bir hareket kabiliyeti sağlayacak şekilde tasarlanmıştır. Geliştirilen kapalı çevrim kontrol algoritması, kamera vizöründeki hedefin merkeze alınması için motorlara hassas konum komutları göndererek otonom hedef takibi işlevini yerine getirmiştir. Sistem stabil şekilde çalışarak takımın finalist olmasını sağlamıştır.',
    proj5_badge: '👑 Takım Lideri',
    proj5_title: 'TEKNOFEST — Orta İrtifa Roketi 2022-2023-2024',
    proj5_sub:   'Takım Kaptanı — Uçuş Bilgisayarı Tasarımı',
    proj5_desc:  'Takım kaptanı olarak STM32 tabanlı, MOSFET tetiklemeli Uçuş Kontrol Bilgisayarı ve kurtarma, ayrılma, haberleşme yöneten görev yükü bilgisayarı tasarlandı.',
    proj5_desc_long: 'Takım kaptanlığı görevinin yürütüldüğü bu projede, roketin tüm aviyonik, haberleşme ve ateşleme işlevlerini yöneten ana uçuş kontrol bilgisayarı ve ikincil görev yükü bilgisayarının elektronik donanım tasarımları gerçekleştirilmiştir. Uçuş kontrol bilgisayarı, STM32 serisi mikrodenetleyiciler tabanlı olarak tasarlanmıştır. Roketin uçuş profilinin kritik aşamalarından olan ayrılma (seperasyon) ve kurtarma (paraşüt açma) sistemlerinin aktivasyonu için güvenilir bir ateşleme devresi kurulmuştur. Bu devre, sensörlerden gelen irtifa ve ivme verilerini işleyen algoritmaların ürettiği sinyallerle MOSFET bileşenlerini tetikleyerek piroteknik mekanizmaları belirlenen irtifalarda doğru bir şekilde çalıştırmıştır. Sistem ayrıca uçuş telemetrisini yer istasyonuna modüle ederek iletme işlevini yerine getirmiştir. Elektronik tasarım ve yazılım geliştirmeye ek olarak, roketin yapısal bütünlüğünü sağlayan mekanik tasarım süreçlerine ve aerodinamik gövdenin kompozit üretim aşamalarına katkı sağlanmıştır. Kritik sistemlerin yedekli mimaride tasarlanması uçuş başarısını artırmıştır.',
    proj6_badge: '🏅 Finalist',
    proj6_title: 'Silent Track — 2024',
    proj6_sub:   'Düzce-Bolu Ar-Ge Proje Pazarı Finalisti',
    proj6_desc:  'SSIM ve INS teknolojileri kullanılarak kesintisiz uydu ihtiyacı olmadan konum tespiti ve rota takibi hedeflendi. Düzce-Bolu Ar-Ge Proje Pazarı Finalisti.',
    proj6_desc_long: 'Proje yürütücülüğü üstlenilen SilentTrack sistemi, Küresel Konumlama Sistemi (GPS) sinyallerinin kesildiği veya ulaşılamadığı ortamlarda hava ve kara araçlarının kesintisiz konum tespiti yapabilmesi ve otonom rota takibi gerçekleştirebilmesi amacıyla geliştirilmiştir. Sistem, Yapısal Benzerlik İndeksi Ölçümü (SSIM) kullanan görüntü işleme tabanlı seyrüsefer teknikleri ile Ataletsel Seyrüsefer Sistemini (INS) birleştiren bir sensör füzyonu mimarisine dayanmaktadır. Seyir esnasında araç üzerindeki kameradan alınan anlık görüntüler, önceden sisteme yüklenmiş harita veya uydu görüntüleri ile SSIM algoritması kullanılarak karşılaştırılmakta ve görsel konum referansları elde edilmektedir. Eş zamanlı olarak, Ataletsel Ölçüm Birimi (IMU) sensörlerinden alınan ivme ve jiroskop verileri entegre edilerek INS üzerinden ölü hesaplama (dead reckoning) işlemi uygulanmaktadır. İki veri setinin füzyonu sayesinde sürüklenme (drift) hatası minimize edilmiş, yüksek doğruluklu konum ve yönelim tahmini elde edilmiştir. Proje, Düzce Bolu Ar-Ge Proje Pazarı\'nda finale kalmıştır.',
    proj7_badge: '🦉 Bitirme',
    proj7_title: 'Baykuş Güdüm Kiti — 2024',
    proj7_sub:   'Bitirme Projesi — ML tabanlı Güdüm Sistemi',
    proj7_desc:  'Flare ve Chaff gibi önleyici sistemleri aşmayı hedefleyen makine öğrenmesi tabanlı hedef tanıma ve takip güdüm kiti. Temiz görüntülerde <strong>>%95</strong>, önleyicili görüntülerde <strong>>%80</strong> doğruluk sağlandı.',
    proj7_desc_long: 'Baykuş Güdüm Kiti, aerodinamik uçuş kontrol yüzeyleri ve akıllı sensörler entegre edilerek, standart ve güdüm kabiliyeti bulunmayan serbest düşüşlü mühimmatları akıllı mühimmat formuna dönüştürmek üzere tasarlanmış bir bitirme projesidir. Sistemin çekirdeğini, makine öğrenmesi ve bilgisayarlı görü algoritmalarına dayanan elektro-optik hedef tanıma ve takip modülü oluşturmaktadır. Algoritma, hedefin görsel imzasını tanımlayarak otonom yönelme komutları üretmektedir. Projenin en belirgin teknik hedefi, elektronik harp ve fiziksel karşı tedbirlere karşı direnç göstermesidir. Hava araçları tarafından fırlatılan ısı yayıcı (flare) ve radar karıştırıcı (chaff) gibi önleyici sahte hedefleri asıl hedeften ayırt edebilecek özellik çıkarım modelleri eğitilmiştir. Simülasyon ve yazılım testlerinde, makine öğrenmesi modelinin karşı tedbir içermeyen temiz görüntülerde hedefi doğru tespit ve takip etme oranı %95\'in üzerinde ölçülmüştür. Görüntü çerçevesine flare veya chaff gibi yanıltıcı unsurların dahil edildiği senaryolarda ise modelin doğruluğu %80 seviyesinin üzerinde kalmıştır.',

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
    footer_copy: '© 2026 Yusuf Emre Akdeniz — Mekatronik Mühendisi',
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

/* ════════════════════════════════════════════
   9. PROJECT MODAL
════════════════════════════════════════════ */
(function initModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.querySelector('.close-modal');
  const projectCards = document.querySelectorAll('.project-card');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalGallery = document.getElementById('modal-gallery');

  projectCards.forEach(card => {
    // Inject Background Layer from first image
    const imagesContainer = card.querySelector('.project-images');
    if (imagesContainer) {
      const firstImage = imagesContainer.querySelector('img');
      if (firstImage) {
        const bg = document.createElement('div');
        bg.className = 'project-card-bg';
        bg.style.backgroundImage = `url('${firstImage.getAttribute('src')}')`;
        card.prepend(bg);
      }
    }

    card.addEventListener('click', (e) => {
      // Don't open modal if they clicked on the admin panel inputs or editables
      if (e.target.isContentEditable) return;

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
        modalGallery.innerHTML = ''; // clear old
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
    });
  });

  if(closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      modal.classList.remove('show');
    }
  });
})();
