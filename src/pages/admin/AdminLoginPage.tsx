const AdminLoginPage = () => (
  <section className="auth-card auth-card--admin">
    <h1>Admin sign in</h1>
    <form className="form stack-sm">
      <label>Work email<input type="email" placeholder="manager@optparts.example" /></label>
      <label>Password<input type="password" placeholder="••••••••" /></label>
      <button className="btn">Sign in to admin</button>
    </form>
  </section>
);

export default AdminLoginPage;
