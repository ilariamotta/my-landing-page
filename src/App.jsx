import './index.css'
import Hero from './components/Hero';
import ForWhom from './components/ForWhom';
import Services from './components/Services';
import Process from './components/Process';
import ContactDark from './components/ContactDark';
import SocialSection from './components/SocialSection';
import Faq from './components/Faq';
import Header from './components/Header';

function App() {
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
      </div>
    </>
  );
}

export default App
