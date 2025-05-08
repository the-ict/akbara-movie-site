import mongoose from "mongoose";

interface IRating {
  link: string;
  by_title: string;
  rating: number;
}

interface IDirector {
  name: string;
  country: string;
  about_link: string;
}

interface IMusic {
  name: string;
  country: string;
  about_link: string;
}

interface IReview {
  name: string;
  country: string;
  rating: number;
  message: string;
}

interface IMovie extends mongoose.Document {
  name: string;
  description: string;
  created_time: string;
  language: string[];
  ratings: IRating[];
  Genres: string[];
  Director: IDirector;
  Music: IMusic;
  thumbnail: string;
  cart_img: string;
  video_link: string;
  likes: string[];
  reviews: IReview[];
  country: string;
}

const ReviewSchema = new mongoose.Schema<IReview>({
  name: { type: String, required: true },
  country: { type: String, required: true },
  rating: { type: Number, required: true },
  message: { type: String, required: true },
});

const MovieSchema: mongoose.Schema<IMovie> = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    created_time: { type: String, required: true },
    language: [{ type: String, required: true }],
    country: { type: String, required: true },
    Genres: [{ type: String, required: true }],
    likes: [{ type: String, required: true }],
    reviews: { type: [ReviewSchema], default: [] },
    thumbnail: { type: String, required: true },
    video_link: { type: String, required: true },
    cart_img: { type: String, required: true },
  },
  { timestamps: true }
);

const MovieModel = mongoose.model<IMovie>("Movie", MovieSchema);

export default MovieModel;
