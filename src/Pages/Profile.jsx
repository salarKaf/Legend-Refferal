import { useLanguage } from "../context/LanguageContext";

const Profile = () => {
  const { language } = useLanguage();

  const texts = {
    en: "Welcome to Home Page",
    fa: "خوش آمدید به صفحه اصلی"
  };

  return <div className="mt-[-100px]">{texts[language]}</div>;
};

export default Profile;
