import { useLanguage } from "../context/LanguageContext";
import React from 'react';
import { User, DollarSign } from 'lucide-react';
const Referral = () => {
  const { language } = useLanguage();

  const referralData = [
    // سطح اول - بیشتر از 6 تا برای تست
    [
      { id: 1, avatar: null, amount: 30 },
      { id: 2, avatar: null, amount: 30 },
      { id: 3, avatar: null, amount: 20 },
      { id: 4, avatar: null, amount: 20 },
      { id: 5, avatar: null, amount: 10 },
      { id: 6, avatar: null, amount: 10 },
      { id: 7, avatar: null, amount: 15 },
      { id: 8, avatar: null, amount: 25 },
      { id: 9, avatar: null, amount: 30 },
      { id: 10, avatar: null, amount: 30 },
      { id: 11, avatar: null, amount: 20 },
      { id: 12, avatar: null, amount: 20 },
      { id: 13, avatar: null, amount: 10 },
      { id: 14, avatar: null, amount: 10 },
      { id: 15, avatar: null, amount: 15 },
      { id: 16, avatar: null, amount: 25 }
    ],
  ];

  const PersonCard = ({ person, isRestoreUp = false }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* آواتار */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
          {person.avatar ? (
            <img src={person.avatar} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <User className="w-8 h-8 text-white" />
          )}
        </div>
      </div>

      {/* مبلغ دلار */}
      <div className="mt-2 bg-white border-2 border-gray-300 rounded-full px-3 py-1 flex items-center gap-1 shadow-sm">
        <span className="font-bold text-gray-800">{person.amount}</span>
        <DollarSign className="w-4 h-4 text-yellow-500" />
      </div>

      {/* دکمه Restore Up */}
      {isRestoreUp && (
        <button className="mt-2 px-3 py-1 bg-gray-100 border border-gray-300 rounded text-xs text-gray-600 hover:bg-gray-200 transition-colors">
          Restore Up
        </button>
      )}
    </div>
  );

  const renderLevel = (people, levelIndex) => {
    const rows = [];

    for (let i = 0; i < people.length; i += 6) {
      const rowPeople = people.slice(i, i + 6);
      const isFirstRow = i === 0;

      rows.push(
        <div key={`row-${i}`} className="mb-8">
          {/* آواتارهای ردیف با خط افقی */}
          <div className="flex justify-center relative">
            {/* خط افقی مشکی */}
            <div className="absolute top-0 h-0.5 bg-black w-full max-w-4xl"></div>

            <div className="grid grid-cols-6 gap-12 max-w-4xl w-full">
              {rowPeople.map((person, personIndex) => (
                <div key={person.id} className="flex flex-col items-center">
                  {/* خط عمودی کوچیک که دقیقاً به خط افقی چسبیده */}
                  <div className="w-0.5 h-6 bg-black"></div>

                  <PersonCard
                    person={person}
                    isRestoreUp={levelIndex === 0 && isFirstRow && personIndex === 2}
                  />
                </div>
              ))}

              {/* پر کردن جاهای خالی */}
              {rowPeople.length < 6 && Array.from({ length: 6 - rowPeople.length }).map((_, index) => (
                <div key={`empty-${index}`}></div>
              ))}
            </div>
          </div>

          {/* سه نقطه عمودی فقط اگه ردیف بعدی وجود داشته باشه و ردیف فعلی پر باشه */}
          {rowPeople.length === 6 && i + 6 < people.length && (
            <div className="relative h-12 flex items-center justify-center">
              <div className="w-full max-w-4xl relative h-full">
                <div className={`absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 ${levelIndex % 2 === 0 ? 'right-0' : 'left-0'}`}>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          )}

        </div>
      );
    }

    return rows;
  };

  return <div className="mt-[-100px]">



    <div className="max-w-6xl mx-auto">
      {/* هدر */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-3">
          My Referrals
          <User className="w-8 h-8 text-gray-600" />
        </h1>
      </div>

      {/* درخت ارجاع */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
        {referralData.map((level, levelIndex) => (
          <div key={levelIndex}>
            {renderLevel(level, levelIndex)}

            {/* فاصله بین سطوح مختلف */}
            {levelIndex < referralData.length - 1 && (
              <div className="flex justify-center my-8">
                <div className="w-full max-w-4xl relative">
                  {/* سه نقطه - سمت چپ برای سطح فرد، سمت راست برای سطح زوج */}
                  <div className={`absolute flex flex-col items-center gap-3 ${levelIndex % 2 === 0 ? 'left-0' : 'right-0'
                    }`}>
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* راهنمای استفاده */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800 mb-2">راهنمای استفاده:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• برای اضافه کردن آواتار، آدرس تصویر رو به person.avatar اضافه کن</li>
          <li>• هر ردیف 6 نفر نمایش داده میشه</li>
          <li>• اگه بیشتر از 6 نفر باشه، خودکار به ردیف بعد میره</li>
          <li>• هر ردیف خط افقی مجزای خودش رو داره</li>
          <li>• مبلغ هر نفر در فیلد amount قابل تغییر است</li>
        </ul>
      </div>
    </div>




  </div>;
};

export default Referral;



















