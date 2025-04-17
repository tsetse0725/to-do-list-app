export default function Task({ id, text, isDone, onCheckbox }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#f8f9fa",
        padding: "8px 12px",
        borderRadius: 6,
        marginBottom: 8,
        opacity: 0.9,
      }}
    >
      <input
        type="checkbox"
        checked={isDone}
        style={{ marginRight: 8 }}
        onChange={() => onCheckbox(id)}
      />
      <span
        style={{ flex: 1, textDecoration: isDone ? "line-through" : "none" }}
      >
        {text}
      </span>
      <button
        onClick={() => {}}
        style={{
          background: "#ffecec",
          color: "red",
          border: "1px solid red",
          borderRadius: 5,
          padding: "4px 8px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}
