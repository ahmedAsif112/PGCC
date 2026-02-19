import Hero from '../components/Hero';
import TechStrip from '../components/TechStrip';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import ChatBot from '../components/ChatBot';
import AppointmentForm from '@/components/Calendly';
import PortfolioCarousel from '@/components/Portfolio';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500 selection:text-white">
      <Hero />
      <TechStrip />
      <About />
      <Timeline />
      <Services />
      <PortfolioCarousel />
      <WhyChoose />
      <Testimonials />
      <AppointmentForm />
      {/* <ChatBot /> */}
    </div>
  );
}