import i18n from 'i18next';

const Languages = () => {
  return (
    <div className='p-2 rounded-xl'>
      <button
        title='english'
        className='bg-transparent hover:bg-zinc-200 rounded-lg text-black p-3'
        onClick={() => {
          i18n.changeLanguage('en-US');
        }}
      >
        EN
      </button>
      <button
        title='french'
        onClick={() => {
          i18n.changeLanguage('fr-FR');
        }}
        className='bg-transparent hover:bg-zinc-200 rounded-lg text-black p-3'
      >
        FR
      </button>
      <button
        title='german'
        onClick={() => {
          i18n.changeLanguage('de-DE');
        }}
        className='bg-transparent hover:bg-zinc-200 rounded-lg text-black p-3'
      >
        DE
      </button>
    </div>
  );
};

export default Languages;
