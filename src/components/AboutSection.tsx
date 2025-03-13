import { Club, Code, Layers2, Lightbulb, ShieldAlert, TableOfContents, Trophy, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <ShieldAlert className="h-10 w-10 text-hackathon-accent" />,
      title: "Focusing on Anomaly Detection/Prediction",
      description: ["AI for Anomaly Intel: Observability's Next Frontier.","Predictive Observability: AI-Driven Insights","AI: Detecting the Unknown in Observability Data."]
    },
    {
      icon: <Users className="h-10 w-10 text-hackathon-accent" />,
      title: "Highlighting Automation and Efficiency",
      description: ["Automated Observability: AI's Role in System Health.","AI-Powered Autopilot: Streamlining Observability.","The Self-Healing System: AI and Observability."]
    },
    {
      icon: <Code className="h-10 w-10 text-hackathon-accent" />,
      title: "Emphasizing Insights and Understanding",
      description: ["AI: Unlocking the Secrets of Observability.","Cognitive Observability: AI for Deeper System Understanding.","Illuminating Systems: AI and Observability Insights."]
    },
    {
      icon: <Club className="h-10 w-10 text-hackathon-accent" />,
      title: "More Technical and Cutting-Edge",
      description: ["AI and Observability: Building Intelligent Monitoring Pipelines.","Machine Learning for Observability: Real-Time Insights.","AI-Enhanced Observability: From Data to Action."]
    } ,{
      icon: <TableOfContents  className="h-10 w-10 text-hackathon-accent" />,
      title: "Playing with Metaphors",
      description: ["The AI Lens: Seeing Through System Complexity.","AI's Digital Doctor: Observability for System Health.","The AI Analyst: Transforming Observability Data."]
    },
    {
      icon: <Layers2 className="h-10 w-10 text-hackathon-accent" />,
      title: "Short and Punchy",
      description: ["AI: The Observability Edge.","Intelligent Systems: AI & Observability.","Observability AI: Evolve Your Monitoring."]
    }
  ];

  return (
    <section id="about" className="section">
      <div className="flex flex-col gap-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block rounded-full bg-hackathon-light/10 px-4 py-1 mb-6">
            <p className="text-hackathon-medium font-medium text-sm">About The Event</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Welcome to Our Hackathon
          </h2>
          
          <p className="text-muted-foreground  text-lg">
            Our hackathon brings together brilliant minds to collaborate, innovate, and create solutions 
            that address real-world challenges. Over the course of one week, participants will form teams, 
            develop prototypes, and present their ideas to a panel of industry experts.
          </p>
          <p className="text-muted-foreground text-lg pt-4">
          Atatus is a next-generation observability platform designed to empower modern software teams with real-time, full-stack monitoring. Our solution seamlessly integrates application performance monitoring (APM), infrastructure monitoring, and user experience monitoring into one intuitive interface—making it easier than ever to detect, diagnose, and resolve issues before they impact your users.

          </p>
          
          <div className="mt-6">
            <a 
              href="https://www.atatus.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-hackathon-accent hover:text-hackathon-medium transition-colors"
            >
              <span className="font-medium">Visit our company website</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold lg:mb-[-20]  text-gradient text-center">
            Themes
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className='flex  items-center justify-left gap-x-3'>
              <div className="mb-4 p-3 bg-hackathon-light/10 w-fit rounded-xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-hackathon-dark">
                {feature.title}
              </h3>
              </div>
             
              <ul className="text-muted-foreground">
  {feature.description.map((p, index) => (
    <li key={index} className='list-disc ml-4'>{p}</li>
  ))}
</ul>

            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
              Why Participate?
            </h3>
            
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-hackathon-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-hackathon-accent"></div>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Network with Industry Professionals</span> - Connect with mentors and sponsors who can help advance your career.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-hackathon-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-hackathon-accent"></div>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Learn New Skills</span> - Participate in workshops and collaborate with peers to expand your knowledge.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-hackathon-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-hackathon-accent"></div>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Win Prizes</span> - Compete for cash prizes, tech gadgets, and potential internship opportunities.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-hackathon-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-hackathon-accent"></div>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Build Your Portfolio</span> - Create impressive projects to showcase to future employers.
                </p>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 order-1 md:order-2">
            <div className="relative">
              <div className="glass-card p-6 z-10 relative">
                <div className="aspect-video bg-hackathon-dark/5 rounded-lg flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Hackathon participants collaborating"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-hackathon-dark">Previous Hackathon</h4>
                    <p className="text-sm text-muted-foreground">Participants collaborating on projects</p>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-hackathon-light/20"></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 -bottom-3 -left-3 bg-gradient-to-r from-hackathon-medium to-hackathon-accent rounded-2xl blur-xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
