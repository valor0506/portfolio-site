// Intersection Observer for fade-in animations on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Trigger hero section immediately on page load
document.querySelectorAll('#hero .fade-in').forEach(el => {
  setTimeout(() => el.classList.add('visible'), 100);
});

// Contact form logic — simple DOM extraction and mailto trigger
document.getElementById('form-btn').addEventListener('click', function() {
  const name    = document.getElementById('cf-name').value.trim();
  const email   = document.getElementById('cf-email').value.trim();
  const subject = document.getElementById('cf-subject').value.trim();
  const message = document.getElementById('cf-message').value.trim();
  const feedback = document.getElementById('form-feedback');

  // Simple validation checks
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

  // Generate mailto link
  const mailtoLink = `mailto:suvan@example.com?subject=${encodeURIComponent(subject || 'Portfolio contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  
  // Open default mail client
  window.location.href = mailtoLink;

  feedback.textContent = 'Opening your mail client...';
  feedback.style.color = 'var(--accent)';
  feedback.style.display = 'block';
});

// Highlight the active navigation link based on scroll position
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
