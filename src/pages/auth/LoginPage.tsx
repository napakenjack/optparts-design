const LoginPage = () => (
  <section className="auth-card">
    <h1>Sign in or create account</h1>
    <form className="form stack-sm">
      <label>Email<input type="email" placeholder="you@example.com" /></label>
      <label>Password<input type="password" placeholder="••••••••" /></label>
      <button className="btn">Sign in</button>
      <button type="button" className="btn btn--secondary">Create account</button>
      <a href="#">Forgot password?</a>
    </form>
  </section>
);

export default LoginPage;
