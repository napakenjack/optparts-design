const CheckoutForm = () => (
  <form className="form checkout-form">
    <h2>Checkout details</h2>
    <div className="grid two">
      <label>Full name<input placeholder="John Carter" /></label>
      <label>Phone<input placeholder="+1 555 0123" /></label>
      <label>Email<input placeholder="john@example.com" /></label>
      <label>Delivery method
        <select>
          <option>Courier delivery</option>
          <option>Pickup from warehouse</option>
        </select>
      </label>
      <label className="full">Address<input placeholder="Street, city, ZIP" /></label>
      <label className="full">Order comment<textarea placeholder="Gate code, preferred time, etc." /></label>
      <label className="full">Payment method
        <select>
          <option>Pay online by card</option>
          <option>Cash on delivery</option>
          <option>Bank transfer</option>
        </select>
      </label>
    </div>
    <button type="submit" className="btn">Confirm order</button>
  </form>
);

export default CheckoutForm;
