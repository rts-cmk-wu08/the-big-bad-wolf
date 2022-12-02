import "./createUser.scss"


const CreateUser = () => {
    return ( 
        <>
        <header className="page-header">
            <h1 className="page-header__title">Create an account</h1>
        </header>
    <section className="page-content white shadow">
        <h2 className="thinner">Create new customer account</h2>

        <div className="form__fieldgroup">
            <label className="bold" for="fistName">First name  <span className="orange">*</span></label><br/>
            <input className="form__input" type="text" name="firstName" id="firstName" />
        </div>
        <div className="form__fieldgroup">
            <label className="bold" for="lastName">Last name  <span className="orange">*</span></label><br/>
            <input className="form__input" type="text" name="lastName" id="lastName" />
        </div>
        <div className="form__fieldgroup">
            <label className="bold" for="email">Email  <span className="orange">*</span></label><br/>
            <input className="form__input" type="email" name="email" id="email" />
        </div>
        <div className="form__fieldgroup">
            <label className="bold" for="lastName">Password  <span className="orange">*</span></label><br/>
            <input className="form__input" type="text" name="password" id="password" />
        </div>
        <div className="form__fieldgroup">
            <label className="bold" for="lastName">Repeat password  <span className="orange">*</span></label><br/>
            <input className="form__input" type="text" name="repreatPassword" id="repeatPassword" />
        </div>

        <div className="checkbox-btn">
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <p className="smaller">By using this form you agree with the storage and handling of your data by this website.</p>
        </div>
        <div className="checkbox-btn">
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <p className="smaller">Sign up for newsletter</p>
        </div>
        <button className="btn shadow">Create an Account</button>
    </section>
    </>
     );
}
 
export default CreateUser;