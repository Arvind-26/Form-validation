# Form Validation Project

---

### **Overview**
This project involves creating a form with robust client-side validation using **HTML**, **CSS**, and **JavaScript**. The form collects essential user information such as Full Name, Email ID, Phone Number, Password, and Confirm Password, ensuring all inputs meet the required validation criteria. Any errors trigger descriptive messages to guide users in correcting their input.

---

### **Features**
1. **Form Fields**:
   - Full Name
   - Email ID
   - Phone Number
   - Password
   - Confirm Password
2. **Validation Criteria**:
   - **Full Name**: Must be at least 5 characters long.
   - **Email ID**: Must include the `@` character.
   - **Phone Number**: Must be exactly 10 digits and not `1234567890`.
   - **Password**:
     - Cannot be "password".
     - Cannot match the Full Name.
     - Must be at least 8 characters long.
   - **Confirm Password**: Must match the Password field.
3. **Error Messaging**:
   - Displays specific error messages for invalid fields, such as:
     - “Enter a valid email.”
     - “Password is not strong.”
4. **Dynamic Feedback**:
   - Validates fields on input change and form submission.
5. **Responsive Design**:
   - Built with **CSS Flexbox/Grid** and **Bootstrap** for a responsive and user-friendly interface.

---

### **Technology Stack**
1. **HTML**: Structuring the form and its elements.
2. **CSS**: Designing the layout and styling the form.
   - Includes **Bootstrap** for quick and responsive design.
3. **JavaScript**:
   - Implements validation logic using:
     - Event listeners (`onSubmit` and `onChange`).
     - Conditional statements (`if/else`).
     - Functions and loops for efficient validation.

---

### **Development Guidelines**
- **Readable Code**:
  - The code is clean, modular, and well-commented for easy understanding.
- **Functionality**:
  - All specified validations are implemented.
- **Deployment**:
  - Hosted on **GitHub** and deployed live using **Netlify**.

---

### **How to Use the Project**
1. Clone the repository:
   ```bash
   git clone https://github.com/Arvind-26/Form-validation.git
   ```
2. Open the `index.html` file in a browser to view and interact with the form.

---

### **Instructions for Form Validation**
1. **Input Fields**:
   - Fill in all the required fields.
   - Ensure inputs meet the specified criteria.
2. **Error Feedback**:
   - Invalid inputs will show error messages near the corresponding fields.
3. **Successful Submission**:
   - Upon meeting all criteria, the form can be submitted successfully.

---

### **Live Demo**
[View Form Validation Project Live on Netlify](https://form-a.netlify.app/)

---

### **Acknowledgments**
This project is created to strengthen skills in front-end development and form validation logic.

---

Let me know if you'd like further assistance with the project or related code! 😊