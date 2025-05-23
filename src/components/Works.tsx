import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Works = () => {
  useGSAP(() => {});

  const { t } = useTranslation();

  const jobs = ["capGemini", "orange", "adeo", "enedis"];

  return (
    <section id='works' className='relative h-dvh flex'>
      <div className='path flex h-full'>
        {jobs.map((job) => (
          <div className='w-screen flex-col flex justify-center'>
            <h1 className='font-extrabold text-9xl text-green'>
              {t(`works:${job}:role`)}
            </h1>
            <h1 className='font-bold text-5xl'>{t(`works:${job}:company`)}</h1>
            {/* <Button title='See more' /> */}
          </div>
        ))}
      </div>
      <div className='bottom-1/4 m-auto left-0 right-0 w-8 h-8 absolute bg-white border-green border-2 rounded-full' />
    </section>
  );
};

export default Works;
