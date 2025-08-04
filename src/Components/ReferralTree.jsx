import React, { useState } from 'react';
import { Users, MoreHorizontal } from 'lucide-react';

const ReferralTree = () => {
  const [activeGroup, setActiveGroup] = useState('group01');

  // Sample data structure - replace avatar URLs with your actual image URLs
  const referralData = {
    group01: {
      root: {
        avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png', // Replace with your image URL
        name: 'You'
      },
      level2: [
        {
          avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۴۴۵۴۴۳۰.png', // Replace with actual image
          name: 'Child 1',
          children: [
            { avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۸۰۰۰۸۸۸۱.png', name: 'Grandchild 1' },
            { avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۴۹۴۰۵۰۹.png', name: 'Grandchild 2' }
          ]
        },
        {
          avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۴۴۵۴۴۳۰.png', // Replace with actual image
          name: 'Child 2',
          children: [
            { avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۴۲۴۵۷۳۷.png', name: 'Grandchild 3' },
            { avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۴۹۴۰۵۰۹.png', name: 'Grandchild 4' }
          ]
        }
      ]
    },
    group02: {
      root: {
        avatar: '', // Empty for default avatar
        name: 'You'
      },
      level2: [
        {
          avatar: '', // Empty for default avatar
          name: 'Child A',
          children: [
            { avatar: '', name: 'Grandchild A1' },
            { avatar: '', name: 'Grandchild A2' }
          ]
        },
        {
          avatar: '', // Empty for default avatar
          name: 'Child B',
          children: [
            { avatar: '', name: 'Grandchild B1' },
            { avatar: '', name: 'Grandchild B2' }
          ]
        }
      ]
    }
  };

  const Avatar = ({ user, size = 'normal' }) => {
    const sizeClasses = {
      large: 'w-20 h-20',
      normal: 'w-12 h-12'
    };

    // If user has an avatar URL and it's not empty, use it as background image
    if (user.avatar && user.avatar.trim() !== '' && user.avatar !== 'placeholder') {
      return (
        <div 
          className={`${sizeClasses[size]} rounded-full border-2 border-white shadow-lg bg-cover bg-center bg-gray-200`}
          style={{ backgroundImage: `url(${user.avatar})` }}
        />
      );
    }

    // Default avatar with user icon
    return (
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-blue-950 to-gray-300 flex items-center justify-center border-2 border-white shadow-lg`}>
        <Users className="text-white" size={size === 'large' ? 32 : 20} />
      </div>
    );
  };

  const TreeLevel = ({ data }) => {
    return (
      <div className="flex flex-col items-center space-y-0 ">
        {/* Level 1 - Root User (You) */}
        <div className="flex flex-col items-center">
          <Avatar user={data.root} size="large" />
        </div>

        {/* Main vertical connection line from root - shortened */}
        <div className="w-px h-4 bg-black "></div>

        {/* Level 2 Container */}
        <div className="relative">
          {/* Horizontal connection line for level 2 - کم کردن پهنا */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[248px] h-[1.5px] bg-black"></div>
          
          {/* کم کردن فاصله بین level 2 */}
          <div className="flex items-start justify-center  space-x-24">
            {data.level2.map((child, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* Vertical line from horizontal to child avatar - shortened */}
                <div className="w-px h-4 bg-black"></div>
                <Avatar user={child} />
                
                {/* Vertical line from child to level 3 horizontal - shortened */}
                <div className="w-px h-3 bg-black"></div>
                
                {/* Level 3 Container */}
                <div className="relative">
                  {/* Horizontal connection line for grandchildren - کم کردن پهنا */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[105px] h-[1.5px] bg-black"></div>
                  
                  {/* کم کردن فاصله بین grandchildren */}
                  <div className="flex items-start justify-center space-x-14">
                    {child.children.map((grandchild, grandIndex) => (
                      <div key={grandIndex} className="flex flex-col items-center">
                        {/* Vertical line from horizontal to grandchild avatar - shortened */}
                        <div className="w-px h-3 bg-black"></div>
                        <Avatar user={grandchild} />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Three Dots under each branch - moved closer */}
                <div className="flex space-x-2 mt-3">
                  <div className="w-2 h-2 bg-[#222831] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#222831] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#222831] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-8 px-6 bg-[#EEEEEE] border border-[#222831] rounded-2xl shadow-xl mb-8">
      {/* Header - Title moved to top right */}
      <div className="mb-2">
        <div className="flex justify-end items-center space-x-2 mb-6">
          <h1 className="text-2xl font-bold text-[#222831]">Referral Tree</h1>
          <img src='/Images/icons8-centralized-network-50.png' className=" w-8 h-8" size={28} />
        </div>

        {/* Full width Group Tabs - stretched across page */}
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveGroup('group02')}
            className={`flex-1 py-3 rounded-full font-medium transition-all duration-300 ${
              activeGroup === 'group02'
                ? 'bg-[#FFD369] shadow-xl text-black font-semibold  border-[2px] border-[#222831]'
                : 'bg-[#EEEEEE] shadow-lg text-gray-700 font-semibold border-[2px] border-[#222831] hover:bg-gray-50'
            }`}
          >
            Group 02
          </button>
          
          <button
            onClick={() => setActiveGroup('group01')}
            className={`flex-1 py-3 rounded-full font-medium transition-all duration-300 ${
              activeGroup === 'group01'
                ? 'bg-[#FFD369] shadow-xl text-black font-semibold  border-[2px] border-black/50'
                : 'bg-[#EEEEEE] shadow-lg text-gray-700 font-semibold border-[2px] border-[#222831]'
            }`}
          >
            Group 01
          </button>
        </div>
      </div>

      {/* Tree Display */}
      <div className="bg-[#EEEEEE] rounded-xl p-8">
        {referralData[activeGroup] && (
          <TreeLevel data={referralData[activeGroup]} />
        )}
      </div>
    </div>
  );
};

export default ReferralTree;