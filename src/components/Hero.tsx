
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-hackathon-dark via-hackathon-medium to-background z-0"></div>
      
      {/* Optional pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-10" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)',
             backgroundSize: '100px 100px' 
           }}>
      </div>
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-hackathon-accent/20 blur-3xl animate-pulse-soft z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-hackathon-light/20 blur-3xl animate-pulse-soft z-10"></div>
      
      <div className="container mx-auto px-6 z-20 text-center">
        <div className="opacity-0 animate-fade-in animate-delay-100">
          <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 mb-6 border border-white/20">
            <p className="text-hackathon-accent font-medium">
              March 24 - 31, 2025
            </p>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in animate-delay-200">
          <span className="block">Innovate. Create.</span>
          <span className="bg-gradient-to-r from-hackathon-accent to-white bg-clip-text text-transparent">Transform.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in animate-delay-300">
          Join the most exciting hackathon of the year and turn your ideas into reality with like-minded innovators.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in animate-delay-400">
          <a 
            href="#register" 
            className="btn-gradient px-8 py-3 text-lg font-semibold min-w-40"
          >
            Register Now
          </a>
          <a 
            href="#about" 
            className="text-white border border-white/30 backdrop-blur-sm bg-white/5 hover:bg-white/10 px-8 py-3 rounded-xl text-lg font-semibold min-w-40 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white flex flex-col items-center gap-2 opacity-0 animate-fade-in animate-delay-500 z-20"
      >
        <span className="text-sm">Scroll to explore</span>
        <ArrowDown className="animate-bounce" />
      </a>
    </div>
  );
};

export default Hero;
