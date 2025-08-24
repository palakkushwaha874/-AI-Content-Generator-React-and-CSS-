import { useState } from "react";
import "./App.css";

export default function App() {
  const [topic, setTopic] = useState("");
  const [history, setHistory] = useState([]);

  const handleGenerate = () => {
    if (!topic.trim()) return;

    const newContent = {
      topic,
      text: `✨ AI Generated Content for "${topic}"\n\nHere is some creative content about ${topic}. 🚀`,
      time: new Date().toLocaleTimeString(),
    };

    setHistory([newContent, ...history]); // Add new content on top
    setTopic(""); // Clear input
  };

  return (
    <div className="app">
      <header className="header">
        <h1>⚡ AI Content Generator</h1>
        <p>Generate new content and view history of all generated texts</p>
      </header>

      <div className="generator-box">
        <input
          type="text"
          placeholder="Type your topic here..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button onClick={handleGenerate}>Generate</button>
      </div>

      <div className="content-list">
        {history.length === 0 ? (
          <p className="empty">No content yet. Enter a topic and click Generate!</p>
        ) : (
          history.map((item, index) => (
            <div key={index} className="content-card">
              <h3>📝 {item.topic}</h3>
              <pre>{item.text}</pre>
              <span className="time">Generated at {item.time}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}



