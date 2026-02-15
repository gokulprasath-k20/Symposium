# Team Registration Update - Vyugam'26

## 🎯 Overview
The registration forms have been updated to support **team registration** with **dynamic payment calculation** based on team size.

---

## ✅ Changes Made

### ❌ Removed:
- ✅ QR Code payment section
- ✅ Static payment amount (₹200)
- ✅ Screenshot upload option
- ✅ UPI payment instructions

### ✅ Added:
- ✅ Team Size dropdown (1-4 members)
- ✅ Dynamic team member input fields
- ✅ Automatic payment calculation
- ✅ Payment amount display
- ✅ Dynamic button text with amount

---

## 📝 New Registration Form Structure

### Form Fields:

1. **Full Name (Team Leader)** - Text input
   - The person filling the form is automatically the team leader
   - No separate leader name field needed

2. **Email** - Email input

3. **Mobile** - Tel input (10-digit validation)

4. **College** - Text input

5. **Year** - Dropdown (1st, 2nd, 3rd, 4th Year)

6. **Team Size** - Dropdown (NEW!)
   - Options: 1, 2, 3, or 4 Members
   - **Triggers dynamic member fields**
   - **Updates payment automatically**

7. **Team Members Section** (Dynamic - appears when team size > 1)
   - Team Member 2 Name
   - Team Member 3 Name (if team size ≥ 3)
   - Team Member 4 Name (if team size = 4)

8. **Event Type** - Dropdown (filtered by department)

9. **Paper Topic** - Dropdown (appears only for Paper Presentation)

---

## 👥 Team Registration Logic

### Team Size Selection:

| Team Size | Additional Fields | Total Payment |
|-----------|------------------|---------------|
| 1 Member  | None             | ₹200          |
| 2 Members | Member 2         | ₹400          |
| 3 Members | Member 2, 3      | ₹600          |
| 4 Members | Member 2, 3, 4   | ₹800          |

### Formula:
```
Total Amount = Team Size × ₹200
```

### Dynamic Behavior:
- When user selects team size, member input fields appear **instantly**
- No page reload required
- Smooth slide-in animation for new fields
- Payment amount updates in **real-time**

---

## 💰 Payment Display

### Registration Fee Display:
```
┌─────────────────────────────────┐
│ Registration Fee:        ₹600   │
└─────────────────────────────────┘
```

- **Location**: Above the submit button
- **Style**: Gold gradient background, bold text
- **Updates**: Automatically when team size changes

### Submit Button:
```
┌─────────────────────────────────┐
│   👉 Proceed to Pay ₹600        │
└─────────────────────────────────┘
```

- Button text includes the **dynamic amount**
- Updates instantly with team size

---

## ✅ Validation Rules

### Required Fields:
- ✅ All visible team member fields must be filled
- ✅ No empty member names allowed
- ✅ Team size must be selected

### Duplicate Check:
- ✅ No duplicate names allowed in the team
- ✅ Case-insensitive comparison
- ✅ Error message if duplicates found

### Team Size Limits:
- ✅ Minimum: 1 member
- ✅ Maximum: 4 members

---

## 🎨 User Experience

### Dynamic Field Generation:

**Example: User selects "3 Members"**

1. Team Size dropdown changes to "3 Members"
2. **Instant animation** - Team Members section slides in
3. Two input fields appear:
   - Team Member 2 Name
   - Team Member 3 Name
4. Payment display updates: **₹600**
5. Button updates: **"Proceed to Pay ₹600"**

### Smooth Animations:
- ✅ Slide-in effect for team member fields (0.3s)
- ✅ Smooth transition for payment amount change
- ✅ No jarring layout shifts

---

## 📱 Mobile Responsive

### Mobile Behavior:
- ✅ All fields stack vertically
- ✅ Team member fields don't break layout
- ✅ Payment display fits perfectly
- ✅ Submit button always visible
- ✅ No horizontal scroll
- ✅ Touch-friendly input fields

### Desktop Behavior:
- ✅ Larger font sizes for better readability
- ✅ More padding and spacing
- ✅ Modal centered on screen
- ✅ Optimal width for form fields

---

## 🔄 Registration Flow

### Step-by-Step Process:

1. **User opens department modal**
   - Sees department information
   - Scrolls to registration form

2. **Fills personal details**
   - Name (Team Leader)
   - Email, Mobile, College, Year

3. **Selects team size**
   - Chooses 1, 2, 3, or 4 members
   - Team member fields appear (if > 1)
   - Payment amount updates

4. **Fills team member names** (if applicable)
   - Enters names for additional members
   - System validates for duplicates

5. **Selects event type**
   - Chooses from available events
   - Paper topic field appears if needed

6. **Reviews payment amount**
   - Sees total registration fee clearly
   - Amount shown in both display and button

7. **Submits registration**
   - Clicks "Proceed to Pay ₹[amount]"
   - Receives confirmation with team details

---

## 📊 Confirmation Message

### Example Confirmation:

```
✅ Registration Successful!

You are registered for Paper Presentation (Topic: Generative AI)
Department: Computer Science & Engineering
Event Date: 6 March 2026

Team Size: 3 Members
Team Leader: John Doe
Member 2: Jane Smith
Member 3: Bob Johnson

Total Registration Fee: ₹600

Confirmation will be sent to:
📧 Email: john@example.com
📱 Mobile: 9876543210

Please complete payment of ₹600.

Thank you for registering for Vyugam'26!
```

---

## 🛠️ Technical Implementation

### JavaScript Functions:

1. **`setupDepartmentFormListeners(deptKey)`**
   - Sets up all form event listeners
   - Handles team size changes
   - Manages payment calculation
   - Validates form submission

2. **`generateTeamMemberFields(teamSize, container)`**
   - Dynamically creates team member input fields
   - Adds slide-in animation
   - Sets proper field names and labels

### Key Features:

- **Real-time updates**: Payment changes instantly
- **Dynamic DOM manipulation**: Fields added/removed smoothly
- **Validation**: Comprehensive checks before submission
- **Data collection**: All team members captured correctly

---

## 🎨 CSS Styling

### New Classes:

- `.team-members-section` - Container for team member fields
- `.team-members-title` - Section heading
- `.team-members-container` - Dynamic field container
- `.team-member-field` - Individual member input field
- `.payment-amount-display` - Payment display card
- `.payment-label` - "Registration Fee:" label
- `.payment-amount` - Amount value display
- `.amount-value` - Numeric amount (updates dynamically)
- `.btn-amount` - Amount in button text

### Animations:

```css
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

---

## 📋 Testing Checklist

### ✅ Team Size Functionality:
- [ ] Select 1 member → No extra fields, ₹200
- [ ] Select 2 members → 1 extra field, ₹400
- [ ] Select 3 members → 2 extra fields, ₹600
- [ ] Select 4 members → 3 extra fields, ₹800
- [ ] Change team size → Fields update correctly

### ✅ Payment Display:
- [ ] Amount shows correctly for each team size
- [ ] Button text updates with amount
- [ ] Transitions are smooth

### ✅ Validation:
- [ ] Empty team member name → Error message
- [ ] Duplicate names → Error message
- [ ] All required fields → Form submits

### ✅ Mobile Responsive:
- [ ] Fields stack properly on mobile
- [ ] No horizontal scroll
- [ ] Touch targets are adequate
- [ ] Payment display fits screen

### ✅ User Experience:
- [ ] Animations are smooth
- [ ] No layout jumps
- [ ] Clear visual feedback
- [ ] Confirmation shows team details

---

## 💡 Benefits

1. **Flexible Registration**: Teams of 1-4 members supported
2. **Transparent Pricing**: Users see exact cost before submitting
3. **Better UX**: Dynamic fields reduce confusion
4. **No Errors**: Validation prevents duplicate names
5. **Mobile-Friendly**: Works perfectly on all devices
6. **Professional**: Smooth animations and clean design

---

## 🔧 Files Modified

| File | Changes |
|------|---------|
| `script.js` | ✓ Added team size handler<br>✓ Added dynamic field generation<br>✓ Updated payment calculation<br>✓ Enhanced validation |
| `styles.css` | ✓ Added team section styles<br>✓ Added payment display styles<br>✓ Added slide-in animation<br>✓ Added responsive styles |

---

## 📈 Payment Calculation Examples

| Scenario | Team Size | Calculation | Total |
|----------|-----------|-------------|-------|
| Solo participant | 1 | 1 × ₹200 | **₹200** |
| Duo team | 2 | 2 × ₹200 | **₹400** |
| Trio team | 3 | 3 × ₹200 | **₹600** |
| Full team | 4 | 4 × ₹200 | **₹800** |

---

## 🎯 Next Steps (Optional Enhancements)

1. **Payment Gateway Integration**: Connect to actual payment processor
2. **Team Leader Privileges**: Add special permissions for team leader
3. **Team Code**: Generate unique team code for reference
4. **Edit Team**: Allow team leader to modify team members
5. **Team Dashboard**: View all team registrations
6. **Email Notifications**: Send confirmation to all team members

---

**Last Updated**: February 15, 2026  
**Version**: 2.1 (Team Registration)
