import React, { useState, useEffect, useCallback } from 'react';
import ContactIcons from './components/ContactIcons/contactIcons.tsx';
import 'material-symbols';
import './App.scss';
// @ts-ignore
import koester from './assets/koester.jpg';
// @ts-ignore
import twe_header from './assets/twe_header.png';
// @ts-ignore
import myFlix_header from './assets/myflix_header.png';

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

  const navigation = useCallback((direction: 'left' | 'up' | 'down' | 'right') => {
    const columnMap = {
      0: [
        [null, null, 0, 1],
        [null, null, 1, 2],
        [1, null, 2, 3],
        [2, null, null, 4],
        [3, null, 4, null]
      ],
      1: [
        [null, 1, null, null],
        [null, 1, null, null],
        [null, 2, null, 3],
        [2, 2, null, null],
        [null, 4, null, 5],
        [4, 4, null, null]
      ]
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
      if (newRowIndex !== currentPage.rowIndex && nextRow && nextPage) {
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
        ArrowLeft: (currentPage.columnIndex === 1 && currentPage.rowIndex === 0) ? 'down' : 'left',
        ArrowRight: 'right',
        ArrowUp: 'up',
        ArrowDown: currentPage.columnIndex === 1 && currentPage.rowIndex === 0 ? null : 'down'
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
      <div className='columns'>{/* Row 0 */}
        <div className='riddleContainer'>{/* Column 0 */}
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
        <div className='transitionContainer'>{/* Column 1 */}
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
        <div className='profilePictureContainer'>{/* Column 2 */}
          <div className="imageContainer"><img src={koester} alt='profile picture of me' /></div>
          <div className="navigation">
            <button onClick={e => {
              navigation('left');
            }}>&larr;</button>
            <button onClick={e => navigation('down')}>My Journey &darr;</button>
            <button onClick={e => {
              navigation('right');
            }}>&rarr;</button>
          </div>
        </div>
        <div className='skillsContainer'>{/* Column 3 */}
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
        <div className='contactContainer'>{/* Column 4 */}
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
      <div className='columns'>{/* Row 1 */}
        <div className='solutionContainer'>{/* Column 0 */}
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
        <div className='sorryContainer'>{/* Column 1 */}
          <div className='content'>
            <span>Sorry, you can't go back. Earth was destroyed five minutes ago.</span>
          </div>
          <div className='navigation'>
            <button onClick={e => {
              navigation('up');
            }}>&uarr;</button>
          </div>
        </div>
        <div className='aboutMeContainer'>{/* Column 2 */}
          <div className='content'>
            <span>&gt; Started programming batch scripts and HTML at age six.</span>
            <span>&gt; Worked as a developer for a online marketing agency in 2018<br />&gt; Was part of small teams (designer, developer, project owner)</span>
            <span>&gt; Developed a lottery website for a Bundesliga Club and its sponsor<br />&gt; Integrated a new booking process into a website for a van rental service</span>
          </div>
          <div className='navigation'>
            <button onClick={e => {
              navigation('up');
            }}>&uarr;</button>
            <button onClick={e => {
              navigation('right');
            }}>&rarr;</button>
          </div>
        </div>
        <div className="aboutMeContainer">{/* Column 3 */}
          <div className="content">
            <span>&gt; Agency couldn't pay me anymore, because of financial problems</span>
            <span>&gt; Transported up to 40 diverse customers/day (people with disabilities, elderlies, kids) as a bus driver<br />&gt; Managed stressful situations (angry customers, physical attacks, traffic accidents)</span>
            <span>&gt; Took a web development course in 2024 to refresh and expand my knowledge</span>
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
        <div className='tweContainer'>{/* Column 4 */}
          <div className='imageContainer'>
            <img src={twe_header} />
          </div>
          <div className="content">
            <span><b>Talk With Everyone</b></span>
            <span>&gt; <b>chat app</b> for Android/iOS</span>
            <span>&gt; Google <b>Firebase</b><br />&gt; Google Firestore<br />&gt; Google Cloud Storage<br />&gt; <b>React Native</b></span>
          </div>
          <div className="navigation">
            <button onClick={e => {
              navigation('up');
            }}>&uarr;</button>
            <button>Case Study &darr;</button>
            <button onClick={e => {
              navigation('right');
            }}>&rarr;</button>
          </div>
        </div>
        <div className='myFlixContainer'>{/* Column 5 */}
          <div className='imageContainer'>
            <img src={myFlix_header} />
          </div>
          <div className="content">
            <span><b>myFlix</b></span>
            <span>&gt; Users can upload information about movies to a <b>movie database</b>, search for movies and highlight favourites.</span>
            <span>&gt; Amazon Web Services<br />&gt; <b>React</b><br />&gt; Bootstrap<br />&gt; <b>MongoDB</b></span>
          </div>
          <div className="navigation">
            <button onClick={e => {
              navigation('left');
            }}>&larr;</button>
            <button>Try</button>
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
