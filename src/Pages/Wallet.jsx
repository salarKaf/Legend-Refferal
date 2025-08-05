import { useLanguage } from "../context/LanguageContext";
import ReferralRules from '../Components/ReferralRules';
import CountdownTimer from '../Components/Timer';
import PointsOverview from '../Components/PointsOverview';
import RulesDescriptions from '../Components/RulesDescriptions';
const Wallet = () => {
  const { language } = useLanguage();

  const texts = {
    en: "Welcome to Home Page",
    fa: "خوش آمدید به صفحه اصلی"
  };

  return (


    <div className="relative -mt-[105px] z-20 px-6 ">

      <CountdownTimer></CountdownTimer>
      <PointsOverview></PointsOverview>
      <ReferralRules></ReferralRules>
      <RulesDescriptions></RulesDescriptions>
    </div>
  )
};

export default Wallet;
