import Footer from "./pages/Footer";
import Intro from "./pages/Intro";
import LaptopSection from "./pages/LaptopSection";
import PhoneSection from "./pages/PhoneSection";
import PresentationSection from "./pages/PresentationSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Intro />
      <PresentationSection />
      <PhoneSection />
      <LaptopSection />
      <Footer />
    </div>
  );
}

export default App;
