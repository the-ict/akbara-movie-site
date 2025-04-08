import { useState } from "react"
import Plus from "../assets/icons/plus.png"

interface Props {
    id: number, 
    question: string,
    answer: string
}


export default function Questions({id, question, answer}: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleAnswer = () => {
        setIsOpen(!isOpen)
    };      
      
  return (
    <div className="flex items-center justify-between cart relative flex-1/2" key={id}>
        <div className="flex items-center gap-5">
            <div className="button rounded bg-[#262626] font-bold">
                {id}
            </div>
            <div>
                <span className="font-bold">{question}</span>
                {
                    isOpen ? (
                        <div 
                            className={`answer overflow-hidden text-[#999999] transition-all duration-500 ease-in-out navbar ${isOpen ? 'max-h-[500px] p-4' : 'max-h-0 p-0'}`}
                        >  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-black to-[#e50000]"></div>

                            {answer}
                        </div>
                    ) : null
                }
            </div>
        </div>
        <img onClick={toggleAnswer} src={Plus} alt="plus icon" className={`transition-transform cursor-pointer duration-300 w-[30px] h-[30px] object-contain ${isOpen ? 'rotate-45' : ''}`} />
        <div className="absolute bottom-0 left-0 transform w-4/5 rounded-2xl h-[2px] bg-gradient-to-r from-black to-[#e50000]"></div>

    </div>
  )
}
