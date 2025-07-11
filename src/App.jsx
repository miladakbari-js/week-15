import { useState } from "react";
import Input from "./Input";
import cities from "./cities.json";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [hint, setHint] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // if (!value) {
    //   setHint("");
    // } else {
    //   const match = cities.find((city) => city.startsWith(value));
    //   setHint(match || "");
    // }

    const closestMatch = cities.find((city) => city.startsWith(value)) || "";
    setHint(value ? closestMatch : "");
  };

  return (
    <div>
      <Input hint={hint} handleChange={handleChange} inputValue={inputValue} />
    </div>
  );
}

export default App;
