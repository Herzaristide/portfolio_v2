import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Works from './components/Works';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Resume from './components/Resume';
import './i18n';

function App() {
  const [dark, setDark] = useState('');

  return (
    <main
      className={`${
        dark ? 'dark' : ''
      } bg-white dark:bg-[#282828] relative min-h-screen w-screen flex justify-center`}
    >
      <Navigation dark={dark} setDark={setDark} />
      <div>
        <Home />
        <About />
        <Works />
        <Projects />
        <Skills />
        <Resume />
        <Contacts />
      </div>
    </main>
  );
}

export default App;
