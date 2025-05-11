// Smooth aesthetic transitions between pages
document.addEventListener('DOMContentLoaded', function() {
  // Create transition overlay
  const transitionOverlay = document.createElement('div');
  transitionOverlay.className = 'transition-overlay';
  document.body.appendChild(transitionOverlay);
  
  // Create floating elements container
  const floatingElements = document.createElement('div');
  floatingElements.className = 'floating-elements';
  transitionOverlay.appendChild(floatingElements);
  
  // Create elegant message
  const transitionMessage = document.createElement('div');
  transitionMessage.className = 'transition-message';
  transitionMessage.innerHTML = '<span>For You</span><div class="heart-divider"></div><span>Priyanshi</span>';
  transitionOverlay.appendChild(transitionMessage);
  
  // Generate initial decorative elements
  for (let i = 0; i < 15; i++) {
    createFloatingHeart(floatingElements);
    if (i % 3 === 0) createFloatingStar(floatingElements);
  }
  
  // Handle link clicks for smooth transitions
  document.querySelectorAll('a').forEach(link => {
    if (link.href && !link.href.includes('#') && !link.href.includes('javascript:')) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetUrl = this.href;
        
        // Start transition animation
        transitionOverlay.classList.add('visible');
        document.body.classList.add('transitioning');
        
        // Generate more decorative elements
        for (let i = 0; i < 25; i++) {
          setTimeout(() => {
            createFloatingHeart(floatingElements);
            if (i % 2 === 0) createFloatingStar(floatingElements);
            if (i % 4 === 0) createFloatingGlow(floatingElements);
          }, i * 40);
        }
        
        // Show transition message
        setTimeout(() => {
          transitionMessage.classList.add('visible');
        }, 200);
        
        // Navigate to target page after animation
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 1200);
      });
    }
  });
  
  // Special button effect for gift box
  if (document.querySelector('.gift-box')) {
    document.querySelector('.gift-box').addEventListener('click', function() {
      // Add magic effect
      this.classList.add('magic-pulse');
      
      // Create magical effect around the button
      const rect = this.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          createMagicEffect(centerX, centerY);
        }, i * 50);
      }
      
      // Remove magic pulse class after animation
      setTimeout(() => {
        this.classList.remove('magic-pulse');
      }, 1500);
    });
  }
  
  // Handle page entrance animation
  if (document.referrer.includes(window.location.host)) {
    document.body.classList.add('fade-in');
    
    // Animate elements in with staggered delay
    const entranceElements = [
      '.profile-pic', '.birthday-button', '.collage-heading', 
      '.photo-wrapper', '.gift-box', '.arrow'
    ];
    
    entranceElements.forEach((selector, index) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el, elIndex) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
          el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 300 + (index * 100) + (elIndex * 80));
      });
    });
  }
  
  // Listen for back button
  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      transitionOverlay.classList.remove('visible');
      document.body.classList.remove('transitioning');
    }
  });
});

// Create floating hearts
function createFloatingHeart(container) {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  
  // Randomize properties
  const size = Math.random() * 30 + 15;
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  const duration = Math.random() * 0.5 + 0.8;
  const delay = Math.random() * 0.3;
  const opacity = Math.random() * 0.6 + 0.4;
  const heartTypes = ['red', 'pink', 'purple'];
  const type = heartTypes[Math.floor(Math.random() * heartTypes.length)];
  
  heart.classList.add(type);
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.left = `${posX}%`;
  heart.style.top = `${posY}%`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `${delay}s`;
  heart.style.opacity = opacity;
  
  container.appendChild(heart);
  
  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, (duration + delay) * 1000 + 100);
}

// Create floating stars
function createFloatingStar(container) {
  const star = document.createElement('div');
  star.className = 'floating-star';
  
  // Randomize properties
  const size = Math.random() * 20 + 10;
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  const duration = Math.random() * 0.5 + 0.8;
  const delay = Math.random() * 0.3;
  const rotation = Math.random() * 360;
  const opacity = Math.random() * 0.7 + 0.3;
  
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${posX}%`;
  star.style.top = `${posY}%`;
  star.style.transform = `rotate(${rotation}deg)`;
  star.style.animationDuration = `${duration}s`;
  star.style.animationDelay = `${delay}s`;
  star.style.opacity = opacity;
  
  container.appendChild(star);
  
  // Remove after animation
  setTimeout(() => {
    star.remove();
  }, (duration + delay) * 1000 + 100);
}

// Create floating glows
function createFloatingGlow(container) {
  const glow = document.createElement('div');
  glow.className = 'floating-glow';
  
  // Randomize properties
  const size = Math.random() * 60 + 30;
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  const duration = Math.random() * 0.8 + 1;
  const delay = Math.random() * 0.3;
  
  glow.style.width = `${size}px`;
  glow.style.height = `${size}px`;
  glow.style.left = `${posX}%`;
  glow.style.top = `${posY}%`;
  glow.style.animationDuration = `${duration}s`;
  glow.style.animationDelay = `${delay}s`;
  
  container.appendChild(glow);
  
  // Remove after animation
  setTimeout(() => {
    glow.remove();
  }, (duration + delay) * 1000 + 100);
}

// Create magical effect for gift box button
function createMagicEffect(x, y) {
  const effectTypes = ['magic-sparkle', 'magic-heart', 'magic-star'];
  const type = effectTypes[Math.floor(Math.random() * effectTypes.length)];
  
  const effect = document.createElement('div');
  effect.className = `magic-effect ${type}`;
  
  // Calculate position
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * 100 + 20;
  const posX = x + Math.cos(angle) * distance;
  const posY = y + Math.sin(angle) * distance;
  
  // Set properties
  const size = Math.random() * 20 + 10;
  effect.style.width = `${size}px`;
  effect.style.height = `${size}px`;
  effect.style.left = `${posX}px`;
  effect.style.top = `${posY}px`;
  
  document.body.appendChild(effect);
  
  // Remove after animation
  setTimeout(() => {
    effect.remove();
  }, 1500);
}