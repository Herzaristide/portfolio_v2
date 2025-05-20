import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger, MotionPathPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Works = () => {
  useGSAP(() => {});

  return (
    <section
      id='works'
      className='relative h-dvh w-screen flex flex-col items-center'
    >
      <div className='flex flex-col border-2 border-white rounded-2xl w-min h-min p-8'>
        <h2>Data engineer</h2>
        <h2>CAP GEMINI</h2>
        <h2>NOW</h2>
      </div>
      <div className='rounded-full border-2 border-white w-8 h-8'></div>
    </section>
  );
};

export default Works;
