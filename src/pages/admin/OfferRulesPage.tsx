const OfferRulesPage = () => (
  <section className="stack-md">
    <h2>Offer selection rules</h2>
    <form className="form grid two">
      <label>Priority 1<select><option>Minimum price</option></select></label>
      <label>Priority 2<select><option>Best delivery time</option></select></label>
      <label>Warehouse priority<textarea defaultValue="Dallas > Austin > Houston" /></label>
      <label>Combined conditions<textarea defaultValue="If price diff ≤ 3%, prefer faster delivery" /></label>
      <button className="btn">Save offer rules</button>
    </form>
  </section>
);

export default OfferRulesPage;
