import React, { useState } from "react";
import "./History.css";

function History() {
  // Sample image history (replace with your backend data later)
  const [history, setHistory] = useState([
    { id: 1, src: "/assets/1.jpg", title: "Upscaled Portrait" },
    { id: 2, src: "/assets/2.jpg", title: "Landscape Enhanced" },
    { id: 3, src: "/assets/3.jpg", title: "AI Restored Photo" },
    { id: 4, src: "/assets/4.jpg", title: "Old Memory Fixed" },
  ]);

  return (
    <div className="history-container">
      <h2 className="history-title animate-slide-down">🖼 Your Image History</h2>
      <p className="history-subtitle animate-fade-in">
        All your previously enhanced images are saved here.
      </p>

      <div className="history-grid">
        {history.map((item) => (
          <div key={item.id} className="history-card animate-scale-up">
            <img src={item.src} alt={item.title} className="history-img" />
            <div className="history-overlay">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
