import React, { useState } from "react"
import SupportBack from "../assets/images/supportback.png"
import axios from "axios";

interface ISupport {
    name: string,
    lastname: string,
    email: string,
    phone: number,
    terms_agreed: boolean
}

export default function SupportForm() {
    const [message, setMessage] = useState<string>("")
    const [form, setForm] = useState<ISupport>({
        name: "",
        lastname: "",
        email: "",
        phone: 0,
        terms_agreed: false,
      });
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        console.log(checked)
        console.log(name)
        console.log(type)
    
        setForm({
          ...form,
          [name]: type == "checkbox" ? !checked : value,
        });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!form.terms_agreed) {
          alert("Please agree to the Terms of Use and Privacy Policy.");
          return;
        }
    
        try {
          const response = await axios.post("http://localhost:5000/api/auth/register", form);
          alert("Your message has been sent successfully.");
          console.log(response.data); // To'liq ma'lumot
        } catch (error) {
          alert("There was an error sending your message.");
          console.log(error);
        }
      };

  return (
    <div className="too flex justify-between w-full gap-10 max-lg:flex-col">
        <div className="flex-4 flex flex-col gap-5">
            <h1 className="text-6xl font-bold max-lg:text-3xl">Welcome to our support page!</h1>
            <p className="text-[18px] text-[#999999]">We're here to help you with any problems you may be having with our product.</p>
            <img src={SupportBack} alt="support" />
        </div>

        <div className="flex-6 bg-[#0f0f0f] flex gap-3 justify-between flex-wrap single-cart-review">
            <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
                <label>First Name</label>
                <input type="text" 
                    value={form.name}
                    name="name"
                    onChange={handleInputChange}
                    placeholder="Enter First Name"
                    className="cart w-full bg-[#262626] rounded"/>
            </div>
            <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
                <label>Last Name</label>
                <input 
                type="text"
                 placeholder="Enter Last Name"
                 value={form.lastname}
                 name="lastname"
                 onChange={handleInputChange}
                 className="cart w-full bg-[#262626] rounded" />
            </div>
            <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
                <label>Email</label>
                <input 
                    type="email"
                    placeholder="Enter Your Email"
                    className="cart w-full bg-[#262626] rounded"
                    value={form.email}
                    name="email"
                    onChange={handleInputChange}
                    />
            </div>
            <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
                <label>Phone Number</label>
                <input 
                    type="number"
                    placeholder="Enter Your Phone" 
                    value={form.phone}
                    onChange={handleInputChange}
                    name="phone"
                    className="cart w-full bg-[#262626] rounded"/>
            </div>

            <div className="w-[100%] flex flex-col gap-5 font-bold">
                <label>Message</label>
                <textarea 
                value={message}
                onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => {
                    setMessage(e.target.value)
                }}
                placeholder="Enter Your Message"
                className="cart w-full h-[200px] bg-[#262626] rounded"/>
            </div>

            <div className="w-[100%] flex items-center justify-between font-bold max-lg:flex-col max-lg:items-start max-lg:gap-5">
                <div className="flex items-center gap-3">
                    <input type="checkbox" name="terms_agreed" onChange={handleInputChange}  checked={form.terms_agreed}/>
                    <span className="text-[14px]">I agree with Terms of Use and P.rivacy Policy</span>
                </div>
                <button className="bg-[#e90000] button rounded cursor-pointer max-lg:w-full" onClick={handleSubmit}>Send Message</button>
            </div>
        </div>
    </div>
  )
}
