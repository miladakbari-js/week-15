import styles from "./App.module.css";
import { useState } from "react";
import Input from "./Input";
import cities from "./cities.json";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [hint, setHint] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const closestMatch = cities.find((city) => city.startsWith(value)) || "";
    setHint(value ? closestMatch : "");
  };

  return (
    <div className={styles.container}>
      <img src="./start.png" alt="startpic" />
      <div className={styles.search}>
        <h1>Search Cities</h1>
        <Input
          hint={hint}
          handleChange={handleChange}
          inputValue={inputValue}
        />
      </div>
    </div>
  );
}

export default App;
