import Footer from "../components/Footer";
import Geners from "../components/Geners";
import GenerSection from "../components/GenerSection";
import Header from "../components/Header";
import Marketing from "../components/Marketing";
import Navbar from "../components/Navbar";
import ProvideCart from "../components/ProvideCart";
import Questions from "../components/Questions";
import "../styles.css"


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <GenerSection isSwiper={false} title="Explore our wide variety of categories" description="Whether you're looking for a comedy to make you laugh, a drama to
                  make you think, or a documentary to learn something new"/>
      <ProvideCart />
      <Questions />
      <Marketing />
    </div>
  )
}
