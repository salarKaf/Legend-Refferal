import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const MonthlyEarningsChart = () => {
  const [data, setData] = useState([
    { month: 'فروردین', earnings: 30, monthEn: 'April' },
    { month: 'اردیبهشت', earnings: 50, monthEn: 'May' },
    { month: 'خرداد', earnings: 20, monthEn: 'July' }
  ]);

  // تشخیص روند کلی و تعیین رنگ‌ها بر اساس آن
  const getDataWithColors = () => {
    const firstValue = data[0].earnings;
    const lastValue = data[data.length - 1].earnings;

    // تشخیص روند کلی
    let overallTrend;
    if (lastValue > firstValue) {
      overallTrend = 'صعودی';
    } else if (lastValue < firstValue) {
      overallTrend = 'نزولی';
    } else {
      overallTrend = 'ثابت';
    }

    // محاسبه بیشترین و کمترین مقدار برای شدت رنگ
    const maxEarnings = Math.max(...data.map(item => item.earnings));
    const minEarnings = Math.min(...data.map(item => item.earnings));

    return data.map((item) => {
      let color;

      if (overallTrend === 'صعودی' || 'نزولی') {
        // روند صعودی: رنگ سبز ثابت با opacity متغیر
        // هر چقدر مقدار بیشتر باشه، opacity بیشتر
        const intensity = (item.earnings - minEarnings) / (maxEarnings - minEarnings);
        const opacity = 0.75 + (0.25 * intensity); // از 0.3 تا 1
        color = `rgba(32, 122, 55, ${opacity})`; // #207A37 با opacity متغیر
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

      if (data.overallTrend === 'صعودی') {
        trendIcon = '📈';
        trendColor = 'text-green-400';
      } else if (data.overallTrend === 'نزولی') {
        trendIcon = '📉';
        trendColor = 'text-green-400';
      } else if (data.overallTrend === 'شروع') {
        trendIcon = '🚀';
        trendColor = 'text-blue-400';
      }

      return (
        <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg border">
          <p className="font-semibold text-sm sm:text-base">{data.month}</p>
          <p className="text-yellow-400 text-sm sm:text-base">{`درآمد: ${data.earnings}`}</p>
          <p className={`text-xs sm:text-sm ${trendColor}`}>
            {trendIcon} روند {data.overallTrend}          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full relative flex items-center justify-center mb-5 ">
      <div className="w-full max-w-4xl bg-white rounded-2xl border border-black/40 relative">
        {/* هدر */}
        <div className="mt-8">
          <div className="flex items-start justify-end gap-1 mr-5">
            <h1 className="text-2xl font-bold text-gray-800" >Monthly Earnings</h1>
            <img src='/public/Images/icons8-euro-money-50(1).png' className="w-8 h-8"></img>

          </div>
        </div>

        {/* نمودار */}
        <div className=" bg-white rounded-xl sm:p-20 relative mb-1" style={{ outline: 'none' }}>
          <ResponsiveContainer width="100%" height={400} >
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
                tick={{ fontSize: 16, fill: '#374151' }}
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
                  fontSize: 18,           // فونت بزرگ‌تر
                  fill: '#374151',
                  fontWeight: 'bold',     // بولد
                  dx: -10                 // فاصله از محور (منفی = سمت چپ)
                }}
                height={80}
                padding={{ bottom: 4 }}  // این خط رو اضافه کن
                axisLine={{
                  stroke: '#1f2937',
                  strokeWidth: 8,
                  strokeLinecap: 'round'
                }}
                tickLine={false}
                domain={[0, 'dataMax + 4']}
                width={80}
                ticks={[...new Set(data.map(item => item.earnings))].sort((a, b) => a - b)} tickFormatter={(value) => `${value}$`}  // 185$

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