// Department Data
const departmentData = {
    cse: {
        name: "Computer Science & Engineering",
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
        name: "Information Technology",
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
        name: "AI & Data Science / MCA",
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
        name: "Electronics & Communication Engineering",
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
        name: "Electrical & Electronics Engineering",
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
        name: "Mechanical Engineering",
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
        name: "Civil Engineering",
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
        name: "Science & Humanities",
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
        name: "MBA",
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
        name: "Biomedical Engineering",
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
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.page');

// Smooth scroll and active state
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Update active state
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

// Update active nav on scroll
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Department Cards
const deptItems = document.querySelectorAll('.dept-item');
const modal = document.getElementById('deptModal');
const modalOverlay = modal.querySelector('.modal-overlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

deptItems.forEach(item => {
    item.addEventListener('click', () => {
        const deptKey = item.getAttribute('data-dept');
        const dept = departmentData[deptKey];

        if (dept) {
            showDepartmentModal(dept);
        }
    });
});

function showDepartmentModal(dept) {
    let modalContent = `
        <div class="modal-header">
            <div class="dept-icon-large">${dept.icon}</div>
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

// Registration Form
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(registerForm);
    const data = Object.fromEntries(formData);

    // Simple validation
    if (!data.name || !data.college || !data.department || !data.mobile || !data.event) {
        alert('Please fill all required fields!');
        return;
    }

    // Show success message
    alert('Registration submitted successfully! We will contact you soon.');
    registerForm.reset();

    // Scroll to home
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

// Prevent default form submission on file input
const fileInput = registerForm.querySelector('input[type="file"]');
if (fileInput) {
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('Payment screenshot uploaded:', file.name);
        }
    });
}

// Add touch feedback for mobile
const touchElements = document.querySelectorAll('.dept-item, .btn-primary, .btn-submit, .nav-item');

touchElements.forEach(element => {
    element.addEventListener('touchstart', () => {
        element.style.opacity = '0.7';
    });

    element.addEventListener('touchend', () => {
        element.style.opacity = '1';
    });
});

console.log('✅ Vyugam\'26 - Mobile-First Website Loaded Successfully!');
