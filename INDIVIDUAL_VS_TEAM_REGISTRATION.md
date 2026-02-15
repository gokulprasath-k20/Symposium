# Individual vs Team Registration - Vyugam'26

## 🎯 Overview
The registration system now supports **two different registration modes** based on the event type selected:

- **Individual Registration**: For Technical and Non-Technical Events
- **Team Registration**: For Paper Presentation and Project Expo

---

## 📋 Registration Type by Event

| Event Type | Registration Mode | Team Size Options | Payment |
|------------|------------------|-------------------|---------|
| **Paper Presentation** | Team | 1-4 members | Team Size × ₹200 |
| **Project Expo** | Team | 1-4 members | Team Size × ₹200 |
| **Technical Event** | Individual | N/A | ₹200 (fixed) |
| **Non-Technical Event** | Individual | N/A | ₹200 (fixed) |

---

## 👤 Individual Registration (Technical & Non-Technical)

### Form Fields:
1. **Full Name (Participant)** - Text input
2. **Email** - Email input
3. **Mobile** - Tel input (10-digit)
4. **College** - Text input
5. **Year** - Dropdown (1st, 2nd, 3rd, 4th)
6. **Event Type** - Dropdown (select Technical or Non-Technical)

### What's Hidden:
- ❌ Team Size dropdown
- ❌ Team Members section
- ❌ Team Leader label

### Payment:
- **Fixed Amount**: ₹200
- **No dynamic calculation**
- Display: "Registration Fee: ₹200"
- Button: "Proceed to Pay ₹200"

### User Flow:
```
1. Fill personal details
2. Select Year
3. Select Event Type → Technical/Non-Technical
4. Team Size field remains HIDDEN
5. See fixed payment: ₹200
6. Submit registration
```

---

## 👥 Team Registration (Paper Presentation & Project Expo)

### Form Fields:
1. **Full Name (Team Leader)** - Text input
2. **Email** - Email input
3. **Mobile** - Tel input (10-digit)
4. **College** - Text input
5. **Year** - Dropdown (1st, 2nd, 3rd, 4th)
6. **Event Type** - Dropdown (select Paper/Project)
7. **Team Size** - Dropdown (1-4 members) ← **Appears dynamically**
8. **Team Members** - Dynamic fields ← **Appears if team size > 1**
9. **Paper Topic** - Dropdown ← **Only for Paper Presentation**

### What's Shown:
- ✅ Team Size dropdown
- ✅ Team Members section (if team size > 1)
- ✅ Team Leader label

### Payment:
- **Dynamic Amount**: Team Size × ₹200
- **Updates in real-time**
- Display: "Registration Fee: ₹[amount]"
- Button: "Proceed to Pay ₹[amount]"

### User Flow:
```
1. Fill personal details
2. Select Year
3. Select Event Type → Paper Presentation/Project Expo
4. Team Size field APPEARS
5. Select team size (1-4)
6. Team member fields appear (if > 1)
7. Fill team member names
8. See dynamic payment: ₹200-₹800
9. Submit registration
```

---

## 🔄 Dynamic Form Behavior

### When User Selects Event Type:

#### **Technical or Non-Technical:**
```javascript
✓ Hide Team Size field
✓ Hide Team Members section
✓ Clear team size value
✓ Clear team member fields
✓ Change label to "Full Name (Participant)"
✓ Set payment to ₹200 (fixed)
```

#### **Paper Presentation or Project Expo:**
```javascript
✓ Show Team Size field
✓ Make Team Size required
✓ Change label to "Full Name (Team Leader)"
✓ Enable dynamic payment calculation
✓ Show team member fields when size > 1
```

---

## 💰 Payment Calculation Logic

### Individual Events (Technical/Non-Technical):
```javascript
totalAmount = 200 // Fixed
```

### Team Events (Paper/Project):
```javascript
totalAmount = teamSize × 200

Examples:
- 1 member  → ₹200
- 2 members → ₹400
- 3 members → ₹600
- 4 members → ₹800
```

---

## 📝 Example Scenarios

### Scenario 1: Technical Event (Individual)

**User Actions:**
1. Fills name: "John Doe"
2. Fills email, mobile, college
3. Selects Year: "3rd Year"
4. Selects Event: "Technical Event"

**Form State:**
- Team Size field: **HIDDEN**
- Name label: "Full Name (Participant)"
- Payment: **₹200** (fixed)
- Button: "Proceed to Pay **₹200**"

**Confirmation:**
```
✅ Registration Successful!

You are registered for Technical Event
Department: Computer Science & Engineering
Event Date: 6 March 2026

Participant: John Doe

Total Registration Fee: ₹200
```

---

### Scenario 2: Paper Presentation (Team of 3)

**User Actions:**
1. Fills name: "Jane Smith"
2. Fills email, mobile, college
3. Selects Year: "2nd Year"
4. Selects Event: "Paper Presentation"
5. **Team Size field appears**
6. Selects Team Size: "3 Members"
7. **Two member fields appear**
8. Fills Member 2: "Bob Johnson"
9. Fills Member 3: "Alice Williams"
10. Selects Paper Topic: "Generative AI"

**Form State:**
- Team Size field: **VISIBLE**
- Name label: "Full Name (Team Leader)"
- Payment: **₹600** (3 × 200)
- Button: "Proceed to Pay **₹600**"

**Confirmation:**
```
✅ Registration Successful!

You are registered for Paper Presentation (Topic: Generative AI)
Department: Computer Science & Engineering
Event Date: 6 March 2026

Team Size: 3 Members
Team Leader: Jane Smith
Member 2: Bob Johnson
Member 3: Alice Williams

Total Registration Fee: ₹600
```

---

### Scenario 3: Project Expo (Solo)

**User Actions:**
1. Fills name: "Mike Davis"
2. Fills email, mobile, college
3. Selects Year: "4th Year"
4. Selects Event: "Project Expo"
5. **Team Size field appears**
6. Selects Team Size: "1 Member"

**Form State:**
- Team Size field: **VISIBLE**
- Team Members section: **HIDDEN** (size = 1)
- Name label: "Full Name (Team Leader)"
- Payment: **₹200** (1 × 200)
- Button: "Proceed to Pay **₹200**"

**Confirmation:**
```
✅ Registration Successful!

You are registered for Project Expo
Department: Computer Science & Engineering
Event Date: 6 March 2026

Team Size: 1 Member
Participant: Mike Davis

Total Registration Fee: ₹200
```

---

## ✅ Validation Rules

### Individual Events:
- ✓ All personal fields required (name, email, mobile, college, year)
- ✓ Event type must be selected
- ✓ No team validation needed

### Team Events:
- ✓ All personal fields required
- ✓ Event type must be selected
- ✓ **Team size must be selected**
- ✓ All team member fields must be filled (if team size > 1)
- ✓ No duplicate names allowed
- ✓ Paper topic required (if Paper Presentation)

---

## 🎨 UI/UX Differences

### Individual Registration:
```
┌─────────────────────────────────┐
│ Full Name (Participant)         │
│ Email                           │
│ Mobile                          │
│ College                         │
│ Year                            │
│ Event Type ← Technical/Non-Tech │
│                                 │
│ Registration Fee: ₹200          │
│                                 │
│ [Proceed to Pay ₹200]          │
└─────────────────────────────────┘
```

### Team Registration:
```
┌─────────────────────────────────┐
│ Full Name (Team Leader)         │
│ Email                           │
│ Mobile                          │
│ College                         │
│ Year                            │
│ Event Type ← Paper/Project      │
│ Team Size ← 1-4 members         │
│                                 │
│ 👥 Team Members (if > 1)        │
│ ├─ Member 2 Name                │
│ ├─ Member 3 Name                │
│ └─ Member 4 Name                │
│                                 │
│ Paper Topic (if Paper)          │
│                                 │
│ Registration Fee: ₹[dynamic]    │
│                                 │
│ [Proceed to Pay ₹[dynamic]]    │
└─────────────────────────────────┘
```

---

## 🔧 Technical Implementation

### JavaScript Event Listeners:

```javascript
// Event type change handler
eventSelect.addEventListener('change', () => {
    const eventType = eventSelect.value;
    
    if (eventType === 'paper' || eventType === 'project') {
        // Team registration
        teamSizeField.style.display = 'block';
        teamSizeSelect.required = true;
        nameLabel.textContent = 'Full Name (Team Leader)';
    } else {
        // Individual registration
        teamSizeField.style.display = 'none';
        teamSizeSelect.required = false;
        teamSizeSelect.value = '';
        teamMembersSection.style.display = 'none';
        teamMembersContainer.innerHTML = '';
        nameLabel.textContent = 'Full Name (Participant)';
        amountValue.textContent = '200';
        btnAmount.textContent = '200';
    }
});
```

### Form Submission Logic:

```javascript
const isTeamEvent = (eventType === 'paper' || eventType === 'project');

if (isTeamEvent) {
    // Team validation and processing
    if (!data.team_size) {
        alert('Please select team size!');
        return;
    }
    // ... team member collection and validation
} else {
    // Individual processing
    teamSize = 1;
    teamMembers = [data.name];
}
```

---

## 📱 Mobile Responsiveness

### Individual Events:
- ✓ Compact form (fewer fields)
- ✓ Faster to fill
- ✓ Less scrolling required
- ✓ Fixed payment display

### Team Events:
- ✓ Dynamic fields expand smoothly
- ✓ Team members stack vertically
- ✓ Payment updates in real-time
- ✓ No horizontal scroll

---

## 🎯 Benefits

### For Individual Events:
1. **Simpler Form** - Fewer fields to fill
2. **Faster Registration** - Quick and easy
3. **Clear Pricing** - Fixed ₹200, no confusion
4. **Mobile-Friendly** - Compact layout

### For Team Events:
1. **Flexible Team Size** - 1-4 members supported
2. **Transparent Pricing** - See exact cost before submitting
3. **Team Management** - All members registered together
4. **Validation** - Prevents duplicate names

---

## 🧪 Testing Checklist

### Test Individual Registration:
- [ ] Select Technical Event → Team Size hidden
- [ ] Select Non-Technical Event → Team Size hidden
- [ ] Label shows "Full Name (Participant)"
- [ ] Payment shows ₹200 (fixed)
- [ ] Button shows "Proceed to Pay ₹200"
- [ ] Submit works without team size

### Test Team Registration:
- [ ] Select Paper Presentation → Team Size appears
- [ ] Select Project Expo → Team Size appears
- [ ] Label shows "Full Name (Team Leader)"
- [ ] Select team size → Payment updates
- [ ] Team member fields appear correctly
- [ ] Validation prevents duplicates
- [ ] Paper topic appears for Paper Presentation

### Test Switching Between Events:
- [ ] Switch from Technical to Paper → Team Size appears
- [ ] Switch from Paper to Technical → Team Size hides
- [ ] Payment resets correctly
- [ ] Form clears team data when switching
- [ ] No layout issues on mobile

---

## 📊 Summary Table

| Aspect | Individual Events | Team Events |
|--------|------------------|-------------|
| **Events** | Technical, Non-Technical | Paper Presentation, Project Expo |
| **Team Size Field** | Hidden | Visible |
| **Team Members** | N/A | Dynamic (0-3 fields) |
| **Name Label** | "Participant" | "Team Leader" |
| **Payment** | ₹200 (fixed) | ₹200-₹800 (dynamic) |
| **Validation** | Basic fields | + Team size + Members |
| **Form Complexity** | Simple | Advanced |

---

## 🚀 Next Steps

1. **Test thoroughly** - Try all event types
2. **Verify mobile** - Check on different screen sizes
3. **Test validation** - Try edge cases
4. **Review UX** - Ensure smooth transitions

---

**Last Updated**: February 15, 2026  
**Version**: 2.2 (Individual vs Team Registration)
