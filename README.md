# 🚀 Quick Start Guide - Vyugam'26 Website

## ✅ What's Been Done

Your Vyugam'26 website has been successfully restructured! Here's what changed:

### 🔄 Main Changes:
1. **Removed** the separate `/register` page
2. **Moved** registration forms inside each department modal
3. **Updated** navigation to show: Home, Departments, Contact Us
4. **Changed** "Register Now" button to scroll to Departments

---

## 🎯 How to Test the Website

### Option 1: Open Directly in Browser
1. Navigate to: `e:\projects\symposium web\`
2. Double-click `index.html`
3. Website will open in your default browser

### Option 2: Use Live Server (Recommended)
If you have VS Code with Live Server extension:
1. Right-click `index.html`
2. Select "Open with Live Server"
3. Website will open with auto-reload on changes

---

## 🧪 Testing Checklist

### ✓ Navigation Test
- [ ] Click "Home" - should scroll to home section
- [ ] Click "Depts" - should scroll to departments section
- [ ] Click "Contact" - should scroll to contact section
- [ ] Active state should update as you scroll

### ✓ Registration Flow Test
1. [ ] Click "Register Now" button on home page
2. [ ] Page should scroll to Departments section
3. [ ] Click on "CSE" department card
4. [ ] Modal should open showing:
   - CSE icon and name
   - Paper presentation topics
   - Technical events
   - Non-technical events
   - Department contacts
   - **Registration form at the bottom**

### ✓ Form Functionality Test
1. [ ] Scroll down in the modal to see the registration form
2. [ ] Fill in all fields:
   - Full Name
   - Email
   - Mobile (10 digits)
   - College
   - Year (select from dropdown)
   - Event Type (select "Paper Presentation")
3. [ ] When you select "Paper Presentation", a "Paper Topic" dropdown should appear
4. [ ] The paper topics should be specific to CSE department
5. [ ] Fill the paper topic
6. [ ] Click "Proceed to Pay"
7. [ ] You should see a confirmation alert
8. [ ] Modal should close
9. [ ] Page should scroll back to home

### ✓ Different Department Test
1. [ ] Open a different department (e.g., "IT")
2. [ ] Check that the registration form shows different events
3. [ ] Verify paper topics are specific to IT department

### ✓ Mobile Responsive Test
1. [ ] Resize browser window to mobile size (375px width)
2. [ ] Check that:
   - Navigation is compact
   - Department grid shows 2 columns
   - Modal is full-screen
   - Registration form fits without horizontal scroll
   - All buttons are easily clickable

---

## 📱 Website Structure

```
HOME PAGE
├── College Logo
├── Title: Vyugam'26
├── Event Info (Date, Fee)
├── Prize Info
├── Register Now Button ──────┐
├── Patron & Convenors        │
└── [End of Home]              │
                               │
DEPARTMENTS PAGE  <────────────┘
├── Department Grid (2 cols mobile, 5 cols desktop)
│   ├── CSE ──────┐
│   ├── IT        │
│   ├── AI & DS   │
│   ├── ECE       │
│   ├── EEE       │
│   ├── Mech      │
│   ├── Civil     │
│   ├── S&H       │
│   ├── MBA       │
│   └── BME       │
│                 │
│   MODAL <───────┘
│   ├── Department Info
│   ├── Paper Topics
│   ├── Events
│   ├── Contacts
│   └── REGISTRATION FORM ← NEW!
│       ├── Personal Details
│       ├── Event Selection
│       ├── Paper Topic (if applicable)
│       ├── Submit Button
│       └── Payment QR Code
│
CONTACT PAGE
└── College Contact Information
```

---

## 🎨 Key Features

### Smart Registration Form
- **Auto-filtered events**: Only shows events available for the selected department
- **Dynamic paper topics**: Topics change based on department
- **Department pre-selected**: No need to choose department again
- **Mobile responsive**: Fits perfectly on all screen sizes
- **Validation**: Checks all required fields before submission

### User Experience
- **Fewer clicks**: Users go directly from department to registration
- **Context-aware**: Form knows which department user is interested in
- **All-in-one**: Everything about a department in one modal
- **Clear flow**: Home → Departments → Register → Pay

---

## 📂 Files Modified

| File | Changes |
|------|---------|
| `index.html` | ✓ Updated navigation<br>✓ Removed register page<br>✓ Updated contact section |
| `script.js` | ✓ Updated modal function<br>✓ Added form handlers<br>✓ Removed global form logic |
| `styles.css` | ✓ Added dept registration styles<br>✓ Updated contact page styles |

---

## 🐛 Troubleshooting

### Issue: Modal doesn't open when clicking department
**Solution**: Check browser console (F12) for JavaScript errors

### Issue: Form doesn't submit
**Solution**: Make sure all required fields are filled

### Issue: Paper Topic field doesn't appear
**Solution**: Make sure you selected "Paper Presentation" in Event Type

### Issue: Mobile view looks broken
**Solution**: Clear browser cache and reload (Ctrl + Shift + R)

---

## 📞 Need Help?

If something doesn't work as expected:

1. **Check the browser console** (Press F12, go to Console tab)
2. **Look for error messages** (they'll be in red)
3. **Verify all files are saved** (index.html, script.js, styles.css)
4. **Try a hard refresh** (Ctrl + Shift + R or Cmd + Shift + R)

---

## 🎉 You're All Set!

Your website is now restructured and ready to use. The registration process is simpler and more user-friendly!

**Next Steps:**
1. Test the website thoroughly
2. If everything works, you can deploy it
3. Consider adding backend integration for actual payment processing

---

**Last Updated**: February 15, 2026  
**Version**: 2.0 (Restructured)

---

## 📖 Additional Documentation

- `CHANGES_SUMMARY.md` - Detailed list of all changes
- `STRUCTURE_GUIDE.html` - Visual guide (open in browser)
- `index.html` - Main website file
- `script.js` - JavaScript functionality
- `styles.css` - Styling and layout
