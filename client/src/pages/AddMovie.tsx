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
  Director: { name: string; country: string; about_link: string };
  Music: { name: string; country: string; about_link: string };
  ratings: { link: string; by_title: string; rating: number }[];
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
    Director: { name: "", country: "", about_link: "" },
    Music: { name: "", country: "", about_link: "" },
    ratings: [{ link: "", by_title: "", rating: 0 }],
    thumbnail: "",
    cart_img: "",
    video_link: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    if (keys[0] === "Director" || keys[0] === "Music") {
      const section = keys[0] as "Director" | "Music";
      const field = keys[1];
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    } else if (keys[0] === "ratings") {
      const index = parseInt(keys[1]);
      const field = keys[2];
      const updatedRatings = [...formData.ratings];
      updatedRatings[index] = {
        ...updatedRatings[index],
        [field]: field === "rating" ? Number(value) : value,
      };
      setFormData((prev) => ({
        ...prev,
        ratings: updatedRatings,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
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

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Rejissyor haqida</legend>
          <label className={styles.label}>Ism:</label>
          <input
            className={styles.input}
            name="Director.name"
            value={formData.Director.name}
            onChange={handleChange}
            required
          />
          <label className={styles.label}>Mamlakat:</label>
          <input
            className={styles.input}
            name="Director.country"
            value={formData.Director.country}
            onChange={handleChange}
            required
          />
          <label className={styles.label}>Haqida link:</label>
          <input
            className={styles.input}
            name="Director.about_link"
            value={formData.Director.about_link}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Reytinglar</legend>
          {formData.ratings.map((rating, index) => (
            <div key={index} className={styles.ratingGroup}>
              <label className={styles.label}>Manba linki:</label>
              <input
                className={styles.input}
                name={`ratings.${index}.link`}
                value={rating.link}
                onChange={handleChange}
                required
              />
              <label className={styles.label}>Sayt nomi (IMDB va boshqalar):</label>
              <input
                className={styles.input}
                name={`ratings.${index}.by_title`}
                value={rating.by_title}
                onChange={handleChange}
                required
              />
              <label className={styles.label}>Baho (1–5):</label>
              <input
                className={styles.input}
                type="number"
                name={`ratings.${index}.rating`}
                value={rating.rating}
                min={0}
                max={10}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button
            type="button"
            className={styles.button}
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                ratings: [
                  ...prev.ratings,
                  { link: "", by_title: "", rating: 0 },
                ],
              }))
            }
          >
            + Reyting qo‘shish
          </button>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Musiqa muallifi haqida</legend>
          <label className={styles.label}>Ism:</label>
          <input
            className={styles.input}
            name="Music.name"
            value={formData.Music.name}
            onChange={handleChange}
            required
          />
          <label className={styles.label}>Mamlakat:</label>
          <input
            className={styles.input}
            name="Music.country"
            value={formData.Music.country}
            onChange={handleChange}
            required
          />
          <label className={styles.label}>Haqida link:</label>
          <input
            className={styles.input}
            name="Music.about_link"
            value={formData.Music.about_link}
            onChange={handleChange}
            required
          />
        </fieldset>

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
