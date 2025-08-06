import React, { useState } from 'react';
import { Award, CreditCard, CheckCircle } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext";

const UserProfileCard = () => {
  const { language } = useLanguage();
  
  // State for subscription status - change this to test different states
  const [hasActiveSubscription, setHasActiveSubscription] = useState(true);
  
  const texts = {
    en: {
      active: "Active",
      memberSince: "Member since:",
      chargeAccount: "Charge Account",
      userData: {
        name: "John Smith",
        email: "john.smith@email.com",
        memberSince: "Jan 15, 2025"
      }
    },
    fa: {
      active: "فعال",
      memberSince: "عضو از:",
      chargeAccount: "شارژ حساب",
      userData: {
        name: "جان اسمیت",
        email: "john.smith@email.com",
        memberSince: "۱۵ دی، ۱۴۰۳"
      }
    }
  };

  const currentTexts = texts[language];
  const isRTL = language === 'fa';
  const fontClass = language === 'fa' ? 'font-lahzeh' : 'font-gidugu';

  // User data - you can replace these URLs with your actual image URLs
  const userData = {
    name: currentTexts.userData.name,
    email: currentTexts.userData.email,
    memberSince: currentTexts.userData.memberSince,
    avatarUrl: "/Images/Picsart_25-07-23_17-28-33-713.png", // Replace with your avatar URL
    subscriptionActive: hasActiveSubscription
  };

  const handleChargeAccount = () => {
    // Handle charge account action
    console.log("Redirecting to charge account...");
    // You can add navigation logic here
  };

  return (
    <div className={`flex items-center justify-center rounded-2xl border border-black/40 shadow-lg ${fontClass} ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="bg-[#EEEEEE] rounded-2xl px-6 max-w-md mx-auto w-full relative py-10">
        {/* Subscription Status Badge - Top Right */}
        {userData.subscriptionActive && (
          <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} bg-gradient-to-r from-purple-600 to-blue-500 border border-black/50 text-white px-5  rounded-full shadow-lg`}>
            <img src='/Images/icons8-premium-48 1.png' className="w-5 h-5" />
            <span className={` ${language === 'en' ? 'text-[22px] py-[3px]' : 'text-xs font-semibold py-2'}`}>{currentTexts.active}</span>
          </div>
        )}
        
        {/* Main Content: Avatar Left, Info Right */}
        <div className={`flex items-center gap-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Avatar - Left Side */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={userData.avatarUrl}
                alt="User Avatar"
                className="w-16 h-16 rounded-full border-3 border-gray-200 shadow-md object-cover"
              />
              {userData.subscriptionActive && (
                <div className={`absolute -bottom-0.5 ${isRTL ? '-left-0.5' : '-right-0.5'} bg-green-500 rounded-full p-0.5`}>
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          </div>
          
          {/* User Info - Right Side */}
          <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 className={` text-gray-800 mb-3 ${language === 'en' ? 'text-3xl' : 'text-[17px] font-semibold'}`}>
              {userData.name}
            </h2>
            <p className={`text-gray-600 mb-3 ${language === 'en' ? 'text-2xl' : 'text-sm'}`}>
              {userData.email}
            </p>
            <p className={`text-gray-500 font-medium ${language === 'en' ? 'text-xl' : 'text-xs'}`}>
              {currentTexts.memberSince} {userData.memberSince}
            </p>
          </div>
        </div>
        
        {/* Charge Account Button - Bottom */}
        {!userData.subscriptionActive && (
          <div className="mt-4">
            <button
              onClick={handleChargeAccount}
              className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center 
                ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} shadow-md transform hover:scale-105 ${language === 'en' ? 'text-xl' : 'text-sm'}`}
            >
              <CreditCard className="w-4 h-4" />
              <span>{currentTexts.chargeAccount}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;