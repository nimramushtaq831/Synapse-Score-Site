// Newsletter subscription functionality
const subscribeBtn = document.querySelector('.subscribe-btn');
const emailInput = document.querySelector('.email-input');

if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener('click', function () {
        const email = emailInput.value.trim();

        if (email && isValidEmail(email)) {
            // Simulate subscription success
            this.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
            this.style.backgroundColor = '#198754';
            emailInput.value = '';

            setTimeout(() => {
                this.innerHTML = 'Subscribe';
                this.style.backgroundColor = '#007AFF';
            }, 3000);
        } else {
            emailInput.style.borderColor = '#dc3545';
            emailInput.focus();

            setTimeout(() => {
                emailInput.style.borderColor = '#dee2e6';
            }, 3000);
        }
    });

    // Enter key support for newsletter
    emailInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            subscribeBtn.click();
        }
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});