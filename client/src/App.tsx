import Home from "./pages/Home";
import "./index.css"
import Footer from "./components/Footer";
import Shows from "./pages/Shows";
import SingleMedia from "./pages/SingleMedia";
import Support from "./pages/Support";
import Review from "./components/Review";


export default function App() {
  return (
    <div className="flex items-center flex-col justify-center bg-[#141414] text-white font-manrope">
      <div className="w-[1597px] max-lg:w-screen arrow-padding">
        <SingleMedia />
      </div>
      <Footer />
    </div>
  )
}
