import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Works = () => {
  useGSAP(() => {});

  const { t } = useTranslation();

  const [job, setJob] = useState("capGemini");

  return (
    <section
      id='works'
      className='relative h-dvh w-screen flex flex-col items-center justify-center'
    >
      <div className='flex-col flex justify-center text-center'>
        <h1 className='font-bold text-5xl text-green'>
          {t(`works:${job}:role`)}
        </h1>
        <h1 className='font-bold text-2xl'>{t(`works:${job}:company`)}</h1>
        {t(`works:${job}:description`)}
        <Button title='See more' />
      </div>
      <button
        onClick={() => {
          setJob("adeo");
        }}
      >
        YTest
      </button>
      <span className='line w-full h-8 bg-green'></span>
    </section>
  );
};

export default Works;
