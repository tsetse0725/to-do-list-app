export default function TodoInput() {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Add a new task..."
        style={{
          flex: 1,
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#3B82F6",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </div>
  );
}
