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
      <GenerSection title="Eng so'ngi filmlar" description="Eng so'ngi qo'shilgan filmlarni biz bilan birga tomosha qiling!"/>
      <ProvideCart />
      <Questions />
      <Marketing />
    </div>
  )
}
