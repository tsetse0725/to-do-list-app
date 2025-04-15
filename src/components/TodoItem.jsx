import { Trash2 } from "lucide-react";

export default function TodoItem({ text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <input type="checkbox" style={{ marginRight: "10px" }} />
      <span style={{ flex: 1 }}>{text}</span>
      <button
        style={{
          background: "crimson",
          color: "white",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
