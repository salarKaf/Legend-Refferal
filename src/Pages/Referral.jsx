import { useLanguage } from "../context/LanguageContext";
import React from 'react';
import ReferralTree from '../Components/ReferralTree';
import MyReferrals from '../Components/MyReferrals';
import MonthlyTierEarningsChart from '../Components/MonthlyTierEarningsChart';

const Referral = () => {
  const { language } = useLanguage();


  return(

    <div className="relative  -mt-[105px] z-20 px-6 ">
      <ReferralTree></ReferralTree>
      <MyReferrals></MyReferrals>
      <MonthlyTierEarningsChart></MonthlyTierEarningsChart>

    </div>
  )


};

export default Referral;



















