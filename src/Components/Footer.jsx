import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // مشخص کردن صفحه فعال
    const isActive = (path) => currentPath === path;

    return (
        <footer className="bg-[#0A0E14] py-4 flex justify-center items-center gap-x-20">
            {/* Home */}
            <Link to="/" className="flex flex-col items-center">
                <img
                    src={
                        isActive("/")
                            ? "/public/Images/icons8-home-48 1.png"
                            : "/public/Images/icons8-home-48(1) 1.png"
                    }
                    className="w-9 h-9"
                    alt="Home"
                />
            </Link>

            {/* Wallet */}
            <Link to="/wallet" className="flex flex-col items-center">
                <img
                    src={
                        isActive("/wallet")
                            ? "/public/Images/icons8-wallet-50 1.png"
                            : "/public/Images/icons8-wallet-50(1) 1.png"
                    }
                    className="w-7 h-7"
                    alt="Wallet"
                />
            </Link>

            {/* Referral */}
            <Link to="/referral" className="flex flex-col items-center">
                <img
                    src={
                        isActive("/referral")
                            ? "/public/Images/icons8-connect-50 1.png"
                            : "/public/Images/icons8-connect-64 1.png"
                    }
                    className="w-7 h-7"
                    alt="Referral"
                />
            </Link>
        </footer>

    );
};

export default Footer;
