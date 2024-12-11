import React, { useState } from "react";
import './riddle.scss';

export default function Riddle({ solvedRiddle, setSolvedRiddle }: { solvedRiddle: boolean, setSolvedRiddle: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [riddleScrollPositions, setRiddleScrollPositions] = useState([0, 0]);

  function riddleClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number, direction: 'up' | 'down' = 'down') {
    const numberContainer = document.querySelectorAll('div.numberContainer')[index];
    const scrollPosition = numberContainer.scrollTop;
    const newPosition = direction === 'up' ? Math.max(scrollPosition - 45, 0) : Math.min(scrollPosition + 45, 405);
    numberContainer.scrollTo({ top: newPosition, behavior: 'smooth' });
  }

  function riddleScrollHandler(e: React.UIEvent<HTMLDivElement, UIEvent>, index: 0 | 1) {
    if (!solvedRiddle) {
      const newScrollPositions = [...riddleScrollPositions];
      newScrollPositions[index] = e.currentTarget.scrollTop;
      setRiddleScrollPositions(newScrollPositions);
      if (80 <= newScrollPositions[1] && newScrollPositions[1] <= 100 && 170 <= newScrollPositions[0] && newScrollPositions[0] <= 190) {
        setSolvedRiddle(true);
      }
    }
  }

  return (
    <div className='riddleContainer'>{/* Column 0 */}
      <span className='question'>What is the answer to life, the universe and everything?</span>
      <div className='fortyTwo'>
        <div>
          <button onClick={e => riddleClickHandler(e, 0, 'up')}>&rarr;</button>
          <div
            className='numberContainer'
            onScroll={e => riddleScrollHandler(e, 0)}
          >
            <span>0<br />1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9</span>
          </div>
          <button onClick={e => riddleClickHandler(e, 0)}>&larr;</button>
        </div>
        <div>
          <button onClick={e => riddleClickHandler(e, 1, 'up')}>&rarr;</button>
          <div
            className='numberContainer'
            onScroll={e => riddleScrollHandler(e, 1)}
          >
            <span>0<br />1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9</span>
          </div>
          <button onClick={e => riddleClickHandler(e, 1)}>&larr;</button>
        </div>
      </div>
    </div>
  );
}