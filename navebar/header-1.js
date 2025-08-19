// Default descriptions for each dropdown
const defaultDescriptions = {
    'leadershipDropdown': {
        desc: 'Assess leadership potential using psychometric insights that help uncover how individuals think, lead, and make decisions.',
        image: '/navebar/images/Discover-your-communication-Power.png'
    },
    'organizationDropdown': {
        desc: 'Uncover what\'s holding your team back—misalignment, unclear roles, or collaboration gaps—and learn how to fix it.',
        image: '/navebar/images/Is-your-Team-Struggling-to-Deliver-Results.png'
    },
    'skillsDropdown': {
        desc: 'Visualize how roles connect and evolve; unlock hidden internal mobility across your teams.',
        image: '/navebar/images/Role-Mobility-Advisor.png'
    },
    'scienceDropdown': {
        desc: 'Built on decades of psychology and data—see what makes our leadership model predictive and practical.',
        image: '/navebar/images/Science-of-Leadership.png'
    },
    'resourcesDropdown': {
        desc: 'Access comprehensive resources, guides, and support materials to maximize the value of our solutions.',
        image: '/navebar/images/Terms-and-Conditions.png'
    }
};

// Function to update description and image
function updateDescription(dropdownId, description, imageUrl) {
    const descElement = document.getElementById(dropdownId.replace('Dropdown', '-desc'));
    const imageElement = document.getElementById(dropdownId.replace('Dropdown', '-image'));
    
    if (descElement && imageElement && descElement.textContent !== description) {
        descElement.style.opacity = '0.6';
        imageElement.style.opacity = '0.6';
        
        setTimeout(() => {
            descElement.textContent = description;
            imageElement.src = imageUrl;
            descElement.style.opacity = '1';
            imageElement.style.opacity = '1';
            imageElement.style.transform = 'scale(1.02)';
        }, 200);
    }
}

// Function to reset to default description
function resetDescription(dropdownId) {
    const defaultData = defaultDescriptions[dropdownId];
    if (defaultData) {
        const descElement = document.getElementById(dropdownId.replace('Dropdown', '-desc'));
        const imageElement = document.getElementById(dropdownId.replace('Dropdown', '-image'));
        
        if (descElement && imageElement && descElement.textContent !== defaultData.desc) {
            descElement.style.opacity = '0.6';
            imageElement.style.opacity = '0.6';
            
            setTimeout(() => {
                descElement.textContent = defaultData.desc;
                imageElement.src = defaultData.image;
                descElement.style.opacity = '1';
                imageElement.style.opacity = '1';
                imageElement.style.transform = 'scale(1)';
            }, 200);
        }
    }
}

// Function to hide all submenus
function hideAllSubmenus() {
    document.querySelectorAll('.dropdown-middle').forEach(menu => {
        menu.classList.remove('show');
        menu.style.display = 'none';
    });
    document.querySelectorAll('.dropdown-submenu-toggle').forEach(toggle => {
        toggle.classList.remove('expanded');
    });
}

// Function to fix dropdown positioning
function fixDropdownPosition() {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 80;
    
    document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
        dropdown.style.top = navbarHeight + 'px';
        dropdown.style.left = '50%';
        dropdown.style.transform = 'translateX(-50%)';
        dropdown.style.position = 'fixed';
        dropdown.style.width = 'auto';
        dropdown.style.maxWidth = '1400px';
        dropdown.style.minWidth = 'auto';

    });
}

// Consolidated event listeners
document.addEventListener('mouseenter', function(e) {
    // Handle dropdown items
    if (e.target && e.target.classList && e.target.classList.contains('dropdown-item') && e.target.hasAttribute('data-description')) {
        const description = e.target.getAttribute('data-description');
        const imageUrl = e.target.getAttribute('data-image');
        const dropdownMenu = e.target.closest('.dropdown-menu');
        const dropdownId = dropdownMenu ? dropdownMenu.getAttribute('aria-labelledby') : null;
        
        if (description && imageUrl && dropdownId) {
            updateDescription(dropdownId, description, imageUrl);
        }
        
        // Hide submenus for non-submenu items
        if (!e.target.classList.contains('dropdown-submenu-toggle')) {
            hideAllSubmenus();
        }
    }
    
    // Handle submenu items
    if (e.target && e.target.classList && e.target.classList.contains('submenu-item') && e.target.hasAttribute('data-description')) {
        const description = e.target.getAttribute('data-description');
        const imageUrl = e.target.getAttribute('data-image') || '/navebar/images/Discover-your-communication-Power.png';
        updateDescription('leadershipDropdown', description, imageUrl);
    }
    
    // Handle submenu toggles
    if (e.target && e.target.classList && e.target.classList.contains('dropdown-submenu-toggle')) {
        const submenuId = e.target.getAttribute('data-submenu');
        hideAllSubmenus();
        
        const targetSubmenu = document.getElementById(`${submenuId}-submenu`);
        if (targetSubmenu) {
            targetSubmenu.style.display = 'block';
            setTimeout(() => targetSubmenu.classList.add('show'), 10);
        }
    }
    
    // Keep submenu open when hovering over middle column
    if (e.target && e.target.closest('.dropdown-middle')) {
        const submenu = e.target.closest('.dropdown-middle');
        if (submenu) {
            submenu.style.display = 'block';
            submenu.classList.add('show');
        }
    }
    
    // Hover effects for dropdown items
    if (e.target && e.target.classList && e.target.classList.contains('dropdown-item')) {
        e.target.style.transform = 'translateX(5px)';
    }
}, true);

// Consolidated mouseleave event listeners
document.addEventListener('mouseleave', function(e) {
    // Reset description when leaving dropdown menu
    if (e.target && e.target.classList && e.target.classList.contains('dropdown-menu')) {
        const dropdownId = e.target.getAttribute('aria-labelledby');
        if (dropdownId) {
            setTimeout(() => resetDescription(dropdownId), 100);
        }
        
        // Hide all submenus when leaving leadership dropdown
        if (dropdownId === 'leadershipDropdown') {
            hideAllSubmenus();
        }
    }
    
    // Hide submenus when leaving submenu toggle
    if (e.target && e.target.classList && e.target.classList.contains('dropdown-submenu-toggle')) {
        const submenuId = e.target.getAttribute('data-submenu');
        setTimeout(() => {
            const submenu = document.getElementById(`${submenuId}-submenu`);
            if (submenu && !submenu.matches(':hover') && !e.target.matches(':hover')) {
                submenu.classList.remove('show');
                submenu.style.display = 'none';
            }
        }, 150);
    }
    
    // Hide submenu when leaving middle column
    if (e.target && e.target.closest('.dropdown-middle')) {
        const submenu = e.target.closest('.dropdown-middle');
        setTimeout(() => {
            const correspondingToggle = document.querySelector(`[data-submenu="${submenu.id.replace('-submenu', '')}"]`);
            if (submenu && correspondingToggle && !correspondingToggle.matches(':hover') && !submenu.matches(':hover')) {
                submenu.classList.remove('show');
                submenu.style.display = 'none';
            }
        }, 150);
    }
    
    // Reset hover effects
    if (e.target && e.target.classList && e.target.classList.contains('dropdown-item')) {
        e.target.style.transform = 'translateX(0)';
    }
}, true);

// Click event handlers
document.addEventListener('click', function(e) {
    // Handle submenu toggle clicks
    if (e.target.classList.contains('dropdown-submenu-toggle') || e.target.closest('.dropdown-submenu-toggle')) {
        e.preventDefault();
        e.stopPropagation();
        
        const toggleElement = e.target.classList.contains('dropdown-submenu-toggle') ? e.target : e.target.closest('.dropdown-submenu-toggle');
        const submenuId = toggleElement.getAttribute('data-submenu');
        const targetSubmenu = document.getElementById(`${submenuId}-submenu`);
        
        if (targetSubmenu) {
            const isCurrentlyShown = targetSubmenu.classList.contains('show');
            hideAllSubmenus();
            
            if (!isCurrentlyShown) {
                targetSubmenu.style.display = 'block';
                setTimeout(() => targetSubmenu.classList.add('show'), 10);
                toggleElement.classList.add('expanded');
            }
        }
    }
    
    // Handle submenu item clicks
    if (e.target.classList.contains('submenu-item')) {
        e.preventDefault();
        e.stopPropagation();
        
        const description = e.target.getAttribute('data-description');
        const imageUrl = e.target.getAttribute('data-image') || '/navebar/images/Discover-your-communication-Power.png';
        const url = e.target.getAttribute('data-url');
        
        if (description && imageUrl) {
            updateDescription('leadershipDropdown', description, imageUrl);
        }
        
        // Navigate to the page if URL is provided
        if (url) {
            console.log('Navigating to:', url);
            window.location.href = url;
        } else {
            console.log('Submenu item clicked:', e.target.textContent);
        }
    }
    
    // Handle dropdown item clicks
    if (e.target.classList.contains('dropdown-item') && !e.target.classList.contains('dropdown-submenu-toggle')) {
        e.preventDefault();
        e.stopPropagation();
        
        hideAllSubmenus();
        
        const description = e.target.getAttribute('data-description');
        const imageUrl = e.target.getAttribute('data-image');
        const url = e.target.getAttribute('data-url');
        const dropdownMenu = e.target.closest('.dropdown-menu');
        const dropdownId = dropdownMenu.getAttribute('aria-labelledby');
        
        if (description && imageUrl && dropdownId) {
            updateDescription(dropdownId, description, imageUrl);
        }
        
        // Navigate to the page if URL is provided
        if (url) {
            console.log('Navigating to:', url);
            window.location.href = url;
        } else {
            console.log('Dropdown item clicked:', e.target.textContent);
        }
    }
    
    // Close submenus when clicking outside
    if (!e.target.closest('.dropdown-menu') && !e.target.closest('.dropdown-toggle')) {
        hideAllSubmenus();
    }
    
    // Logo click - navigate to homepage
    if (e.target.classList.contains('navbar-brand')) {
        e.preventDefault();
        console.log('Logo clicked - navigating to homepage');
        window.location.href = '../pages/Homepage/index.html';
    }
});

// Initialize positioning
document.addEventListener('DOMContentLoaded', fixDropdownPosition);
window.addEventListener('resize', fixDropdownPosition);

// Bootstrap dropdown event listeners
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('shown.bs.dropdown', fixDropdownPosition);
    toggle.addEventListener('show.bs.dropdown', fixDropdownPosition);
});