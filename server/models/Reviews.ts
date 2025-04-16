import mongoose from "mongoose"

interface IReview extends mongoose.Document {
   name: string,
   country: string,
   message: string 
}

const ReviewsSchema: mongoose.Schema<IReview> = new mongoose.Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    message: {type: String, required: true},
}, {timestamps: true})


const ReviewsModel = mongoose.model<IReview>("Review", ReviewsSchema)

export default ReviewsModel;