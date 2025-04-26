import Movies from "../assets/images/movies.png";

export default function Marketing() {
  return (
    <div className="w-full xlmargin relative rounded overflow-hidden">
      <img
        src={Movies}
        alt="movies"
        className="w-full h-[300px] object-cover max-lg:bg-bottom-left max-lg:object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent max-lg:bg-gradient-to-b max-lg:from-black max-lg:to-transparent"></div>
      <div className="absolute top-0 flex items-center justify-center h-full w-full">
        <div className="flex items-center w-[80%] justify-between max-lg:flex-col max-lg:gap-10 max-lg:text-center">
          <div>
            <h3 className="text-3xl font-bold">Hoziroq ro'thatdan o'ting!</h3>
            <p className="text-[14px] navbar text-[#999999]">
              Sayt imkoniyatlaridan to'liq foydalanishni istasang ro'yhatdan
              o'ting!
            </p>
          </div>
          <button
            className="button rounded bg-[#E50000] cursor-pointer font-bold"
            onClick={() => {
              window.location.replace("/support");
            }}
          >
            Ro'yhatdan o'tish
          </button>
        </div>
      </div>
    </div>
  );
}
