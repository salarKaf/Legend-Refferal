import React, { useState } from 'react';
import { Copy, Check, ArrowUp, DollarSign, Users, Gift } from 'lucide-react';

const ReferralLinkGenerator = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [linkType, setLinkType] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');
    const [copied, setCopied] = useState(false);

    const handleCreateLink = () => {
        setIsModalOpen(true);
    };

    const handleGenerateLink = () => {
        const baseUrl = 'https://legendcompany.com/ref/';
        const randomId = Math.random().toString(36).substring(2, 15);
        const link = `${baseUrl}${linkType}-${randomId}`;
        setGeneratedLink(link);
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(generatedLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setLinkType('');
        setGeneratedLink('');
        setCopied(false);
    };

    return (
        <>
            {/* Main Content */}
            <div className="flex items-center justify-center  mb-8">
                <div className="bg-[#EEEEEE] rounded-2xl border border-black/40 shadow-lg p-8 max-w-2xl">
                    <div className="flex flex-col md:flex-row  gap-6 md:text-left">
                        {/* متن بالا */}
                        <div className="w-full">
                            <h2 className="text-md md:text-3xl font-bold text-gray-800 mb-4">
                                Create your referral link to invite friends and earn rewards.
                            </h2>
                        </div>

                        <div className='flex justify-between'>
                            {/* دکمه چپ */}
                            <div className="">
                                <button
                                    onClick={handleCreateLink}
                                    className="bg-[#FFD369]  text-gray-900 border border-black  font-bold py-[12px] px-8 rounded-full text-lg md:text-xl shadow-xl transform hover:scale-105 transition-all duration-200"
                                >
                                    create Link
                                </button>
                            </div>

                            <div className="-mt-10">
                                <img
                                    src="/Images/Polish_۲۰۲۵۰۷۲۴_۰۰۰۶۳۹۳۹۲.png"
                                    alt="Referral illustration"
                                    className="rounded-lg w-28 h-28 md:w-44 md:h-44 mx-auto md:mx-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {/* Modal */}
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-30">
                    <div className="bg-[#222831]/70 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Generate Referral Link
                            </h3>

                            {!generatedLink ? (
                                <>
                                    <div className="mb-6">
                                        <p className="text-gray-300 mb-4">
                                            Select your group to generate referral link:
                                        </p>
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => setLinkType('group1')}
                                                className={`flex-1 p-4 rounded-full border-2 transition-all ${linkType === 'group1'
                                                    ? 'border-[#FFD369] bg-gradient-to-br from-[#FFD369] to-[#ab8429] text-black'
                                                    : 'border-gray-600 text-gray-300 hover:border-gray-500'
                                                    }`}
                                            >
                                                <div className="flex items-center justify-center space-x-2">
                                                    <Users className="w-5 h-5" />
                                                    <span>Group 1</span>
                                                </div>
                                            </button>

                                            <button
                                                onClick={() => setLinkType('group2')}
                                                className={`flex-1 p-4 rounded-full border-2 transition-all ${linkType === 'group2'
                                                    ? 'border-[#FFD369] bg-gradient-to-br from-[#FFD369] to-[#ab8429] text-black'
                                                    : 'border-gray-600 text-gray-300 hover:border-gray-500'
                                                    }`}
                                            >
                                                <div className="flex items-center justify-center space-x-2">
                                                    <Users className="w-5 h-5" />
                                                    <span>Group 2</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <button
                                            onClick={handleGenerateLink}
                                            disabled={!linkType}
                                            className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-2xl transition-all"
                                        >
                                            Generate Link
                                        </button>

                                        <button
                                            onClick={closeModal}
                                            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-2xl transition-all"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="mb-6">
                                        <p className="text-gray-300 mb-2">
                                            Your {linkType === 'group1' ? 'Group 1' : 'Group 2'} referral link:
                                        </p>
                                        <div className="bg-slate-700 p-4 rounded-lg border">
                                            <p className="text-orange-400 font-mono text-sm break-all">
                                                {generatedLink}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <button
                                            onClick={handleCopyLink}
                                            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-2xl transition-all flex items-center justify-center space-x-2"
                                        >
                                            {copied ? (
                                                <>
                                                    <Check className="w-5 h-5" />
                                                    <span>Copied!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-5 h-5" />
                                                    <span>Copy Link</span>
                                                </>
                                            )}
                                        </button>

                                        <button
                                            onClick={closeModal}
                                            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-2xl transition-all"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ReferralLinkGenerator;