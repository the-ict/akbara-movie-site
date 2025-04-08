import SupportBack from "../assets/images/supportback.png"

export default function SupportForm() {
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
                <input type="text" placeholder="Enter First Name" className="cart w-full bg-[#262626] rounded"/>
            </div>
            <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
                <label>Last Name</label>
                <input type="text" placeholder="Enter Last Name"className="cart w-full bg-[#262626] rounded" />
            </div>
            <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
                <label>Email</label>
                <input type="email" placeholder="Enter Your Email"className="cart w-full bg-[#262626] rounded" />
            </div>
            <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
                <label>Phone Number</label>
                <input type="text" placeholder="Enter Your Email" className="cart w-full bg-[#262626] rounded"/>
            </div>

            <div className="w-[100%] flex flex-col gap-5 font-bold">
                <label>Message</label>
                <textarea placeholder="Enter Your Message"className="cart w-full h-[200px] bg-[#262626] rounded"/>
            </div>

            <div className="w-[100%] flex items-center justify-between font-bold max-lg:flex-col max-lg:items-start max-lg:gap-5">
                <div className="flex items-center gap-3">
                    <input type="checkbox" name="" id="" />
                    <span className="text-[14px]">I agree with Terms of Use and Privacy Policy</span>
                </div>
                <button className="bg-[#e90000] button rounded cursor-pointer max-lg:w-full">Send Message</button>
            </div>
        </div>
    </div>
  )
}
