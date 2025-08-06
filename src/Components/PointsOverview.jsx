import React from 'react';
import { useLanguage } from "../context/LanguageContext";
import pointsImage from '/Images/Polish_۲۰۲۵۰۷۲۴_۰۰۰۸۳۸۲۹۰.png';

export default function PointsOverview() {
  const { language } = useLanguage();
  
  const pointsData = {
    balancePoints: 2,
    balanceValue: 50,
    totalPoints: 9,
    totalValue: 150
  };

  const texts = {
    en: {
      title: "Points Overview",
      points: "points",
      value: "value",
      balancePoints: "balance points",
      totalPoints: "Total points",
      deposit: "deposit",
      withdraw: "WITHDRAW",
      pts: "pts"
    },
    fa: {
      title: "نمای کلی امتیازات",
      points: "امتیاز",
      value: "ارزش",
      balancePoints: "امتیاز موجودی",
      totalPoints: "کل امتیازات",
      deposit: "واریز",
      withdraw: "برداشت",
      pts: "امتیاز"
    }
  };

  const currentTexts = texts[language];
  const isRTL = language === 'fa';
  const fontClass = language === 'fa' ? 'font-lahzeh' : 'font-gidugu';

  const handleDeposit = () => {
    console.log('Deposit clicked');
  };
 
  return (
    <div className={`bg-[#EEEEEE] rounded-2xl border border-black/40 shadow-xl mb-8 mt-8 ${fontClass} ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-2xl mx-auto">
        <div className="p-4">
          {/* Header */}
          <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`w-20 h-20 rounded-full flex items-center justify-center ${isRTL ? 'ml-4' : 'mr-4'}`}>
              <img src={pointsImage} className="text-2xl" alt="Points" />
            </div>
            <h1 className={` text-gray-900 ${isRTL ? 'text-lg font-bold' : 'text-3xl'}`}>{currentTexts.title}</h1>
          </div>
          
          {/* Table Header */}
          <div className={`grid grid-cols-4 gap-8 mb-4 ${isRTL ? 'direction-rtl' : ''}`}>
            {isRTL ? (
              <>
                <div className="text-right">
                  <h3 className="text-xs font-semibold text-gray-700">{currentTexts.value}</h3>
                </div>
                <div className="text-right">
                  <h3 className="text-xs font-semibold text-gray-700">{currentTexts.points}</h3>
                </div>
                <div className="col-span-2"></div>
              </>
            ) : (
              <>
                <div className="col-span-2"></div>
                <div className="text-center">
                  <h3 className="text-2xl text-gray-700">{currentTexts.points}</h3>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl text-gray-700">{currentTexts.value}</h3>
                </div>
              </>
            )}
          </div>
          
          {/* Points Data */}
          <div className="space-y-4 mb-6 px-2">
            {/* Balance Points */}
            <div className="grid grid-cols-4 gap-8 items-center">
              {isRTL ? (
                <>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-900">
                      ${pointsData.balanceValue}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-800">
                      {pointsData.balancePoints} {currentTexts.pts}
                    </span>
                  </div>
                  <div className="col-span-2 flex items-center gap-3 justify-end">
                    <span className="text-sm font-medium text-gray-900">
                      {currentTexts.balancePoints}
                    </span>
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-span-2 flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-[25px] text-gray-900">
                      {currentTexts.balancePoints}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-[27px]  text-gray-900">
                      {pointsData.balancePoints} {currentTexts.pts}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-[27px]  text-gray-900">
                      ${pointsData.balanceValue}
                    </span>
                  </div>
                </>
              )}
            </div>
            
            {/* Total Points */}
            <div className="grid grid-cols-4 gap-8 items-center">
              {isRTL ? (
                <>
                  <div className="text-right">
                    <span className="text-sm font-medium  text-gray-900">
                      ${pointsData.totalValue}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-900">
                      {pointsData.totalPoints} {currentTexts.pts}
                    </span>
                  </div>
                  <div className="col-span-2 flex items-center gap-3 justify-end">
                    <span className="text-sm font-medium text-gray-900">
                      {currentTexts.totalPoints}
                    </span>
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-span-2 flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-[25px] font-medium text-gray-900">
                      {currentTexts.totalPoints}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-[27px]  text-gray-900">
                      {pointsData.totalPoints} {currentTexts.pts}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-[27px]  text-gray-900">
                      ${pointsData.totalValue}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleDeposit}
              className={`flex-1 bg-[#FFD369] hover:bg-[#e4b23e] text-black  py-2 px-8 rounded-full transition-colors duration-200 border border-black shadow-lg hover:shadow-xl ${
                isRTL ? 'text-sm font-bold' : 'text-2xl '
              }`}
            >
              {currentTexts.deposit}
            </button>
            <button
              onClick={() => console.log('Withdraw clicked')}
              className={`flex-1 bg-[#FFD369] hover:bg-[#e4b23e] text-black py-2 px-8 rounded-full transition-colors duration-200 border border-black shadow-lg hover:shadow-xl ${
                isRTL ? 'text-sm font-bold' : 'text-2xl'
              }`}
            >
              {currentTexts.withdraw}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}