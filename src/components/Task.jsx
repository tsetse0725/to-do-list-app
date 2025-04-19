export default function Task({ id, text, isDone, onCheckbox, onDelete }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        border: "1px solid #ccc",
        borderRadius: 6,
        marginBottom: 10,
        backgroundColor: isDone ? "#f0fdf4" : "#fff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => onCheckbox(id)}
        />
        <span
          style={{
            textDecoration: isDone ? "line-through" : "none",
            flex: 1,
          }}
        >
          {text}
        </span>
      </div>

      <button
        onClick={() => onDelete(id)}
        style={{
          backgroundColor: "#ef4444",
          border: "none",
          padding: "6px 10px",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer",
        }}
      >
        🗑️ Delete
      </button>
    </div>
  );
}
