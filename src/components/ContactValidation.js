

function validateForm(formData) {
    const errors = {};
    
    if (!formData.fullName || formData.fullName.length < 2) {
    errors.fullName = "Full name must be at least 2 letters long";
    }
    
    if (!formData.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(formData.email)) {
    errors.email = "Please enter a valid email";
    }
    
    if (!formData.subject) {
    errors.subject = "Please enter a subject";
    }
    
    if (!formData.message) {
    errors.message = "Please enter your message";
    }
    
    return Object.keys(errors).length === 0 ? null : errors;
    }
    
    export { validateForm };