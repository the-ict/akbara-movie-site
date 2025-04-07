import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./index.css"


export default function App() {
  return (
    <div className="flex items-center justify-center bg-[#141414] text-white font-manrope">
      <div className="w-[1597px]">
        <Home />  
      </div>
    </div>
  )
}
