# Paper Presentation Team Registration - Vyugam'26

## 🎯 Overview
The registration form now shows **Team Size and Team Members fields ONLY for Paper Presentation** events. All other events (Technical, Non-Technical, Project Expo) use individual registration.

---

## 📋 Registration Flow by Event Type

| Event Type | Paper Topic | Team Size | Team Members | Payment |
|------------|-------------|-----------|--------------|---------|
| **Paper Presentation** | ✅ Required | ✅ Required | ✅ Dynamic | Team Size × ₹200 |
| **Technical Event** | ❌ Hidden | ❌ Hidden | ❌ Hidden | ₹200 (fixed) |
| **Non-Technical Event** | ❌ Hidden | ❌ Hidden | ❌ Hidden | ₹200 (fixed) |
| **Project Expo** | ❌ Hidden | ❌ Hidden | ❌ Hidden | ₹200 (fixed) |

---

## 📝 Form Field Order

### All Events (Base Fields):
1. **Full Name**
2. **Email**
3. **Mobile**
4. **College**
5. **Year**
6. **Event Type** (Dropdown)

### Additional Fields for Paper Presentation:
7. **Paper Topic** (Dropdown) ← Appears when Paper Presentation selected
8. **Team Size** (Dropdown) ← Appears under Paper Topic
9. **Team Members** (Dynamic fields) ← Appears under Team Size if size > 1
10. **Payment Display** (Dynamic amount)
11. **Submit Button** (Dynamic text)

---

## 🎯 Paper Presentation Registration

### Step-by-Step Flow:

#### Step 1: User Selects "Paper Presentation"
```
Event Type: Paper Presentation
↓
Paper Topic field APPEARS
Team Size field APPEARS
Name label changes to "Full Name (Team Leader)"
```

#### Step 2: User Selects Paper Topic
```
Paper Topic: "Generative AI: Beyond ChatGPT"
↓
Topic is selected
Team Size field is visible and required
```

#### Step 3: User Selects Team Size
```
Team Size: 3 Members
↓
2 team member fields APPEAR
Payment updates to ₹600
Button updates to "Proceed to Pay ₹600"
```

#### Step 4: User Fills Team Member Names
```
Team Member 2 Name: Jane Smith
Team Member 3 Name: Bob Johnson
↓
All fields filled
Ready to submit
```

#### Step 5: Submit Registration
```
Click "Proceed to Pay ₹600"
↓
Validation checks
Confirmation message with team details
Modal closes
```

---

## 👤 Individual Event Registration

### Step-by-Step Flow:

#### Step 1: User Selects Any Other Event
```
Event Type: Technical Event / Non-Technical / Project Expo
↓
Paper Topic field HIDDEN
Team Size field HIDDEN
Team Members section HIDDEN
Name label shows "Full Name"
Payment stays at ₹200
```

#### Step 2: Submit Registration
```
Click "Proceed to Pay ₹200"
↓
Validation checks
Confirmation message with participant details
Modal closes
```

---

## 💰 Payment Calculation

### Paper Presentation (Team Event):
```javascript
// Dynamic calculation based on team size
if (teamSize === 1) → ₹200
if (teamSize === 2) → ₹400
if (teamSize === 3) → ₹600
if (teamSize === 4) → ₹800

Formula: totalAmount = teamSize × 200
```

### All Other Events (Individual):
```javascript
// Fixed amount
totalAmount = 200 // Always
```

---

## 🎨 UI Behavior

### When "Paper Presentation" is Selected:

**Fields that APPEAR:**
```
✅ Paper Topic (dropdown)
✅ Team Size (dropdown)
✅ Team Members (if team size > 1)
```

**Label Changes:**
```
"Full Name" → "Full Name (Team Leader)"
```

**Payment Display:**
```
"Registration Fee: ₹200" → "Registration Fee: ₹[dynamic]"
"Proceed to Pay ₹200" → "Proceed to Pay ₹[dynamic]"
```

---

### When Other Events are Selected:

**Fields that HIDE:**
```
❌ Paper Topic
❌ Team Size
❌ Team Members
```

**Label Changes:**
```
"Full Name (Team Leader)" → "Full Name"
```

**Payment Display:**
```
"Registration Fee: ₹[dynamic]" → "Registration Fee: ₹200"
"Proceed to Pay ₹[dynamic]" → "Proceed to Pay ₹200"
```

---

## 📋 Example Scenarios

### Scenario 1: Paper Presentation (Team of 3)

**Form State:**
```
Full Name (Team Leader): John Doe
Email: john@example.com
Mobile: 9876543210
College: ABC College
Year: 3rd Year
Event Type: Paper Presentation
Paper Topic: Generative AI: Beyond ChatGPT
Team Size: 3 Members
Team Member 2 Name: Jane Smith
Team Member 3 Name: Bob Johnson

Registration Fee: ₹600
[Proceed to Pay ₹600]
```

**Confirmation:**
```
✅ Registration Successful!

You are registered for Paper Presentation (Topic: Generative AI: Beyond ChatGPT)
Department: Computer Science & Engineering
Event Date: 6 March 2026

Team Size: 3 Members
Team Leader: John Doe
Member 2: Jane Smith
Member 3: Bob Johnson

Total Registration Fee: ₹600
```

---

### Scenario 2: Technical Event (Individual)

**Form State:**
```
Full Name: Alice Williams
Email: alice@example.com
Mobile: 9123456780
College: XYZ College
Year: 2nd Year
Event Type: Technical Event

Registration Fee: ₹200
[Proceed to Pay ₹200]
```

**Confirmation:**
```
✅ Registration Successful!

You are registered for Technical Event
Department: Computer Science & Engineering
Event Date: 6 March 2026

Participant: Alice Williams

Total Registration Fee: ₹200
```

---

### Scenario 3: Project Expo (Individual)

**Form State:**
```
Full Name: Mike Davis
Email: mike@example.com
Mobile: 9988776655
College: DEF College
Year: 4th Year
Event Type: Project Expo

Registration Fee: ₹200
[Proceed to Pay ₹200]
```

**Confirmation:**
```
✅ Registration Successful!

You are registered for Project Expo
Department: Computer Science & Engineering
Event Date: 6 March 2026

Participant: Mike Davis

Total Registration Fee: ₹200
```

---

## ✅ Validation Rules

### Paper Presentation:
- ✓ All base fields required (name, email, mobile, college, year)
- ✓ Event type must be selected
- ✓ **Paper topic must be selected**
- ✓ **Team size must be selected**
- ✓ **All team member fields must be filled** (if team size > 1)
- ✓ **No duplicate team member names**

### Other Events:
- ✓ All base fields required (name, email, mobile, college, year)
- ✓ Event type must be selected
- ✓ No additional validation needed

---

## 🎨 Visual Layout

### Paper Presentation Form:
```
┌──────────────────────────────────┐
│ Full Name (Team Leader)          │
│ Email                            │
│ Mobile                           │
│ College                          │
│ Year                             │
│ Event Type: Paper Presentation   │
│ Paper Topic: [Select Topic]      │
│ Team Size: [Select Size]         │
│                                  │
│ 👥 Team Members                  │
│ ├─ Team Member 2 Name            │
│ ├─ Team Member 3 Name            │
│ └─ Team Member 4 Name            │
│                                  │
│ Registration Fee: ₹600           │
│                                  │
│ [Proceed to Pay ₹600]           │
└──────────────────────────────────┘
```

### Individual Event Form:
```
┌──────────────────────────────────┐
│ Full Name                        │
│ Email                            │
│ Mobile                           │
│ College                          │
│ Year                             │
│ Event Type: Technical Event      │
│                                  │
│ Registration Fee: ₹200           │
│                                  │
│ [Proceed to Pay ₹200]           │
└──────────────────────────────────┘
```

---

## 🔧 Technical Implementation

### Event Type Handler:
```javascript
eventSelect.addEventListener('change', () => {
    const eventType = eventSelect.value;

    if (eventType === 'paper') {
        // Show Paper Presentation fields
        paperTopicField.style.display = 'block';
        teamSizeField.style.display = 'block';
        nameLabel.textContent = 'Full Name (Team Leader)';
    } else {
        // Hide for all other events
        paperTopicField.style.display = 'none';
        teamSizeField.style.display = 'none';
        teamMembersSection.style.display = 'none';
        nameLabel.textContent = 'Full Name';
        amountValue.textContent = '200';
        btnAmount.textContent = '200';
    }
});
```

### Team Event Check:
```javascript
// Only Paper Presentation is a team event
const isTeamEvent = (eventType === 'paper');
```

---

## 🧪 Testing Checklist

### Test Paper Presentation:
- [ ] Select "Paper Presentation" → Paper Topic appears
- [ ] Paper Topic appears → Team Size appears
- [ ] Select team size → Payment updates correctly
- [ ] Select team size > 1 → Team member fields appear
- [ ] Fill all fields → Submit works
- [ ] Confirmation shows team details

### Test Other Events:
- [ ] Select "Technical Event" → No Paper Topic
- [ ] Select "Technical Event" → No Team Size
- [ ] Select "Non-Technical Event" → Individual form
- [ ] Select "Project Expo" → Individual form
- [ ] Payment stays at ₹200
- [ ] Submit works without team fields

### Test Switching:
- [ ] Switch from Paper to Technical → Team fields hide
- [ ] Switch from Technical to Paper → Team fields appear
- [ ] Payment updates correctly when switching
- [ ] No layout issues on mobile

---

## 📊 Summary

| Aspect | Paper Presentation | Other Events |
|--------|-------------------|--------------|
| **Paper Topic** | ✅ Visible | ❌ Hidden |
| **Team Size** | ✅ Visible | ❌ Hidden |
| **Team Members** | ✅ Dynamic | ❌ Hidden |
| **Name Label** | "Team Leader" | "Full Name" |
| **Payment** | Dynamic (₹200-₹800) | Fixed (₹200) |
| **Validation** | + Team fields | Basic only |

---

## 🎯 Key Points

1. **Team registration is ONLY for Paper Presentation**
2. **All other events are individual registration**
3. **Team Size and Team Members appear under Paper Topic**
4. **Payment is dynamic only for Paper Presentation**
5. **Form adapts automatically based on event selection**

---

**Last Updated**: February 15, 2026  
**Version**: 2.3 (Paper Presentation Team Registration Only)
