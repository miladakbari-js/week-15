function Input({ handleChange, hint, inputValue }) {
  return (
    <div className={`input-group ${inputValue ? "active" : ""}`}>
      <label htmlFor="input">{hint}</label>
      <input
        type="text"
        id="input"
        onChange={handleChange}
        placeholder={hint}
        
      />
    </div>
  );
}

export default Input;
