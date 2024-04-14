import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [isFlip, setIsFlip] = useState(false);

  const flip = () => {
    setIsFlip(!isFlip);
  };

  useEffect(() => {
    document.body.addEventListener('scroll', flip);

    return () => {
      document.body.removeEventListener('scroll', flip);
    };
  });

  return (
    <main className="App">
      <div id="flip-card" onClick={flip} className="flip-card">
        <div className={`flip-card-inner ${isFlip ? 'flip' : ''}`}>
          <div className="flip-card-front">
            <div id="wolven-dev" className="main-card">
              <h3>WOLVEN.DEV</h3>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="main-card">
              <p>My name is Jovan Kresnadi</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
