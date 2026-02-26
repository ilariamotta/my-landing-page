import './index.css'
import Hero from './components/Hero';
import ForWhom from './components/ForWhom';

function App() {
  return (
    <>
      <div className="bg-[var(--bgSoft)] min-h-screen">
        <Hero />
        <ForWhom />
      </div>
    </>
  );
}

export default App
