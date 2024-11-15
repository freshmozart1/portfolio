import React, { useState, useEffect } from 'react';
import ContactIcons from './components/ContactIcons/contactIcons.tsx';
import 'material-symbols';
import './App.scss';

function App() {
  const [currentPage, setCurrentPage] = useState({ columnIndex: 0, rowIndex: 0 });
  const [riddleScrollPositions, setRiddleScrollPositions] = useState([0, 0]);
  const [solvedRiddle, setSolvedRiddle] = useState(false);

  function riddleClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number, direction: 'up' | 'down' = 'down') {
    const numberContainer = document.querySelectorAll('div.numberContainer')[index];
    const scrollPosition = numberContainer.scrollTop;
    const newPosition = direction === 'up' ? Math.max(scrollPosition - 45, 0) : Math.min(scrollPosition + 45, 405);
    numberContainer.scrollTo({ top: newPosition, behavior: 'smooth' });
  }

  function riddleScrollHandler(e: React.UIEvent<HTMLDivElement, UIEvent>, index: 0 | 1) {
    const newScrollPositions = [...riddleScrollPositions];
    newScrollPositions[index] = e.currentTarget.scrollTop;
    setRiddleScrollPositions(newScrollPositions);
    if (80 <= newScrollPositions[1] && newScrollPositions[1] <= 100 && 170 <= newScrollPositions[0] && newScrollPositions[0] <= 190) {
      setSolvedRiddle(true);
    }
  }

  const navigation = React.useCallback((direction: 'left' | 'right' | 'up' | 'down') => {
    const columnMap = {
      0: [[null, null, 0, 1], [null, null, 1, 2], [1, null, null, 3], [2, null, null, 4], [3, null, 2, null]],
      1: [[null, 1, null, null], [null, 1, null, null], [null, 4, null, 3], [2, 4, null, null]]
    };
    const [dir, rowOffset] = {
      left: [0, 0],
      up: [1, -1],
      down: [2, 1],
      right: [3, 0]
    }[direction];
    if (dir !== undefined) {
      const newColumnIndex = columnMap[currentPage.rowIndex][currentPage.columnIndex][dir];
      const newRowIndex = currentPage.rowIndex + rowOffset;
      const nextRow = document.querySelectorAll('div.columns')[newRowIndex];
      const nextPage = nextRow?.childNodes[newColumnIndex] as HTMLElement;
      if (newRowIndex !== currentPage.rowIndex && nextRow) {
        nextRow.scrollTo({ left: nextPage.offsetLeft, behavior: 'auto' });
      }
      if (nextPage) {
        setCurrentPage({ columnIndex: newColumnIndex, rowIndex: newRowIndex });
        nextPage.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [currentPage]);

  useEffect(() => {
    function handleArrowKeyPress(event: KeyboardEvent) {
      const keyMap = {
        ArrowLeft: currentPage.columnIndex === 1 && currentPage.rowIndex === 0 ? 'down' : 'left',
        ArrowRight: 'right',
        ArrowUp: 'up',
        ArrowDown: 'down'
      };
      if (keyMap[event.key]) {
        navigation(keyMap[event.key]);
      }
    }

    window.addEventListener('keyup', handleArrowKeyPress);
    return () => {
      window.removeEventListener('keyup', handleArrowKeyPress);
    };
  }, [currentPage, navigation]);

  return (
    <div className="rows">
      <div className='columns'>
        <div className='riddleContainer'>
          <div className="content">
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
          <div className="navigation">
            <button className='help' onClick={e => {
              navigation('down');
            }}>
              ?
            </button>
            <button onClick={e => {
              navigation('right');
            }}>Portfolio &rarr;</button>
          </div>
        </div>
        <div className='transitionContainer'>
          <div className="content">
            {!solvedRiddle && <span>
              Although your answer was false, it doesn't truly matter,
              as the question itself has always remained elusive.
              In a universe filled with infinite possibilities,
              my mission is to navigate through this uncertainty
              and find meaningful solutions through code.
            </span>}
            {solvedRiddle && <span>
              In a universe filled with infinite possibilities,
              my mission is to find meaningful solutions through code.
            </span>}
          </div>
          <div className="navigation">
            <button
              onClick={e => {
                navigation('down');
              }}
            >
              &larr;
            </button>
            <button onClick={e => {
              navigation('right');
            }}>
              &rarr;
            </button>
          </div>
        </div>
        <div className='profilePictureContainer'>
          <div className="navigation">
            <button onClick={e => {
              navigation('left');
            }}>&larr;</button>
            <span>This is me.</span>
            <button onClick={e => {
              navigation('right');
            }}>&rarr;</button>
          </div>
        </div>
        <div className='skillsContainer'>
          <div className="content">
            <span>I'm a <b>certified full-stack developer</b> who has worked for a online marketing agency before and is now looking for new challenges.</span>
            <div className="skills">
              <div className="skillNames">
                <span>JavaScript</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>AWS</span>
                <span>MongoDB</span>
              </div>
              <div className='skillStars'>
                <span>★★★★★</span>
                <span>★★★★☆</span>
                <span>★★★★☆</span>
                <span>★★★☆☆</span>
                <span>★★★☆☆</span>
              </div>
            </div>
          </div>
          <div className="navigation">
            <button onClick={e => {
              navigation('left');
            }}>&larr;</button>
            <button onClick={e => {
              navigation('right');
            }}>&rarr;</button>
          </div>
        </div>
        <div className='contactContainer'>
          <div className="content">
            <span>Contact me</span>
            <ContactIcons />
            <span>Or look at some of my projects</span>
          </div>
          <div className="navigation">
            <button onClick={e => {
              navigation('left');
            }}>&larr;</button>
            <button onClick={e => {
              navigation('down');
            }}>Projects &darr;</button>
          </div>
        </div>
      </div>
      <div className='columns'>
        <div className='solutionContainer'>
          <div className="content">
            <span className="solution">42</span>
            <span><b>42</b> is a reference to the science fiction novel <b>'The Hitchhiker's Guide to the Galaxy'</b>.</span>
          </div>
          <div className="navigation">
            <button>
              W
            </button>
            <button onClick={e => {
              setSolvedRiddle(true);
              navigation('up');
            }}>&uarr;</button>
          </div>
        </div>
        <div className='sorryContainer'>
          <div className='content'>
            <span>Sorry, you can't go back. Earth was destroyed five minutes ago.</span>
          </div>
          <div className='navigation'>
            <button onClick={e => {
              navigation('up');
            }}>&uarr;</button>
          </div>
        </div>
        <div className='tweContainer'>
          <div className="content">
            twe
          </div>
          <div className="navigation">
            <button onClick={e => {
              navigation('up');
            }}>&uarr;</button>
            <button onClick={e => {
              navigation('right');
            }}>&rarr;</button>
          </div>
        </div>
        <div className='myFlixContainer'>
          <div className="content">
            myFlix
          </div>
          <div className="navigation">
            <button onClick={e => {
              navigation('left');
            }}>&larr;</button>
            <button onClick={e => {
              navigation('up');
            }}>&uarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
