import './TextField.css';

function TextField({ id, type, placeholder, label, errorText, value, name, onChange }) {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} id={id} value={value} name={name} onChange={onChange}/>
      <p className="error-text">{errorText}</p>
    </div>
  );
}

export default TextField;