import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddMovie.module.css"; // CSS module import
import axios from "axios";

type FormDataType = {
  name: string;
  description: string;
  created_time: string;
  language: string;
  Genres: string;
  country: string;
  thumbnail: string;
  cart_img: string;
  video_link: string;
};

const AddMovie: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    description: "",
    created_time: "",
    language: "",
    Genres: "",
    country: "",
    thumbnail: "",
    cart_img: "",
    video_link: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      language: formData.language.split(",").map((l) => l.trim()),
      Genres: formData.Genres.split(",").map((g) => g.trim()),
      reviews: [],
      likes: [],
    };
    try {
      const res = await axios.post("http://localhost:5000/api/movie", payload);
      if (res.data) {
        console.log(res.data)
        alert("Kino yaratildi!");
      } else {
        alert("Kino yaratishda muammo!");
      }
    } catch (err) {
      alert("Serverga ulanishda xatolik.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.heading}>Yangi film qo‘shish</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Film nomi:</label>
        <input
          className={styles.input}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className={styles.label}>Film tavsifi:</label>
        <textarea
          className={styles.textarea}
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label className={styles.label}>Yaratilgan sana (yyyy-mm-dd):</label>
        <input
          className={styles.input}
          name="created_time"
          value={formData.created_time}
          onChange={handleChange}
          required
        />

        <label className={styles.label}>Til(lar) (vergul bilan):</label>
        <input
          className={styles.input}
          name="language"
          value={formData.language}
          onChange={handleChange}
          required
        />

        <label className={styles.label}>Janr(lar) (vergul bilan):</label>
        <input
          className={styles.input}
          name="Genres"
          value={formData.Genres}
          onChange={handleChange}
          required
        />

        <label className={styles.label}>Mamlakat:</label>
        <input
          className={styles.input}
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />

        <label className={styles.label}>Thumbnail URL:</label>
        <input
          className={styles.input}
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
          required
        />

        <label className={styles.label}>Kartinka URL:</label>
        <input
          className={styles.input}
          name="cart_img"
          value={formData.cart_img}
          onChange={handleChange}
          required
        />

        <label className={styles.label}>Video havolasi:</label>
        <input
          className={styles.input}
          name="video_link"
          value={formData.video_link}
          onChange={handleChange}
          required
        />

        <button type="submit" className={styles.button}>
          Saqlash
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
