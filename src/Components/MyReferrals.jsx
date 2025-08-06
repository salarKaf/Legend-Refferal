import { User, DollarSign } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext";

const MyReferrals = () => {

    const { language } = useLanguage();

    // تابع تبدیل اعداد انگلیسی به فارسی
    const convertToPersianNumbers = (number) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return number.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
    };

    const texts = {
        en: {
            title: "My Referrals",
        },
        fa: {
            title: "زیرمجموعه های من",
        }
    };
    const currentTexts = texts[language];

    const referralData = [
        // سطح اول - بیشتر از 6 تا برای تست
        [
            { id: 1, avatar: null, amount: 30, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' },
            { id: 3, avatar: null, amount: 20, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' },
            { id: 4, avatar: null, amount: 20, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' },
            { id: 2, avatar: null, amount: 30, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' },
            { id: 5, avatar: null, amount: 20, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' },
            { id: 6, avatar: null, amount: 20, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' },
            { id: 7, avatar: null, amount: 10, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' },
            { id: 8, avatar: null, amount: 10, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' },
            { id: 9, avatar: null, amount: 10, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' },
            { id: 10, avatar: null, amount: 10, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' },
            { id: 11, avatar: null, amount: 10, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' },
            { id: 12, avatar: null, amount: 10, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' },
            { id: 13, avatar: null, amount: 10, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' },
            { id: 14, avatar: null, amount: 10, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' },
            { id: 15, avatar: null, amount: 5, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' },
            { id: 16, avatar: null, amount: 25, avatar: '/Images/Polish_۲۰۲۵۰۷۲۳_۱۷۵۵۳۴۰۱۴.png' }
        ],
    ];

    const PersonCard = ({ person }) => (
        <div className="flex flex-col items-center">
            <div className="relative">
                {/* آواتار - کوچیک‌تر شده */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-950 to-gray-300 flex items-center justify-center overflow-hidden border-3 border-white shadow-lg">
                    {person.avatar ? (
                        <img src={person.avatar} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                        <User className="w-6 h-6 text-white" />
                    )}
                </div>
            </div>

            {/* مبلغ دلار - کوچیک‌تر شده */}
            <div className="mt-2 bg-white border-2 border-gray-300 rounded-full px-2 py-[0.8px] flex items-center gap-1 shadow-sm">
                <span className={`font-bold text-sm text-gray-800 ${language === 'fa' ? 'font-lahzeh' : ''}`}>
                    {language === 'fa' ? convertToPersianNumbers(person.amount) : person.amount}
                </span>
                <img src='/Images/icons8-coin-64.png' className="w-[13px] h-[13px] text-yellow-500" />
            </div>
        </div>
    );

    const renderLevel = (people, levelIndex) => {
        const rows = [];

        for (let i = 0; i < people.length; i += 6) {
            const rowPeople = people.slice(i, i + 6);
            const rowIndex = Math.floor(i / 6);
            const isLeftToRight = rowIndex % 2 === 0;

            const displayPeople = isLeftToRight ? rowPeople : [...rowPeople].reverse();

            rows.push(
                <div key={`row-${i}`} className="mb-8 relative">
                    {/* آواتارهای ردیف با خط افقی */}
                    <div className="flex justify-start relative px-2">
                        {/* خط افقی مشکی - از سمت چپ شروع میشه */}
                        <div className="absolute top-0 h-[1.5px] bg-black left-1 right-1"></div>

                        {/* آواتارها - با فاصله یکسان و شروع از سمت چپ */}
                        <div className="flex w-full" style={{ justifyContent: 'space-between', maxWidth: '100%' }}>
                            {displayPeople.map((person, personIndex) => {
                                // محاسبه موقعیت هر آیتم برای توزیع یکسان
                                const totalItems = Math.min(rowPeople.length, 6);
                                const itemWidth = `${100 / totalItems}%`;

                                return (
                                    <div
                                        key={person.id}
                                        className="flex flex-col items-center relative"
                                        style={{
                                            width: itemWidth,
                                            minWidth: '50px' // حداقل عرض برای جلوگیری از فشردگی
                                        }}
                                    >
                                        {/* خط عمودی کوچیک که دقیقاً به خط افقی چسبیده */}
                                        <div className="w-[1.5px] h-6 bg-black mx-auto"></div>
                                        <div className="">
                                            <PersonCard person={person} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* خط عمودی اتصال - فاصله مناسب از آخرین آیتم */}
                    {rowPeople.length === 6 && i + 6 < people.length && (
                        <div className={`absolute top-0 ${isLeftToRight ? 'right-1' : 'left-1'}`}>
                            <div className="w-[1.5px] h-[130px] bg-black"></div>
                        </div>
                    )}

                </div>
            );
        }

        return rows;
    };

    return (
        <div className='p-8 px-6  bg-[#EEEEEE] border border-black/40 rounded-2xl shadow-xl mb-8 max-w-full overflow-hidden'>
            <div className="max-w-full mx-auto">
                {/* هدر */}
                <div className="flex justify-end  space-x-2 mb-6  sm:mb-12 ">


                    <h1 className={` text-gray-900 ${language === 'fa' ? 'font-lahzeh  text-md font-semibold pt-2' : 'font-gidugu text-3xl '}`}>

                        {currentTexts.title}

                    </h1>
                    <img src='/Images/icons8-user-30.png' className="w-8 h-8 sm:w-8 sm:h-8 " />

                </div>

                {/* درخت ارجاع */}
                <div className="w-full">
                    {referralData.map((level, levelIndex) => (
                        <div key={levelIndex} className="relative w-full">
                            {renderLevel(level, levelIndex)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyReferrals;