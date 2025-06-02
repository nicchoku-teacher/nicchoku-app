// /src/App.jsx
import React, { useEffect, useState } from "react";

function App() {
  const [todayInfo, setTodayInfo] = useState(null);

  useEffect(() => {
    const now = new Date();
    const mmdd = now.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
    }); // mm/dd 形式に変換

    fetch("/nannohi.json")
      .then((res) => res.json())
      .then((data) => {
        setTodayInfo(data[mmdd]);
      });
  }, []);

  return (
    <div style={{ padding: "2em", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>にっちょくアプリ</h1>
      {todayInfo ? (
        <>
          <h2>{todayInfo[0]}</h2>
          <p>{todayInfo[1]}</p>
        </>
      ) : (
        <p>今日はなんの日か見つかりませんでした。</p>
      )}
    </div>
  );
}

export default App;
