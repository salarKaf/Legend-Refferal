import React from 'react';
import RulesImage from '../../public/Images/rules.png'

export default function ReferralRules() {
  const rules = [
    {
      title: "First 2 each group",
      points: "1pts",
      value: "30$",
      perPoint: "30$"
    },
    {
      title: "2nd & 3rd ", 
      points: "2pts",
      value: "40$",
      perPoint: "20$"
    },
    {
      title: "4th-7th ",
      points: "4pts", 
      value: "40$",
      perPoint: "10$"
    },
    {
      title: "8th-15th ",
      points: "8pts",
      value: "40$", 
      perPoint: "5$"
    },
    {
      title: "16th-65th ",
      points: "50pts",
      value: "50$",
      perPoint: "1$"
    }
  ];

  return (
    <div className="bg-[#EEEEEE] rounded-2xl max-w-md mx-auto w-full border border-black/40 shadow-lg mt-8">
      <div className="max-w-sm mx-auto py-3">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 px-3">
          <img
            src={RulesImage}
            alt="Rules"
            className="w-24 h-24 object-contain"
          />
          <h1 className="text-2xl font-bold text-gray-900">Referral Rules</h1>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 mb-2 px-3">
          <div className="text-left">
            <span className="text-sm font-medium text-gray-500"></span>
          </div>
          <div className="text-center">
            <span className="text-base font-semibold text-gray-700">points</span>
          </div>
          <div className="text-center">
            <span className="text-base font-semibold text-gray-700">value</span>
          </div>
          <div className="text-center">
            <span className="text-base font-semibold text-gray-700">$/pts</span>
          </div>
        </div>

        {/* Rules List */}
        <div className="space-y-2 px-3 pb-5">
          {rules.map((rule, index) => (
            <div key={index} className="rounded-lg">
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 items-center py-1">
                {/* Rule Title with Bullet */}
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-black rounded-full flex-shrink-0 mr-1"></div>
                  <span className="text-[13px] font-semibold text-gray-900 leading-tight">
                    {rule.title}
                  </span>
                </div>

                {/* Points */}
                <div className="text-center">
                  <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                    {rule.points}
                  </span>
                </div>

                {/* Value */}
                <div className="text-center">
                  <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                    {rule.value}
                  </span>
                </div>

                {/* Per Point */}
                <div className="text-center">
                  <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                    {rule.perPoint}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}