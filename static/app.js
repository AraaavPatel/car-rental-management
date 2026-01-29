// Car data
const carsData = [
  {
    id: 1,
    name: "Rolls-Royce Phantom",
    brand: "Rolls-Royce",
    type: "Luxury Sedan",
    price: "$2,500/day",
    specs: {
      engine: "6.75L V12 Twin-Turbo",
      power: "563 HP",
      acceleration: "0-60 mph in 4.9s",
      topSpeed: "155 mph"
    },
    features: ["Starlight Headliner", "Premium Leather", "Chauffeur Available", "Advanced Safety"],
    image: "/static/rolls-royce-phantom.png",
    category: "ultra-luxury"
  },
  {
    id: 2,
    name: "Rolls-Royce Cullinan",
    brand: "Rolls-Royce",
    type: "Luxury SUV",
    price: "$2,800/day",
    specs: {
      engine: "6.75L V12 Twin-Turbo",
      power: "563 HP",
      acceleration: "0-60 mph in 4.8s",
      topSpeed: "155 mph"
    },
    features: ["All-Terrain Capability", "Panoramic Roof", "Premium Audio", "Executive Seating"],
    image: "/static/rolls-royce-cullinan.png",
    category: "ultra-luxury"
  },
  {
    id: 3,
    name: "Koenigsegg Jesko",
    brand: "Koenigsegg",
    type: "Hypercar",
    price: "$8,500/day",
    specs: {
      engine: "5.0L V8 Twin-Turbo",
      power: "1,600 HP (E85)",
      acceleration: "0-60 mph in 2.5s",
      topSpeed: "300+ mph"
    },
    features: ["Track Mode", "Active Aerodynamics", "Carbon Fiber Body", "Racing Technology"],
    image: "/static/koenigsegg-jesko.png",
    category: "hypercar"
  },
  {
    id: 4,
    name: "Koenigsegg Gemera",
    brand: "Koenigsegg",
    type: "Mega GT",
    price: "$7,200/day",
    specs: {
      engine: "Hybrid V8 + Electric",
      power: "2,300 HP Total",
      acceleration: "0-60 mph in 1.9s",
      topSpeed: "250 mph"
    },
    features: ["4-Seat Configuration", "Hybrid Technology", "Luxury Interior", "Advanced Infotainment"],
    image: "/static/koenigsegg-gemera.png",
    category: "hypercar"
  },
  {
    id: 5,
    name: "Porsche 911 Turbo S",
    brand: "Porsche",
    type: "Sports Car",
    price: "$1,200/day",
    specs: {
      engine: "3.8L Flat-6 Twin-Turbo",
      power: "640 HP",
      acceleration: "0-60 mph in 2.6s",
      topSpeed: "205 mph"
    },
    features: ["All-Wheel Drive", "Sport Chrono Package", "Adaptive Sports Seats", "Premium Sound"],
    image: "/static/porsche-911-turbo-s.png",
    category: "sports"
  },
  {
    id: 6,
    name: "Porsche Taycan Turbo",
    brand: "Porsche",
    type: "Electric Sports Sedan",
    price: "$1,500/day",
    specs: {
      engine: "Electric Dual Motor",
      power: "872 HP",
      acceleration: "0-60 mph in 2.6s",
      range: "227 miles"
    },
    features: ["800V Architecture", "Fast Charging", "Sport Plus Mode", "Adaptive Air Suspension"],
    image: "https://pplx-res.cloudinary.com/image/upload/v1753596079/pplx_project_search_images/bb70a165159f2f3fe1e783c0f9cc26b353123cef.jpg",
    category: "electric"
  },
  {
    id: 7,
    name: "Bentley Continental GT",
    brand: "Bentley",
    type: "Grand Tourer",
    price: "$1,800/day",
    specs: {
      engine: "6.0L W12 Twin-Turbo",
      power: "626 HP",
      acceleration: "0-60 mph in 3.6s",
      topSpeed: "208 mph"
    },
    features: ["Handcrafted Interior", "Diamond Quilted Leather", "Rotating Display", "Adaptive Cruise"],
    image: "/static/bentley-continental-gt.png",
    category: "luxury"
  },
  {
    id: 8,
    name: "Lamborghini Aventador",
    brand: "Lamborghini",
    type: "Supercar",
    price: "$3,500/day",
    specs: {
      engine: "6.5L V12 Natural",
      power: "730 HP",
      acceleration: "0-60 mph in 2.9s",
      topSpeed: "217 mph"
    },
    features: ["Scissor Doors", "Carbon Fiber Monocoque", "Dynamic Steering", "Race Mode"],
    image: "https://pplx-res.cloudinary.com/image/upload/v1751089897/pplx_project_search_images/994f69aef1f83b8f42bded3e76e72081468c20c1.jpg",
    category: "supercar"
  },
  {
    id: 9,
    name: "Ferrari F8 Tributo",
    brand: "Ferrari",
    type: "Supercar",
    price: "$3,200/day",
    specs: {
      engine: "3.9L V8 Twin-Turbo",
      power: "710 HP",
      acceleration: "0-60 mph in 2.9s",
      topSpeed: "211 mph"
    },
    features: ["Ferrari Dynamic Enhancer", "Side Slip Control", "Carbon Fiber Details", "Racing Heritage"],
    image: "/static/ferrari-f8-tributo.png",
    category: "supercar"
  },
  {
    id: 10,
    name: "McLaren 720S",
    brand: "McLaren",
    type: "Supercar",
    price: "$3,800/day",
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "710 HP",
      acceleration: "0-60 mph in 2.8s",
      topSpeed: "212 mph"
    },
    features: ["Dihedral Doors", "Carbon Fiber Tub", "Adaptive Dampers", "Track Telemetry"],
    image: "/static/mclaren-720s.png",
    category: "supercar"
  },
  {
    id: 11,
    name: "Aston Martin DB11",
    brand: "Aston Martin",
    type: "Grand Tourer",
    price: "$2,200/day",
    specs: {
      engine: "5.2L V12 Twin-Turbo",
      power: "630 HP",
      acceleration: "0-60 mph in 3.9s",
      topSpeed: "200 mph"
    },
    features: ["Elegant Design", "Luxurious Interior", "DB Mode Selector", "Premium Audio"],
    image: "/static/aston-martin-db11.png",
    category: "luxury"
  },
  {
    id: 12,
    name: "Bugatti Chiron",
    brand: "Bugatti",
    type: "Hypercar",
    price: "$15,000/day",
    specs: {
      engine: "8.0L W16 Quad-Turbo",
      power: "1,479 HP",
      acceleration: "0-60 mph in 2.4s",
      topSpeed: "261 mph"
    },
    features: ["Quad-Turbo Engine", "Luxury Craftsmanship", "Advanced Aerodynamics", "Exclusive Design"],
    image: "/static/bugatti-chiron.png",
    category: "hypercar"
  }
];

const testimonialsData = [
  {
    name: "James Mitchell",
    location: "New York",
    review: "The Tesla Model S Plaid was immaculate and the service was exceptional. FluxDrive made my business trip unforgettable.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    location: "Los Angeles",
    review: "Rented the Lamborghini Aventador for my wedding. The attention to detail and luxury service exceeded all expectations.",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    location: "Miami",
    review: "The Rolls-Royce Phantom provided the perfect blend of comfort and prestige for our corporate event. Highly recommended!",
    rating: 5
  }
];

// (then keep the rest of your existing JS: global vars, initializeApp, setupNavigation, renderFleetGrid, modals, forms, etc.)


// Global variables
let currentTestimonial = 0;
let filteredCars = [...carsData];

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const fleetGrid = document.getElementById('fleet-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const carModal = document.getElementById('car-modal');
const bookingModal = document.getElementById('booking-modal');
const membershipModal = document.getElementById('membership-modal');
const testimonialTrack = document.getElementById('testimonial-track');
const prevTestimonialBtn = document.getElementById('prev-testimonial');
const nextTestimonialBtn = document.getElementById('next-testimonial');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  renderFleetGrid();
  setupFilters();
  setupTestimonials();
  setupScrollAnimations();
  setupForms();
  animateStats();
  setupSmoothScrolling();
}

// Navigation functionality
function setupNavigation() {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const bars = navToggle.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
      if (navMenu.classList.contains('active')) {
        if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
        if (index === 1) bar.style.opacity = '0';
        if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        bar.style.transform = 'none';
        bar.style.opacity = '1';
      }
    });
  });

  // Close mobile menu when clicking on links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const bars = navToggle.querySelectorAll('.bar');
      bars.forEach(bar => {
        bar.style.transform = 'none';
        bar.style.opacity = '1';
      });
    });
  });

  // Change navbar background on scroll
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(38, 40, 40, 0.98)';
    } else {
      navbar.style.background = 'rgba(38, 40, 40, 0.95)';
    }
  });
}

// Fleet grid rendering
function renderFleetGrid() {
  fleetGrid.innerHTML = '';
  
  filteredCars.forEach((car, index) => {
    const carCard = createCarCard(car, index);
    fleetGrid.appendChild(carCard);
  });
}

function createCarCard(car, index) {
  const card = document.createElement('div');
  card.className = 'car-card';
  card.setAttribute('data-aos', 'fade-up');
  card.setAttribute('data-aos-delay', (index % 3) * 100);
  
  card.innerHTML = `
    <img src="${car.image}" alt="${car.name}" class="car-image" loading="lazy">
    <div class="car-info">
      <div class="car-header">
        <div>
          <h3 class="car-name">${car.name}</h3>
          <p class="car-type">${car.type}</p>
        </div>
        <div class="car-price">${car.price}</div>
      </div>
      <div class="car-specs">
        <div class="spec-item">
          <span class="spec-label">Engine:</span>
          ${car.specs.engine}
        </div>
        <div class="spec-item">
          <span class="spec-label">Power:</span>
          ${car.specs.power}
        </div>
        <div class="spec-item">
          <span class="spec-label">0-60:</span>
          ${car.specs.acceleration}
        </div>
        <div class="spec-item">
          <span class="spec-label">Top Speed:</span>
          ${car.specs.topSpeed}
        </div>
      </div>
    </div>
  `;
  
  card.addEventListener('click', () => openCarModal(car));
  
  return card;
}

// Filter functionality
function setupFilters() {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      
      const filter = button.getAttribute('data-filter');
      filterCars(filter);
    });
  });
}

function filterCars(category) {
  if (category === 'all') {
    filteredCars = [...carsData];
  } else {
    filteredCars = carsData.filter(car => car.category === category);
  }
  
  renderFleetGrid();
  triggerScrollAnimations();
}

// Car modal functionality
function openCarModal(car) {
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
    <div class="car-detail">
      <img src="${car.image}" alt="${car.name}" class="car-detail-image">
      <div class="car-detail-info">
        <div class="car-detail-header">
          <h2>${car.name}</h2>
          <div class="car-detail-price">${car.price}</div>
        </div>
        <p class="car-detail-type">${car.type}</p>
        
        <div class="car-detail-specs">
          <h3>Specifications</h3>
          <div class="specs-grid">
            <div class="spec-detail">
              <strong>Engine:</strong> ${car.specs.engine}
            </div>
            <div class="spec-detail">
              <strong>Power:</strong> ${car.specs.power}
            </div>
            <div class="spec-detail">
              <strong>Acceleration:</strong> ${car.specs.acceleration}
            </div>
            <div class="spec-detail">
              <strong>Top Speed:</strong> ${car.specs.topSpeed}
            </div>
          </div>
        </div>
        
        <div class="car-detail-features">
          <h3>Features</h3>
          <ul class="features-list">
            ${car.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
          </ul>
        </div>
        
        <div class="car-detail-actions">
          <button class="btn btn--primary btn--lg" onclick="openBookingModal('${car.name}')">
            <i class="fas fa-calendar-alt"></i>
            Book This Car
          </button>
          <button class="btn btn--outline btn--lg" onclick="closeCarModal()">
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  `;
  
  carModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCarModal() {
  carModal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Booking modal functionality
function openBookingModal(carName = '') {
  bookingModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  if (carName) {
    closeCarModal();
  }
}

function closeBookingModal() {
  bookingModal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Membership modal functionality
function openMembershipModal() {
  membershipModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeMembershipModal() {
  membershipModal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Testimonials functionality
function setupTestimonials() {
  renderTestimonials();
  
  prevTestimonialBtn.addEventListener('click', () => {
    currentTestimonial = currentTestimonial === 0 ? testimonialsData.length - 1 : currentTestimonial - 1;
    updateTestimonialPosition();
  });
  
  nextTestimonialBtn.addEventListener('click', () => {
    currentTestimonial = currentTestimonial === testimonialsData.length - 1 ? 0 : currentTestimonial + 1;
    updateTestimonialPosition();
  });
  
  // Auto-advance testimonials
  setInterval(() => {
    currentTestimonial = currentTestimonial === testimonialsData.length - 1 ? 0 : currentTestimonial + 1;
    updateTestimonialPosition();
  }, 5000);
}

function renderTestimonials() {
  testimonialTrack.innerHTML = testimonialsData.map(testimonial => `
    <div class="testimonial">
      <div class="testimonial-text">
        "${testimonial.review}"
      </div>
      <div class="testimonial-author">
        <div class="author-avatar">
          ${testimonial.name.charAt(0)}
        </div>
        <div class="author-info">
          <h4>${testimonial.name}</h4>
          <div class="author-location">${testimonial.location}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function updateTestimonialPosition() {
  const translateX = -currentTestimonial * 100;
  testimonialTrack.style.transform = `translateX(${translateX}%)`;
}

// Smooth scrolling functionality
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    const offsetTop = target.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// Statistics animation
function animateStats() {
  const stats = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        animateNumber(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  });
  
  stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current).toLocaleString();
  }, 50);
}

// Scroll animations setup
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });
}

function triggerScrollAnimations() {
  // Re-observe new elements after filtering
  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('[data-aos]:not(.aos-animate)').forEach(el => {
      observer.observe(el);
    });
  }, 100);
}

// Form handling
function setupForms() {
  // Contact form
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', handleContactForm);
  
  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  newsletterForm.addEventListener('submit', handleNewsletterForm);
  
  // Booking form
  const bookingForm = document.querySelector('.booking-form');
  bookingForm.addEventListener('submit', handleBookingForm);
  
  // Membership form
  const membershipForm = document.querySelector('.membership-form');
  membershipForm.addEventListener('submit', handleMembershipForm);
}

function handleContactForm(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  // Simulate form submission
  showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
  e.target.reset();
}

function handleNewsletterForm(e) {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  
  // Simulate newsletter signup
  showNotification('Successfully subscribed to our newsletter!', 'success');
  e.target.reset();
}

function handleBookingForm(e) {
  e.preventDefault();
  
  // Simulate booking submission
  showNotification('Booking request submitted! We\'ll contact you to confirm details.', 'success');
  closeBookingModal();
  e.target.reset();
}

function handleMembershipForm(e) {
  e.preventDefault();
  
  // Simulate membership signup
  showNotification('Welcome to FluxDrive Elite! Check your email for confirmation.', 'success');
  closeMembershipModal();
  e.target.reset();
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
      <span>${message}</span>
    </div>
  `;
  
  // Add notification styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#1fb8cd' : '#626c71'};
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 3000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 400px;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after delay
  setTimeout(() => {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 4000);
}

// Modal close on outside click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeCarModal();
    closeBookingModal();
    closeMembershipModal();
  }
});

// Keyboard navigation for modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCarModal();
    closeBookingModal();
    closeMembershipModal();
  }
});

// Additional CSS for car detail modal
const additionalStyles = `
  .car-detail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: start;
  }
  
  .car-detail-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
  }
  
  .car-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
  }
  
  .car-detail-header h2 {
    color: var(--color-gray-200);
    margin: 0;
  }
  
  .car-detail-price {
    font-size: 24px;
    font-weight: bold;
    color: var(--color-gold);
  }
  
  .car-detail-type {
    color: var(--color-gray-400);
    margin-bottom: 24px;
    font-size: 16px;
  }
  
  .car-detail-specs,
  .car-detail-features {
    margin-bottom: 24px;
  }
  
  .car-detail-specs h3,
  .car-detail-features h3 {
    color: var(--color-gold);
    margin-bottom: 12px;
    font-size: 18px;
  }
  
  .specs-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  
  .spec-detail {
    color: var(--color-gray-200);
    font-size: 14px;
  }
  
  .features-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .features-list li {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    color: var(--color-gray-200);
    font-size: 14px;
  }
  
  .features-list i {
    color: var(--color-gold);
    font-size: 12px;
  }
  
  .car-detail-actions {
    display: flex;
    gap: 16px;
    margin-top: 24px;
  }
  
  @media (max-width: 768px) {
    .car-detail {
      grid-template-columns: 1fr;
    }
    
    .car-detail-actions {
      flex-direction: column;
    }
  }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Export functions for global access
window.scrollToSection = scrollToSection;
window.openCarModal = openCarModal;
window.closeCarModal = closeCarModal;
window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;
window.openMembershipModal = openMembershipModal;
window.closeMembershipModal = closeMembershipModal;
