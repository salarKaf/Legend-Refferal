import React from 'react';
import { useLanguage } from "../context/LanguageContext";
import MonthlyEarningsChart from '../Components/MonthlyEarningsChart.jsx';
const Home = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      welcome: "Welcome to Home Page",
      today: "Today",
      totalEarnings: "Total Earnings",
      totalPoints: "Total points",
      totalSale: "total sale",
      group01: "group 01",
      group02: "group 02"
    },
    fa: {
      welcome: "خوش آمدید به صفحه اصلی",
      today: "امروز",
      totalEarnings: "کل درآمد",
      totalPoints: "کل امتیازات",
      totalSale: "کل فروش",
      group01: "گروه ۰۱",
      group02: "گروه ۰۲"
    }
  };

  return (
    <div className="relative -mt-[105px] z-20 px-6">
      {/* Main Card */}
      <div className="relative bg-white rounded-2xl border border-black/40 shadow-lg p-8 mb-8">
        {/* Today Badge */}
        <div className="absolute -top-12 left-4 transform -rotate-12">
          <div className="relative">
            <div className="relative bg-white rounded-2xl px-9 py-3 shadow-lg border border-black/50">
              <span className="text-xl font-bold text-gray-800">10$ {texts[language].today}</span>
              <div className="absolute bottom-2 left-4 w-2 h-2 bg-black rounded-full"></div>
            </div>
            <svg className="absolute top-9 left-0" width="30" height="40" viewBox="0 0 30 40">
              <path
                d="M20 2 Q26 42 -30 10"
                stroke="#000000"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex items-center justify-between">
          {/* Profile Image */}
          <div className="">
            <img
              src="/public/Images/dollar-money-coins-gold-icon-vector-illustration_10613260.png"
              alt="Profile"
              className="w-[110px] h-[90px]"
            />
          </div>

          {/* Stats */}
          <div className="flex-1 flex flex-col justify-center gap-4 ml-5">
            <div className="flex items-center justify-around w-full max-w-[300px]">
              <div className="text-2xl font-bold text-gray-800">500 $</div>
              <div className="text-gray-600 font-medium">{texts[language].totalEarnings}</div>
            </div>
            <div className="flex items-center justify-around w-full max-w-[300px]">
              <div className="text-2xl font-bold text-gray-800">15</div>
              <div className="text-gray-600 font-medium">{texts[language].totalPoints}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Group Cards - در یک ردیف و کوچکتر */}
      <div className="flex gap-4 mb-8 ">
        {/* Group 02 */}
        <div className="flex-1 bg-white rounded-xl border  border-black/40 shadow-lg p-4">
          <div className="flex items-center gap-4">
            {/* عکس سمت چپ */}
            <div className="flex-shrink-0">
              <img
                src="/public/Images/group(1).png" // آدرس عکس خودت رو اینجا بذار
                alt="Group 02 Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>

            {/* محتوای سمت راست */}
            <div className="flex-1 text-right">
              <h3 className="text-lg font-bold text-gray-800 mb-1">{texts[language].group02}</h3>
              <div className="text-2xl font-bold text-gray-800">150</div>
              <div className="text-sm text-gray-600">{texts[language].totalSale}</div>
            </div>
          </div>
        </div>

        {/* Group 01 */}
        <div className="flex-1 bg-white rounded-xl border border-black/40 shadow-lg p-4">
          <div className="flex items-center gap-4">
            {/* عکس سمت چپ */}
            <div className="flex-shrink-0">
              <img
                src="/public/Images/group(1).png" // آدرس عکس خودت رو اینجا بذار
                alt="Group 01 Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>

            {/* محتوای سمت راست */}
            <div className="flex-1 text-right">
              <h3 className="text-lg font-bold text-gray-800 mb-1">{texts[language].group01}</h3>
              <div className="text-2xl font-bold text-gray-800">350</div>
              <div className="text-sm text-gray-600">{texts[language].totalSale}</div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center mb-8'>
        <MonthlyEarningsChart></MonthlyEarningsChart>

      </div>



      {/* Total Referrals Card */}
      <div className="bg-white rounded-xl border border-black/40 shadow-2xl p-4 mb-16 flex items-center justify-between w-full max-w-md mx-auto">
        {/* آیکون ارجاع */}
        <div className="flex-shrink-0">
          <img
            src="/public/Images/icons8-referral-64(2).png"
            alt="Referral Icon"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* متن سمت راست */}
        <div className="text-right flex-1 pr-4">
          <div className="text-2xl font-bold text-gray-800">12 <span className="text-sm font-medium text-gray-500">people</span></div>
          <div className="text-lg font-bold text-black">Total Referrals</div>
        </div>
      </div>

    </div>
  );
};

export default Home;