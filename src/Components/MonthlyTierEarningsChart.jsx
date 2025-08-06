import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useLanguage } from "../context/LanguageContext";
import Icon from '/Images/icons8-earning-48.png'

const MonthlyTierEarningsChart = () => {
  const { language } = useLanguage();

  // متن‌های چند زبانه
  const texts = {
    en: {
      title: "Earnings Tiers",
      earnings: "Earnings",
      tier1: "Tier 1",
      tier2: "Tier 2"
    },
    fa: {
      title: "سطوح درآمد",
      earnings: "درآمد",
      tier1: "سطح ۱",
      tier2: "سطح ۲"
    }
  };

  // داده‌های چند زبانه
  const [data, setData] = useState([
    { 
      month: language === 'fa' ? 'فروردین' : 'April', 
      earnings: 30, 
      tier: language === 'fa' ? 'سطح ۱' : 'Tier 1' 
    },
    { 
      month: language === 'fa' ? 'اردیبهشت' : 'May', 
      earnings: 50, 
      tier: language === 'fa' ? 'سطح ۱' : 'Tier 1' 
    },
    { 
      month: language === 'fa' ? 'خرداد' : 'June', 
      earnings: 20, 
      tier: language === 'fa' ? 'سطح ۲' : 'Tier 2' 
    },
    { 
      month: language === 'fa' ? 'تیر' : 'July', 
      earnings: 35, 
      tier: language === 'fa' ? 'سطح ۲' : 'Tier 2' 
    }
  ]);

  // بروزرسانی داده‌ها هنگام تغییر زبان
  React.useEffect(() => {
    setData([
      { 
        month: language === 'fa' ? 'فروردین' : 'April', 
        earnings: 30, 
        tier: language === 'fa' ? 'سطح ۱' : 'Tier 1' 
      },
      { 
        month: language === 'fa' ? 'اردیبهشت' : 'May', 
        earnings: 50, 
        tier: language === 'fa' ? 'سطح ۱' : 'Tier 1' 
      },
      { 
        month: language === 'fa' ? 'خرداد' : 'June', 
        earnings: 20, 
        tier: language === 'fa' ? 'سطح ۲' : 'Tier 2' 
      },
      { 
        month: language === 'fa' ? 'تیر' : 'July', 
        earnings: 35, 
        tier: language === 'fa' ? 'سطح ۲' : 'Tier 2' 
      }
    ]);
  }, [language]);

  // تشخیص tier و تعیین رنگ‌ها
  const getDataWithColors = () => {
    return data.map((item) => {
      let color;

      if (item.tier === texts[language].tier1) {
        color = 'rgba(32, 50, 122, 0.85)'; // آبی برای tier 1
      } else {
        color = '#ECCA5B'; // زرد برای tier 2
      }

      return {
        ...item,
        color
      };
    });
  };

  const processedData = getDataWithColors();

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
        <div className={`bg-gray-800 text-white p-3 rounded-lg border ${language === 'fa' ? 'font-lahzeh text-sm' : 'font-Poppins text-sm'}`}>
          <p className={`font-semibold ${language === 'fa' ? 'text-sm' : 'text-xs'}`}>{data.month}</p>
          <p className={`text-[#ECCA5B] ${language === 'fa' ? 'text-sm' : 'text-xs'}`}>
            {`${texts[language].earnings}: $${data.earnings}`}
          </p>
          <p className={`text-green-400 ${language === 'fa' ? 'text-xs' : 'text-xs'}`}>
            🏆 {data.tier}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full relative flex items-center justify-center shadow-xl rounded-2xl">
      <div className="w-full max-w-4xl bg-[#EEEEEE] rounded-2xl border border-black/40 relative">
        {/* هدر */}
        <div className="mt-8">
          <div className="flex items-start justify-end gap-2 mr-5">
            <h1 className={` text-gray-800 mt-2 ${language === 'fa' ? 'font-lahzeh text-md font-semibold' : 'font-gidugu text-3xl -mt-[2px]'}`}>
              {texts[language].title}
            </h1>
            <img src={Icon} className="w-7 h-7" alt="money icon" />
          </div>
        </div>

        {/* Legend */}
        <div className={`flex flex-row gap-4 absolute top-7 left-8 ${language === 'fa' ? 'pt-2 top-3 left-8' : 'top-3 left-8'}`}>
          <div className="flex flex-col items-center gap-1 pt-2">
            <span className={`text-gray-700 font-medium  ${language === 'fa' ? 'font-lahzeh text-xs' : 'font-gidugu text-xl'}`}>
              {texts[language].tier1}
            </span>
            <div className="w-3 h-3 bg-[#20327ab8] rounded"></div>
          </div>
          <div className={`flex flex-col items-center gap-1 pt-2 ${language === 'fa' ? 'top-5 left-8' : 'top-3 left-8'}`}>
            <span className={`text-gray-700 font-medium ${language === 'fa' ? 'font-lahzeh text-xs' : 'font-gidugu text-xl'}`}>
              {texts[language].tier2}
            </span>
            <div className="w-3 h-3 bg-[#ECCA5B] rounded"></div>
          </div>
        </div>

        {/* نمودار */}
        <div className="bg-[#EEEEEE] rounded-xl sm:p-20 relative mb-1" style={{ outline: 'none' }}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={processedData}
              margin={{
                top: 30,
                right: 30,
                left: 0,
              }}
              barCategoryGap="35%">
              <XAxis
                dataKey="month"
                tick={{ 
                  fontSize: language === 'fa' ? 14 : 23, 
                  fill: '#374151',
                  fontFamily: language === 'fa' ? 'lahzeh' : 'gidugu',
                  dy: 10
                }}
                axisLine={{
                  stroke: '#1f2937',
                  strokeWidth: 8,
                  strokeLinecap: 'round'
                }}
                tickLine={false}
                interval={0}
                height={80}
              />

              <YAxis
                tick={{
                  fontSize: language === 'fa' ? 16 : 24,
                  fill: '#374151',
                  fontWeight:  language === 'fa' ? '600' : 'thin',
                  dx: -10,
                  fontFamily: language === 'fa' ? 'lahzeh' : 'gidugu'
                }}
                height={80}
                padding={{ bottom: 4 }}
                axisLine={{
                  stroke: '#1f2937',
                  strokeWidth: 8,
                  strokeLinecap: 'round'
                }}
                tickLine={false}
                domain={[0, 'dataMax + 4']}
                width={80}
                ticks={[...new Set(data.map(item => item.earnings))].sort((a, b) => a - b)}
                tickFormatter={(value) => `${value}$`}
              />

              <Tooltip
                content={<CustomTooltip />}
                cursor={false}
              />

              <Bar
                dataKey="earnings"
                radius={[3, 3, 0, 0]}
                stroke="rgba(0, 0, 0, 0.1)"
                strokeWidth={1}
                maxBarSize={20}
                cursor="pointer"
              >
                {processedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MonthlyTierEarningsChart;