import mongoose from "mongoose"

interface IRating {
   link: string,
   by_title: string,
   rating: number 
}

interface IDirector { 
    name: string,
    country: string,
    about_link: string
}

interface IMusic { 
    name: string,
    country: string,
    about_link: string
}

interface IReview {
  name: string;
  country: string;
  rating: number;
  message: string
}

interface IMovie extends mongoose.Document {
    name: string,
    description: string,
    created_time: string,
    language: string[],
    ratings: IRating[],
    Genres: string[],
    Director: IDirector,
    Music: IMusic,
    thumbnail: string,
    cart_img: string,
    video_link:string,
    likes: string[],
    reviews: IReview[]
}


const RatingSchema = new mongoose.Schema<IRating>({
    link: { type: String, required: true },
    by_title: { type: String, required: true },
    rating: { type: Number, required: true },
  });
  
  const DirectorSchema = new mongoose.Schema<IDirector>({
    name: { type: String, required: true },
    country: { type: String, required: true },
    about_link: { type: String, required: true },
  });
  
  const MusicSchema = new mongoose.Schema<IMusic>({
    name: { type: String, required: true },
    country: { type: String, required: true },
    about_link: { type: String, required: true },
  });
  

const MovieSchema: mongoose.Schema<IMovie> = new mongoose.Schema({
    name:  {type: String, required: true},
    description:  {type: String, required: true},
    created_time:  {type: String, required: true},
    language: [{type: String, required: true}],
    ratings: [RatingSchema],
    Genres: [{type: String,required: true}],
    Director: {DirectorSchema},
    Music: {MusicSchema},
    likes: [{type: String, required: true}],
    reviews:[{type:String, reuqired: true}],
    thumbnail: {type: String, required:true},
    video_link: {type:String, required:true},
    cart_img: {type:String, required:true},
}, {timestamps: true})

const MovieModel = mongoose.model<IMovie>("Movie", MovieSchema)

export default MovieModel