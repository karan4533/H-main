
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Rules', href: '#rules' },
    { name: 'Register', href: '#register', highlight: true },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-hackathon-medium to-hackathon-accent flex items-center justify-center">
            <span className="text-white font-bold text-lg">HC</span>
          </div>
          <span className={cn(
            "font-semibold text-xl transition-colors",
            scrolled ? "text-hackathon-dark" : "text-white"
          )}>
            Hackathon25
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={
                link.highlight
                  ? "btn-gradient px-5 py-2"
                  : cn(
                      "font-medium hover:text-hackathon-accent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-hackathon-accent after:transition-all after:duration-300 hover:after:w-full",
                      scrolled ? "text-hackathon-dark" : "text-white"
                    )
              }
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-hackathon-dark"
          onClick={toggle}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="glass-nav px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={
                link.highlight
                  ? "btn-gradient px-5 py-2 text-center"
                  : "font-medium text-hackathon-dark hover:text-hackathon-accent text-center"
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
