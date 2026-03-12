import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Uses from "./components/Uses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0b1623] text-white min-h-screen">

      <Navbar />

      <Hero />

      <Resume />

      {/* <Uses /> */}

      <Contact />

      <Footer />

    </div>
  );
}

export default App;