import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shows from "./pages/Shows";
import SingleMedia from "./pages/SingleMedia";
import Support from "./pages/Support";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./index.css";
import Search from "./pages/Search";
import AddMovie from "./pages/AddMovie";
import RulesPage from "./pages/Rules";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex items-center flex-col justify-center bg-[#141414] text-white font-manrope">
          <div className="2xl:w-[1597px] w-[1200px] arrow-padding">
            <Routes>
              {/* Home page */}
              <Route path="/" element={<Home />} />

              {/* Shows page */}
              <Route path="/shows" element={<Shows />} />

              {/* SingleMedia page */}
              <Route path="/single-media/:id" element={<SingleMedia />} />

              {/* Support page */}
              <Route path="/support" element={<Support />} />
              <Route path="/search" element={<Search />} />
              <Route path="/add" element={<AddMovie />} />
              <Route path="/rules" element={<RulesPage />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}
