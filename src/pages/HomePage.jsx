import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "./HomePage/HeroSection";
import BatteryFilter from "./HomePage/BatteryFilter";
import HowFunction from "./HomePage/HowFunction";
import ProductCard from "../components/ProductCard";
import About from "./HomePage/About";
import Contacts from "./HomePage/Contact";
import Question from "./HomePage/Question";
import Location from "./HomePage/Location";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowFunction />
      <BatteryFilter />
      <ProductCard />
      <Question />
      <About />
      <Location />
      <Contacts />
      <Footer />
    </>
  );
}

export default HomePage;
