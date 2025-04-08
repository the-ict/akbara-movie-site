import Footer from "../components/Footer";
import Geners from "../components/Geners";
import GenerSection from "../components/GenerSection";
import Header from "../components/Header";
import Marketing from "../components/Marketing";
import Navbar from "../components/Navbar";
import "../styles.css"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <GenerSection />
    </div>
  )
}
