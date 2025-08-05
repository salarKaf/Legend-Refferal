import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Icon from '/Images/icons8-earning-48.png'
const MonthlyTierEarningsChart = () => {
  const [data, setData] = useState([
    { month: 'April', earnings: 30, monthFa: 'فروردین', tier: 'Tier 1' },
    { month: 'May', earnings: 50, monthFa: 'اردیبهشت', tier: 'Tier 1' },
    { month: 'June', earnings: 20, monthFa: 'خرداد', tier: 'Tier 2' },
    { month: 'July', earnings: 35, monthFa: 'تیر', tier: 'Tier 2' }
  ]);

  // تشخیص tier و تعیین رنگ‌ها
  const getDataWithColors = () => {
    return data.map((item) => {
      let color;

      if (item.tier === 'Tier 1') {
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
        <div className="bg-gray-800 text-white p-3 rounded-lg border">
          <p className="font-semibold text-sm sm:text-base">{data.month}</p>
          <p className="text-[#ECCA5B] text-sm sm:text-base">{`Earnings: $${data.earnings}`}</p>
          <p className="text-green-400 text-xs sm:text-sm">
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
            <h1 className="text-2xl font-bold text-gray-800 mt-2">Earnings Tiers</h1>
            <img src={Icon} className="w-10 h-10" alt="money icon" />
          </div>
        </div>

        {/* Legend */}
        {/* Legend */}
        <div className="flex flex-row gap-4 absolute top-7 left-8">
          <div className="flex flex-col items-center gap-1 pt-2">
            <span className="text-gray-700 font-medium text-xs">Tier 1</span>
            <div className="w-3 h-3 bg-[#20327ab8] rounded"></div>
          </div>
          <div className="flex flex-col items-center gap-1 pt-2">
            <span className="text-gray-700 font-medium text-xs">Tier 2</span>
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
                  fontSize: 18,
                  fill: '#374151',
                  fontWeight: 'bold',
                  dx: -10
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