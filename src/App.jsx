import './index.css'
import Hero from './components/Hero';
import ForWhom from './components/ForWhom';
import Services from './components/Services';

function App() {
  return (
    <>
      <div className="bg-[var(--bgSoft)] min-h-screen">
        <Hero />
        <ForWhom />
        <Services />
      </div>
    </>
  );
}

export default App
