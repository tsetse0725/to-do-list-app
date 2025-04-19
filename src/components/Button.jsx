export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: 5,
        padding: "8px 14px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}
