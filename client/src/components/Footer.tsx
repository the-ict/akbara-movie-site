import { FaTelegram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#0F0F0F] w-full flex flex-col items-center xlmargin footer">
      <div className="xl:w-[1300px] footer max-lg:w-screen arrow-padding">
        <div className="flex max-sm:flex-wrap justify-between items-center footer-nav flex-wrap gap-5">
          <ul className="max-lg:w-[45%]">
            <li className="footer-item">Reklama</li>
          </ul>
          <ul className="max-lg:w-[45%]">
            <li className="footer-item">Qo'llab quvatlash</li>
          </ul>
          <ul className="max-lg:w-[45%]">
            <a
              className="footer-item font-bold hover:underline"
              target="_blank"
              href="https://t.me/akbaratv_admin"
            >
              Bog'lanish
            </a>
          </ul>
          <ul className="max-lg:w-[45%]">
            <a
              className="footer-item font-bold hover:underline"
              target="_blank"
              href="/rules"
            >
              Sayt qoidalari
            </a>
          </ul>
          <div className="max-lg:w-[45%]">
            <div className="flex items-center gap-5">
              <Link to={"https://t.me/akbaratv"} target="_blank">
                <FaTelegram className="w-[50px] h-[50px] object-contain icon bg-[#1a1a1a] rounded hover:bg-[#000] max-sm:w-[30px] max-sm:h-[30px]" />
              </Link>
              <Link
                to={
                  "https://www.instagram.com/akbara.tv?igsh=d2lzNnF2dmtqN2xq&utm_source=qrupport"
                }
                target="_blank"
              >
                <FaInstagramSquare className="w-[50px] h-[50px] object-contain icon bg-[#1a1a1a] rounded hover:bg-[#000] max-sm:w-[30px] max-sm:h-[30px]" />
              </Link>
              <Link to={"/support"} target="_blank">
                <AiFillTikTok className="w-[50px] h-[50px] object-contain icon bg-[#1a1a1a] rounded hover:bg-[#000] max-sm:w-[30px] max-sm:h-[30px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
