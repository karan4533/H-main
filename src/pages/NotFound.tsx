
import { ArrowLeft } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-hackathon-dark via-hackathon-medium to-background">
      <div className="glass-card p-10 text-center max-w-lg mx-4">
        <div className="w-20 h-20 rounded-full bg-hackathon-light/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-5xl font-bold text-hackathon-accent">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gradient">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="btn-gradient px-6 py-3 inline-flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
