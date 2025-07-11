import styles from "./Input.module.css"

function Input({ handleChange, hint, inputValue }) {
  return (
    <div className={`${styles["input-group"]} ${inputValue ? styles.active : ""}`}>
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
