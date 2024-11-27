import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import $ from 'jquery';
import './App.css';

const App: React.FC = () => {
  const [flipAmount, setFlipAmount] = useState(0);
  const [cardDirection, setCardDirection] = useState(0);

  const cardFaces = [
    `
      <div id="wolven-dev" class="main-card">
        <h3>WOLVEN.DEV</h3>
      </div>
    `,
    `
      <div class="main-card">
        <p>My name is Jovan Kresnadi</p>
      </div>
    `,
    `
      <div class="main-card">
        <h3>Welcome!</h3>
      </div>
    `,
  ]


  const flip = () => {
    const newFlip = (flipAmount - 180);
    $('.flip-card-inner').css('--rotation', `${newFlip}deg`);
    $('.flip-card-inner').css('transform', `rotateX(--rotation)`);
    
    const changedCardFace = Math.abs(newFlip)%360 == 180 ? $("#CardBack") : $("#CardFront");
    const newCardFace = (cardDirection + 1)%cardFaces.length;
    changedCardFace.html(cardFaces[newCardFace]);
    setCardDirection(newCardFace);
    
    $('.flip-card').css('pointer-events', `none`);
    setTimeout(() => {
      
      if (newFlip <= -720) {
        $('.flip-card-inner').css('transition', `none`);
        $('.flip-card-inner').css('--rotation', `0deg`);
        setTimeout(() => {
          $('.flip-card').css('pointer-events', `auto`);
          $('.flip-card-inner').css('transition', `transform 500ms`);
          setFlipAmount(0)
        }, 50)
      }
        else {
          $('.flip-card').css('pointer-events', `auto`);
          setFlipAmount(newFlip);
        }
    }, 500)
  };

  const handleClick = (e: React.MouseEvent) => {
    flip();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
      return
  };

  return (
    <main className="App">
      <div
        id="flip-card"
        tabIndex={0}
        role="button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className="flip-card"
      >
          <div className={`flip-card-inner`}>
            <div className="flip-card-front" id="CardFront">
              <div id="wolven-dev" className="main-card">
                <h3>WOLVEN.DEV</h3>
              </div>
            </div>
            <div className="flip-card-back" id="CardBack">
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
