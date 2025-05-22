import { LuSun, LuMoon } from "react-icons/lu";
import { RiHomeLine } from "react-icons/ri";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RiBuilding2Line } from "react-icons/ri";

import Languages from "./Languages";

const Navigation = ({ dark, setDark, scrollTo }: any) => {
  const links = [
    "home",
    "about",
    "works",
    "projects",
    "skills",
    "resume",
    "contact",
  ];
  return (
    <section className='bg-gradient-to-r from-[#282828] to-[#0F0F0F] flex justify-center items-center fixed z-10 rounded-sm'>
      {links.map((link) => {
        return (
          <button
            title={link}
            className='bg-transparent hover:bg-zinc-200 rounded-lg text-white p-3'
            onClick={() => {
              scrollTo(`#${link}`);
            }}
          >
            {link}
          </button>
        );
      })}

      {/* <div className='rounded-xl'>
        <button
          title='home'
          className='bg-transparent hover:bg-zinc-200 rounded-lg text-white p-3'
          onClick={() => {
            scrollTo();
          }}
        >
          <RiHomeLine />
        </button>
      </div>

      <div className='rounded-xl'>
        <button
          title='me'
          className='bg-transparent hover:bg-zinc-200 rounded-lg text-white p-3'
          onClick={() => {}}
        >
          <RiAccountPinCircleLine />
        </button>
      </div>

      <div className='rounded-xl'>
        <button
          title='works'
          className='bg-transparent hover:bg-zinc-200 rounded-lg text-white p-3'
          onClick={() => {}}
        >
          <RiBuilding2Line />
        </button>
      </div> */}

      <div className='rounded-xl'>
        {dark ? (
          <button
            title='light'
            className='bg-transparent hover:bg-zinc-200 rounded-lg text-white p-3'
            onClick={() => {
              setDark("");
            }}
          >
            <LuSun />
          </button>
        ) : (
          <button
            title='dark'
            onClick={() => {
              setDark("dark");
            }}
            className='bg-transparent hover:bg-zinc-200 rounded-lg text-white p-3'
          >
            <LuMoon />
          </button>
        )}
      </div>
      <Languages />
    </section>
  );
};

export default Navigation;
