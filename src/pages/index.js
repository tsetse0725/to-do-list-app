import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskAdd from "@/components/TaskAdd";
import Task from "@/components/Task";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");

  const addTask = (text) => {
    setTasks([...tasks, { id: uuidv4(), text, isDone: false }]);
  };

  const handleCheckbox = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  };

  const clearCompleted = () => {
    const activeTasks = tasks.filter((task) => !task.isDone);
    setTasks(activeTasks);
  };

  const completedCount = tasks.filter((task) => task.isDone).length;
  const totalCount = tasks.length;

  const filteredTasks = tasks.filter((task) => {
    if (selectedTab === "All") return true;
    if (selectedTab === "Active") return !task.isDone;
    if (selectedTab === "Completed") return task.isDone;
  });

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
      <h1 style={{ textAlign: "center" }}>To-Do List</h1>

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
            onClick={() => setSelectedTab(tab)}
            style={{
              padding: "6px 12px",
              border: "none",
              borderRadius: 5,
              backgroundColor: selectedTab === tab ? "#007BFF" : "#eee",
              color: selectedTab === tab ? "white" : "black",
              cursor: "pointer",
              opacity: 0.9,
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          isDone={task.isDone}
          onCheckbox={handleCheckbox}
          onDelete={deleteTask}
        />
      ))}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 16,
          fontSize: 14,
        }}
      >
        <span>{`${completedCount} of ${totalCount} tasks completed`}</span>

        {completedCount > 0 && (
          <button
            onClick={clearCompleted}
            style={{
              border: "none",
              background: "transparent",
              color: "red",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Clear Completed
          </button>
        )}
      </div>

      <p style={{ textAlign: "center", fontSize: 13, marginTop: 20 }}>
        Powered by{" "}
        <a
          href="https://ikon.mn"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#3B73ED" }}
        >
          Pinecone academy
        </a>
      </p>
    </div>
  );
}
