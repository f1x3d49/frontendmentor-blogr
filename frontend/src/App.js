import Intro from "./pages/Intro";
import PhoneSection from "./pages/PhoneSection";
import PresentationSection from "./pages/PresentationSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Intro />
      <PresentationSection />
      <PhoneSection />
    </div>
  );
}

export default App;
