import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Wallet from "./Pages/Wallet";
import Referral from "./Pages/Referral";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        {/* container کلی برای چسباندن فوتر به پایین */}
        <div className="flex flex-col min-h-screen">
          
          <Header />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/referral" element={<Referral />} />
            </Routes>
          </main>

          <Footer />

        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
