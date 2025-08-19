// Homepage JavaScript functionality
document.addEventListener('DOMContentLoaded', function () {
    
    // ===== AUTO-PLAY TABS SYSTEM =====
    class AutoPlayTabs {
        constructor() {
            this.isPlaying = false;
            this.currentIndex = 0;
            this.interval = null;
            this.progressInterval = null;
            this.speed = 4000; // Default 4 seconds
            this.currentProgress = 0;
            
            this.tabs = document.querySelectorAll('.feature-icon');
            this.modules = document.querySelectorAll('.module-section');
            this.playPauseBtn = document.getElementById('playPauseBtn');
            this.playIcon = document.getElementById('playIcon');
            this.pauseIcon = document.getElementById('pauseIcon');
            this.autoPlayStatus = document.getElementById('autoPlayStatus');
            this.progressCircle = document.getElementById('progressCircle');
            this.speedBtns = document.querySelectorAll('.speed-btn');
            
            if (this.playPauseBtn) {
                this.initializeProgressCircle();
                this.bindEvents();
            }
        }
        
        initializeProgressCircle() {
            if (this.progressCircle) {
                const radius = 12;
                const circumference = 2 * Math.PI * radius;
                this.progressCircle.style.strokeDasharray = circumference;
                this.progressCircle.style.strokeDashoffset = circumference;
            }
        }
        
        bindEvents() {
            // Play/Pause button
            if (this.playPauseBtn) {
                this.playPauseBtn.addEventListener('click', () => {
                    this.isPlaying ? this.pause() : this.play();
                });
            }
            
            // Manual tab clicks
            this.tabs.forEach((tab, index) => {
                tab.addEventListener('click', () => {
                    this.goToTab(index);
                    if (this.isPlaying) {
                        this.pause();
                        setTimeout(() => this.play(), 500); // Resume after brief pause
                    }
                });
            });
            
            // Speed controls
            if (this.speedBtns.length > 0) {
                this.speedBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        this.speedBtns.forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        this.speed = parseInt(btn.dataset.speed);
                        
                        if (this.isPlaying) {
                            this.pause();
                            this.play(); // Restart with new speed
                        }
                    });
                });
            }
            
            // Pause on hover (optional)
            const featureIconsContainer = document.querySelector('.feature-icons');
            if (featureIconsContainer) {
                featureIconsContainer.addEventListener('mouseenter', () => {
                    if (this.isPlaying) {
                        this.pauseProgress();
                    }
                });
                
                featureIconsContainer.addEventListener('mouseleave', () => {
                    if (this.isPlaying) {
                        this.resumeProgress();
                    }
                });
            }
        }
        
        play() {
            this.isPlaying = true;
            if (this.playIcon) this.playIcon.style.display = 'none';
            if (this.pauseIcon) this.pauseIcon.style.display = 'block';
            if (this.autoPlayStatus) this.autoPlayStatus.textContent = 'Auto-play: On';
            
            this.startAutoPlay();
            this.startProgress();
        }
        
        pause() {
            this.isPlaying = false;
            if (this.playIcon) this.playIcon.style.display = 'block';
            if (this.pauseIcon) this.pauseIcon.style.display = 'none';
            if (this.autoPlayStatus) this.autoPlayStatus.textContent = 'Auto-play: Off';
            
            this.stopAutoPlay();
            this.stopProgress();
        }
        
        startAutoPlay() {
            this.interval = setInterval(() => {
                this.nextTab();
            }, this.speed);
        }
        
        stopAutoPlay() {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
        
        startProgress() {
            this.currentProgress = 0;
            this.progressInterval = setInterval(() => {
                this.currentProgress += (100 / (this.speed / 50)); // Update every 50ms
                this.updateProgressBar();
                this.updateTabProgress();
                
                if (this.currentProgress >= 100) {
                    this.currentProgress = 0;
                }
            }, 50);
        }
        
        stopProgress() {
            if (this.progressInterval) {
                clearInterval(this.progressInterval);
                this.progressInterval = null;
            }
            this.currentProgress = 0;
            this.updateProgressBar();
            this.updateTabProgress();
        }
        
        pauseProgress() {
            if (this.progressInterval) {
                clearInterval(this.progressInterval);
                this.progressInterval = null;
            }
        }
        
        resumeProgress() {
            if (this.isPlaying && !this.progressInterval) {
                this.startProgress();
            }
        }
        
        updateProgressBar() {
            if (this.progressCircle) {
                const radius = 12;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (this.currentProgress / 100) * circumference;
                this.progressCircle.style.strokeDashoffset = offset;
            }
        }
        
        updateTabProgress() {
            const activeTab = this.tabs[this.currentIndex];
            if (activeTab) {
                activeTab.style.setProperty('--progress', this.currentProgress + '%');
            }
        }
        
        nextTab() {
            this.currentIndex = (this.currentIndex + 1) % this.tabs.length;
            this.goToTab(this.currentIndex);
            this.currentProgress = 0; // Reset progress for new tab
        }
        
        goToTab(index) {
            this.currentIndex = index;
            
            // Update tabs
            this.tabs.forEach(tab => tab.classList.remove('active'));
            if (this.tabs[index]) {
                this.tabs[index].classList.add('active');
            }
            
            // Update modules
            this.modules.forEach(module => module.classList.remove('active'));
            if (this.modules[index]) {
                this.modules[index].classList.add('active');
            }
            
            // Reset progress bar
            this.currentProgress = 0;
            this.updateProgressBar();
            this.updateTabProgress();
        }
    }
    
    // Initialize Auto-Play System
    const autoPlayTabs = new AutoPlayTabs();
    
    // ===== MODULE NAVIGATION (Updated to work with Auto-Play) =====
    const featureButtons = document.querySelectorAll('.feature-icon');
    const moduleSections = document.querySelectorAll('.module-section');

    featureButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const targetModule = this.getAttribute('data-module');
            
            // Update auto-play system
            if (autoPlayTabs) {
                autoPlayTabs.goToTab(index);
            }
            
            // Remove active class from all buttons
            featureButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all module sections
            moduleSections.forEach(section => section.classList.remove('active'));
            // Show target module section
            const targetSection = document.getElementById(targetModule);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Smooth scroll to module section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== CTA BUTTON SCROLL ANIMATION =====
    const ctaButtons = document.querySelectorAll('.btn-primary-custom, .btn-secondary-custom');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Only prevent default if it's a hash link
            if (this.getAttribute('href') === '#' || this.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const nextSection = this.closest('section')?.nextElementSibling;
                if (nextSection) {
                    nextSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('feature-grid')) {
                    const cards = entry.target.querySelectorAll('.feature-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
                
                // Add staggered animation for stats
                if (entry.target.classList.contains('stats-section')) {
                    const stats = entry.target.querySelectorAll('.stat-card');
                    stats.forEach((stat, index) => {
                        setTimeout(() => {
                            stat.style.opacity = '1';
                            stat.style.transform = 'translateY(0)';
                            animateCounter(stat.querySelector('.stat-number'));
                        }, index * 150);
                    });
                }
                
                // Add staggered animation for feature icons
                if (entry.target.classList.contains('feature-icons')) {
                    const icons = entry.target.querySelectorAll('.feature-icon');
                    icons.forEach((icon, index) => {
                        setTimeout(() => {
                            icon.style.opacity = '1';
                            icon.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // ===== OBSERVE ELEMENTS FOR ANIMATION =====
    const animatedElements = document.querySelectorAll(
        '.stats-section, .feature-grid, .feature-icons, .hero-content, .module-content, .power-content'
    );
    
    animatedElements.forEach(el => {
        // Set initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // ===== COUNTER ANIMATION =====
    function animateCounter(element) {
        if (!element || element.dataset.animated) return;
        
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const number = parseInt(text.replace(/[^\d]/g, ''));
        
        if (isNaN(number)) return;
        
        element.dataset.animated = 'true';
        const duration = 2000;
        const steps = 60;
        const increment = number / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current = Math.min(number, Math.floor(increment * step));
            element.textContent = current.toLocaleString() + (hasPlus ? '+' : '');
            
            if (step >= steps) {
                clearInterval(timer);
                element.textContent = number.toLocaleString() + (hasPlus ? '+' : '');
            }
        }, duration / steps);
    }

    // ===== FLOATING CARDS PARALLAX EFFECT =====
    function initParallax() {
        const floatingCards = document.querySelectorAll('.floating-card');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            floatingCards.forEach((card, index) => {
                const speed = (index + 1) * 0.3;
                card.style.transform = `translateY(${rate * speed}px)`;
            });
        });
    }

    // Initialize parallax only on larger screens
    if (window.innerWidth > 768) {
        initParallax();
    }

    // ===== DYNAMIC BUTTON TEXT ANIMATION =====
    const primaryButtons = document.querySelectorAll('.btn-primary-custom');
    primaryButtons.forEach(button => {
        const originalText = button.textContent;
        
        button.addEventListener('mouseenter', function() {
            if (this.textContent === originalText) {
                this.style.transform = 'translateY(-2px) scale(1.02)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===== FEATURE CARD INTERACTION =====
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        const icon = card.querySelector('.icon');
        const learnMore = card.querySelector('.learn-more');
        
        card.addEventListener('mouseenter', function() {
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.background = 'linear-gradient(135deg, #e0f2fe 0%, #bfdbfe 100%)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.background = 'rgb(224 242 254 / 0%)';
            }
        });
        
        if (learnMore) {
            learnMore.addEventListener('click', function(e) {
                e.preventDefault();
                // Add ripple effect
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        }
    });

    // ===== STATS CARD HOVER EFFECTS =====
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        const statNumber = card.querySelector('.stat-number');
        
        card.addEventListener('mouseenter', function() {
            if (statNumber) {
                statNumber.style.transform = 'scale(1.1)';
                statNumber.style.textShadow = '0 4px 8px rgba(0, 112, 192, 0.3)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (statNumber) {
                statNumber.style.transform = 'scale(1)';
                statNumber.style.textShadow = 'none';
            }
        });
    });

    // ===== FEATURE ICON INTERACTION (UPDATED FOR IMAGES WITH SIZE INCREASE) =====
    const featureIcons = document.querySelectorAll('.feature-icon');
    featureIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            // Check for both image and font icon elements
            const imageElement = this.querySelector('img');
            const iconElement = this.querySelector('i');
            
            if (imageElement && !this.classList.contains('active')) {
                // For image icons - hover effect
                imageElement.style.transform = 'scale(1.2)';
                imageElement.style.filter = 'brightness(0.8)';
            } else if (iconElement && !this.classList.contains('active')) {
                // For font awesome icons (backward compatibility)
                iconElement.style.transform = 'scale(1.2)';
                iconElement.style.color = '#005999';
            }
        });
        
        icon.addEventListener('mouseleave', function() {
            const imageElement = this.querySelector('img');
            const iconElement = this.querySelector('i');
            
            if (imageElement && !this.classList.contains('active')) {
                // Reset image styles for non-active items
                imageElement.style.transform = 'scale(1)';
                imageElement.style.filter = 'brightness(1)';
            } else if (iconElement && !this.classList.contains('active')) {
                // Reset font icon styles
                iconElement.style.transform = 'scale(1)';
                iconElement.style.color = 'var(--primary-color)';
            }
        });
        
        // Enhanced click handler with size increase
        icon.addEventListener('click', function() {
            // Remove active from all icons
            featureIcons.forEach(btn => {
                btn.classList.remove('active');
                const img = btn.querySelector('img');
                const fontIcon = btn.querySelector('i');
                
                if (img) {
                    // Reset to original size
                    img.style.width = '40px';
                    img.style.height = '40px';
                    img.style.transform = 'scale(1)';
                    img.style.filter = 'none';
                }
                if (fontIcon) {
                    fontIcon.style.transform = 'scale(1)';
                    fontIcon.style.color = 'var(--primary-color)';
                }
            });
            
            // Add active to clicked icon
            this.classList.add('active');
            
            // Apply active styles with size increase
            const activeImg = this.querySelector('img');
            const activeFontIcon = this.querySelector('i');
            
            if (activeImg) {
                // ✅ Increase image size for active state
                activeImg.style.width = '40px';           // Size increase: 24px → 32px
                activeImg.style.height = '40px';          // Size increase: 24px → 32px
                activeImg.style.transform = 'scale(1.3)'; // Additional scale effect
                activeImg.style.filter = 'brightness(0) saturate(100%) invert(100%)'; // White color
                activeImg.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)'; // Smooth animation
            }
            if (activeFontIcon) {
                activeFontIcon.style.color = 'white';
                activeFontIcon.style.transform = 'scale(1.3)';
            }
        });
    });

    // ===== NAVBAR SCROLL EFFECT =====
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.backgroundColor = 'white';
                navbar.style.backdropFilter = 'none';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // ===== LAZY LOADING FOR IMAGES (FIXED) =====
    const images = document.querySelectorAll('img[src]');
    images.forEach(img => {
        // Set initial opacity to 1 to show images immediately
        img.style.opacity = '1';
        img.style.transition = 'opacity 0.3s ease';
        
        // Add error handling for missing images
        img.onerror = function() {
            this.style.opacity = '0.5';
            this.alt = 'Image not found: ' + this.src;
            console.warn('Image failed to load:', this.src);
        };
        
        img.onload = function() {
            this.style.opacity = '1';
        };
    });

    // ===== RESPONSIVE ADJUSTMENTS =====
    function handleResize() {
        const floatingCards = document.querySelectorAll('.floating-card');
        
        if (window.innerWidth <= 768) {
            floatingCards.forEach(card => {
                card.style.display = 'none';
            });
        } else {
            floatingCards.forEach(card => {
                card.style.display = 'block';
            });
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    // ===== ACCESSIBILITY ENHANCEMENTS =====
    
    // Skip to main content
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 9999;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main ID to main element
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.id = 'main';
    }

    // Focus management for better keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // ===== ERROR HANDLING =====
    window.addEventListener('error', function(e) {
        console.warn('Homepage script error:', e.error);
    });

    // ===== PERFORMANCE MONITORING =====
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                    console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                }
            }, 0);
        });
    }

    console.log('Homepage JavaScript initialized successfully');
});