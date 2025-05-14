import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <section id='home' className='relative h-dvh w-screen'>
      {t('job')}
    </section>
  );
};

export default Home;
