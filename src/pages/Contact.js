import "./contact.scss"


const Contact = () => {

    return (

        <section className="contact">
        <h1 className="contact__headline">Get in touch with us</h1>

        <article className="contact__form">
            <h3>Full name  <span className="orange">*</span></h3>
            <input className="contact__input" type="text" name="fullName" id="fullName" />

            <h3>Email <span className="orange">*</span></h3>
            <input className="contact__input" type="email" name="email" id="email" />

            <h3>Subject  <span className="orange">*</span></h3>
            <input className="contact__input" type="text" name="subject" id="subject"/>

            <h3>Message  <span className="orange">*</span></h3>
            <textarea className="contact__msg" name="message" id="message" cols="174" rows="10"></textarea>

            <div className="submit__btn">
                <button><input type="submit" value="submit" /></button>
                
            </div>
        </article>
        <p className="contact__btmText">Visit our sister companies <span className="orange">Home Sound</span> and <span className="orange">The Movie Rooms</span> part of the Hi-Fi Corner Group.</p>
        </section>

     );
     
}

export default Contact;