import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';

// Add particle animation
const initParticles = () => {
  const container = document.querySelector('.tech-particles');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.setProperty('--x', `${Math.random() * 100}%`);
    particle.style.setProperty('--y', `${Math.random() * 100}%`);
    particle.style.setProperty('--duration', `${3 + Math.random() * 7}s`);
    particle.style.setProperty('--delay', `${Math.random() * 5}s`);
    container.appendChild(particle);
  }
};

// 
// const initWebGL = () => {
//   const container = document.getElementById('webgl-container');
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(75, 500/500, 0.1, 1000);
//   const renderer = new THREE.WebGLRenderer({ 
//     antialias: true, 
//     alpha: true 
//   });
  
//   renderer.setSize(500, 500);
//   renderer.setClearColor(0x000000, 0);
//   container.appendChild(renderer.domElement);

//   // Create developer figure
//   const createDeveloper = () => {
//     const group = new THREE.Group();
    
//     // Body (simplified geometric representation)
//     const body = new THREE.Mesh(
//       new THREE.BoxGeometry(1, 1.5, 0.5),
//       new THREE.MeshPhongMaterial({ color: 0x36d698 })
//     );
    
//     // Monitor
//     const monitor = new THREE.Mesh(
//       new THREE.BoxGeometry(2, 1.2, 0.1),
//       new THREE.MeshPhongMaterial({ 
//         color: 0x58ffbe,
//         emissive: 0x2536a6,
//         emissiveIntensity: 0.5
//       })
//     );
//     monitor.position.z = -1;
//     monitor.position.y = 0.5;
    
//     group.add(body);
//     group.add(monitor);
//     return group;
//   };

//   const developer = createDeveloper();
//   scene.add(developer);

//   // Lighting
//   const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//   scene.add(ambientLight);
  
//   const pointLight = new THREE.PointLight(0x58ffbe, 1);
//   pointLight.position.set(10, 10, 10);
//   scene.add(pointLight);

//   camera.position.z = 8;
  
//   const controls = new OrbitControls(camera, renderer.domElement);
//   controls.enableZoom = false;
//   controls.enablePan = false;
  
//   const animate = () => {
//     requestAnimationFrame(animate);
//     developer.rotation.y += 0.005;
//     controls.update();
//     renderer.render(scene, camera);
//   };
  
//   animate();
// };

// Add FAQ functionality
const initFAQ = () => {
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
      const isOpen = question.classList.contains('active');
      
      // Close all other answers
      document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
        q.parentElement.querySelector('.faq-answer').classList.remove('active');
      });
      
      // Toggle current answer
      if (!isOpen) {
        question.classList.add('active');
        answer.classList.add('active');
      }
    });
  });
};

// Add scroll animations
const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in, .slide-in').forEach(el => {
    observer.observe(el);
  });
};

// Form validation and submission
const initForm = () => {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const button = form.querySelector('button');
    const originalText = button.textContent;
    
    try {
      button.textContent = 'Envoi en cours...';
      button.disabled = true;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      form.reset();
      button.textContent = 'Envoyé avec succès !';
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 2000);
    } catch (error) {
      button.textContent = 'Erreur, veuillez réessayer';
      button.disabled = false;
    }
  });
};

// Mobile Menu Handler
const initMobileMenu = () => {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open');
  });

  // Fermer le menu quand on clique sur un lien
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('active');
      body.classList.remove('menu-open');
    });
  });
};

// Add testimonial slider functionality
const initTestimonials = () => {
  const track = document.querySelector('.testimonial-track');
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.slider-dot');
  let currentIndex = 0;
  let interval;

  const updateSlider = (index) => {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSlider(currentIndex);
  };

  const startAutoplay = () => {
    interval = setInterval(nextSlide, 5000);
  };

  const stopAutoplay = () => {
    clearInterval(interval);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider(currentIndex);
      stopAutoplay();
      startAutoplay();
    });
  });

  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
};

// Add portfolio filtering functionality with smooth animations
const initPortfolio = () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button with smooth transition
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      // Filter items with smooth animations
      portfolioItems.forEach((item, index) => {
        // Add stagger effect to animations
        setTimeout(() => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.classList.remove('hidden');
            
            // Force reflow
            item.offsetHeight;
            
            item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
              item.classList.add('hidden');
            }, 400);
          }
        }, index * 100); // Stagger each item's animation
      });
    });
  });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initParticles();
  initFAQ();
  initForm();
  initScrollAnimations();
  initTestimonials();
  initPortfolio();
});