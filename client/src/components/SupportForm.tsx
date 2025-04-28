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
import { RootState } from "../redux/store";

interface ISupport {
  name: string;
  lastname: string;
  email: string;
  phone: number;
  password: string;
}

type TAuthState = "LOGIN" | "REGISTER" | "UPDATE";

export default function SupportForm() {
  const store = useSelector((state: RootState) => state.user);

  const isUser = store.user?._id ? true : false;

  const [authState, setAuthState] = useState<TAuthState>(
    isUser ? "UPDATE" : "REGISTER"
  );

  return (
    <div className="too flex justify-between w-full gap-10 max-lg:flex-col">
      <div className="flex-4 flex flex-col gap-5">
        <h1 className="text-4xl font-bold max-lg:text-3xl">
          Ro'yhatdan o'tish sahifamizga xush kelibsiz!
        </h1>
        <p className="text-[18px] text-[#999999]">
          Sitetimiz bilan bog'liq har qanday muammolaringizda sizga yordam
          berishga tayyormiz. {" "}
          {authState === "REGISTER" && (
            <span>
              Agar sizda hisob mavjud bo'lsa
              <button
                className="border-b border-red-400 px-2 font-bold cursor-pointer"
                style={{
                  marginLeft: 10,
                }}
                onClick={() => setAuthState("LOGIN")}
              >
                Agar sizda Kiring!
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
                Ro'yxatdan o'ting!
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
      alert("Parol va tasdiqlovchi parol bir xil emas!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );
      dispatch(loginSuccess(response.data.user));
      alert("Ma'lumotlaringiz muvaffaqiyatli saqlandi!");
      window.location.reload();
    } catch (error) {
      dispatch(loginFailure());
      alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
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
          placeholder="Ismingizni kiriting"
          className="cart w-full bg-[#262626] rounded"
        />
      </div>
      <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
        <label>Familiya</label>
        <input
          type="text"
          placeholder="Familiyangizni kiriting"
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
            placeholder="Telefon raqamingizni kiriting"
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
          placeholder="Email manzilingizni kiriting"
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
          placeholder="Parol kiriting"
          className="cart w-full bg-[#262626] rounded"
          value={form.password}
          name="password"
          onChange={handleInputChange}
        />
      </div>

      <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
        <label>Parolni tasdiqlang</label>
        <input
          type="password"
          placeholder="Parolni qayta kiriting"
          className="cart w-full bg-[#262626] rounded"
          value={confirmPass}
          name="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPass(e.target.value)
          }
        />
      </div>

      <div className="w-[100%] flex flex-col gap-5 font-bold">
        <label>Xabar</label>
        <textarea
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
          }}
          placeholder="Xabaringizni kiriting"
          className="cart w-full h-[200px] bg-[#262626] rounded"
        />
      </div>

      <div className="w-[100%] flex items-center justify-between font-bold max-lg:flex-col max-lg:items-start max-lg:gap-5">
        <button
          className="bg-[#e90000] button rounded cursor-pointer max-lg:w-full"
          onClick={handleSubmit}
        >
          Ro'yxatdan o'tish
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
      alert("Siz tizimga muvaffaqiyatli kirdingiz!");
      window.location.reload();
    } catch (error) {
      dispatch(loginFailure());
      alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
      console.log(error);
    }
  };
  return (
    <div className="flex-6 bg-[#0f0f0f] flex gap-3 flex-wrap flex-col single-cart-review">
      <div className="max-lg:w-[100%] flex flex-col gap-5 font-bold">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email manzilingizni kiriting"
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
          placeholder="Parolingizni kiriting"
          value={form.password}
          name="password"
          onChange={handleInputChange}
          className="cart w-full bg-[#262626] rounded"
        />
      </div>

      <div className="w-[100%] flex flex-col gap-5 font-bold">
        <label>Xabar</label>
        <textarea
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
          }}
          placeholder="Xabaringizni kiriting"
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

  const store = useSelector((store: RootState) => store.user);
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

    if (confirmPass === form.password) {
      alert("Yangi parol eski parol bilan bir xil bo'lmasligi kerak!");
      return;
    }

    try {
      await axios.put(
        `http://localhost:5000/api/user/${store.user?._id}`,
        form
      );
      alert("Ma'lumotlaringiz muvaffaqiyatli yangilandi!");
      window.location.reload();
    } catch (error) {
      alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
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
          placeholder={store.user?.name}
          className="cart w-full bg-[#262626] rounded"
        />
      </div>
      <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5 font-bold">
        <label>Familiya</label>
        <input
          type="text"
          placeholder={store.user?.lastname}
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
            placeholder={String(store.user?.phone)}
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
          placeholder={store.user?.email}
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
          placeholder="Eski parolni kiriting"
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
          placeholder="Yangi parolni kiriting"
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
          Ma'lumotlarni yangilash
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
