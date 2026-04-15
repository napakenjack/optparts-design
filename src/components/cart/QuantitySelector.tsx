type QuantitySelectorProps = { value: number; onChange: (value: number) => void };

const QuantitySelector = ({ value, onChange }: QuantitySelectorProps) => (
  <div className="qty" aria-label="Quantity selector">
    <button type="button" onClick={() => onChange(Math.max(1, value - 1))}>−</button>
    <input value={value} onChange={(event) => onChange(Number(event.target.value) || 1)} />
    <button type="button" onClick={() => onChange(value + 1)}>+</button>
  </div>
);

export default QuantitySelector;
