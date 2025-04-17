import { useState } from "react";
import TaskAdd from "@/components/TaskAdd";
import Task from "@/components/Task";

let nextId = 1;

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const addTask = (text) => {
    setTasks([...tasks, { id: nextId++, text }]);
  };
  const handleCheckbox = (id) => {
    console.log("checkbox clicked, ID:", id);
  };
  return (
    <div
      style={{
        maxWidth: 400,
        margin: "30px auto",
        padding: 20,
        background: "white",
        borderRadius: 10,
        boxShadow: "0 0 10px #ccc",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        To-Do List
      </h1>

      <TaskAdd onAdd={addTask} />

      <div
        style={{
          display: "flex",
          gap: 8,
          justifyContent: "center",
          marginBottom: 15,
        }}
      >
        {["All", "Active", "Completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => {}}
            style={{
              padding: "6px 12px",
              border: "none",
              borderRadius: 5,
              backgroundColor: tab === "All" ? "#007BFF" : "#eee",
              color: tab === "All" ? "white" : "black",
              cursor: "pointer",
              opacity: 0.9,
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {tasks.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: "#888",
            fontStyle: "italic",
          }}
        >
          No tasks yet. Add one above!
        </p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            text={task.text}
            id={task.id}
            onCheckbox={handleCheckbox}
          />
        ))
      )}

      <p
        style={{
          textAlign: "center",
          marginTop: 20,
          color: "#666",
          fontSize: 14,
        }}
      >
        Powered by{" "}
        <a
          href="https://ikon.mn"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007BFF", textDecoration: "none" }}
        >
          Pinecone academy
        </a>
      </p>
    </div>
  );
}

//checkbox дээр дарахад console.log-дог байх. ID-аар логддог байх.

//uuid
