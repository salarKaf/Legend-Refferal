import React from 'react';
import { useLanguage } from "../context/LanguageContext";
import RulesImage from '/Images/point.png'

export default function RulesDescriptions() {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "How Points Are Calculated?",
      description: "To earn points, you must have members in both Group 1 and Group 2. Your total points equal the smaller number of members between the two groups."
    },
    fa: {
      title: "امتیازات چگونه محاسبه می‌شود؟",
      description: "برای کسب امتیاز، باید در هر دو گروه ۱ و گروه ۲ عضو داشته باشید. مجموع امتیازات شما برابر با تعداد کمتر اعضا بین دو گروه است."
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
            className={`w-16 h-16 object-contain ${isRTL ? 'scale-x-[-1]' : ''}`}
          />
          <h1 className={` text-gray-900 ${language === 'fa' ? 'text-md font-semibold' : 'text-3xl '}`}>
            {currentTexts.title}
          </h1>
        </div>
        {/* Rules List */}
        <div className="space-y-2 px-4 pb-5">
          <p className={`font-medium ${language === 'fa' ? 'text-xs text-right leading-relaxed' : 'text-[22px]'}`}>
            {currentTexts.description}
          </p>
        </div>
      </div>
    </div>
  );
}