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
        nonTechnicalEvents: ["Logo Puzzle"],
        contact: {
            staff: { name: "Dr. S. Rajkumar", mobile: "+91 98765 43210" },
            student: { name: "Arun Kumar", mobile: "+91 87654 32109" }
        }
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
        nonTechnicalEvents: ["Ad-Zap"],
        contact: {
            staff: { name: "Dr. M. Priya", mobile: "+91 98765 43211" },
            student: { name: "Divya Lakshmi", mobile: "+91 87654 32110" }
        }
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
        nonTechnicalEvents: ["AI Memes & Ad Mad"],
        contact: {
            staff: { name: "Dr. K. Venkatesh", mobile: "+91 98765 43212" },
            student: { name: "Karthik Raj", mobile: "+91 87654 32111" }
        }
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
        nonTechnicalEvents: ["Ad-Zap"],
        contact: {
            staff: { name: "Dr. P. Selvam", mobile: "+91 98765 43213" },
            student: { name: "Ramesh Babu", mobile: "+91 87654 32112" }
        }
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
        nonTechnicalEvents: ["Electro Hunt"],
        contact: {
            staff: { name: "Dr. R. Anitha", mobile: "+91 98765 43214" },
            student: { name: "Suresh Kumar", mobile: "+91 87654 32113" }
        }
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
        nonTechnicalEvents: ["Drone Flying"],
        contact: {
            staff: { name: "Dr. N. Balaji", mobile: "+91 98765 43215" },
            student: { name: "Vijay Anand", mobile: "+91 87654 32114" }
        }
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
        nonTechnicalEvents: ["Code Cracking"],
        contact: {
            staff: { name: "Dr. L. Saravanan", mobile: "+91 98765 43216" },
            student: { name: "Manoj Kumar", mobile: "+91 87654 32115" }
        }
    },
    sh: {
        name: "Science & Humanities",
        icon: "📚",
        paperTopics: [
            "Language, Technology and Transformation:The Role of English in Modern India",
            "Real World Applications in Engineering",
            "The Physics of Semiconductors",
            "Sustainable Materials in Emerging Technology"
        ],
        technicalEvents: ["Quiz"],
        nonTechnicalEvents: ["Just a Minute", "Short Film"],
        contact: {
            staff: { name: "Dr. T. Lakshmi", mobile: "+91 98765 43217" },
            student: { name: "Preethi Sharma", mobile: "+91 87654 32116" }
        }
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
        technicalEvents: ["Business Quiz", "Best Manager"],
        contact: {
            staff: { name: "Dr. A. Ganesh", mobile: "+91 98765 43218" },
            student: { name: "Sneha Reddy", mobile: "+91 87654 32117" }
        }
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
        nonTechnicalEvents: ["AdZap"],
        contact: {
            staff: { name: "Dr. V. Ramya", mobile: "+91 98765 43219" },
            student: { name: "Harini Prasad", mobile: "+91 87654 32118" }
        }
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

// Register Now Button - Smooth Navigation
const registerBtn = document.getElementById('registerBtn');
if (registerBtn) {
    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const registerSection = document.getElementById('register');
        if (registerSection) {
            registerSection.scrollIntoView({ behavior: 'smooth' });

            // Update active nav state
            navItems.forEach(nav => nav.classList.remove('active'));
            const registerNavItem = document.querySelector('.nav-item[href="#register"]');
            if (registerNavItem) {
                registerNavItem.classList.add('active');
            }
        }
    });
}

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

    // Department Contact
    if (dept.contact) {
        modalContent += `
            <div class="dept-contact-section">
                <h3 class="contact-section-title">📞 Department Contact</h3>
                <div class="contact-grid">
                    <div class="contact-card">
                        <h4 class="contact-role">Staff Co-Ordinator</h4>
                        <p class="contact-name">${dept.contact.staff.name}</p>
                        <p class="contact-mobile">${dept.contact.staff.mobile}</p>
                    </div>
                    <div class="contact-card">
                        <h4 class="contact-role">Student Co-Ordinator</h4>
                        <p class="contact-name">${dept.contact.student.name}</p>
                        <p class="contact-mobile">${dept.contact.student.mobile}</p>
                    </div>
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

// Registration Form - Dynamic Paper Topic Selection
const registerForm = document.getElementById('registerForm');
const departmentSelect = registerForm.querySelector('select[name="department"]');
const eventSelect = registerForm.querySelector('select[name="event"]');
const paperTopicField = document.getElementById('paperTopicField');
const paperTopicSelect = document.getElementById('paperTopicSelect');

// Show/hide paper topic field based on event selection
eventSelect.addEventListener('change', () => {
    if (eventSelect.value === 'paper') {
        paperTopicField.style.display = 'block';
        paperTopicSelect.required = true;
        updatePaperTopics();
    } else {
        paperTopicField.style.display = 'none';
        paperTopicSelect.required = false;
        paperTopicSelect.value = '';
    }
});

// Update paper topics when department changes
departmentSelect.addEventListener('change', () => {
    if (eventSelect.value === 'paper') {
        updatePaperTopics();
    }
});

// Function to update paper topics based on selected department
function updatePaperTopics() {
    const selectedDept = departmentSelect.value;
    paperTopicSelect.innerHTML = '<option value="">Select Topic</option>';

    if (selectedDept && departmentData[selectedDept] && departmentData[selectedDept].paperTopics) {
        departmentData[selectedDept].paperTopics.forEach(topic => {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = topic;
            paperTopicSelect.appendChild(option);
        });
    }
}

// Form submission with confirmation
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(registerForm);
    const data = Object.fromEntries(formData);

    // Validation
    if (!data.name || !data.college || !data.department || !data.mobile || !data.event || !data.email) {
        alert('Please fill all required fields!');
        return;
    }

    // Validate paper topic if paper presentation is selected
    if (data.event === 'paper' && !data.paper_topic) {
        alert('Please select a paper presentation topic!');
        return;
    }

    // Get event name for confirmation
    const eventNames = {
        'paper': 'Paper Presentation',
        'technical': 'Technical Event',
        'non-technical': 'Non-Technical Event',
        'project': 'Project Expo'
    };
    const selectedEventName = eventNames[data.event] || data.event;
    const paperTopicText = data.paper_topic ? ` (Topic: ${data.paper_topic})` : '';

    // Simulate sending confirmation Email and SMS
    const confirmationMessage = `You are selected to participate in ${selectedEventName}${paperTopicText} at Vyugam'26 – AVS Engineering College.

Event Details:
Name: ${data.name}
Department: ${data.department.toUpperCase()}
Event: ${selectedEventName}${paperTopicText}
Event Date: 6 March 2026
College: ${data.college}

We will send confirmation to:
Email: ${data.email}
Mobile: ${data.mobile}

Thank you for registering!`;

    // Show confirmation
    alert(confirmationMessage);

    // Log for demonstration (in production, this would send actual email/SMS)
    console.log('📧 Email Confirmation Sent to:', data.email);
    console.log('📱 SMS Confirmation Sent to:', data.mobile);
    console.log('Registration Data:', data);

    // Reset form
    registerForm.reset();
    paperTopicField.style.display = 'none';
    paperTopicSelect.required = false;

    // Scroll to home
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

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
