import '../styles.css';

const RulesPage = () => {
  return (
    <div className="min-h-[50vh] bg-[#1a1a1a] text-white font-manrope border-2 border-red-500 animate-border-glow">
      <div className="mx-auto rules-card flex flex-col items-center justify-center">
        <h1 className="rules-heading">AKBARA.TV Sayt Qonun-Qoidalari</h1>
        <p className="rules-text text-center italic mb-6">
          Oxirgi yangilanish: 27 Aprel 2025 yil
        </p>

        {/* Qoidalar */}
        <div className="space-y-4">
          <p className="rules-text">
            <span>1.</span> Foydalanish Shartlari: Sayt 13 yoshdan katta foydalanuvchilarga mo‘ljallangan. Saytdagi materiallar (filmlar, seriallar, videolar) ko‘rish, yuklab olish va shaxsiy foydalanish uchun tarqatish uchun taqdim etiladi. Tarqatish faqat shaxsiy va notijorat maqsadlarida ruxsat etiladi.
          </p>
          <p className="rules-text">
            <span>2.</span> Mualliflik Huquqi: Saytdagi barcha kontent AKBARA.TV yoki qonuniy huquq egalariga tegishli. Foydalanuvchilar kontentni o‘z ehtiyojlari uchun yuklab olishi va tarqatishi mumkin, lekin kontentni tijorat maqsadlarida sotish yoki o‘zlashtirish taqiqlanadi. Tarqatishda asl manba – AKBARA.TV ko‘rsatilishi majburiy.
          </p>
          <p className="rules-text">
            <span>3.</span> Yuklab Olish va Tarqatish Shartlari: Foydalanuvchilar filmlarni va boshqa kontentni Saytdan to‘g‘ridan-to‘g‘ri yuklab olishi mumkin. Yuklab olingan kontent faqat shaxsiy foydalanish va do‘stlar, tanishlar o‘rtasida bepul tarqatish uchun mo‘ljallangan. Har qanday pullik tarqatish, o‘zgartirib sotish, ommaviy tijorat ko‘rinishida ishlatish qat’iyan taqiqlanadi. Yuklab olinayotgan kontentdagi brend belgilarini o‘chirib tashlash yoki o‘zgartirish taqiqlanadi.
          </p>
          <p className="rules-text">
            <span>4.</span> Hisoblar va Maxfiylik: Ro‘yxatdan o‘tgan foydalanuvchi o‘z hisobining xavfsizligi uchun javobgar. Maxfiylik siyosatiga muvofiq, foydalanuvchilarning shaxsiy ma’lumotlari himoya qilinadi.
          </p>
          <p className="rules-text">
            <span>5.</span> Taqiqlangan Faoliyatlar: Quyidagilar qat’iyan man etiladi: Kontentni tijorat maqsadlarida ishlatish. Saytga zarar yetkazuvchi harakatlar qilish (viruslar yuborish va h.k.). Sayt kontentini noqonuniy maqsadlarda ishlatish.
          </p>
          <p className="rules-text">
            <span>6.</span> Mas’uliyatni Cheklash: AKBARA.TV taqdim etilgan kontent sifatiga to‘liq kafolat bermaydi va yuzaga kelishi mumkin bo‘lgan texnik nosozliklar uchun javobgar emas.
          </p>
          <p className="rules-text">
            <span>7.</span> O‘zgarishlar: Sayt istalgan vaqtda qonun-qoidalarga o‘zgartirish kiritish huquqiga ega. Yangilangan qoidalar saytga joylashtirilgandan so‘ng darhol kuchga kiradi.
          </p>
          <p className="rules-text">
            <span>8.</span> Huquq va Jurisdiksiya: Ushbu qonun-qoidalar O‘zbekiston Respublikasi qonunchiligiga muvofiq tartibga solinadi. Barcha nizolar O‘zbekiston sud organlari tomonidan ko‘rib chiqiladi.
          </p>
          <p className="rules-text">
            <span>9.</span> Bog‘lanish: Savollar va takliflar uchun biz bilan bog‘laning: Email: support@akbara.tv Telefon: +998 90 566 11 07
          </p>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
