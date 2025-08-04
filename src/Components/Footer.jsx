import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // مشخص کردن صفحه فعال
    const isActive = (path) => currentPath === path;

    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-[#222831] py-4 flex justify-center items-center gap-x-20 z-50 " >
            {/* Home */}
            <Link to="/" className="flex flex-col items-center">
                <img
                    src={
                        isActive("/")
                            ? "/Images/icons8-home-48 1.png"
                            : "/Images/icons8-home-48(1) 1.png"
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
                            ? "/Images/icons8-wallet-50 1.png"
                            : "/Images/icons8-wallet-50(1) 1.png"
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
                            ? "/Images/icons8-connect-50 1.png"
                            : "/Images/icons8-connect-64 1.png"
                    }
                    className="w-7 h-7"
                    alt="Referral"
                />
            </Link>
        </footer>

    );
};

export default Footer;
