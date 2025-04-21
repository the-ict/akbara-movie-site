import { useState } from "react";
import Question from "./Question";
import AskQuestion from "./AskQuestion";

interface IQuestions {
  question: string;
  answer: string;
}

const questions: IQuestions[] = [
  {
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    question: "How much does StreamVibe cost?",
    answer: "",
  },
  {
    question: "What content is available on StreamVibe?",
    answer: "",
  },
  {
    question: "How can I watch StreamVibe?",
    answer: "",
  },
  {
    question: "How do I sign up for StreamVibe?",
    answer: "",
  },
  {
    question: "What is the StreamVibe free trial?",
    answer: "",
  },
  {
    question: "How do I contact StreamVibe customer support?",
    answer: "",
  },
  {
    question: "What are the StreamVibe payment methods?",
    answer: "",
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

      {
        askQuestion && (
            <AskQuestion setAskQuestion={setAskQuestion}/> 
        )
      }


      <div className="flex items-center justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <div>
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          <p className="text-[#999999] navbar">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <button
          className="button bg-[#e90000] rounded cursor-pointer"
          onClick={() => setAskQuestion(!askQuestion)}
        >
          Ask a Question
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
