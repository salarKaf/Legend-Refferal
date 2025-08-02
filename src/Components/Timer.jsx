import React, { useState, useEffect } from 'react';

const AnimatedDigit = ({ value, label }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        if (displayValue !== value) {
            // Trigger animation
            setAnimationKey(prev => prev + 1);

            // Update display value after a short delay
            setTimeout(() => {
                setDisplayValue(value);
            }, 300);
        }
    }, [value, displayValue]);

    const formatNumber = (num) => {
        return num.toString().padStart(2, '0');
    };

    return (
        <div className="text-center">
            <div className="relative h-16 w-16 mx-auto mb-1 overflow-hidden">
                <div
                    key={`old-${animationKey}`}
                    className={`absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-800 ${displayValue !== value ? 'animate-slideUp' : ''
                        }`}
                >
                    {formatNumber(displayValue)}
                </div>

                {displayValue !== value && (
                    <div
                        key={`new-${animationKey}`}
                        className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-800 animate-slideInFromBottom"
                    >
                        {formatNumber(value)}
                    </div>
                )}
            </div>
            <div className="text-sm text-gray-600 font-medium">{label}</div>

            <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        
        @keyframes slideInFromBottom {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
        
        .animate-slideInFromBottom {
          animation: slideInFromBottom 0.4s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

const CountdownTimer = () => {
    const targetDate = new Date('2025-12-31T23:59:59').getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        // Initial call
        updateTimer();

        // Set interval
        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="max-w-md mx-auto p-8  rounded-3xl shadow-2xl border  border-black/40" style={{ background: 'linear-gradient(to bottom, #EEEEEE 52%, #D0D0D0 70%, #A7A7A7 100%)' }}>
            {/* Top circles decoration */}
            <div className="flex justify-between mb-6 -mt-2">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>

            {/* Timer display */}
            <div className="flex items-center justify-center gap-4 mb-8">
                <AnimatedDigit value={timeLeft.days} label="Days" />
                <div className="w-0.5 h-16 bg-gradient-to-b from-gray-300 to-gray-700"></div>
                <AnimatedDigit value={timeLeft.hours} label="Hours" />
                <div className="w-0.5 h-16 bg-gradient-to-b from-gray-300 to-gray-700"></div>
                <AnimatedDigit value={timeLeft.minutes} label="Minutes" />
                <div className="w-0.5 h-16 bg-gradient-to-b from-gray-300 to-gray-700"></div>
                <AnimatedDigit value={timeLeft.seconds} label="Seconds" />
            </div>

            {/* Description text */}
            <div className="text-center text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
        </div>
    );
};

export default CountdownTimer;