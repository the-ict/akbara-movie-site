import { FaTelegram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#0F0F0F] w-full flex flex-col items-center xlmargin footer">
      <div className="2xl:w-[1597px] footer max-lg:w-screen arrow-padding w-[1200px]">
        <div className="flex max-sm:flex-wrap justify-between items-center footer-nav flex-wrap gap-5">
          <ul className="max-lg:w-[45%]">
            <li className="footer-item">Reklama</li>
          </ul>
          <ul className="max-lg:w-[45%]">
            <li className="footer-item">Qo'llab quvatlash</li>
          </ul>
          <ul className="max-lg:w-[45%]">
            <li className="footer-item">Bog'lanish</li>
          </ul>
          <ul className="max-lg:w-[45%]">
            <li className="footer-item">Sayt qoidalari</li>
          </ul>
          <div className="max-lg:w-[45%]">
            <div className="flex items-center gap-5">
              <Link to={"/support"}>
                <FaTelegram className="w-[50px] h-[50px] object-contain icon bg-[#1a1a1a] rounded hover:bg-[#000] max-sm:w-[30px] max-sm:h-[30px]" />
              </Link>
              <Link to={"/support"}>
                <FaInstagramSquare className="w-[50px] h-[50px] object-contain icon bg-[#1a1a1a] rounded hover:bg-[#000] max-sm:w-[30px] max-sm:h-[30px]" />
              </Link>
              <Link to={"/support"}>
                <AiFillTikTok className="w-[50px] h-[50px] object-contain icon bg-[#1a1a1a] rounded hover:bg-[#000] max-sm:w-[30px] max-sm:h-[30px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
