import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { language } = useLanguage();

  const texts = {
    en: "Welcome to Home Page",
    fa: "خوش آمدید به صفحه اصلی"
  };

  return (
    <div className="relative -mt-[105px] z-20 px-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-bold">{texts[language]}</h2>
        <p>محتوای صفحه اصلی...</p>
      </div>
    </div>
  );
};

export default Home;
