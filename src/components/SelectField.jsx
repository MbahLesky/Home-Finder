import './SelectField.css';

function SelectField({ id, placeholder, label, errorText, value, name, onChange, children }) {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} name={name} onChange={onChange}>
        <option value="" disabled>{placeholder}</option>
        {children}
      </select>
      <p className="error-text">{errorText}</p>
    </div>
  );
}

export default SelectField;