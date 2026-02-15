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
                <span>Base Fee: <strong>₹200/member</strong></span>
            </div>

            <form class="register-form dept-register-form" data-dept="${deptKey}">
                <!-- Row 1: Team Leader Name & Email -->
                <div class="form-row">
                    <div class="form-field">
                        <label class="name-label">Full Name (Participant)</label>
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

                <!-- Row 3: Year -->
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
                </div>

                <!-- Team Size Field (Hidden by default, shown for Paper/Project) -->
                <div class="form-field team-size-field" style="display: none;">
                    <label>Team Size</label>
                    <select name="team_size" class="team-size-select">
                        <option value="">Select Size</option>
                        <option value="1">1 Member</option>
                        <option value="2">2 Members</option>
                        <option value="3">3 Members</option>
                        <option value="4">4 Members</option>
                    </select>
                </div>

                <!-- Team Members Section (Dynamic) -->
                <div class="team-members-section" style="display: none;">
                    <h4 class="team-members-title">👥 Team Members</h4>
                    <div class="team-members-container"></div>
                </div>

                <!-- Event Type Field -->
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

                <!-- Paper Topic Field (Dynamic) -->
                <div class="form-field paper-topic-field" style="display: none;">
                    <label>Paper Topic</label>
                    <select name="paper_topic" class="paper-topic-select">
                        <option value="">Select Topic</option>
                        ${dept.paperTopics ? dept.paperTopics.map(topic => `<option value="${topic}">${topic}</option>`).join('') : ''}
                    </select>
                </div>

                <!-- Payment Amount Display -->
                <div class="payment-amount-display">
                    <span class="payment-label">Registration Fee:</span>
                    <span class="payment-amount">₹<span class="amount-value">200</span></span>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="btn-submit">👉 Proceed to Pay ₹<span class="btn-amount">200</span></button>
            </form>
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
    const teamSizeField = form.querySelector('.team-size-field');
    const teamSizeSelect = form.querySelector('.team-size-select');
    const teamMembersSection = form.querySelector('.team-members-section');
    const teamMembersContainer = form.querySelector('.team-members-container');
    const amountValue = form.querySelector('.amount-value');
    const btnAmount = form.querySelector('.btn-amount');
    const nameLabel = form.querySelector('.name-label');

    // Handle event type change
    eventSelect.addEventListener('change', () => {
        const eventType = eventSelect.value;

        // Show/hide paper topic field
        if (eventType === 'paper') {
            paperTopicField.style.display = 'block';
            paperTopicSelect.required = true;
        } else {
            paperTopicField.style.display = 'none';
            paperTopicSelect.required = false;
            paperTopicSelect.value = '';
        }

        // Show/hide team size field based on event type
        // Team registration only for Paper Presentation and Project Expo
        if (eventType === 'paper' || eventType === 'project') {
            teamSizeField.style.display = 'block';
            teamSizeSelect.required = true;
            nameLabel.textContent = 'Full Name (Team Leader)';
        } else {
            // Individual registration for Technical and Non-Technical
            teamSizeField.style.display = 'none';
            teamSizeSelect.required = false;
            teamSizeSelect.value = '';
            teamMembersSection.style.display = 'none';
            teamMembersContainer.innerHTML = '';
            nameLabel.textContent = 'Full Name (Participant)';

            // Reset to individual payment
            amountValue.textContent = '200';
            btnAmount.textContent = '200';
        }
    });

    // Handle team size change
    teamSizeSelect.addEventListener('change', () => {
        const teamSize = parseInt(teamSizeSelect.value);

        if (teamSize && teamSize > 0) {
            // Calculate payment
            const totalAmount = teamSize * 200;
            amountValue.textContent = totalAmount;
            btnAmount.textContent = totalAmount;

            // Show/hide team members section
            if (teamSize > 1) {
                teamMembersSection.style.display = 'block';
                generateTeamMemberFields(teamSize, teamMembersContainer);
            } else {
                teamMembersSection.style.display = 'none';
                teamMembersContainer.innerHTML = '';
            }
        } else {
            // Reset to default
            amountValue.textContent = '200';
            btnAmount.textContent = '200';
            teamMembersSection.style.display = 'none';
            teamMembersContainer.innerHTML = '';
        }
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        data.department = deptKey;

        const eventType = data.event;

        // Determine if this is a team event
        const isTeamEvent = (eventType === 'paper' || eventType === 'project');

        let teamSize = 1;
        let teamMembers = [data.name];

        if (isTeamEvent) {
            // Team registration logic
            if (!data.team_size) {
                alert('Please select team size!');
                return;
            }

            teamSize = parseInt(data.team_size);

            // Collect team member names
            if (teamSize > 1) {
                for (let i = 2; i <= teamSize; i++) {
                    const memberName = data[`team_member_${i}`];
                    if (!memberName || memberName.trim() === '') {
                        alert(`Please enter name for Team Member ${i}!`);
                        return;
                    }
                    teamMembers.push(memberName.trim());
                }
            }

            // Check for duplicate names
            const uniqueNames = new Set(teamMembers.map(name => name.toLowerCase()));
            if (uniqueNames.size !== teamMembers.length) {
                alert('Team member names must be unique! Please check for duplicates.');
                return;
            }
        }

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

        // Calculate total amount
        const totalAmount = teamSize * 200;

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

        // Build team members list for confirmation (only for team events)
        let teamInfo = '';
        if (isTeamEvent) {
            teamInfo = `\nTeam Size: ${teamSize} ${teamSize === 1 ? 'Member' : 'Members'}`;
            if (teamSize === 1) {
                teamInfo += `\nParticipant: ${teamMembers[0]}`;
            } else {
                teamInfo += `\nTeam Leader: ${teamMembers[0]}`;
                for (let i = 1; i < teamMembers.length; i++) {
                    teamInfo += `\nMember ${i + 1}: ${teamMembers[i]}`;
                }
            }
        } else {
            teamInfo = `\nParticipant: ${data.name}`;
        }

        // Simulate sending confirmation Email and SMS
        const confirmationMessage = `✅ Registration Successful!

You are registered for ${selectedEventName}${paperTopicText}
Department: ${deptName}
Event Date: 6 March 2026
${teamInfo}

Total Registration Fee: ₹${totalAmount}

Confirmation will be sent to:
📧 Email: ${data.email}
📱 Mobile: ${data.mobile}

Please complete payment of ₹${totalAmount}.

Thank you for registering for Vyugam'26!`;

        // Show confirmation
        alert(confirmationMessage);

        // Log for demonstration
        console.log('📧 Email Confirmation Sent to:', data.email);
        console.log('📱 SMS Confirmation Sent to:', data.mobile);
        console.log('Registration Data:', {
            ...data,
            isTeamEvent: isTeamEvent,
            teamMembers: teamMembers,
            totalAmount: totalAmount
        });

        // Reset form
        form.reset();
        paperTopicField.style.display = 'none';
        paperTopicSelect.required = false;
        teamSizeField.style.display = 'none';
        teamSizeSelect.required = false;
        teamMembersSection.style.display = 'none';
        teamMembersContainer.innerHTML = '';
        amountValue.textContent = '200';
        btnAmount.textContent = '200';
        nameLabel.textContent = 'Full Name (Participant)';

        // Close modal and scroll to home
        closeModal();
        setTimeout(() => {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });
}

// Generate team member input fields dynamically
function generateTeamMemberFields(teamSize, container) {
    container.innerHTML = '';

    // Generate fields for members 2 to teamSize (member 1 is the leader)
    for (let i = 2; i <= teamSize; i++) {
        const memberField = document.createElement('div');
        memberField.className = 'form-field team-member-field';
        memberField.style.animation = 'slideIn 0.3s ease';
        memberField.innerHTML = `
            <label>Team Member ${i} Name</label>
            <input type="text" name="team_member_${i}" placeholder="Member ${i} Name" required>
        `;
        container.appendChild(memberField);
    }
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
