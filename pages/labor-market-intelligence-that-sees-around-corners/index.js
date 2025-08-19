// SynapseScope Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initScrollAnimations();
    initSmoothScrolling();
    // initParallaxEffects(); // DISABLED - यह scrolling issue create कर रहा था
    initButtonInteractions();
    initPersonaSection();
    initFormValidation();
    initPerformanceOptimizations();
    initAccessibilityFeatures();
    
});

// Persona Section Data
const personaData = {
    academics: {
        title: "Academics & Curriculum Designers",
        benefits: [
            "Align learning outcomes with future employer demand",
            "Evaluate curriculum health against forward-looking indicators"
        ],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%23f0f0f0'/%3E%3Cg transform='translate(300,200)'%3E%3Ccircle r='60' fill='%23333' opacity='0.2'/%3E%3Cpath d='M-20,-30 L20,-30 L20,30 L-20,30 Z' fill='%23333' opacity='0.1'/%3E%3Ctext x='0' y='5' text-anchor='middle' font-size='12' fill='%23333'%3EProfessor%3C/text%3E%3C/g%3E%3C/svg%3E",
        dashboard: {
            title: "Skills Analysis",
            metric: "Course Data Science for MBA",
            description: "Forward-looking curriculum alignment"
        }
    },
    hr: {
        title: "HR & Talent Leaders", 
        benefits: [
            "Build talent pipelines for what's next—not what's trending",
            "Benchmark internal capabilities against forward-looking skill maps"
        ],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%23f0f0f0'/%3E%3Cg transform='translate(300,200)'%3E%3Ccircle r='60' fill='%23333' opacity='0.2'/%3E%3Cpath d='M-15,-25 L15,-25 L15,25 L-15,25 Z' fill='%23333' opacity='0.1'/%3E%3Ctext x='0' y='5' text-anchor='middle' font-size='12' fill='%23333'%3EHR Leader%3C/text%3E%3C/g%3E%3C/svg%3E",
        dashboard: {
            title: "Business Analyst",
            metric: "→ Data Scientist",
            description: "80% mobility rate with Python & Data Modeling skills"
        }
    },
    ld: {
        title: "L&D and Capability Teams",
        benefits: [
            "Prioritize training where the market is headed", 
            "Spot early warning signs of outdated competencies"
        ],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%23f0f0f0'/%3E%3Cg transform='translate(300,200)'%3E%3Ccircle r='60' fill='%23333' opacity='0.2'/%3E%3Cpath d='M-20,-25 L20,-25 L20,25 L-20,25 Z' fill='%23333' opacity='0.1'/%3E%3Ctext x='0' y='5' text-anchor='middle' font-size='12' fill='%23333'%3EL%26D Manager%3C/text%3E%3C/g%3E%3C/svg%3E",
        dashboard: {
            title: "Skills Gap Analysis", 
            metric: "Current vs Future Skills",
            description: "Identify training priorities and competency gaps"
        }
    },
    workforce: {
        title: "Workforce Planners and Executives",
        benefits: [
            "Make proactive decisions about upskilling, automation, and hiring",
            "Align organizational strategy with skill trajectories—not speculation"
        ],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%23f0f0f0'/%3E%3Cg transform='translate(300,200)'%3E%3Ccircle r='60' fill='%23333' opacity='0.2'/%3E%3Cpath d='M-25,-30 L25,-30 L25,30 L-25,30 Z' fill='%23333' opacity='0.1'/%3E%3Ctext x='0' y='5' text-anchor='middle' font-size='12' fill='%23333'%3EExecutive%3C/text%3E%3C/g%3E%3C/svg%3E",
        dashboard: {
            title: "Workforce Skills Gap Analysis",
            metric: "Strategic Planning Dashboard",
            description: "Organizational capability vs market demands"
        }
    },
    professionals: {
        title: "Professionals & Career Builders",
        benefits: [
            "Compare your skills with high-demand and emerging benchmarks",
            "Explore new roles based on transferable skills"
        ],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%23f0f0f0'/%3E%3Cg transform='translate(300,200)'%3E%3Ccircle r='60' fill='%23333' opacity='0.2'/%3E%3Cpath d='M-18,-28 L18,-28 L18,28 L-18,28 Z' fill='%23333' opacity='0.1'/%3E%3Ctext x='0' y='5' text-anchor='middle' font-size='12' fill='%23333'%3EProfessional%3C/text%3E%3C/g%3E%3C/svg%3E",
        dashboard: {
            title: "Skill Recommendations",
            metric: "Python: 38, Tableau: 15, Cybersecurity: 12",
            description: "Invest in Python-driven analytics roles"
        }
    },
    students: {
        title: "Students & Early Career Talent",
        benefits: [
            "Discover where your academic foundation aligns with future roles",
            "Explore adjacent career paths with higher growth potential"
        ],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%23f0f0f0'/%3E%3Cg transform='translate(300,200)'%3E%3Ccircle r='60' fill='%23333' opacity='0.2'/%3E%3Cpath d='M-15,-25 L15,-25 L15,25 L-15,25 Z' fill='%23333' opacity='0.1'/%3E%3Ctext x='0' y='5' text-anchor='middle' font-size='12' fill='%23333'%3EStudent%3C/text%3E%3C/g%3E%3C/svg%3E",
        dashboard: {
            title: "Python Scripting",
            metric: "Build",
            description: "High ROI on early adoption with strategic value"
        }
    }
};

// Initialize Persona Section
function initPersonaSection() {
    const personaItems = document.querySelectorAll('.persona-item');
    const benefitsList = document.getElementById('persona-benefits-list');
    const personaImage = document.getElementById('persona-image');
    const dashboardOverlay = document.getElementById('dashboard-overlay');
    
    // Set initial state
    updatePersonaContent('academics');
    
    personaItems.forEach(item => {
        item.addEventListener('click', function() {
            const persona = this.dataset.persona;
            
            // Update active state
            personaItems.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            
            // Update content
            updatePersonaContent(persona);
        });
    });
    
    function updatePersonaContent(persona) {
        const data = personaData[persona];
        if (!data) return;
        
        // Add transition class
        if (benefitsList) {
            benefitsList.parentElement.classList.add('changing');
        }
        
        setTimeout(() => {
            // Update benefits
            if (benefitsList) {
                benefitsList.innerHTML = data.benefits.map(benefit => 
                    `<li>${benefit}</li>`
                ).join('');
            }
            
            // Update image
            if (personaImage) {
                personaImage.src = data.image;
                personaImage.alt = data.title;
            }
            
            // Update dashboard overlay
            if (dashboardOverlay) {
                dashboardOverlay.innerHTML = `
                    <h6>${data.dashboard.title}</h6>
                    <div class="metric">${data.dashboard.metric}</div>
                    <div class="description">${data.dashboard.description}</div>
                `;
                dashboardOverlay.classList.add('show');
            }
            
            // Remove transition class
            if (benefitsList) {
                benefitsList.parentElement.classList.remove('changing');
            }
        }, 200);
    }
}

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.animated-on-scroll');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('show');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all elements with animated-on-scroll class
    document.querySelectorAll('.animated-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax effect for hero section
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-section');
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const speed = scrolled * 0.3;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${speed}px)`;
        });
    }
    
    // Use requestAnimationFrame for smooth animation
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', () => {
        requestTick();
        ticking = false;
    });
}

// Button interactions and loading states
function initButtonInteractions() {
    const demoButtons = document.querySelectorAll('.btn-primary, .btn-outline-primary');
    
    demoButtons.forEach(button => {
        // Add hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Handle demo requests
        if (button.textContent.includes('Demo') || button.textContent.includes('Request')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                handleDemoRequest(this);
            });
        }
        
        // Handle learn more buttons
        if (button.textContent.includes('Learn More')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                handleLearnMore(this);
            });
        }
    });
}

// Handle demo request
function handleDemoRequest(button) {
    // Add loading state
    const originalText = button.textContent;
    button.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Loading...';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        button.textContent = originalText;
        button.disabled = false;
        
        // Show success message or redirect
        showNotification('Demo request submitted successfully! We\'ll contact you soon.', 'success');
        
        // In a real implementation, you would:
        // 1. Open a contact form modal
        // 2. Redirect to a scheduling page
        // 3. Submit form data to your backend
        
    }, 2000);
}

// Handle learn more
function handleLearnMore(button) {
    // In a real implementation, this would navigate to relevant pages
    showNotification('Learn more functionality would navigate to detailed information pages.', 'info');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Form validation
function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.addEventListener('scroll', debounce(() => {
        // Handle navbar background changes
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        // Call original scroll handler if exists
        if (originalScrollHandler) {
            originalScrollHandler();
        }
    }, 10));
    
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Accessibility features
function initAccessibilityFeatures() {
    // Keyboard navigation enhancement
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Skip links for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'visually-hidden-focusable';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Enhanced focus management
    const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        
        element.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Enhanced card interactions
function initCardInteractions() {
    const cards = document.querySelectorAll('.feature-card, .step-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click interaction for mobile
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
}

// Framework diagram interactions
function initFrameworkInteractions() {
    const frameworkCircles = document.querySelectorAll('.framework-circle');
    
    frameworkCircles.forEach(circle => {
        circle.addEventListener('mouseenter', function() {
            this.style.transform += ' scale(1.1)';
            this.style.zIndex = '10';
        });
        
        circle.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace(' scale(1.1)', '');
            this.style.zIndex = '1';
        });
    });
}

// Initialize tooltip functionality
function initTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Dynamic content loading
function loadDynamicContent() {
    // This would be used for loading testimonials, case studies, etc.
    // Example implementation for future use
    
    const contentSections = document.querySelectorAll('[data-dynamic-content]');
    
    contentSections.forEach(section => {
        const contentType = section.dataset.dynamicContent;
        
        // Simulate API call
        fetch(`/api/content/${contentType}`)
            .then(response => response.json())
            .then(data => {
                renderDynamicContent(section, data);
            })
            .catch(error => {
                console.error('Error loading dynamic content:', error);
            });
    });
}

function renderDynamicContent(container, data) {
    // Render dynamic content based on type
    container.innerHTML = data.html;
    
    // Re-initialize any interactions for new content
    initCardInteractions();
}

// Export functions for potential use in other scripts
window.SynapseScope = {
    animateCounter,
    showNotification,
    initScrollAnimations,
    initCardInteractions,
    loadDynamicContent
};

// Initialize additional features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initCardInteractions();
    initFrameworkInteractions();
    initTooltips();
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', debounce(() => {
    // Recalculate positions for framework diagram on mobile
    const diagram = document.querySelector('.framework-diagram');
    if (diagram && window.innerWidth < 768) {
        // Adjust framework circle positions for mobile
        const circles = diagram.querySelectorAll('.framework-circle:not(.center-circle)');
        circles.forEach((circle, index) => {
            const angle = (index * 90) * (Math.PI / 180);
            const radius = 80;
            const centerX = diagram.offsetWidth / 2;
            const centerY = diagram.offsetHeight / 2;
            
            circle.style.left = `${centerX + radius * Math.cos(angle) - 40}px`;
            circle.style.top = `${centerY + radius * Math.sin(angle) - 40}px`;
        });
    }
}, 250));