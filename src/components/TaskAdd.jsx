import { useState } from "react";
import Button from "./Button";

export default function TaskAdd({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    onAdd(text);
    setText("");
  };

  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 15 }}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          flex: 1,
          padding: 8,
          borderRadius: 6,
          border: "1px solid #ccc",
        }}
      />
      <Button label="Add" onClick={handleAdd} />
    </div>
  );
}
