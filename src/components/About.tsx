import { useTranslation } from "react-i18next";
import Button from "./Button";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id='about'
      className='relative w-screen text-4xl flex flex-col item-center text-center p-24'
    >
      <p>{t("about:hi")}</p>
      <p>{t("about:welcome")}</p>
      <p>{t("about:presentation")}</p>
      <Button title='See more !' />
    </section>
  );
};

export default About;
