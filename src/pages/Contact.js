import { validateForm } from "./ContactValidation";
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
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
  
      // validate form using current input values
      const errors = validateForm(formData);
  
      if (errors) {
        setErrors(errors);
        return;
      }

      onSubmit(formData);
      window.location.reload();
  
    };
  
  
    // update form input values when the user types
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
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
 
     


export default Contact;