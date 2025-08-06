import React from 'react';
import { useLanguage } from "../context/LanguageContext";
import RulesImage from '/Images/rules.png'

export default function ReferralRules() {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "Referral Rules",
      points: "points",
      value: "value",
      perPoint: "$/pts",
      rules: [
        {
          title: "First 2 each group",
          points: "1pts",
          value: "$30",
          perPoint: "$30"
        },
        {
          title: "2nd & 3rd", 
          points: "2pts",
          value: "$40",
          perPoint: "$20"
        },
        {
          title: "4th-7th",
          points: "4pts", 
          value: "$40",
          perPoint: "$10"
        },
        {
          title: "8th-15th",
          points: "8pts",
          value: "$40", 
          perPoint: "$5"
        },
        {
          title: "16th-65th",
          points: "50pts",
          value: "$50",
          perPoint: "$1"
        }
      ]
    },
    fa: {
      title: "قوانین ارجاع",
      points: "امتیاز",
      value: "ارزش",
      perPoint: "$/pts",
      rules: [
        {
          title: "۲ نفر اول هر گروه",
          points: "۱ امتیاز",
          value: "$۳۰",
          perPoint: "$۳۰"
        },
        {
          title: "دوم و سوم", 
          points: "۲ امتیاز",
          value: "$۴۰",
          perPoint: "$۲۰"
        },
        {
          title: "چهارم تا هفتم",
          points: "۴ امتیاز", 
          value: "$۴۰",
          perPoint: "$۱۰"
        },
        {
          title: "هشتم تا پانزدهم",
          points: "۸ امتیاز",
          value: "$۴۰", 
          perPoint: "$۵"
        },
        {
          title: "شانزدهم تا شصت و پنجم",
          points: "۵۰ امتیاز",
          value: "$۵۰",
          perPoint: "$۱"
        }
      ]
    }
  };

  const currentTexts = texts[language];
  const isRTL = language === 'fa';
  const fontClass = language === 'fa' ? 'font-lahzeh' : 'font-gidugu';

  return (
    <div className={`bg-[#EEEEEE] rounded-2xl max-w-md mx-auto w-full border border-black/40 shadow-lg mt-8 ${fontClass} ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-sm mx-auto py-3">
        {/* Header */}
        <div className={`flex items-center gap-3 mb-8 px-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <img
            src={RulesImage}
            alt="Rules"
            className="w-24 h-24 object-contain"
          />
          <h1 className={` text-gray-900 ${language === 'fa' ? 'text-lg font-semibold' : 'text-3xl'}`}>
            {currentTexts.title}
          </h1>
        </div>

        {/* Table Header */}
        <div className={`${isRTL ? 'grid grid-cols-[2fr_2fr_2fr_6fr] gap-1' : 'grid grid-cols-[3fr_0.8fr_0.8fr_0.8fr] gap-2'} mb-2 px-3`}>
          {isRTL ? (
            <>
              <div className="text-center">
                <span className={`text-gray-700 whitespace-nowrap ${language === 'fa' ? 'text-xs font-medium' : 'text-sm font-semibold'}`}>
                  {currentTexts.perPoint}
                </span>
              </div>
              <div className="text-center">
                <span className={`text-gray-700 whitespace-nowrap ${language === 'fa' ? 'text-xs font-medium' : 'text-sm font-semibold'}`}>
                  {currentTexts.value}
                </span>
              </div>
              <div className="text-center">
                <span className={`text-gray-700 whitespace-nowrap ${language === 'fa' ? 'text-xs font-medium' : 'text-sm font-semibold'}`}>
                  {currentTexts.points}
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-gray-500"></span>
              </div>
            </>
          ) : (
            <>
              <div className="text-left pl-4">
                <span className="text-sm font-medium text-gray-500"></span>
              </div>
              <div className="text-center">
                <span className="text-[20px]  text-gray-700 whitespace-nowrap">{currentTexts.points}</span>
              </div>
              <div className="text-center">
                <span className="text-[20px]  text-gray-700 whitespace-nowrap">{currentTexts.value}</span>
              </div>
              <div className="text-center">
                <span className="text-[20px]  text-gray-700 whitespace-nowrap">{currentTexts.perPoint}</span>
              </div>
            </>
          )}
        </div>

        {/* Rules List */}
        <div className="space-y-2 px-3 pb-5">
          {currentTexts.rules.map((rule, index) => (
            <div key={index} className="rounded-lg">
              <div className={`${isRTL ? 'grid grid-cols-[2fr_2fr_2fr_6fr] gap-1' : 'grid grid-cols-[3fr_0.8fr_0.8fr_0.8fr] gap-2'}  py-1`}>
                {isRTL ? (
                  <>
                    <div className="text-center">
                      <span className={`text-gray-900 whitespace-nowrap ${language === 'fa' ? 'text-xs font-medium' : 'text-xs font-semibold'}`}>
                        {rule.perPoint}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className={`text-gray-900 whitespace-nowrap ${language === 'fa' ? 'text-xs font-medium' : 'text-xs font-semibold'}`}>
                        {rule.value}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className={`text-gray-900 whitespace-nowrap ${language === 'fa' ? 'text-xs font-medium' : 'text-xs font-semibold'}`}>
                        {rule.points}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 justify-end pr-2">
                      <span className={`text-gray-900 leading-tight text-right ${language === 'fa' ? 'text-xs font-medium' : 'text-xs font-semibold'}`}>
                        {rule.title}
                      </span>
                      <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center ">
                      <div className="w-2 h-2 bg-black rounded-full flex-shrink-0 mr-2"></div>
                      <span className="text-[21px]  text-gray-900 leading-tight">
                        {rule.title}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl  text-gray-900 whitespace-nowrap">
                        {rule.points}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl  text-gray-900 whitespace-nowrap">
                        {rule.value}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl text-gray-900 whitespace-nowrap">
                        {rule.perPoint}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}