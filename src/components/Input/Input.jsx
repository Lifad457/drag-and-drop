import { useState } from "react";

import { InputContainer } from "../../styles/input.css";

export const Input = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input) return;

    onSubmit(input);

    setInput("");
  };

  return (
    <InputContainer>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>
        Add
      </button>
    </InputContainer>
  );
};