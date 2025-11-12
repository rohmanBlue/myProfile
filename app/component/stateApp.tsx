import Contact from "./contact";
import Footer from "./Footer";
import Hero from "./hero";
import Knowledge from "./knowledge";
import Navbar from "./Navbar";
import Patner from "./patner";

const StateApp: React.FC = () => {
    return (
        <div className="bg-[#6b63f1] text-[#1e1b4b]">
               <Navbar />
               <Hero />
               <Patner />
               <Knowledge />
               <Contact />
               <Footer />        
        </div>
    );
}

export default StateApp