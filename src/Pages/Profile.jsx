import { useLanguage } from "../context/LanguageContext";
import MonthlyEarningsChart from '../Components/MonthlyEarningsChart.jsx';
import ReferralLinkGenerator from '../Components/GenerateLink.jsx'
import UserProfileCard from '../Components/UserProfileCard.jsx'
const Profile = () => {
  const { language } = useLanguage();

  const texts = {
    en: "Welcome to Home Page",
    fa: "خوش آمدید به صفحه اصلی"
  };

  return <div className="relative  -mt-[105px] z-20 px-6  mb-8">

    <ReferralLinkGenerator></ReferralLinkGenerator>
    <UserProfileCard></UserProfileCard>
  
  
</div>;
};

export default Profile;
