document.addEventListener('DOMContentLoaded', () => {
  const loginModal = document.getElementById('admin-login-modal');
  const closeBtn = document.querySelector('.close-admin-modal');
  const passwordInput = document.getElementById('admin-password');
  const loginBtn = document.getElementById('admin-login-btn');
  const errorMsg = document.getElementById('admin-error-msg');
  const controlPanel = document.getElementById('admin-control-panel');
  const exportBtn = document.getElementById('admin-export-btn');

  let isAdminMode = false;

  // Keybind to open login: Ctrl + Shift + A 
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      if (!isAdminMode) {
        loginModal.style.display = 'flex';
        passwordInput.focus();
      }
    }
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
    errorMsg.style.display = 'none';
    passwordInput.value = '';
  });

  // Login Logic
  loginBtn.addEventListener('click', () => {
    // Simple password check (Note: client-side password is not secure)
    if (passwordInput.value === 'admin123') {
      loginModal.style.display = 'none';
      enableAdminMode();
    } else {
      errorMsg.style.display = 'block';
    }
  });

  passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      loginBtn.click();
    }
  });

  function enableAdminMode() {
    isAdminMode = true;
    controlPanel.style.display = 'block';
    
    // 1. Make text elements editable
    const textSelectors = 'h1, h2, h3, h4, h5, h6, p, span, a, li, button, .project-badge, .tag, .stat-num, .stat-label, .contact-card-value';
    const elements = document.querySelectorAll(textSelectors);
    
    elements.forEach(el => {
      // Don't make the admin panel itself editable
      if (!el.closest('#admin-login-modal') && !el.closest('#admin-control-panel')) {
        el.setAttribute('contenteditable', 'true');
        el.classList.add('admin-editable');
        
        // Prevent default actions for links and buttons while editing
        if (el.tagName.toLowerCase() === 'a' || el.tagName.toLowerCase() === 'button') {
          el.addEventListener('click', (e) => {
            e.preventDefault();
          });
        }
      }
    });

    // 2. Make images droppable for easy replacement
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      setupDropZone(img);
    });

    // We can also allow dropping on some container divs that act as icons
    const icons = document.querySelectorAll('.project-icon, .anim-item, .project-icon-wrap, .contact-card-icon');
    icons.forEach(icon => {
      setupDropZone(icon);
    });
  }

  function setupDropZone(element) {
    element.classList.add('admin-droppable');
    
    element.addEventListener('dragover', (e) => {
      e.preventDefault();
      element.classList.add('drag-over');
    });

    element.addEventListener('dragleave', (e) => {
      e.preventDefault();
      element.classList.remove('drag-over');
    });

    element.addEventListener('drop', (e) => {
      e.preventDefault();
      element.classList.remove('drag-over');
      
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (element.tagName.toLowerCase() === 'img') {
            element.src = event.target.result;
          } else {
            // For divs, replace their content with the image or set background
            element.innerHTML = `<img src="${event.target.result}" style="width:100%; height:100%; object-fit:contain; border-radius: 8px;" />`;
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Export Logic
  exportBtn.addEventListener('click', () => {
    // Clone the document so we don't ruin the current DOM
    const htmlClone = document.documentElement.cloneNode(true);
    
    // Clean up admin classes and attributes from the clone
    const editables = htmlClone.querySelectorAll('.admin-editable');
    editables.forEach(el => {
      el.removeAttribute('contenteditable');
      el.classList.remove('admin-editable');
    });

    const droppables = htmlClone.querySelectorAll('.admin-droppable');
    droppables.forEach(el => {
      el.classList.remove('admin-droppable');
      el.classList.remove('drag-over');
    });

    // Reset admin modal and panel display in the clone
    const clonedLoginModal = htmlClone.querySelector('#admin-login-modal');
    if (clonedLoginModal) clonedLoginModal.style.display = 'none';

    const clonedControlPanel = htmlClone.querySelector('#admin-control-panel');
    if (clonedControlPanel) clonedControlPanel.style.display = 'none';

    // Build the final HTML string
    const finalHTML = "<!DOCTYPE html>\n" + htmlClone.outerHTML;

    // Trigger download
    const blob = new Blob([finalHTML], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert("Yeni index.html dosyası indirildi! Bu dosyayı sunucunuza (veya GitHub deponuza) yükleyerek değişiklikleri kalıcı hale getirebilirsiniz.");
  });

});
