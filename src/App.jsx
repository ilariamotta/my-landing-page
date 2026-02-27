import './index.css'
import Hero from './components/Hero';
import ForWhom from './components/ForWhom';
import Services from './components/Services';
import Process from './components/Process';

function App() {
  return (
    <>
      <div className="bg-[var(--bgSoft)] min-h-screen">
        <Hero />
        <ForWhom />
        <Services />
        <Process />
      </div>
    </>
  );
}

export default App
