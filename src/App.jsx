import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats";
import Class from "./components/Class";
import Bmi from "./components/Bmi";
import Trainers from "./components/Trainers";
import Purchase from "./components/Purchase";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Stats />
        <Class />
        <Bmi />
        <Trainers />
        <Purchase />
        <Review />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
