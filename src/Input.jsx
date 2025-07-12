import styles from "./Input.module.css";

function Input({ handleChange, hint, inputValue, error }) {
  return (
    <div
      className={`${styles["input-group"]} ${inputValue ? styles.active : ""}`}
    >
      <label htmlFor="input">{hint}</label>
      <input
        type="text"
        id="input"
        onChange={handleChange}
        placeholder={hint}
        className={error ? styles.error : ""}
      />
      <div className={styles.error_box}>
        {error && (
          <p className={styles.error_message}>
            The entered value must contain only upper Latin letters.
          </p>
        )}
      </div>
    </div>
  );
}

export default Input;
