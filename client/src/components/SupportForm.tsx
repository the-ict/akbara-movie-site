import React, { useState } from "react";
import SupportBack from "../assets/images/supportback.png";
import {
  loginStart,
  loginFailure,
  loginSuccess,
  logout,
} from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

interface ISupport {
  name: string;
  lastname: string;
  email: string;
  phone: number;
  password: string;
}

type TAuthState = "LOGIN" | "REGISTER" | "UPDATE";

export default function SupportForm() {
  const store = useSelector((state) => state);

  const isUser = store.user.user ? true : false;

  const [authState, setAuthState] = useState<TAuthState>(
    isUser ? "UPDATE" : "REGISTER"
  );

  return (
    <div className="too flex justify-between w-full gap-10 max-lg:flex-col">
      <div className="flex-4 flex flex-col gap-5">
        <h1 className="text-6xl font-bold max-lg:text-3xl">
          Welcome to our support page!
        </h1>
        <p className="text-[18px] text-[#999999]">
          We're here to help you with any problems you may be having with our
          product. Agar sizda{" "}
          {authState === "REGISTER" && (
            <span>
              hisob bo'lsa
              <button
                className="border-b border-red-400 px-2 font-bold cursor-pointer"
                style={{
                  marginLeft: 10,
                }}
                onClick={() => setAuthState("LOGIN")}
              >
                Kiring!
              </button>
            </span>
          )}
          {authState === "LOGIN" && (
            <span>
              hisob bo'lmasa
              <button
                className="border-b border-red-400 px-2 font-bold cursor-pointer"
                style={{
                  marginLeft: 10,
                }}
                onClick={() => setAuthState("REGISTER")}
              >
                Ro'yhatdan o'ting
              </button>
            </span>
          )}
        </p>
        <img src={SupportBack} alt="support" />
      </div>
      {authState === "REGISTER" && <Register />}

      {authState === "LOGIN" && <Login />}

      {authState === "UPDATE" && <Update />}
    </div>
  );
}

const Register = () => {
  const [message, setMessage] = useState<string>("");
  const [form, setForm] = useState<ISupport>({
    name: "",
    lastname: "",
    email: "",
    phone: 0,
    password: "",
  });

  const [confirmPass, setConfirmPass] = useState<string>("");

  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    dispatch(loginStart());
    e.preventDefault();

    if (confirmPass !== form.password) {
      alert("Parol va Tasdiq uchun kiritilga parol teng emas!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );
      dispatch(loginSuccess(response.data.user));
      alert("Sizning malumotlaringiz muvaffaqiyatli saqlandi!");
      window.location.reload();
    } catch (error) {
      dispatch(loginFailure());
      alert("There was an error sending your message.");
      console.log(error);
    }
  };
  return (
    <div className="flex-6 bg-[#0f0f0f] flex gap-3 justify-between flex-wrap single-cart-review">
      <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
        <label>Ism</label>
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={handleInputChange}
          placeholder="Enter First Name"
          className="cart w-full bg-[#262626] rounded"
        />
      </div>
      <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
        <label>Familiya</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          value={form.lastname}
          name="lastname"
          onChange={handleInputChange}
          className="cart w-full bg-[#262626] rounded"
        />
      </div>
      <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
        <label>Telefon raqam</label>
        <div className="bg-[#262626] rounded flex items-center gap-3 cart ">
          <p>+998</p>
          <input
            type="text"
            placeholder="Enter Your Phone"
            value={form.phone}
            onChange={handleInputChange}
            name="phone"
            className="flex-1 h-full outline-none border-none"
          />
        </div>
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
        <label>Parol</label>
        <input
          type="password"
          placeholder="Enter Password"
          className="cart w-full bg-[#262626] rounded"
          value={form.password}
          name="password"
          onChange={handleInputChange}
        />
      </div>

      <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
        <label>Parolni tasdiqlang!</label>
        <input
          type="password"
          placeholder="Enter Password"
          className="cart w-full bg-[#262626] rounded"
          value={confirmPass}
          name="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPass(e.target.value)
          }
        />
      </div>

      <div className="w-[100%] flex flex-col gap-5 font-bold">
        <label>Message</label>
        <textarea
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
          }}
          placeholder="Enter Your Message"
          className="cart w-full h-[200px] bg-[#262626] rounded"
        />
      </div>

      <div className="w-[100%] flex items-center justify-between font-bold max-lg:flex-col max-lg:items-start max-lg:gap-5">
        <button
          className="bg-[#e90000] button rounded cursor-pointer max-lg:w-full"
          onClick={handleSubmit}
        >
          Ro'yhatdan o'tish
        </button>
      </div>
    </div>
  );
};

const Login = () => {
  const [message, setMessage] = useState<string>("");
  const [form, setForm] = useState<ISupport>({
    name: "",
    lastname: "",
    email: "",
    phone: 0,
    password: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    dispatch(loginStart());
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );
      dispatch(loginSuccess(response.data.user));
      alert("Your message has been sent successfully.");
      window.location.reload();
    } catch (error) {
      dispatch(loginFailure());
      alert("There was an error sending your message.");
      console.log(error);
    }
  };
  return (
    <div className="flex-6 bg-[#0f0f0f] flex gap-3 flex-wrap flex-col single-cart-review">
      <div className="max-lg:w-[100%] flex flex-col gap-5 font-bold">
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
      <div className="max-lg:w-[100%] flex flex-col gap-5 font-bold">
        <label>Parol</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={form.password}
          name="password"
          onChange={handleInputChange}
          className="cart w-full bg-[#262626] rounded"
        />
      </div>

      <div className="w-[100%] flex flex-col gap-5 font-bold">
        <label>Message</label>
        <textarea
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
          }}
          placeholder="Enter Your Message"
          className="cart w-full h-[200px] bg-[#262626] rounded"
        />
      </div>

      <div className="w-[100%] flex items-center justify-between font-bold max-lg:flex-col max-lg:items-start max-lg:gap-5">
        <button
          className="bg-[#e90000] button rounded cursor-pointer max-lg:w-full"
          onClick={handleSubmit}
        >
          Kirish
        </button>
      </div>
    </div>
  );
};

const Update = () => {
  const [form, setForm] = useState<ISupport>({
    name: "",
    lastname: "",
    email: "",
    phone: 0,
    password: "",
  });

  const [confirmPass, setConfirmPass] = useState<string>("");

  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);
    if(confirmPass == form.password) {
      alert("Yangi parol eskisi bilan birxil bo'lmasligi lozim.")
    }

    try {
      await axios.put(`http://localhost:5000/api/user/${store.user.user._id}`, form);
      alert("Sizning malumotlaringiz muvaffaqiyatli saqlandi!");
      window.location.reload();
    } catch (error) {
      alert("There was an error sending your message.");
      console.log(error);
    }
  };
  return (
    <div className="flex-6 bg-[#0f0f0f] flex gap-3 justify-between flex-wrap single-cart-review">
      <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
        <label>Ism</label>
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={handleInputChange}
          placeholder={store.user.user.name}
          className="cart w-full bg-[#262626] rounded"
        />
      </div>
      <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
        <label>Familiya</label>
        <input
          type="text"
          placeholder={store.user.user.lastname}
          value={form.lastname}
          name="lastname"
          onChange={handleInputChange}
          className="cart w-full bg-[#262626] rounded"
        />
      </div>
      <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
        <label>Telefon raqam</label>
        <div className="bg-[#262626] rounded flex items-center gap-3 cart ">
          <p>+998</p>
          <input
            type="message"
            placeholder={store.user.user.phone}
            onChange={handleInputChange}
            name="phone"
            className="flex-1 h-full outline-none border-none"
          />
        </div>
      </div>
      <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
        <label>Email</label>
        <input
          type="email"
          placeholder={store.user.user.email}
          className="cart w-full bg-[#262626] rounded"
          value={form.email}
          name="email"
          onChange={handleInputChange}
        />
      </div>
      <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
        <label>Eski parol</label>
        <input
          type="password"
          placeholder="Enter Password"
          className="cart w-full bg-[#262626] rounded"
          value={form.password}
          name="password"
          onChange={handleInputChange}
        />
      </div>
      <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
        <label>Yangi parol</label>
        <input
          type="password"
          placeholder="Enter Password"
          className="cart w-full bg-[#262626] rounded"
          value={confirmPass}
          name="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPass(e.target.value)
          }
        />
      </div>

      <div className="w-[100%] flex items-center justify-between font-bold max-lg:flex-col max-lg:items-start max-lg:gap-5">
        <button
          className="bg-[#e90000] button rounded cursor-pointer max-lg:w-full"
          onClick={handleSubmit}
        >
          O'zgartirish
        </button>
        <button
          className="button rounded cursor-pointer max-lg:w-full underline"
          onClick={() => {
            dispatch(logout());
            window.location.reload();
          }}
        >
          Hisobdan chiqish
        </button>
      </div>
    </div>
  );
};
