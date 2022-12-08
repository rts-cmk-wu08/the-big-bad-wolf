import { useState } from "react";




const Contact = ({ onChange, onSubmit }) => {
    // initialize form input values and errors with empty strings
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      subject: "",
      text: "",
    });
    const [errors, setErrors] = useState({});
  
  
   // update form input values when the user types
   const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  
    const handleSubmit = (event) => {
        event.preventDefault();
      
        // validate form using current input values
        const errors = validateForm(formData);
      
        if (errors) {
          setErrors(errors);
          return;
        }
      
        // submit the form and refresh the page
        window.location.reload()
        alert ("OMG JEG HAR FÅET FORMEN TIL AT VALIDERE! BETTER BELIEVE IT CARSTEN!");
        onSubmit(formData);
       
      };
  
  
 
  
    
    return (
        

        <>

            <header className="page-header">
                <h1 className="page-header__title">Get in touch with us</h1>
            </header>

            <article className="page-content">
        
                <form className="form contact-form whitebox mb-3" onSubmit={handleSubmit }>

                    <div className="form__fieldgroup">
                        <label htmlFor="fullName">Full name <span className="req">*</span> </label><br/>
                        <input className="form__input" type="text" name="fullName" id="fullName"    defaultValue={formData.fullName}
           onChange={handleChange} />
          <div>{errors.fullName && <span >{errors.fullName}</span>}</div>
                    </div>

                    <div className="form__fieldgroup">
                        <label htmlFor="email">Email <span className="req">*</span></label><br/>
                        <input className="form__input" type="email" name="email" id="email" defaultValue={formData.email}
           onChange={handleChange} />
          <div>{errors.email && <span >{errors.email}</span>}</div>
                    </div>

                    <div className="form__fieldgroup">
                        <label htmlFor="subject">Subject <span className="req">*</span></label><br/>
                        <input className="form__input" type="text" name="subject" id="subject" defaultValue={formData.subject}
           onChange={handleChange} />
                        <div>{errors.subject && <span >{errors.subject}</span>}</div>
                    </div>
                    
                    <div className="form__fieldgroup">
                        <label htmlFor="message">Message <span className="req">*</span></label><br/>
                        <textarea className="form__msg" name="message" id="message" rows="10"  defaultValue={formData.text}
           onChange={handleChange}></textarea>
           <div>{errors.message && <span >{errors.message}</span>}</div>
                    </div>

                    <div className="form__fieldgroup submit">
                        <input className="btn form__submit" type="submit" value="submit" />
                    </div>
            
                </form> 
                
                <p className="big center"><b>Visit our sister companies <span className="orange">Home Sound</span> and <span className="orange">The Movie Rooms</span> part of the Hi-Fi Corner Group.</b></p>
        
            </article>
        
            

        </>
        
        
     );
        
 }
 
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
    
     

export default Contact;

