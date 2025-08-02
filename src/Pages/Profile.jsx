import { useLanguage } from "../context/LanguageContext";
import MonthlyEarningsChart from '../Components/MonthlyEarningsChart.jsx';

const Profile = () => {
  const { language } = useLanguage();

  const texts = {
    en: "Welcome to Home Page",
    fa: "خوش آمدید به صفحه اصلی"
  };

  return <div className="mt-[-100px]">{texts[language]}
  
  
        <MonthlyEarningsChart></MonthlyEarningsChart>
</div>;
};

export default Profile;
