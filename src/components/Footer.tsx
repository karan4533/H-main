
import { Link } from 'react-router-dom';
import { Github, Instagram, Linkedin, Twitter, } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-hackathon-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-hackathon-medium to-hackathon-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-semibold text-xl text-white">Codeathon</span>
            </div>
            <p className="text-white/70">
              Join the most exciting hackathon of the year and turn your ideas into reality.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-white/70 hover:text-hackathon-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-hackathon-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-hackathon-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-hackathon-accent transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-hackathon-accent transition-colors">About</a>
              </li>
              <li>
                <a href="#rules" className="text-white/70 hover:text-hackathon-accent transition-colors">Rules</a>
              </li>
              <li>
                <a href="#register" className="text-white/70 hover:text-hackathon-accent transition-colors">Register</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70">
                <span className="block">Email:</span>
                <a href="mailto:info@hackathonname.com" className="hover:text-hackathon-accent transition-colors">success@atatus.com</a>
              </li>
              <li className="text-white/70">
                <span className="block">Location:</span>
                <span>Virtual & In-person</span>
              </li>
              <li className="text-white/70">
                <span className="block">Number:</span>
                <span>+91 7305220931</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Important Dates</h3>
            <ul className="space-y-2">
              <li className="text-white/70">
                <span className="block font-medium text-white">Registration Deadline:</span>
                <span>March 22, 2025</span>
              </li>
              <li className="text-white/70">
                <span className="block font-medium text-white">Kickoff Event:</span>
                <span>March 24, 2025</span>
              </li>
              <li className="text-white/70">
                <span className="block font-medium text-white">Submission Deadline:</span>
                <span>March 31, 2025</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2025 Hackathon. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/70 hover:text-hackathon-accent transition-colors">Terms</a>
            <a href="#" className="text-white/70 hover:text-hackathon-accent transition-colors">Privacy</a>
            <a href="#" className="text-white/70 hover:text-hackathon-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
