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
  user_id: string;
}

export interface IMovie {
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
  _id: string;
}
