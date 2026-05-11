import './index.css'
import Hero from './components/Hero';
import ForWhom from './components/ForWhom';
import Services from './components/Services';
import Process from './components/Process';
import ContactDark from './components/ContactDark';
import SocialSection from './components/SocialSection';
import Faq from './components/Faq';
import Header from './components/Header';
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from './components/Footer';


 

function App() {

   const isPrivacyPage = window.location.pathname === "/privacy-policy";

  if (isPrivacyPage) {
    return <PrivacyPolicy />;
  }
  return (
    <>
      <div className="bg-[var(--bgSoft)] min-h-screen">
        <Header />
        <Hero />
        <ForWhom />
        <Services />
        <Process />
        <Faq />
        <ContactDark />
        <SocialSection />
        <Footer />
      </div>
    </>
  );
}

export default App
