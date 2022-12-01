import "./login.scss"

const LoginPage = () => {
    return ( 
        <>
            <header className="page-header">
                <h1 className="page-header__title">Login</h1>
            </header>
        <section className="page-content white shadow">
            <h2 className="thinner">Registered customers</h2>
            <p>If you have an account, sign in with your email address.</p>

            <div className="form__fieldgroup">
                <label className="bold" for="fistName">First name  <span className="orange">*</span></label><br/>
                <input className="form__input" type="text" name="firstName" id="firstName" />
            </div>
            <div className="form__fieldgroup">
                <label className="bold" for="email">Email  <span className="orange">*</span></label><br/>
                <input className="form__input" type="email" name="email" id="email" />
            </div>
            <div className="rememberMe">
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <p className="smaller">Remember me</p>
            </div>
            <button className="btn shadow">Sign in</button>
            <p className="smaller">Forgot your Password?</p>
        </section>


        <article className="page-content white shadow center">
            <h2 className="thinner">New Customer</h2>
            <p>Creating an account has many benefits: check out faster, track orders and more.</p>
            <button className="btn shadow">Create an Account</button>
        </article>
        </>
     );
}
 
export default LoginPage;