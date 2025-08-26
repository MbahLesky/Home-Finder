import './TextField.css';

function TextField({ id, type, placeholder, label, errorText, value }) {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} id={id} value={value}/>
      <p className="error-text">{errorText}</p>
    </div>
  );
}

export default TextField;