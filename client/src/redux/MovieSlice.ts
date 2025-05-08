import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../types/Movie";

const initialState: IMovie = {
  name: "",
  description: "",
  created_time: "",
  language: [],
  ratings: [],
  Genres: [],
  Director: {
    name: "",
    country: "",
    about_link: "",
  },
  Music: {
    name: "",
    country: "",
    about_link: "",
  },
  thumbnail: "",
  cart_img: "",
  video_link: "",
  likes: [],
  reviews: [],
  country: "",
  _id: "",
};

export const movieSlice = createSlice({
  name: "Movie",
  initialState,
  reducers: {
    gettingMovie: (state, action) => {
      state = action.payload;
      return state;
    },
    like: (state, action) => {
      state.likes.push(action.payload);
      return state;
    },
    unlike: (state, action) => {
      state.likes = state.likes.filter((like) => like !== action.payload);
      return state;
    },
  },
});

export const { gettingMovie, like, unlike } = movieSlice.actions;
export default movieSlice.reducer;
