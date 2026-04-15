const EditSupplierPage = () => (
  <section className="stack-md">
    <h2>Edit supplier</h2>
    <form className="form grid two">
      <label>Supplier name<input defaultValue="AutoHub East" /></label>
      <label>API URL<input defaultValue="https://api.autohub.example/v1" /></label>
      <label>API key<input defaultValue="************" /></label>
      <label>Rate limit (rpm)<input defaultValue="120" /></label>
      <label>Timeout (ms)<input defaultValue="5000" /></label>
      <label>Retry policy<select><option>3 retries exponential</option></select></label>
      <label className="full switch"><input type="checkbox" defaultChecked /> Supplier active</label>
      <button className="btn full">Save supplier settings</button>
    </form>
  </section>
);

export default EditSupplierPage;
