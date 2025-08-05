import React from 'react';
import pointsImage from '/public/Images/Polish_۲۰۲۵۰۷۲۴_۰۰۰۸۳۸۲۹۰.png';
export default function PointsOverview() {
  const pointsData = {
    balancePoints: 2,
    balanceValue: 50,
    totalPoints: 9,
    totalValue: 150
  };

  const handleDeposit = () => {
    console.log('Deposit clicked');
  };
 
  return (
    <div className="bg-[#EEEEEE] rounded-2xl border border-black/40 shadow-xl mb-8 mt-8">
      <div className="max-w-2xl mx-auto">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mr-4">
              <img src={pointsImage} className="text-2xl"></img>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Points Overview</h1>
          </div>
          
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-8 mb-4">
            <div className="col-span-2"></div>
            <div className="text-center">
              <h3 className="text-md font-semibold text-gray-700">points</h3>
            </div>
            <div className="text-center">
              <h3 className="text-md font-semibold text-gray-700">value</h3>
            </div>
          </div>
          
          {/* Points Data */}
          <div className="space-y-4 mb-6 px-2">
            {/* Balance Points */}
            <div className="grid grid-cols-4 gap-8 items-center">
              <div className="col-span-2 flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                <span className="text-md font-medium text-gray-900">
                  balance points
                </span>
              </div>
              <div className="text-center">
                <span className="text-lg font-bold text-gray-900">
                  {pointsData.balancePoints} pts
                </span>
              </div>
              <div className="text-center">
                <span className="text-lg font-bold text-gray-900">
                  {pointsData.balanceValue} $
                </span>
              </div>
            </div>
            
            {/* Total Points */}
            <div className="grid grid-cols-4 gap-8 items-center">
              <div className="col-span-2 flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                <span className="text-md font-medium text-gray-900">
                  Total points
                </span>
              </div>
              <div className="text-center">
                <span className="text-lg font-bold text-gray-900">
                  {pointsData.totalPoints} pts
                </span>
              </div>
              <div className="text-center">
                <span className="text-lg font-bold text-gray-900">
                  {pointsData.totalValue} $
                </span>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleDeposit}
              className="flex-1 bg-[#FFD369] hover:bg-[#e4b23e] text-black font-bold py-2 px-8 rounded-full text-lg transition-colors duration-200 border border-black shadow-lg hover:shadow-xl"
            >
              deposit
            </button>
            <button
              onClick={() => console.log('Withdraw clicked')}
              className="flex-1 bg-[#FFD369] hover:bg-[#e4b23e] text-black font-bold py-2 px-8 rounded-full text-lg transition-colors duration-200 border border-black shadow-lg hover:shadow-xl"
            >
              WITHDRAW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}