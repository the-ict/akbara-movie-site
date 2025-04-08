import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./index.css"
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="flex items-center flex-col justify-center bg-[#141414] text-white font-manrope">
      <div className="w-[1597px]">
        <Home />  
      </div>
      <Footer />
    </div>
  )
}
