import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext.jsx";
import { useNavigate } from "react-router-dom";

const LegendHeader = ({ onLanguageChange }) => {
    const { language, changeLanguage } = useLanguage();
    const [daysLeft, setDaysLeft] = useState(23);
    const [isExpired, setIsExpired] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const texts = {
        fa: {
            days: 'روز',
            recharge: 'شارژ حساب'
        },
        en: {
            days: 'Days',
            recharge: 'Recharge Account'
        }
    };

    const t = texts[language];

    // شبیه‌سازی کاهش روزها
    useEffect(() => {
        const timer = setInterval(() => {
            if (daysLeft > 0) {
                setDaysLeft(prev => prev - 1);
            } else {
                setIsExpired(true);
            }
        }, 2000);

        return () => clearInterval(timer);
    }, [daysLeft]);

    const handleLanguageChange = (newLang) => {
        changeLanguage(newLang);
        setDropdownOpen(false);
        if (onLanguageChange) {
            onLanguageChange(newLang);
        }
    };

    return (
        <div className={`relative w-full ${language === 'fa' ? 'rtl' : 'ltr'}`}>
            <div className="relative h-[370px] overflow-visible">
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, #222831 29%, #2E3643 47%, #3E495A 70%, #697B97 100%)'
                    }}
                >
                    <div className="absolute bottom-0 w-full">
                        <svg
                            viewBox="0 0 1440 100"
                            className="w-full h-24"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
                                fill="#EEEEEE"
                            />
                        </svg>
                    </div>
                </div>

                <div className="relative z-10 px-6 py-6 h-full">
                    <div className="flex justify-between items-start h-full">
                        <div className="flex items-center gap-1">
                            <div
                                className="p-3 rounded-full cursor-pointer"
                                onClick={() => navigate("/profile")}
                            >
                                <img src='/Images/icons8-user-48.png' className="w-10 h-10" alt="Profile" />
                            </div>

                            <div className="relative">
                                {!isExpired ? (
                                    <div className="relative w-36 h-11 flex items-center overflow-hidden">
                                        <div className="flex-1 bg-[#FFD369] rounded-l-full px-2 py-3 border-2 border-[#FFD369] flex items-center justify-center h-full">
                                            <span className="font-bold text-slate-800 text-md whitespace-nowrap">{daysLeft} {t.days}</span>
                                        </div>
                                        <div className="flex-1 bg-transparent rounded-r-full border-2 border-[#FFD369] flex items-center justify-center h-full">
                                            <img src='/Images/icons8-hourglass-64(1).png' className="w-8 h-8" />
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        className="w-36 h-11 bg-[#FFD369] rounded-full font-bold text-slate-800 transition-colors border-2 border-[#FFD369] flex items-center justify-center"
                                        onClick={() => alert(t.recharge)}
                                    >
                                        <span className="text-md font-bold whitespace-nowrap">{t.recharge}</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                src='/Images/Picsart_25-07-23_01-00-21-915.png'
                                className='w-24 h-[82px]'
                                alt="Legend Logo"
                            />
                            <h1 className="text-white text-[14px] font-mono">Legend Company</h1>
                        </div>
                    </div>
                </div>

                <div className="absolute top-[205px] right-6 z-50">
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="bg-gray-500 hover:bg-gray-400 text-white px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors text-xs"
                        >
                            <span className="text-xs">{language === 'fa' ? 'فا' : 'En'}</span>
                            <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute top-full mt-1 right-0 bg-gray-600 rounded-md shadow-lg min-w-[80px] z-50">
                                <div
                                    onClick={() => handleLanguageChange('fa')}
                                    className={`px-3 py-2 text-xs cursor-pointer hover:bg-gray-500 rounded-t-md ${
                                        language === 'fa' ? 'bg-gray-400 text-gray-900' : 'text-white'
                                    }`}
                                >
                                    فارسی
                                </div>
                                <div
                                    onClick={() => handleLanguageChange('en')}
                                    className={`px-3 py-2 text-xs cursor-pointer hover:bg-gray-500 rounded-b-md ${
                                        language === 'en' ? 'bg-gray-400 text-gray-900' : 'text-white'
                                    }`}
                                >
                                    English
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {dropdownOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setDropdownOpen(false)}
                />
            )}
        </div>
    );
};

export default LegendHeader;