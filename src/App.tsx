import React, { useState, useEffect } from 'react';
import ContactIcons from './components/ContactIcons/contactIcons.tsx';
import 'material-symbols';
import './App.scss';
// @ts-ignore
import koester from './assets/koester.jpg';
// @ts-ignore
import twe_header from './assets/twe_header.png';
// @ts-ignore
import myFlix_header from './assets/myflix_header.png';
// @ts-ignore
import twe_start_screen from './assets/twe_start_screen.png';
// @ts-ignore
import twe_code_snippet from './assets/twe_code_snippet.png';
// @ts-ignore
import twe_mockup from './assets/twe_mockup.png';
// @ts-ignore
import twe_gifted_chat from './assets/twe_gifted_chat.png';
// @ts-ignore
import twe_map from './assets/twe_map.png';
// @ts-ignore
import twe_test_message from './assets/twe_test_message.png';
import Navigation, { navigate } from './components/Navigation/navigation.tsx';

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
    if (!solvedRiddle) {
      const newScrollPositions = [...riddleScrollPositions];
      newScrollPositions[index] = e.currentTarget.scrollTop;
      setRiddleScrollPositions(newScrollPositions);
      if (80 <= newScrollPositions[1] && newScrollPositions[1] <= 100 && 170 <= newScrollPositions[0] && newScrollPositions[0] <= 190) {
        setSolvedRiddle(true);
      }
    }
  }

  useEffect(() => {
    if (solvedRiddle) navigate('right', currentPage, setCurrentPage);
  }, [solvedRiddle]);

  return (
    <div className="rows">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
        </div>
        <div className='profilePictureContainer'>{/* Column 2 */}
          {/* eslint-disable-next-line */}
          <div className="imageContainer"><img src={koester} alt='profile picture of me' /></div>
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
        </div>
        <div className='contactContainer'>{/* Column 4 */}
          <div className="content">
            <span>Contact me</span>
            <ContactIcons />
            <span>Or look at some of my projects</span>
          </div>
        </div>
      </div>
      <div className='columns'>{/* Row 1 */}
        <div className='solutionContainer'>{/* Column 0 */}
          <div className="content">
            <span className="solution">42</span>
            <span><b>42</b> is a reference to the science fiction novel <b>'The Hitchhiker's Guide to the Galaxy'</b>.</span>
          </div>
        </div>
        <div className='sorryContainer'>{/* Column 1 */}
          <div className='content'>
            <span>Sorry, you can't go back. Earth was destroyed five minutes ago.</span>
          </div>
        </div>
        <div className='aboutMeContainer'>{/* Column 2 */}
          <div className='content'>
            <span>&gt; Started programming batch scripts and HTML at age six.</span>
            <span>&gt; Worked as a developer for a online marketing agency in 2018<br />&gt; Was part of small teams (designer, developer, project owner)</span>
            <span>&gt; Developed a lottery website for a Bundesliga Club and its sponsor<br />&gt; Integrated a new booking process into a website for a van rental service</span>
          </div>
        </div>
        <div className="aboutMeContainer">{/* Column 3 */}
          <div className="content">
            <span>&gt; Agency couldn't pay me anymore, because of financial problems</span>
            <span>&gt; Transported up to 40 diverse customers/day (people with disabilities, elderlies, kids) as a bus driver<br />&gt; Managed stressful situations (angry customers, physical attacks, traffic accidents)</span>
            <span>&gt; Took a web development course in 2024 to refresh and expand my knowledge</span>
          </div>
        </div>
        <div className='tweContainer'>{/* Column 4 */}
          <div className='imageContainer'><img src={twe_header} alt='' aria-hidden='true' /></div>
          <div className="content">
            <span><b>Talk With Everyone</b></span>
            <span>&gt; <b>chat app</b> for Android/iOS</span>
            <span>&gt; Google <b>Firebase</b><br />&gt; Google Firestore<br />&gt; Google Cloud Storage<br />&gt; <b>React Native</b></span>
          </div>
        </div>
        <div className='myFlixContainer'>{/* Column 5 */}
          <div className='imageContainer'><img src={myFlix_header} alt='' aria-hidden='true' /></div>
          <div className="content">
            <span><b>myFlix</b></span>
            <span>&gt; Users can upload information about movies to a <b>movie database</b>, search for movies and highlight favourites.</span>
            <span>&gt; Amazon Web Services<br />&gt; <b>React</b><br />&gt; Bootstrap<br />&gt; <b>MongoDB</b></span>
          </div>
        </div>
      </div>
      <div className='columns'>{/* Row 2 */}
        <div className="caseStudyContainer">{/* Column 0 */}
          <div className="content">
            <span><b>Overview</b></span>
            <span>&gt; chat application, where users can give themselves names and exchange messages without the need of creating an account</span>
          </div>
        </div>
        <div className="caseStudyContainer">{/* Column 1 */}
          <div className="content">
            <span><b>Purpose</b></span>
            <span>&gt; Showcase my JavaScript skills</span>
            <span>&gt; Development was part of my Full-Stack Web Development course at CareerFoundry.com</span>
          </div>
        </div>
        <div className="caseStudyContainer">{/* Column 2 */}
          <div className="content">
            <span><b>Objective</b></span>
            <span>&gt; Enhance my portfolio by adding a mobile app that relies on serverless architecture</span>
            <span>&gt; Create a complete chat application (front-/backend) from scratch</span>
          </div>
        </div>
        <div className="caseStudyContainer">{/* Column 3 */}
          <div className="content">
            <span><b>My Role</b></span>
            <span>&gt; Worked alone on this project<br />&gt; Was responsible for everything</span>
            <span>&gt; Occasionally received help from my tutor at CareerFoundry</span>
          </div>
        </div>
        <div className="caseStudyContainer">{/* Column 4 */}
          <div className="content">
            <span><b>Tech Stack</b></span>
            <span>&gt; Backend (Google):<br />Firebase<br />Firestore<br />Cloud Storage</span>
            <span>&gt; Frontend (JavaScript):<br />Node.js<br />React Native</span>
          </div>
        </div>
        <div className="caseStudyContainer">{/* Column 5 */}
          <div className="content">
            <span><b>Backend</b></span>
            <span>&gt; Created a Google Firestore database for storing the messages</span>
            <span>&gt; Firestore is a real-time database that notifies all connected clients, when new data is available</span>
            <span>&gt; Images are stored in a separate Google Cloud Storage Bucket</span>
            <span>&gt; Buckets are basic Google Cloud Storage containers that can store files</span>
          </div>
        </div>
        <div className="caseStudyContainer">{/* Column 6 */}
          <div className="imageContainer"><img src={twe_start_screen} alt="Talk With Everyone App Start Screen" /></div>
          <div className="content">
            <span><b>Backend: Google Firebase Authentication</b></span>
            <span>&gt; Before using Firestore, it's necessary to authenticate a client anonymously</span>
            <span>&gt; Firebase generates a random id and authenticates the client anonymously, when a user clicks on "Start Chatting"</span>
          </div>
        </div>
        <div className="caseStudyContainer">{/* Column 7 */}
          <div className="imageContainer"><img src={twe_code_snippet} alt="A code snippet that stores a new location message in the database" /></div>
          <div className="content">
            <span><b>Backend: Google Firestore</b></span>
            <span>&gt; The structure of the database is defined in the frontend</span>
            <span aria-hidden="true">&gt; Picture shows a code snippet that stores a new location message in the database</span>
          </div>
        </div>
        <div className="caseStudyContainer">{/* Column 8 */}
          <div className="imageContainer"><img src={twe_mockup} alt="A mockup of the apps start screen" /></div>
          <div className="content">
            <span><b>Building the interface</b></span>
            <span>&gt; CareerFoundry sent me detailed instructions about how the apps start screen should look like</span>
            <span>&gt; I sped up development process by using prefabricated React Native Components</span>
          </div>
        </div>
        <div className="caseStudyContainer">{/* Column 9 */}
          <div className="imageContainer"><img src={twe_gifted_chat} alt="A code snippet that shows the REACT component responsible for creating the Chat screen" /></div>
          <div className="content">
            <span><b>The Chat</b></span>
            <span>&gt; I used the node package "react-native-gifted-chat" for creating the chat screen</span>
            <span>&gt; CareerFoundry didn't provide any details describing the design of the chat screen, so I used the standard design of "react-native-gifted-chat"</span>
          </div>
        </div>
        <div className="caseStudyContainer">{/* Column 10 */}
          <div className="imageContainer"><img src={twe_map} alt="A screenshot that shows a chat bubble" /></div>
          <div className="content">
            <span><b>react-native-maps</b></span>
            <span>&gt; I used the node package "react-native-maps" for displaying location messages</span>
            <span>&gt; I integrated the package into the chat bubbles of "react-native-gifted-chat"</span>
          </div>
        </div>
        <div className="caseStudyContainer">{/* Column 11 */}
          <div className="imageContainer"><img src={twe_test_message} alt="A screenshot that shows how I test code" /></div>
          <div className="content">
            <span><b>Testing & Debuging</b></span>
            <span>&gt; React Native provides a service named "expo" for running and debuging apps</span>
            <span>&gt; I used this service to regularly test and debug my code</span>
          </div>
        </div>
        <div className="caseStudyContainer">{/* Column 12 */}
          <div className="content">
            <span><b>Duration</b><br />&gt; Frontend: 2 weeks<br />&gt; Backend: 1 day</span>
            <span><b>What I learned</b><br />&gt; How to develop native applications with React Native<br />&gt; How to use Google Firebase, Firestore and Cloud Storage</span>
            <span><b>Next Steps</b><br />&gt; Add user registration<br />&gt; Add user-to-user communication<br />&gt; Add encryption</span>
          </div>
        </div>
        <div className="caseStudyContainer">{/* Column 13 */}
          <div className="content">
            <span><b>Conclusion</b></span>
            <span>React native is a powerful framework for developing native apps. The project was a fulfilling learning experience. It helped deepen my understanding of the development process and illustrated the complexities of app development.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
