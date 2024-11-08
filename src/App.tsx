import React from 'react';
import About from './components/About.tsx';
import './App.scss';
import Project from './components/Project.tsx';
import TweHeaderPath from './assets/twe_header.png';
import Navigation from './components/Navigation.tsx';

function App() {
  return (
    <div className="App">
      <About />
      <Project className='Twe_project' projectImagePath={TweHeaderPath} projectName='Talk With Everyone'>
        &gt; <b>Chat application</b> for Android and iOS<br /><br />
        &gt; Google <b>Firebase</b><br />
        &gt; Google Firestore<br />
        &gt; Google Cloud Storage<br />
        &gt; <b>React Native</b><br />
        &gt; react-native-gifted-chat<br />
        &gt; react-native-maps
      </Project>
      <Navigation />
    </div>
  );
}

export default App;
