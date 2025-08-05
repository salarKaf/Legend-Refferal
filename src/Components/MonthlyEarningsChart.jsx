import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useLanguage } from "../context/LanguageContext";

const MonthlyEarningsChart = () => {
  const { language } = useLanguage();

  // متن‌های چند زبانه
  const texts = {
    en: {
      title: "Monthly Earnings",
      earnings: "Earnings",
      trend: "Trend",
      ascending: "Ascending",
      descending: "Descending",
      stable: "Stable",
      start: "Start"
    },
    fa: {
      title: "درآمد ماهانه",
      earnings: "درآمد",
      trend: "روند",
      ascending: "صعودی",
      descending: "نزولی",
      stable: "ثابت",
      start: "شروع"
    }
  };

  // داده‌های چند زبانه
  const [data, setData] = useState([
    { 
      month: language === 'fa' ? 'فروردین' : 'April', 
      earnings: 30
    },
    { 
      month: language === 'fa' ? 'اردیبهشت' : 'May', 
      earnings: 50
    },
    { 
      month: language === 'fa' ? 'خرداد' : 'June', 
      earnings: 20
    }
  ]);

  // بروزرسانی داده‌ها هنگام تغییر زبان
  React.useEffect(() => {
    setData([
      { 
        month: language === 'fa' ? 'فروردین' : 'April', 
        earnings: 30
      },
      { 
        month: language === 'fa' ? 'اردیبهشت' : 'May', 
        earnings: 50
      },
      { 
        month: language === 'fa' ? 'خرداد' : 'June', 
        earnings: 20
      }
    ]);
  }, [language]);

  // تشخیص روند کلی و تعیین رنگ‌ها بر اساس آن
  const getDataWithColors = () => {
    const firstValue = data[0].earnings;
    const lastValue = data[data.length - 1].earnings;

    // تشخیص روند کلی
    let overallTrend;
    if (lastValue > firstValue) {
      overallTrend = texts[language].ascending;
    } else if (lastValue < firstValue) {
      overallTrend = texts[language].descending;
    } else {
      overallTrend = texts[language].stable;
    }

    // محاسبه بیشترین و کمترین مقدار برای شدت رنگ
    const maxEarnings = Math.max(...data.map(item => item.earnings));
    const minEarnings = Math.min(...data.map(item => item.earnings));

    return data.map((item) => {
      let color;

      if (overallTrend === texts[language].ascending || overallTrend === texts[language].descending) {
        // روند صعودی یا نزولی: رنگ سبز ثابت با opacity متغیر
        const intensity = (item.earnings - minEarnings) / (maxEarnings - minEarnings);
        const opacity = 0.75 + (0.25 * intensity);
        color = `rgba(32, 122, 55, ${opacity})`;
      } else {
        // روند ثابت: آبی
        color = '#3B82F6';
      }

      return {
        ...item,
        color,
        overallTrend
      };
    });
  };

  const processedData = getDataWithColors();

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;

      // تعیین ایکون و رنگ بر اساس روند
      let trendIcon = '📊';
      let trendColor = 'text-blue-400';

      if (data.overallTrend === texts[language].ascending) {
        trendIcon = '📈';
        trendColor = 'text-green-400';
      } else if (data.overallTrend === texts[language].descending) {
        trendIcon = '📉';
        trendColor = 'text-green-400';
      } else if (data.overallTrend === texts[language].start) {
        trendIcon = '🚀';
        trendColor = 'text-blue-400';
      }

      return (
        <div className={`bg-gray-800 text-white p-3 rounded-lg border ${language === 'fa' ? 'font-lahzeh text-sm' : 'font-Poppins text-sm'}`}>
          <p className={`font-semibold ${language === 'fa' ? 'text-sm' : 'text-xs'}`}>{data.month}</p>
          <p className={`text-yellow-400 ${language === 'fa' ? 'text-sm' : 'text-xs'}`}>
            {`${texts[language].earnings}: ${data.earnings}`}
          </p>
          <p className={`${trendColor} ${language === 'fa' ? 'text-xs' : 'text-xs'}`}>
            {trendIcon} {texts[language].trend} {data.overallTrend}
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
          <div className="flex items-start justify-end gap-1 mr-5">
            <h1 className={`font-bold text-gray-800 ${language === 'fa' ? 'font-lahzeh text-lg' : 'font-gidugu text-3xl'}`}>
              {texts[language].title}
            </h1>
            <img src='/Images/icons8-euro-money-50(1).png' className="w-8 h-8" alt="money icon" />
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
                  fontWeight: 'bold',
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
                stroke="rgba(34, 197, 94, 0.3)"
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

export default MonthlyEarningsChart;