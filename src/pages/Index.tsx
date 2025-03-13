
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import RulesSection from '@/components/RulesSection';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Hackathon Competition - March 24-31, 2025';
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <RulesSection />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;
