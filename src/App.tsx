import React, { useState } from 'react';
import { gsap } from 'gsap';
import $ from 'jquery';
import './App.css';

const X_SPIN_DEG = 10;
const Y_SPIN_DEG = 25;
const CARD_DEADZONE_X = 0.4;
const CARD_DEADZONE_Y = 0.5;

const App: React.FC = () => {
  const [isFlip, setIsFlip] = useState(false);

  const pages = [
    {
      content: `
        <div id="wolven-dev" className="main-card">
          <h3>WOLVEN.DEV</h3>
        </div>
        `,
    },
    {
      content: `
        <div id="wolven-dev" className="main-card">
          <h3>WOLVEN.DEV</h3>
        </div>
        `,
    },
    {
      content: `
        <div className="main-card">
          <p>My name is Jovan Kresnadi</p>
        </div>
        `,
    },
    {
      content: `
        <div className="main-card">
          <p>Welcome to my page :)</p>
        </div>
        `,
    },
  ];

  const flip = () => {
    setIsFlip(!isFlip);
  };

  function clamp(num: number, min: number, max: number): number {
    return num <= min ? min : num >= max ? max : num;
  }

  const handleClick = (e: React.MouseEvent) => {
    console.log(e.pageX);
    console.log(e.pageY);
    flip();
    animateFlip(e.pageX, e.pageY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    animateCard(e.pageX, e.pageY);
  };

  const calculateRotation = (mouseX: number, mouseY: number, isFlip: boolean) => {
    const cardPosition = $('#flip-card').position();
    const posX = mouseX - Math.floor(cardPosition.left);
    const posY = mouseY - Math.floor(cardPosition.top);
    const cardHeight = $('#flip-card').outerHeight() ?? 0;
    const halfCardHeight = cardHeight / 2;
    const cardWidth = $('#flip-card').outerWidth() ?? 0;
    const halfCardWidth = cardWidth / 2;

    const x = posX - cardWidth / 2;
    const y = cardHeight / 2 - posY;

    const cardZoneStartX = halfCardWidth * CARD_DEADZONE_X;
    const cardZoneStartY = halfCardHeight * CARD_DEADZONE_Y;

    const cardZoneX = halfCardWidth * CARD_DEADZONE_X;
    const cardZoneY = halfCardHeight * CARD_DEADZONE_Y;

    const xClamp = clamp(Math.abs(x), cardZoneStartX, halfCardWidth);
    const yClamp = clamp(Math.abs(y), cardZoneStartY, halfCardHeight);

    const isFlipped = isFlip ? 1 : -1;
    const xMult = ((((xClamp - cardZoneStartX) / cardZoneX) * x) / Math.abs(x)) * -1;
    const yMult = ((((yClamp - cardZoneStartY) / cardZoneY) * y) / Math.abs(y)) * isFlipped;
    const direction = isFlip ? -180 : 0;
    return { rotateY: xMult * X_SPIN_DEG + direction, rotateX: yMult * Y_SPIN_DEG };
  };

  const animateCard = (mouseX: number, mouseY: number) => {
    if (isFlip) return;
    const { rotateY, rotateX } = calculateRotation(mouseX, mouseY, isFlip);

    $('.flip-card-inner').css('transition', `transform ${rotateY > 0 && rotateX > 0 ? '200' : '800'}ms`);
    $('.flip-card-inner').css('transform', `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`);
  };

  const animateFlip = (mouseX: number, mouseY: number) => {
    const { rotateY, rotateX } = calculateRotation(mouseX, mouseY, !isFlip);

    $('.flip-card-inner').css('transition', `transform 800ms`);
    $('.flip-card-inner').css('transform', `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`);
  };

  const handleMouseLeave = () => {
    $('.flip-card-inner').css('transition', `transform 800ms`);
    $('.flip-card-inner').css('transform', `rotateY(${isFlip ? -180 : 0}deg) rotateX(0deg)`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    // if (e.key == 'Enter') {
    //   const cardPosition = $('#flip-card').position();
    //   const cardHeight = $('#flip-card').outerHeight() ?? 0;
    //   const halfCardHeight = cardHeight / 2;
    //   const cardWidth = $('#flip-card').outerWidth() ?? 0;
    //   const halfCardWidth = cardWidth / 2;
    //   animateFlip(cardPosition.left + halfCardWidth, cardPosition.top + halfCardHeight);
    //   flip();
    // }
  };

  return (
    <main className="App">
      {/* <div id="flip-card" onClick={flip} className="flip-card"> */}
      <div
        id="flip-card"
        tabIndex={0}
        role="button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flip-card"
      >
        <div className={`flip-card-inner ${isFlip ? 'flip' : ''}`}>
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
