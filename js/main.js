// ── Intersection Observer for fade-in animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Trigger hero section immediately on page load
document.querySelectorAll('#hero .fade-in').forEach(el => {
  setTimeout(() => el.classList.add('visible'), 100);
});

// ── Staggered fade-in for project cards ──
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.project-card, .project-featured');
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 120);
      });
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Initialize project cards with hidden state
document.querySelectorAll('.projects-grid, .project-featured').forEach(grid => {
  if (grid.classList.contains('projects-grid')) {
    grid.querySelectorAll('.project-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
  }
});

const projectsGrid = document.querySelector('.projects-grid');
if (projectsGrid) cardObserver.observe(projectsGrid);

// ── Staggered fade-in for experience items ──
const expObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.querySelectorAll('.exp-item');
      items.forEach((item, i) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, i * 150);
      });
      expObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.exp-timeline').forEach(timeline => {
  timeline.querySelectorAll('.exp-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(16px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  expObserver.observe(timeline);
});

// ── Staggered fade-in for skill categories ──
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cats = entry.target.querySelectorAll('.skill-category');
      cats.forEach((cat, i) => {
        setTimeout(() => {
          cat.style.opacity = '1';
          cat.style.transform = 'translateX(0)';
        }, i * 100);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skills-grid').forEach(grid => {
  grid.querySelectorAll('.skill-category').forEach(cat => {
    cat.style.opacity = '0';
    cat.style.transform = 'translateX(-12px)';
    cat.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  });
  skillObserver.observe(grid);
});

// ── LeetCode counter animation ──
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'), 10);
      const duration = 1500;
      const start = performance.now();
      
      function animate(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }
      
      requestAnimationFrame(animate);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.leetcode-number[data-target]').forEach(el => {
  counterObserver.observe(el);
});

// ── Contact form — mailto trigger ──
document.getElementById('form-btn').addEventListener('click', function() {
  const name    = document.getElementById('cf-name').value.trim();
  const email   = document.getElementById('cf-email').value.trim();
  const subject = document.getElementById('cf-subject').value.trim();
  const message = document.getElementById('cf-message').value.trim();
  const feedback = document.getElementById('form-feedback');

  if (!name || !email || !message) {
    feedback.textContent = 'Please fill in name, email, and message.';
    feedback.style.color = '#e05252';
    feedback.style.display = 'block';
    return;
  }

  if (!email.includes('@')) {
    feedback.textContent = 'Please enter a valid email address.';
    feedback.style.color = '#e05252';
    feedback.style.display = 'block';
    return;
  }

  const mailtoLink = `mailto:suvan0797@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  window.location.href = mailtoLink;

  feedback.textContent = 'Opening your mail client...';
  feedback.style.color = 'var(--accent)';
  feedback.style.display = 'block';
});

// ── Nav active link highlighting ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
  });
});

// ── Mobile hamburger menu ──
const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ── Navbar background on scroll ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.1)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
  }
});
