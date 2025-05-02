import { useState } from "react";
import Question from "./Question";
import AskQuestion from "./AskQuestion";

interface IQuestions {
  question: string;
  answer: string;
}

const questions: IQuestions[] = [
  {
    question: "Kino saytida qanday filmlarni tomosha qilish mumkin?",
    answer:
      "Saytimizda turli janrlardagi filmlar, seriallar va hujjatli filmlarni yuqori sifatda tomosha qilishingiz mumkin.",
  },
  {
    question: "Saytdan foydalanish bepulmi?",
    answer:
      "Ha, saytimizdan foydalanish mutlaqo bepul. Siz ro‘yxatdan o‘tmasdan ham filmlarni tomosha qilishingiz mumkin.",
  },
  {
    question: "Filmlarni ko'rish uchun ro'yxatdan o'tish shartmi?",
    answer:
      "Ro'yxatdan o'tish shart emas, lekin ro'yxatdan o'tgan foydalanuvchilarga izoh qoldirish va filmga baho berish imkoniyati mavjud.",
  },
  {
    question: "Qanday qilib filmni qidirishim mumkin?",
    answer:
      "Saytning yuqori qismidagi qidiruv maydoni orqali film nomi yoki janrini yozib topishingiz mumkin.",
  },
  {
    question: "Agar film ochilmasa, nima qilishim kerak?",
    answer:
      "Agar film ochilmasa, sahifani yangilang yoki qo'llab-quvvatlash bo'limimizga murojaat qiling.",
  },
  {
    question: "Saytdagi filmlar qaysi tillarda mavjud?",
    answer:
      "Aksariyat filmlar o'zbek tilida, ba'zilari rus yoki ingliz tilida subtitrlar bilan taqdim etiladi.",
  },
  {
    question: "Saytga yangi filmlar qanchalik tez-tez qo‘shiladi?",
    answer:
      "Har hafta saytga yangi filmlar va seriallar qo‘shib boriladi.",
  },
  {
    question: "Qo'llab-quvvatlash xizmati bilan qanday bog'lansam bo'ladi?",
    answer:
      "Qo'llab-quvvatlash uchun saytimizdagi 'Bog'lanish' sahifasidan foydalanishingiz yoki 'support' sahifasiga o'tishingiz mumkin.",
  },
];

export default function Questions() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [askQuestion, setAskQuestion] = useState<boolean>(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      {askQuestion && (
        <AskQuestion setAskQuestion={setAskQuestion}/> 
      )}

      <div className="flex items-center justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <div>
          <h1 className="text-3xl font-bold">Ko'p so'raladigan savollar</h1>
          <p className="text-[#999999] navbar">
            Savollaringiz bormi? Bizda javoblar bor! Eng ko'p beriladigan
            savollarni va ularning javoblarini shu yerdan topishingiz mumkin.
          </p>
        </div>
        <button
          className="button bg-[#e90000] rounded cursor-pointer"
          onClick={() => setAskQuestion(!askQuestion)}
        >
          Savol berish
        </button>
      </div>

      <div className="flex flex-wrap header max-lg:flex-col">
        {questions.map((item, index) => {
          return (
            <Question
              id={index < 10 ? Number("0" + (index + 1)) : index}
              question={item.question}
              answer={item.answer}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
