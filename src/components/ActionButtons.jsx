export default function ActionButtons({ onDelete }) {
  return (
    <div style={styles.container}>
      <button onClick={onDelete} style={styles.delete}>
        🗑️ Delete
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  delete: {
    backgroundColor: "#ef4444",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
  },
};
