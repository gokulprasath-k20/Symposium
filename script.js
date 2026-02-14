// Department Data
const departmentData = {
    cse: {
        name: "Department of Computer Science & Engineering",
        icon: "💻",
        paperTopics: [
            "Serverless Computing",
            "Generative AI: Beyond ChatGPT",
            "Brain-Computer Interface",
            "DevSecOps: Security in DevOps"
        ],
        technicalEvents: ["Blind Coding"],
        nonTechnicalEvents: ["Logo Puzzle"]
    },
    it: {
        name: "Department of Information Technology",
        icon: "🌐",
        paperTopics: [
            "AI & ML Application",
            "Quantum Computing – Future of IT",
            "Chatbots and Virtual Assistants",
            "Digital Twins Technology"
        ],
        technicalEvents: ["Appathon (App Development)"],
        nonTechnicalEvents: ["Ad-Zap"]
    },
    aids: {
        name: "Department of AI & Data Science / MCA",
        icon: "🤖",
        paperTopics: [
            "Agentic AI",
            "Multimodal AI",
            "Edge AI",
            "Auto ML"
        ],
        technicalEvents: ["Vibe Coding"],
        nonTechnicalEvents: ["AI Memes & Ad Mad"]
    },
    ece: {
        name: "Department of Electronics & Communication Engineering",
        icon: "📡",
        paperTopics: [
            "6G Technology",
            "AI in Communication",
            "2nm Semiconductor Technology",
            "IoT Based Smart Cities & Agriculture"
        ],
        projectExpo: ["ElectroXhibit"],
        technicalEvents: ["Quizathon"],
        nonTechnicalEvents: ["Ad-Zap"]
    },
    eee: {
        name: "Department of Electrical & Electronics Engineering",
        icon: "⚡",
        paperTopics: [
            "Electrical Vehicles (EVs)",
            "AI in Power Systems",
            "Renewable Energy Integration",
            "Smart Grid"
        ],
        projectExpo: ["Spark Expo"],
        technicalEvents: ["Project Expo"],
        nonTechnicalEvents: ["Electro Hunt"]
    },
    mech: {
        name: "Department of Mechanical Engineering",
        icon: "⚙️",
        paperTopics: [
            "Green Energy",
            "AI in Manufacturing",
            "3D Printing Technology",
            "CAD/CAM",
            "Production Engineering",
            "Thermal Engineering",
            "Robotics"
        ],
        nonTechnicalEvents: ["Drone Flying"]
    },
    civil: {
        name: "Department of Civil Engineering",
        icon: "🏗️",
        paperTopics: [
            "Green Building Design",
            "Renewable Energy Integration",
            "Smart Cities Infrastructure",
            "Sustainable Urban Transportation"
        ],
        technicalEvents: ["Quiz"],
        nonTechnicalEvents: ["Code Cracking"]
    },
    sh: {
        name: "Department of Science & Humanities",
        icon: "📚",
        paperTopics: [
            "Language, Technology and Transformation",
            "The Role of English in Modern India",
            "Real World Applications in Engineering",
            "The Physics of Semiconductors",
            "Sustainable Materials in Emerging Technology"
        ],
        technicalEvents: ["Quiz"],
        nonTechnicalEvents: ["Just a Minute", "Short Film"]
    },
    mba: {
        name: "Department of MBA",
        icon: "💼",
        paperTopics: [
            "AI in Business",
            "Digital Marketing",
            "FinTech",
            "HR Analytics",
            "ESG (Environmental, Social, and Governance)"
        ],
        technicalEvents: ["Business Quiz", "Best Manager"]
    },
    bme: {
        name: "Department of Biomedical Engineering",
        icon: "🧬",
        paperTopics: [
            "Advanced Image / Signal Processing",
            "Brain and Neural Engineering",
            "Medical Devices and IoT",
            "Robotics and Rehabilitation",
            "Bioinformatics and Genomics",
            "Emerging and Future Technology in BME"
        ],
        technicalEvents: ["Project Expo", "Bio Quiz"],
        nonTechnicalEvents: ["AdZap"]
    }
};

// Navigation
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navIcons = document.getElementById('navIcons');
const navIconElements = document.querySelectorAll('.nav-icon');

// Hamburger menu toggle (if needed for very small screens)
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navIcons.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
navIconElements.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) {
            hamburger.classList.remove('active');
            navIcons.classList.remove('active');
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navIconElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Department Cards Click Handler
const deptCards = document.querySelectorAll('.dept-card-mobile');
const modal = document.getElementById('deptModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

deptCards.forEach(card => {
    card.addEventListener('click', () => {
        const deptKey = card.getAttribute('data-dept');
        const dept = departmentData[deptKey];

        if (dept) {
            showDepartmentModal(dept);
        }
    });
});

function showDepartmentModal(dept) {
    let modalContent = `
        <div class="modal-header">
            <div style="font-size: 4rem; margin-bottom: 20px;">${dept.icon}</div>
            <h2>${dept.name}</h2>
        </div>
    `;

    // Paper Presentation Topics
    if (dept.paperTopics && dept.paperTopics.length > 0) {
        modalContent += `
            <div class="event-section">
                <h3>📄 Paper Presentation Topics</h3>
                <ul class="topic-list">
                    ${dept.paperTopics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Project Expo
    if (dept.projectExpo && dept.projectExpo.length > 0) {
        modalContent += `
            <div class="event-section">
                <h3>🔬 Project Expo</h3>
                <div>
                    ${dept.projectExpo.map(event => `<span class="event-badge">${event}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // Technical Events
    if (dept.technicalEvents && dept.technicalEvents.length > 0) {
        modalContent += `
            <div class="event-section">
                <h3>💡 Technical Events</h3>
                <div>
                    ${dept.technicalEvents.map(event => `<span class="event-badge">${event}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // Non-Technical Events
    if (dept.nonTechnicalEvents && dept.nonTechnicalEvents.length > 0) {
        modalContent += `
            <div class="event-section">
                <h3>🎯 Non-Technical Events</h3>
                <div>
                    ${dept.nonTechnicalEvents.map(event => `<span class="event-badge non-tech">${event}</span>`).join('')}
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = modalContent;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple form validation and submission
    const formData = new FormData(contactForm);

    // Show success message (you can replace this with actual form submission)
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe department cards (simplified for mobile)
deptCards.forEach(card => {
    observer.observe(card);
});

// Parallax effect for hero orbs (disabled on mobile for performance)
if (window.innerWidth > 768) {
    window.addEventListener('mousemove', (e) => {
        const orbs = document.querySelectorAll('.gradient-orb');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Simplified loading (no animation for performance)
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Counter animation for numbers
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Trigger counter animation when registration section is visible
const registrationSection = document.querySelector('.registration');
let counterAnimated = false;

const registrationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counterAnimated) {
            counterAnimated = true;
            // You can add counter animations here if needed
        }
    });
}, { threshold: 0.3 });

if (registrationSection) {
    registrationObserver.observe(registrationSection);
}

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('🎉 Vyugam\'26 Website Loaded Successfully!');
