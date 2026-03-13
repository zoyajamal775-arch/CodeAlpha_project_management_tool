import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTasks, FaSpinner, FaCheckCircle } from "react-icons/fa";

function App() {
  const [tasks, setTasks] = useState({ todo: [], inProgress: [], done: [] });

  // Fetch tasks from backend
  useEffect(() => {
    axios.get("http://localhost:5000/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  }, []);

  const columnStyle = {
    background: "#fff",
    padding: "20px",
    width: "280px",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s"
  };

  const taskStyle = {
    background: "#f7f7f7",
    padding: "10px",
    borderRadius: "8px",
    margin: "8px 0",
    cursor: "pointer",
    transition: "background 0.3s, transform 0.2s"
  };

  const renderTasks = (taskArray) =>
    taskArray.map((task, index) => (
      <div
        key={index}
        style={taskStyle}
        onMouseEnter={e => { e.currentTarget.style.background = "#e0f7fa"; e.currentTarget.style.transform = "scale(1.03)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "#f7f7f7"; e.currentTarget.style.transform = "scale(1)"; }}
      >
        {task}
      </div>
    ));

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", background: "#eef2f5", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>🚀 Project Management Tool</h1>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Interactive Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        <div style={columnStyle}>
          <h3 style={{ color: "#ff6b6b", display: "flex", alignItems: "center", gap: "8px" }}><FaTasks /> TODO</h3>
          {renderTasks(tasks.todo)}
        </div>

        <div style={columnStyle}>
          <h3 style={{ color: "#feca57", display: "flex", alignItems: "center", gap: "8px" }}><FaSpinner /> IN PROGRESS</h3>
          {renderTasks(tasks.inProgress)}
        </div>

        <div style={columnStyle}>
          <h3 style={{ color: "#1dd1a1", display: "flex", alignItems: "center", gap: "8px" }}><FaCheckCircle /> DONE</h3>
          {renderTasks(tasks.done)}
        </div>
      </div>
    </div>
  );
}

export default App;