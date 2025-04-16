import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shows from "./pages/Shows";
import SingleMedia from "./pages/SingleMedia";
import Support from "./pages/Support";

import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="flex items-center flex-col justify-center bg-[#141414] text-white font-manrope">
        <div className="w-[1597px] max-lg:w-screen arrow-padding">
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Home />} />

            {/* Shows page */}
            <Route path="/shows" element={<Shows />} />

            {/* SingleMedia page */}
            <Route path="/single-media/:id" element={<SingleMedia />} />

            {/* Support page */}
            <Route path="/support" element={<Support />} />

          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
