const Contact = () => {

    return (

        <>

            <header className="page-header">
                <h1 className="page-header__title">Get in touch with us</h1>
            </header>

            <article className="page-content">

                <form action="" className="form contact-form whitebox mb-3">

                    <div className="form__fieldgroup">
                        <label for="fullName">Full name  <span className="req">*</span></label><br/>
                        <input className="form__input" type="text" name="fullName" id="fullName" />
                    </div>

                    <div className="form__fieldgroup">
                        <label for="email">Email  <span className="req">*</span></label><br/>
                        <input className="form__input" type="email" name="email" id="email" />
                    </div>

                    <div className="form__fieldgroup">
                        <label for="subject">Subject <span className="req">*</span></label><br/>
                        <input className="form__input" type="text" name="subject" id="subject"/>
                    </div>
                    
                    <div className="form__fieldgroup">
                        <label for="message">Message <span className="req">*</span></label><br/>
                        <textarea className="form__msg" name="message" id="message" rows="10"></textarea>
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