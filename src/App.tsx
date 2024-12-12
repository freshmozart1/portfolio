import React, { useState } from 'react';
import Riddle from './components/Riddle/riddle.tsx';
import Me from './components/Me/me.tsx';
import Skills from './components/Skills/skills.tsx';
import Experience from './components/Experience/experience.tsx';
import Twe from './components/Twe/twe.tsx';

export default function App() {
    const [solvedRiddle, setSolvedRiddle] = useState(false);
    return (
        <>
            <Riddle solvedRiddle={solvedRiddle} setSolvedRiddle={setSolvedRiddle} />
            <Me />
            <Skills />
            <Experience />
            <Twe />
        </>
    );
}