import { useTranslation } from 'react-i18next';
const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id='home'
      className='relative h-dvh w-screen font-rustic flex flex-col justify-center'
    >
      <div className=' ml-8'>
        <h1 className=' text-6xl uppercase'>Aristide</h1>
        <h1 className=' text-3xl'>{t('job')}</h1>
      </div>
    </section>
  );
};

export default Home;
