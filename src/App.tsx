import React, { useState } from 'react';
import './App.scss';

function App() {
  const [scrollPositions, setScrollPositions] = useState([0, 0]);

  function riddleScrollHandler(e: React.UIEvent<HTMLDivElement, UIEvent>, index: number) {
    const newScrollPositions = [...scrollPositions];
    newScrollPositions[index] = e.currentTarget.scrollTop;
    setScrollPositions(newScrollPositions);
    if (80 <= scrollPositions[1] && scrollPositions[1] <= 100 && 170 <= scrollPositions[0] && scrollPositions[0] <= 190) {
      document.querySelector('div.mainContainer')?.scrollTo({ left: 320, behavior: 'smooth' });
    }
  }

  return (
    <div className='mainContainer'>
      <div className='riddleContainer'>
        <div className='question'>What is the answer to life, the universe and everything?</div>
        <div className='fortyTwo'>
          <div>
            <span>&gt;</span>
            <div
              className='numberContainer'
              onScroll={e => riddleScrollHandler(e, 0)}
            >
              <span>0<br />1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9</span>
            </div>
            <span>&lt;</span>
          </div>
          <div>
            <span>&gt;</span>
            <div
              className='numberContainer'
              onScroll={e => riddleScrollHandler(e, 1)}
            >
              <span>0<br />1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9</span>
            </div>
            <span>&lt;</span>
          </div>
        </div>
        <div className='help'>
          Help!
          <span>&gt;</span>
        </div>
      </div>
      <div className='transitionContainer'>
        <span>Congratulations! You are right, but the quest doesn't end at <b>42</b>.<br /> In a universe filled with infinite possibilities, my mission is to find meaningful solutions through code.</span>
      </div>
    </div>
  );
}

export default App;
