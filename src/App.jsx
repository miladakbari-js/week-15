import styles from "./App.module.css";
import { useState } from "react";
import Input from "./Input";
import cities from "./cities.json";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [hint, setHint] = useState("");
  const [error , setError] = useState(false)

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const closestMatch = cities.find((city) => city.startsWith(value)) || "";
    setHint(value ? closestMatch : "");

    const invalidPattern =/^[A-Z][a-z]*$/;

    setError(value !== "" && !invalidPattern.test(value));
  };

  return (
    <div className={styles.container}>
      <img src="./start.png" alt="startpic" />
      <div className={styles.search}>
        <h1>City Search Tool</h1>
        <p>Start typing a city name to see matching results in real-time.</p>
        <Input
          hint={hint}
          handleChange={handleChange}
          inputValue={inputValue}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
