// script.js - Basic interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      });
    });
  
    // Animation on scroll
    const animateOnScroll = () => {
      const sections = document.querySelectorAll('.section, .profile-section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }
      });
    };
  
    // Set initial state for animation
    const sections = document.querySelectorAll('.section, .profile-section');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
  
    // Trigger animations when page loads
    setTimeout(animateOnScroll, 300);
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
  
    // Add hover effect to cards
    const cards = document.querySelectorAll('.cert-card, .competition-card, .gallery-item');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'var(--box-shadow)';
      });
    });
  });