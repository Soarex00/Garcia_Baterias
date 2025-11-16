import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "./HomePage/HeroSection"
import BatteryFilter from "./HomePage/BatteryFilter";
import BrandsSection from "./HomePage/BrandsSection"
import ProductCard from "../components/ProductCard";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <BrandsSection />
      <BatteryFilter />
      <ProductCard />
      <Footer /> 
    </>
  );
}

export default HomePage;
