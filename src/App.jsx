import React from 'react';
import anniversaries from './data/anniversaries.json';

const getTodayInfo = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return anniversaries.find(item => item.month === month && item.day === day);
};

function App() {
  const today = getTodayInfo();
  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>にっちょくアプリ</h1>
      {today ? (
        <>
          <h2>{today.title}</h2>
          <p>{today.text}</p>
        </>
      ) : (
        <p>今日はなんの日か見つかりませんでした。</p>
      )}
    </div>
  );
}

export default App;
