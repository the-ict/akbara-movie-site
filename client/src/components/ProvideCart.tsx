import Phone from "../assets/icons/phone.png";
import Tablet from "../assets/icons/tablet.png";
import Tv from "../assets/icons/tv.png";

interface IProveCart {
  title: string;
  name: string;
  icon: string;
}
const proveCarts: IProveCart[] = [
  {
    title:
      "Bizning platformamiz barcha qurilmalarda foydalanish uchun optimallashtirilgan. Brauzer orqali saytimizdan to'liq foydalanishingiz mumkin.",
    icon: Phone,
    name: "Smartfonlar",
  },
  {
    title:
      "Bizning platformamiz barcha qurilmalarda foydalanish uchun optimallashtirilgan. Brauzer orqali saytimizdan to'liq foydalanishingiz mumkin.",
    name: "Planshetlar",
    icon: Tablet,
  },
  {
    title:
      "Bizning platformamiz barcha qurilmalarda foydalanish uchun optimallashtirilgan. Brauzer orqali saytimizdan to'liq foydalanishingiz mumkin.",
    name: "Smart TV",
    icon: Tv,
  },
];

export default function ProvideCart() {
  return (
    <div className="xlmargin">
      <h1 className="text-3xl text-white font-bold">
        Sizga turli qurilmalarda kino tomosha qilish imkoniyatini taqdim etamiz.
      </h1>
      <p className="navbar">
        Saytimiz orqali sevimli filmlar va seriallarni istalgan vaqtda, istalgan
        joyda tomosha qilishingiz mumkin. Platformamiz ko‘plab qurilmalar bilan
        moslashgan bo‘lib, siz hech qachon sevimli lahzalaringizni o‘tkazib
        yubormaysiz.
      </p>

      <div className="header flex items-center gap-10 max-sm:flex-col">
        {proveCarts.map((item, _) => (
          <div
            key={_}
            className="prove-cart bg-[#0F0F0F] roudned bg-gradient-to-tr from-black to-[#e50000]/10 "
          >
            <div className="flex items-center gap-5">
              <img
                className="w-[50px] h-[50px] slider bg-[#1F1F1F] cursor-pointer object-contain"
                src={item.icon}
                alt="phone"
              />
              <span className="text-[20px] font-bold">{item.name}</span>
            </div>
            <p className="text-[#999999] header">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
