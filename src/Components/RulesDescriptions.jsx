import React from 'react';
import RulesImage from '/Images/point.png'

export default function RulesDescriptions() {
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
            className="w-16 h-16 object-contain"
          />
          <h1 className="text-xl font-bold text-gray-900">How Points Are Calculated?</h1>
        </div>


        {/* Rules List */}
        <div className="space-y-2 px-4 pb-5">
            <p className='font-medium text-sm'>To earn points, you must have members in both Group 1 and Group 2.
Your total points equal the smaller number of members between the two groups.</p>

        </div>
      </div>
    </div>
  );
}