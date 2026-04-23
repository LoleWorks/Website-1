import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustBar from './components/TrustBar.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Testimonials from './components/Testimonials.jsx';
import Booking from './components/Booking.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[90vh] noise-bg -z-10" />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
