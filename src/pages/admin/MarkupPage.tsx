const MarkupPage = () => (
  <section className="stack-md">
    <h2>Markup management</h2>
    <form className="form grid two">
      <label>Global markup %<input defaultValue="12" /></label>
      <label>Minimum margin $<input defaultValue="4" /></label>
      <label>Supplier markup rules<textarea defaultValue="AutoHub: +4%, FastParts: +2%" /></label>
      <label>Brand markup rules<textarea defaultValue="Bosch +3%, NGK +2%" /></label>
      <label>Rounding rule<select><option>Round to .99</option></select></label>
      <button className="btn">Save pricing logic</button>
    </form>
  </section>
);

export default MarkupPage;
