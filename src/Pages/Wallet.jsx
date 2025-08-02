import { useLanguage } from "../context/LanguageContext";

import CountdownTimer from '../Components/Timer';
const Wallet = () => {
  const { language } = useLanguage();

  const texts = {
    en: "Welcome to Home Page",
    fa: "خوش آمدید به صفحه اصلی"
  };

  return (


    <div className="relative -mt-[105px] z-20 px-6 ">

      <CountdownTimer></CountdownTimer>
    </div>
  )
};

export default Wallet;
