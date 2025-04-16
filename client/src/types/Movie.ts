export interface IRating {
    link: string,
    by_title: string,
    rating: number 
 }
 
export interface IDirector { 
     name: string,
     country: string,
     about_link: string
 }
 
export interface IMusic { 
     name: string,
     country: string,
     about_link: string
 }
 
export interface IMovie {
     name: string,
     description: string,
     created_time: string,
     language: string[],
     ratings: IRating[],
     Genres: string[],
     Director: IDirector[],
     Music: IMusic[],
     thumbnail: string,
     cart_img: string,
     video_link:string,
     likes: string[],
     reviews: string[],
     _id:string
 }