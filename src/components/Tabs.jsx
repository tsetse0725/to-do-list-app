export default function Tabs() {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <button style={tabStyle(true)}>All</button>
      <button style={tabStyle(false)}>Active</button>
      <button style={tabStyle(false)}>Completed</button>
    </div>
  );
}

function tabStyle(active) {
  return {
    padding: "6px 14px",
    backgroundColor: active ? "#3B82F6" : "#F3F4F6",
    color: active ? "white" : "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
}
