import React, { useState, useEffect } from 'react';
import { useLanguage } from "../context/LanguageContext";
import MonthlyEarningsChart from '../Components/MonthlyEarningsChart.jsx';

const Home = () => {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(true);

  // شبیه‌سازی لودینگ
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const texts = {
    en: {
      welcome: "Welcome to Home Page",
      today: "Today",
      totalEarnings: "Total Earnings",
      totalPoints: "Total Points",
      totalSale: "Total Sale",
      group01: "Group 01",
      group02: "Group 02",
      people: "People",
      totalReferrals: "Total Referrals"
    },
    fa: {
      welcome: "خوش آمدید به صفحه اصلی",
      today: "امروز",
      totalEarnings: "کل درآمد",
      totalPoints: "کل امتیازات",
      totalSale: "کل فروش",
      group01: "گروه ۰۱",
      group02: "گروه ۰۲",
      people: "نفر",
      totalReferrals: "کل معرفی‌ها"
    }
  };

  // لودر کامپوننت
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center gap-4">
          {/* اسپینر */}
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-300 rounded-full animate-spin border-t-blue-500"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-ping border-t-blue-300"></div>
          </div>

          {/* متن لودینگ */}
          <div className={`text-lg font-semibold text-gray-600 ${language === 'fa' ? 'font-lahzeh' : 'font-gidugu'}`}>
            {language === 'fa' ? 'در حال بارگذاری...' : 'Loading...'}
          </div>

          {/* نقاط متحرک */}
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative -mt-[105px] z-20 px-6 ${language === 'fa' ? 'font-lahzeh' : 'font-gidugu'}`}>
      {/* Main Card */}
      <div className="relative bg-[#EEEEEE] rounded-2xl border border-black/40 shadow-lg p-8 mb-8">
        {/* Today Badge */}
        <div className={`absolute -top-14 left-4 transform -rotate-12`}>
          <div className="relative">
            <div className={`relative bg-[#EEEEEE] rounded-2xl px-9  shadow-lg border border-black/50   ${language === 'fa' ? ' py-4' : 'py-3'}`}>
              <span className={`font-bold text-gray-800 ${language === 'fa' ? ' text-lg font-medium' : 'text-3xl font-normal'}`}>
                <span className={`${language === 'fa' ? 'text-[18px] font-medium ' : 'text-3xl font-normal'}`}>{language === 'fa' ? '۱۰$' : '10$'}</span>
                <span className={`${language === 'fa' ? 'ml-7 ' : 'ml-5'}`}>{texts[language].today}</span>
              </span>
              <div className="absolute bottom-3 left-4 w-2 h-2 bg-black rounded-full"></div>
            </div>
            <svg className="absolute top-11 left-0" width="30" height="40" viewBox="0 0 30 40">
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
              src="/Images/dollar-money-coins-gold-icon-vector-illustration_10613260.png"
              alt="Profile"
              className="w-[110px] h-[90px]"
            />
          </div>

          {/* Stats */}
          <div className="flex-1 flex flex-col justify-center gap-4 ml-5 " >
            <div className={`flex items-center  w-full max-w-[300px] ${language === 'fa' ? 'justify-around' : 'justify-between'}`}>
              <div className={`text-gray-900 ${language === 'fa' ? 'text-xl font-semibold' : 'text-4xl '}`}>
                {language === 'fa' ? '۵۰۰ $' : '500 $'}
              </div>
              <div className={`text-gray-700  ${language === 'fa' ? 'text-lg font-medium' : 'text-[28px]'}`}>{texts[language].totalEarnings}</div>
            </div>
            <div className="flex items-center justify-around w-full max-w-[300px]">
              <div className={`text-gray-900 ${language === 'fa' ? 'text-xl font-semibold' : 'text-4xl '}`}>
                {language === 'fa' ? '۱۵' : '15'}
              </div>
              <div className={`text-gray-700  ${language === 'fa' ? 'text-lg font-medium' : 'text-[28px] pl-10'}`}>{texts[language].totalPoints}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Group Cards - در یک ردیف و کوچکتر */}
      <div className="flex gap-4 mb-8">
        {/* Group 02 */}
        <div className="flex-1 bg-[#EEEEEE] rounded-xl border border-black/40 shadow-lg p-4">
          <div className="flex items-center gap-4">
            {/* عکس */}
            <div className="flex-shrink-0">
              <img
                src="/Images/group(1).png"
                alt="Group 02 Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>

            {/* محتوا */}
            <div className="flex-1">
              <h3 className={`text-gray-800 mb-1 text-right ${language === 'fa' ? 'text-base font-medium' : 'text-[27px]'}`}>
                {texts[language].group02}
              </h3>

              {/* عدد و Total Sales - وسط */}
              <div className="text-center">
                <div className={`text-gray-800 ${language === 'fa' ? 'text-xl font-semibold py-2' : 'text-4xl font-medium'}`}>
                  {language === 'fa' ? '۱۵۰' : '150'}
                </div>
                <div className={`text-gray-600 ${language === 'fa' ? 'text-[11px] pb-2 pt-1' : 'text-lg'}`}>
                  {texts[language].totalSale}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Group 01 */}
        <div className="flex-1 bg-[#EEEEEE] rounded-xl border border-black/40 shadow-lg p-4">
          <div className="flex items-center gap-4">
            {/* عکس */}
            <div className="flex-shrink-0">
              <img
                src="/Images/group(1).png"
                alt="Group 01 Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>

            {/* محتوا */}
            <div className="flex-1">
              <h3 className={`text-gray-800 mb-1 text-right ${language === 'fa' ? 'text-base font-medium' : 'text-[27px] '}`}>
                {texts[language].group01}
              </h3>

              {/* عدد و Total Sales - وسط */}
              <div className="text-center">
                <div className={`text-gray-800 ${language === 'fa' ? 'text-xl font-semibold py-2' : 'text-4xl font-medium'}`}>
                  {language === 'fa' ? '۳۵۰' : '350'}
                </div>
                <div className={`text-gray-600 ${language === 'fa' ? 'text-[11px] pb-2 pt-1' : 'text-lg'}`}>
                  {texts[language].totalSale}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className='flex justify-center items-center mb-8'>
        <MonthlyEarningsChart />
      </div>

      {/* Total Referrals Card */}
      <div className="bg-[#EEEEEE] rounded-xl border border-black/40 shadow-2xl p-4 mb-16 flex items-center w-full max-w-md mx-auto">
        {/* آیکون ارجاع - سمت چپ */}
        <div className="flex-shrink-0 ml-3">
          <img
            src="/Images/icons8-referral-64(2).png"
            alt="Referral Icon"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* محتوا */}
        <div className="flex-1">
          {/* متن توتال رفرال - بالا و راست‌چین */}
          <div className="text-right pr-4 mb-2">
            <div className={`text-gray-800 ${language === 'fa' ? 'text-base font-semibold' : 'text-3xl '}`}>
              {texts[language].totalReferrals}
            </div>
          </div>

          {/* عدد و نفر - وسط */}
          <div className="text-center">
            <div className={`text-gray-800 ${language === 'fa' ? 'text-xl font-semibold' : 'text-4xl '}`}>
              {language === 'fa' ? '۱۲' : '12'}
              <span
                className={`text-gray-500 mr-1 ml-1 ${language === 'fa' ? 'text-sm font-medium' : 'text-sm'}`}
                style={language !== 'fa' ? { fontFamily: 'Poppins, sans-serif ',  fontWeight: '300' } : {}}
              >
                {texts[language].people}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;