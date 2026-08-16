import codecs
import re

with codecs.open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace images for Silent Track (proj6)
# First we find proj6_title and then the next project-images
parts = html.split('proj6_title')
if len(parts) > 1:
    before = parts[0]
    after = parts[1]
    
    new_images = '''<div class="project-images" style="display: none;">
              <img src="silent-2024/silentjpg1.jpeg" style="height: 120px; border-radius: 8px; cursor: pointer; object-fit: cover;" onclick="document.getElementById('project-modal').style.display='flex'; document.getElementById('modal-img').src=this.src;">
              <img src="silent-2024/silentjpg2.jpeg" style="height: 120px; border-radius: 8px; cursor: pointer; object-fit: cover;" onclick="document.getElementById('project-modal').style.display='flex'; document.getElementById('modal-img').src=this.src;">
            </div>'''
            
    after = re.sub(r'<div class="project-images" style="display: none;">.*?</div>', new_images, after, count=1, flags=re.DOTALL)
    html = before + 'proj6_title' + after

# Add arrows to modal
modal_arrows = '''      <div id="modal-gallery" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; width: 100%;">
      </div>
      <div class="modal-nav" style="display: flex; justify-content: space-between; margin-top: 1.5rem;">
        <button id="modal-prev" class="btn btn-ghost" data-i18n="modal_prev" style="padding: 0.5rem 1rem;">&larr; Previous</button>
        <button id="modal-next" class="btn btn-ghost" data-i18n="modal_next" style="padding: 0.5rem 1rem;">Next &rarr;</button>
      </div>'''

html = re.sub(r'<div id="modal-gallery" style="display: grid; grid-template-columns: repeat\(auto-fit, minmax\(200px, 1fr\)\); gap: 15px; width: 100%;">\s*</div>', modal_arrows, html, count=1, flags=re.DOTALL)

with codecs.open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# Now update script.js
with codecs.open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Insert translations
js = js.replace("proj_details_btn: 'See Details',", "proj_details_btn: 'See Details',\n    modal_prev: '&larr; Previous',\n    modal_next: 'Next &rarr;',")
js = js.replace("proj_details_btn: 'Detayları Gör',", "proj_details_btn: 'Detayları Gör',\n    modal_prev: '&larr; Önceki',\n    modal_next: 'Sonraki &rarr;',")

# Replace initModal
old_modal = '''(function initModal() {
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
        bg.style.backgroundImage = url('');
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
})();'''

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
    // Inject Background Layer from first image
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
      // Don't open modal if they clicked on the admin panel inputs or editables
      if (e.target.isContentEditable) return;
      openModalForCard(index);
    });
  });

  if(closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('show'));
  }

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
    modalPrev.addEventListener('click', () => {
      openModalForCard((currentProjectIndex - 1 + projectCards.length) % projectCards.length);
    });
  }
  
  if(modalNext) {
    modalNext.addEventListener('click', () => {
      openModalForCard((currentProjectIndex + 1) % projectCards.length);
    });
  }
})();'''

js = js.replace(old_modal, new_modal)

with codecs.open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)

