
import {
  Check,
  Info,
  Trophy,
  Calendar,
  Github,
  Users,
  ShieldCheck,
  Award,
  GraduationCap
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RulesSection = () => {
  const registrationRules = [
    "Teams must fill out a registration form providing team member IDs, GitHub profiles, and a suggested repository name.",
    "Maximum team size is 4 members."
  ];

  const repositoryRules = [
    "The organizers will create a GitHub repository and grant access to the registered team members."
  ];

  const dateRules = [
    "The hackathon will run from March 24th to March 31st.",
    "Results will be announced on April 7th."
  ];

  const prizeRules = [
    "First place: $7,500",
    "Second place: $5,000",
    "Third place: Swag"
  ];

  const internshipRules = [
    "5 members from the top-performing teams will be selected for free internships."
  ];

  return (
    <section id="rules" className="section bg-hackathon-dark/5">
      <div className="flex flex-col gap-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block rounded-full bg-hackathon-light/10 px-4 py-1 mb-6">
            <p className="text-hackathon-medium font-medium text-sm">Guidelines</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Rules & Regulations
          </h2>
          
          <p className="text-muted-foreground text-lg">
            To ensure a fair and enjoyable experience for all participants, please familiarize yourself with the following rules and guidelines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-8 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-6 text-hackathon-dark flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-hackathon-accent" />
              Registration Requirements
            </h3>
            
            <ul className="space-y-4">
              {registrationRules.map((rule, index) => (
                <li key={index} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-hackathon-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-hackathon-accent" />
                  </div>
                  <p className="text-muted-foreground">{rule}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-card p-8 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-6 text-hackathon-dark flex items-center gap-2">
              <Github className="h-6 w-6 text-hackathon-accent" />
              Repository Guidelines
            </h3>
            
            <ul className="space-y-4">
              {repositoryRules.map((rule, index) => (
                <li key={index} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-hackathon-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-hackathon-accent" />
                  </div>
                  <p className="text-muted-foreground">{rule}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="glass-card p-8 border-l-4 border-l-hackathon-accent">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-hackathon-accent/10 rounded-full">
              <Info className="h-6 w-6 text-hackathon-accent" />
            </div>
            
            <div className="w-full">
              <h3 className="text-xl font-bold mb-6 text-hackathon-dark">
                Important Dates
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="flex gap-3 items-center">
                  <div className="p-2 bg-hackathon-accent/10 rounded-full">
                    <Calendar className="h-5 w-5 text-hackathon-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-hackathon-dark">Hackathon Period</p>
                    <p className="text-sm text-muted-foreground">March 24th - March 31st, 2025</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-center">
                  <div className="p-2 bg-hackathon-accent/10 rounded-full">
                    <Trophy className="h-5 w-5 text-hackathon-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-hackathon-dark">Results Announcement</p>
                    <p className="text-sm text-muted-foreground">April 7th, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-8 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-6 text-hackathon-dark flex items-center gap-2">
              <Award className="h-6 w-6 text-hackathon-accent" />
              Prizes
            </h3>
            
            <ul className="space-y-4">
              {prizeRules.map((rule, index) => (
                <li key={index} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-hackathon-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-hackathon-accent" />
                  </div>
                  <p className="text-muted-foreground">{rule}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-card p-8 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-6 text-hackathon-dark flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-hackathon-accent" />
              Internship Opportunities
            </h3>
            
            <ul className="space-y-4">
              {internshipRules.map((rule, index) => (
                <li key={index} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-hackathon-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-hackathon-accent" />
                  </div>
                  <p className="text-muted-foreground">{rule}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="glass-card p-8 hover:shadow-xl transition-all">
          <h3 className="text-2xl font-bold mb-6 text-hackathon-dark flex items-center gap-2">
            <Info className="h-6 w-6 text-hackathon-accent" />
            Commit Rules
          </h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="registration">
              <AccordionTrigger className="text-lg font-medium">
                1. Original Work
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pl-7">
                  <li className="list-disc text-muted-foreground">Commits must reflect work done *during* the hackathon timeframe (March 24th - 31th). Submitting pre-existing projects or large portions of pre-written code is strictly prohibited.</li>
                  <li className="list-disc text-muted-foreground">The project must be built from scratch, with the exception of using open-source libraries and packages.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="repository">
              <AccordionTrigger className="text-lg font-medium">
                2. Incremental Commits
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pl-7">
                  <li className="list-disc text-muted-foreground">Avoid bulk commits. Commits should be frequent and granular, reflecting the development process.</li>
                  <li className="list-disc text-muted-foreground">Each commit should represent a logical, incremental change to the codebase. This allows judges to track the team's progress and contributions.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="dates">
              <AccordionTrigger className="text-lg font-medium">
                3. Transparency and Attribution
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pl-7">
                  <li className="list-disc text-muted-foreground">Open-source libraries and packages are allowed and encouraged.</li>
                  <li className="list-disc text-muted-foreground">Any code that is copied from an open source project needs to have the correct liscencing and atribution.</li>
                  <li className="list-disc text-muted-foreground">Clearly document the use of any external code or resources within the project's README file or within the code comments.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="prizes">
              <AccordionTrigger className="text-lg font-medium">
                4. No Plagiarism
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pl-7">
                  <li className="list-disc text-muted-foreground">All code must be the team's original work. Plagiarism or copying code from other teams or sources will result in disqualification.</li>
                  <li className="list-disc text-muted-foreground">No automated bulk commits- Do not use scripts or programs to generate large amounts of commits.</li>
                  
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="internships">
              <AccordionTrigger className="text-lg font-medium">
                5. Meaningful Commits
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pl-7">
                  <li className="list-disc text-muted-foreground">Commit messages should be descriptive and clearly explain the changes made. Avoid vague or generic commit messages.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="glass-card p-8 border-l-4 border-l-hackathon-accent">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-hackathon-accent/10 rounded-full">
              <Users className="h-6 w-6 text-hackathon-accent" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-hackathon-dark">
                Submission Deadline
              </h3>
              
              <p className="mt-4 text-muted-foreground">
                All submissions must be made by 11:59 PM on March 31st. Late submissions will not be accepted under any circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
