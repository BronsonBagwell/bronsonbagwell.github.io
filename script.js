// ========================================
// Reveal on scroll
// ========================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const parent = entry.target.parentElement;
      if (parent && (parent.classList.contains('cards-stack') ||
                     parent.classList.contains('edu-grid') ||
                     parent.classList.contains('skills-grid') ||
                     parent.classList.contains('projects-grid') ||
                     parent.classList.contains('certs-row'))) {
        const siblings = Array.from(parent.querySelectorAll('.reveal'));
        const index = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 0.08}s`;
      }
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ========================================
// Mobile nav toggle
// ========================================
const toggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// ========================================
// Floating Glass Orbs
// ========================================
(function initOrbs() {
  const container = document.getElementById('orbs-container');
  if (!container) return;

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const orbCount = isMobile ? 6 : 12;

  const colors = [
    'rgba(41, 151, 255,',   // blue
    'rgba(48, 213, 200,',   // teal
    'rgba(168, 85, 247,',   // purple
    'rgba(41, 151, 255,',   // blue again (weighted)
    'rgba(48, 213, 200,',   // teal again
    'rgba(168, 85, 247,',   // purple again
  ];

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randInt(min, max) {
    return Math.floor(rand(min, max));
  }

  for (let i = 0; i < orbCount; i++) {
    const orb = document.createElement('div');
    orb.classList.add('glass-orb');

    const color = colors[i % colors.length];
    const size = isMobile ? rand(120, 280) : rand(180, 500);
    const opacity = rand(0.03, 0.07);
    const blur = rand(40, 90);
    const duration = rand(18, 35);
    const delay = rand(0, -15); // negative for staggered start

    // Position spread across the viewport
    const x = rand(-5, 95);
    const y = rand(-5, 105);

    // Unique drift distances
    const dx1 = rand(-60, 60);
    const dy1 = rand(-60, 60);
    const dx2 = rand(-50, 50);
    const dy2 = rand(-50, 50);
    const dx3 = rand(-40, 40);
    const dy3 = rand(-40, 40);
    const dx4 = rand(-55, 55);
    const dy4 = rand(-55, 55);

    orb.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      background: ${color} ${opacity})`;

    orb.style.setProperty('--orb-blur', `${blur}px`);
    orb.style.setProperty('--orb-opacity', '1');
    orb.style.setProperty('--orb-duration', `${duration}s`);
    orb.style.setProperty('--orb-delay', `${delay}s`);
    orb.style.setProperty('--orb-dx1', `${dx1}px`);
    orb.style.setProperty('--orb-dy1', `${dy1}px`);
    orb.style.setProperty('--orb-dx2', `${dx2}px`);
    orb.style.setProperty('--orb-dy2', `${dy2}px`);
    orb.style.setProperty('--orb-dx3', `${dx3}px`);
    orb.style.setProperty('--orb-dy3', `${dy3}px`);
    orb.style.setProperty('--orb-dx4', `${dx4}px`);
    orb.style.setProperty('--orb-dy4', `${dy4}px`);

    container.appendChild(orb);
  }
})();
