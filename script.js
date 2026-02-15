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

// Register Now Button - Smooth Navigation to Departments
const registerBtn = document.getElementById('registerBtn');
if (registerBtn) {
    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const departmentsSection = document.getElementById('departments');
        if (departmentsSection) {
            departmentsSection.scrollIntoView({ behavior: 'smooth' });

            // Update active nav state
            navItems.forEach(nav => nav.classList.remove('active'));
            const deptNavItem = document.querySelector('.nav-item[href="#departments"]');
            if (deptNavItem) {
                deptNavItem.classList.add('active');
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
            showDepartmentModal(dept, deptKey);
        }
    });
});

function showDepartmentModal(dept, deptKey) {
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

    // Registration Section
    modalContent += `
        <div class="dept-register-section">
            <h3 class="register-section-title">📝 Register for ${dept.name}</h3>
            
            <!-- Important Dates -->
            <div class="dates-strip">
                <span>Last Date: <strong>25 Feb</strong></span>
                <span>Event: <strong>6 Mar</strong></span>
                <span>Fee: <strong>₹200</strong></span>
            </div>

            <form class="register-form dept-register-form" data-dept="${deptKey}">
                <!-- Row 1: Name & Email -->
                <div class="form-row">
                    <div class="form-field">
                        <label>Full Name</label>
                        <input type="text" name="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="your@email.com" required>
                    </div>
                </div>

                <!-- Row 2: Mobile & College -->
                <div class="form-row">
                    <div class="form-field">
                        <label>Mobile</label>
                        <input type="tel" name="mobile" placeholder="10-digit number" pattern="[0-9]{10}" required>
                    </div>
                    <div class="form-field">
                        <label>College</label>
                        <input type="text" name="college" placeholder="College Name" required>
                    </div>
                </div>

                <!-- Row 3: Year & Event Type -->
                <div class="form-row">
                    <div class="form-field">
                        <label>Year</label>
                        <select name="year" required>
                            <option value="">Select Year</option>
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                        </select>
                    </div>
                    <div class="form-field">
                        <label>Event Type</label>
                        <select name="event" class="event-select" required>
                            <option value="">Select Event</option>
                            ${dept.paperTopics && dept.paperTopics.length > 0 ? '<option value="paper">Paper Presentation</option>' : ''}
                            ${dept.technicalEvents && dept.technicalEvents.length > 0 ? '<option value="technical">Technical Event</option>' : ''}
                            ${dept.nonTechnicalEvents && dept.nonTechnicalEvents.length > 0 ? '<option value="non-technical">Non-Technical Event</option>' : ''}
                            ${dept.projectExpo && dept.projectExpo.length > 0 ? '<option value="project">Project Expo</option>' : ''}
                        </select>
                    </div>
                </div>

                <!-- Paper Topic Field (Dynamic) -->
                <div class="form-field paper-topic-field" style="display: none;">
                    <label>Paper Topic</label>
                    <select name="paper_topic" class="paper-topic-select">
                        <option value="">Select Topic</option>
                        ${dept.paperTopics ? dept.paperTopics.map(topic => `<option value="${topic}">${topic}</option>`).join('') : ''}
                    </select>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="btn-submit">👉 Proceed to Pay</button>
            </form>

            <!-- Payment QR Code -->
            <div class="payment-qr">
                <p class="qr-title">Scan to Pay ₹200</p>
                <div class="qr-code-small">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="200" height="200" fill="#fff" />
                        <rect x="20" y="20" width="50" height="50" fill="#000" />
                        <rect x="130" y="20" width="50" height="50" fill="#000" />
                        <rect x="20" y="130" width="50" height="50" fill="#000" />
                        <rect x="30" y="30" width="30" height="30" fill="#fff" />
                        <rect x="140" y="30" width="30" height="30" fill="#fff" />
                        <rect x="30" y="140" width="30" height="30" fill="#fff" />
                        <rect x="40" y="40" width="10" height="10" fill="#000" />
                        <rect x="150" y="40" width="10" height="10" fill="#000" />
                        <rect x="40" y="150" width="10" height="10" fill="#000" />
                        <rect x="80" y="20" width="10" height="10" fill="#000" />
                        <rect x="100" y="30" width="10" height="10" fill="#000" />
                        <rect x="20" y="80" width="10" height="10" fill="#000" />
                        <rect x="60" y="80" width="10" height="10" fill="#000" />
                        <rect x="130" y="80" width="10" height="10" fill="#000" />
                        <rect x="170" y="80" width="10" height="10" fill="#000" />
                        <rect x="80" y="130" width="10" height="10" fill="#000" />
                        <rect x="100" y="150" width="10" height="10" fill="#000" />
                    </svg>
                </div>
                <p class="upi-id">UPI: symposium@avs</p>
            </div>
        </div>
    `;

    modalBody.innerHTML = modalContent;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Setup form event listeners for this department
    setupDepartmentFormListeners(deptKey);
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

// Setup form listeners for department-specific registration
function setupDepartmentFormListeners(deptKey) {
    const form = document.querySelector('.dept-register-form');
    const eventSelect = form.querySelector('.event-select');
    const paperTopicField = form.querySelector('.paper-topic-field');
    const paperTopicSelect = form.querySelector('.paper-topic-select');

    // Show/hide paper topic field based on event selection
    eventSelect.addEventListener('change', () => {
        if (eventSelect.value === 'paper') {
            paperTopicField.style.display = 'block';
            paperTopicSelect.required = true;
        } else {
            paperTopicField.style.display = 'none';
            paperTopicSelect.required = false;
            paperTopicSelect.value = '';
        }
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        data.department = deptKey;

        // Validation
        if (!data.name || !data.email || !data.mobile || !data.college || !data.year || !data.event) {
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
        const deptName = departmentData[deptKey].name;

        // Simulate sending confirmation Email and SMS
        const confirmationMessage = `✅ Registration Successful!

You are registered for ${selectedEventName}${paperTopicText}
Department: ${deptName}
Event Date: 6 March 2026

Confirmation will be sent to:
📧 Email: ${data.email}
📱 Mobile: ${data.mobile}

Please complete payment of ₹200 using the QR code above.

Thank you for registering for Vyugam'26!`;

        // Show confirmation
        alert(confirmationMessage);

        // Log for demonstration
        console.log('📧 Email Confirmation Sent to:', data.email);
        console.log('📱 SMS Confirmation Sent to:', data.mobile);
        console.log('Registration Data:', data);

        // Reset form
        form.reset();
        paperTopicField.style.display = 'none';
        paperTopicSelect.required = false;

        // Close modal and scroll to home
        closeModal();
        setTimeout(() => {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }, 300);
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
