// Function to load HTML content using fetch
function loadHTMLComponent(elementId, fileName) {
    // Determine the correct path based on the current page location
    let basePath = '';
    
    // Check if we're in a subdirectory and adjust the path accordingly
    if (window.location.pathname.includes('/pages/')) {
        basePath = '../../';
    } else if (window.location.pathname.includes('/footer/')) {
        basePath = '../';
    } else if (window.location.pathname.includes('/plateform/')) {
        basePath = '../';
    } else {
        basePath = './';
    }
    
    // Construct the correct file path
    let filePath;
    if (fileName === 'header.html') {
        filePath = basePath + 'navebar/navbar.html';
    } else if (fileName === 'footer.html') {
        filePath = basePath + 'footer/footer.html';
    } else {
        filePath = basePath + 'navebar/' + fileName;
    }
    
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const targetElement = document.getElementById(elementId);
            if (targetElement) {
                // Extract only the relevant content from the HTML
                let content = data;
                
                if (fileName === 'header.html') {
                    // Extract only the header content from navbar.html
                    const headerMatch = data.match(/<header[^>]*>[\s\S]*?<\/header>/i);
                    if (headerMatch) {
                        content = headerMatch[0];
                    }
                } else if (fileName === 'footer.html') {
                    // Extract only the footer content from footer/index.html
                    const footerMatch = data.match(/<footer[^>]*>[\s\S]*?<\/footer>/i);
                    if (footerMatch) {
                        content = footerMatch[0];
                        
                        // Fix image paths in footer content
                        content = fixFooterImagePaths(content, basePath);
                        
                        // Load footer CSS
                        loadFooterCSS(basePath);
                    }
                }
                
                targetElement.innerHTML = content;
                
                // Re-initialize Bootstrap components after loading
                if (elementId === 'header') {
                    initializeHeaderComponents();
                }
            }
        })
        .catch(error => {
            console.error('Error loading ' + fileName + ':', error);
            // Fallback - you can add basic HTML here if files fail to load
            if (elementId === 'header') {
                document.getElementById(elementId).innerHTML = '<nav class="navbar navbar-expand-lg"><div class="container"><a class="navbar-brand" href="/pages/Homepage/index.html">SynapseScope</a></div></nav>';
            } else if (elementId === 'footer') {
                document.getElementById(elementId).innerHTML = '<footer class="main-footer"><div class="container"><p>&copy; 2025 SynapseScope. All Rights Reserved.</p></div></footer>';
            }
        });
}

// Function to fix image paths in footer content
function fixFooterImagePaths(content, basePath) {
    // Create a temporary div to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    
    // Find all img elements and fix their src attributes
    const images = tempDiv.querySelectorAll('img');
    images.forEach(img => {
        const currentSrc = img.getAttribute('src');
        if (currentSrc) {
            let newSrc = currentSrc;
            
            // Handle different path patterns
            if (currentSrc.startsWith('./')) {
                // Replace ./footer-logo.png with basePath + footer/footer-logo.png
                newSrc = currentSrc.replace(/^\.\//, basePath + 'footer/');
            } else if (currentSrc.startsWith('footer/')) {
                // Replace footer/footer-logo.png with basePath + footer/footer-logo.png
                newSrc = basePath + currentSrc;
            } else if (currentSrc.startsWith('/footer/')) {
                // Handle absolute paths from root
                newSrc = basePath + currentSrc.substring(1);
            }
            
            if (newSrc !== currentSrc) {
                img.setAttribute('src', newSrc);
            }
        }
    });
    
    // Also fix any inline styles with background images
    const elementsWithBg = tempDiv.querySelectorAll('[style*="background"]');
    elementsWithBg.forEach(element => {
        const style = element.getAttribute('style');
        if (style && style.includes('url(')) {
            let newStyle = style;
            // Fix background image paths
            newStyle = newStyle.replace(/url\(['"]?\.\//g, `url('${basePath}footer/`);
            newStyle = newStyle.replace(/url\(['"]?footer\//g, `url('${basePath}footer/`);
            if (newStyle !== style) {
                element.setAttribute('style', newStyle);
            }
        }
    });
    
    return tempDiv.innerHTML;
}

// Function to load footer CSS
function loadFooterCSS(basePath) {
    // Check if footer CSS is already loaded
    if (document.querySelector('link[href*="footer.css"]')) {
        return;
    }
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = basePath + 'footer/footer.css';
    link.id = 'footer-css';
    
    // Fix background image paths in CSS after it loads
    link.onload = function() {
        fixCSSBackgroundPaths(basePath);
    };
    
    document.head.appendChild(link);
}

// Function to fix CSS background image paths
function fixCSSBackgroundPaths(basePath) {
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
        const sheet = styleSheets[i];
        if (sheet.href && sheet.href.includes('footer.css')) {
            try {
                const rules = sheet.cssRules || sheet.rules;
                for (let j = 0; j < rules.length; j++) {
                    const rule = rules[j];
                    if (rule.style && rule.style.backgroundImage) {
                        const bgImage = rule.style.backgroundImage;
                        if (bgImage.includes('url(') && (bgImage.includes('./') || bgImage.includes('footer/'))) {
                            const newBgImage = bgImage
                                .replace(/url\(['"]?\.\//g, `url('${basePath}footer/`)
                                .replace(/url\(['"]?footer\//g, `url('${basePath}footer/`);
                            rule.style.backgroundImage = newBgImage;
                        }
                    }
                }
            } catch (e) {
                // CORS might prevent access to external stylesheets
                console.log('Could not modify external stylesheet:', e);
            }
        }
    }
}

// Helper function to safely check if element supports closest method
function getClosestElement(element, selector) {
    // If element is not an Element node, return null
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
        return null;
    }
    
    // Use closest if available, otherwise return null
    return element.closest ? element.closest(selector) : null;
}

// Helper function to safely check if element has classList
function hasClass(element, className) {
    return element && element.classList && element.classList.contains(className);
}

// Function to initialize header-specific JavaScript functionality
function initializeHeaderComponents() {
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

    // Re-initialize Bootstrap dropdowns
    const dropdownElements = document.querySelectorAll('[data-bs-toggle="dropdown"]');
    dropdownElements.forEach(element => {
        if (typeof bootstrap !== 'undefined') {
            new bootstrap.Dropdown(element);
        }
    });

    // Remove existing event listeners to prevent duplicates
    const existingEventListeners = document.querySelectorAll('[data-header-events="true"]');
    existingEventListeners.forEach(el => el.remove());

    // Consolidated event listeners with safety checks
    document.addEventListener('mouseenter', function(e) {
        // Ensure e.target is an element node
        if (!e.target || e.target.nodeType !== Node.ELEMENT_NODE) {
            return;
        }

        // Handle dropdown items
        if (hasClass(e.target, 'dropdown-item') && e.target.hasAttribute('data-description')) {
            const description = e.target.getAttribute('data-description');
            const imageUrl = e.target.getAttribute('data-image');
            const dropdownMenu = getClosestElement(e.target, '.dropdown-menu');
            const dropdownId = dropdownMenu ? dropdownMenu.getAttribute('aria-labelledby') : null;
            
            if (description && imageUrl && dropdownId) {
                updateDescription(dropdownId, description, imageUrl);
            }
            
            // Hide submenus for non-submenu items
            if (!hasClass(e.target, 'dropdown-submenu-toggle')) {
                hideAllSubmenus();
            }
        }
        
        // Handle submenu items
        if (hasClass(e.target, 'submenu-item') && e.target.hasAttribute('data-description')) {
            const description = e.target.getAttribute('data-description');
            const imageUrl = e.target.getAttribute('data-image') || '/navebar/images/Discover-your-communication-Power.png';
            updateDescription('leadershipDropdown', description, imageUrl);
        }
        
        // Handle submenu toggles
        if (hasClass(e.target, 'dropdown-submenu-toggle')) {
            const submenuId = e.target.getAttribute('data-submenu');
            hideAllSubmenus();
            
            const targetSubmenu = document.getElementById(`${submenuId}-submenu`);
            if (targetSubmenu) {
                targetSubmenu.style.display = 'block';
                setTimeout(() => targetSubmenu.classList.add('show'), 10);
            }
        }
        
        // Keep submenu open when hovering over middle column
        if (getClosestElement(e.target, '.dropdown-middle')) {
            const submenu = getClosestElement(e.target, '.dropdown-middle');
            if (submenu) {
                submenu.style.display = 'block';
                submenu.classList.add('show');
            }
        }
        
        // Hover effects for dropdown items
        if (hasClass(e.target, 'dropdown-item')) {
            e.target.style.transform = 'translateX(5px)';
        }
    }, true);

    // Consolidated mouseleave event listeners with safety checks
    document.addEventListener('mouseleave', function(e) {
        // Ensure e.target is an element node
        if (!e.target || e.target.nodeType !== Node.ELEMENT_NODE) {
            return;
        }

        // Reset description when leaving dropdown menu
        if (hasClass(e.target, 'dropdown-menu')) {
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
        if (hasClass(e.target, 'dropdown-submenu-toggle')) {
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
        if (getClosestElement(e.target, '.dropdown-middle')) {
            const submenu = getClosestElement(e.target, '.dropdown-middle');
            setTimeout(() => {
                const correspondingToggle = document.querySelector(`[data-submenu="${submenu.id.replace('-submenu', '')}"]`);
                if (submenu && correspondingToggle && !correspondingToggle.matches(':hover') && !submenu.matches(':hover')) {
                    submenu.classList.remove('show');
                    submenu.style.display = 'none';
                }
            }, 150);
        }
        
        // Reset hover effects
        if (hasClass(e.target, 'dropdown-item')) {
            e.target.style.transform = 'translateX(0)';
        }
    }, true);

    // Click event handlers with safety checks
    document.addEventListener('click', function(e) {
        // Ensure e.target is an element node
        if (!e.target || e.target.nodeType !== Node.ELEMENT_NODE) {
            return;
        }

        // Handle submenu toggle clicks - DIRECT NAVIGATION VERSION
        if (hasClass(e.target, 'dropdown-submenu-toggle') || getClosestElement(e.target, '.dropdown-submenu-toggle')) {
            const toggleElement = hasClass(e.target, 'dropdown-submenu-toggle') ? e.target : getClosestElement(e.target, '.dropdown-submenu-toggle');
            const url = toggleElement.getAttribute('data-url');
            
            // Direct navigation on click
            if (url) {
                console.log('Navigating to:', url);
                window.location.href = url;
                return;
            }
        }
        
        // Handle submenu item clicks
        if (hasClass(e.target, 'submenu-item')) {
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
        if (hasClass(e.target, 'dropdown-item') && !hasClass(e.target, 'dropdown-submenu-toggle')) {
            e.preventDefault();
            e.stopPropagation();
            
            hideAllSubmenus();
            
            const description = e.target.getAttribute('data-description');
            const imageUrl = e.target.getAttribute('data-image');
            const url = e.target.getAttribute('data-url');
            const dropdownMenu = getClosestElement(e.target, '.dropdown-menu');
            const dropdownId = dropdownMenu ? dropdownMenu.getAttribute('aria-labelledby') : null;
            
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
        if (!getClosestElement(e.target, '.dropdown-menu') && !getClosestElement(e.target, '.dropdown-toggle')) {
            hideAllSubmenus();
        }
        
        // Logo click - navigate to homepage
        if (hasClass(e.target, 'navbar-brand') || getClosestElement(e.target, '.navbar-brand')) {
            e.preventDefault();
            console.log('Logo clicked - navigating to homepage');
            window.location.href = '/pages/Homepage/index.html';
        }
    });

    // Initialize positioning
    fixDropdownPosition();
    window.addEventListener('resize', fixDropdownPosition);

    // Bootstrap dropdown event listeners
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('shown.bs.dropdown', fixDropdownPosition);
        toggle.addEventListener('show.bs.dropdown', fixDropdownPosition);
    });

    // Mark that header events are initialized
    document.body.setAttribute('data-header-events', 'true');
}

// Main initialization function
function initializeComponents() {
    // Load header and footer from existing folder structure
    loadHTMLComponent('header', 'header.html');
    loadHTMLComponent('footer', 'footer.html');
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeComponents();
});

// Optional: Reload components function (useful for SPA-like behavior)
function reloadComponents() {
    initializeComponents();
}