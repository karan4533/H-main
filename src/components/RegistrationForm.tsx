
import { useState } from 'react';
import { Check, Loader2, User, Mail, Users, Github } from 'lucide-react';
import { toast } from 'sonner';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamName: '',
    githubProfile: '',
    repoName: '',
    teammate1: '',
    teammate1Github: '',
    teammate2: '',
    teammate2Github: '',
    teammate3: '',
    teammate3Github: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      toast.success('Registration successful!', {
        description: 'We\'ve received your registration. Check your email for confirmation.',
      });
      
      // Reset form and success state after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          teamName: '',
          githubProfile: '',
          repoName: '',
          teammate1: '',
          teammate1Github: '',
          teammate2: '',
          teammate2Github: '',
          teammate3: '',
          teammate3Github: '',
        });
        setSuccess(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="register" className="section">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <div className="inline-block rounded-full bg-hackathon-light/10 px-4 py-1 mb-6">
            <p className="text-hackathon-medium font-medium text-sm">Join Us</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Register Your Team
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8">
            Don't miss this opportunity to showcase your skills, learn from experts, and win awesome prizes. Register your team today!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-hackathon-light/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="text-hackathon-medium font-semibold">1</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-hackathon-dark">Form a Team</h3>
                <p className="text-muted-foreground">Gather up to 4 members with diverse skills and interests.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-hackathon-light/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="text-hackathon-medium font-semibold">2</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-hackathon-dark">Fill the Registration Form</h3>
                <p className="text-muted-foreground">Complete the form with team details and GitHub profiles.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-hackathon-light/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="text-hackathon-medium font-semibold">3</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-hackathon-dark">Get Repository Access</h3>
                <p className="text-muted-foreground">Organizers will create a GitHub repository and grant your team access.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full">
          <div className="relative">
            <div className="glass-card p-8 z-10 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-hackathon-dark flex items-center gap-2">
                      <User size={16} />
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-hackathon-light/20 focus:border-hackathon-accent focus:ring-2 focus:ring-hackathon-accent/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-hackathon-dark flex items-center gap-2">
                      <Mail size={16} />
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-hackathon-light/20 focus:border-hackathon-accent focus:ring-2 focus:ring-hackathon-accent/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="teamName" className="text-sm font-medium text-hackathon-dark flex items-center gap-2">
                      <Users size={16} />
                      Team Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="teamName"
                      name="teamName"
                      required
                      value={formData.teamName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-hackathon-light/20 focus:border-hackathon-accent focus:ring-2 focus:ring-hackathon-accent/20 outline-none transition-all"
                      placeholder="Code Ninjas"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="repoName" className="text-sm font-medium text-hackathon-dark flex items-center gap-2">
                      <Github size={16} />
                      Suggested Repository Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="repoName"
                      name="repoName"
                      required
                      value={formData.repoName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-hackathon-light/20 focus:border-hackathon-accent focus:ring-2 focus:ring-hackathon-accent/20 outline-none transition-all"
                      placeholder="awesome-project"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="githubProfile" className="text-sm font-medium text-hackathon-dark flex items-center gap-2">
                    <Github size={16} />
                    Your GitHub Profile <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="githubProfile"
                    name="githubProfile"
                    required
                    value={formData.githubProfile}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-hackathon-light/20 focus:border-hackathon-accent focus:ring-2 focus:ring-hackathon-accent/20 outline-none transition-all"
                    placeholder="https://github.com/username"
                  />
                </div>
                
                <div className="pt-4 border-t border-hackathon-light/10">
                  <h4 className="font-medium text-hackathon-dark mb-4">Team Members (Optional)</h4>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="teammate1" className="text-sm font-medium text-hackathon-dark">
                          Teammate 1 Name
                        </label>
                        <input
                          type="text"
                          id="teammate1"
                          name="teammate1"
                          value={formData.teammate1}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-hackathon-light/20 focus:border-hackathon-accent focus:ring-2 focus:ring-hackathon-accent/20 outline-none transition-all"
                          placeholder="Teammate's name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="teammate1Github" className="text-sm font-medium text-hackathon-dark">
                          Teammate 1 GitHub
                        </label>
                        <input
                          type="url"
                          id="teammate1Github"
                          name="teammate1Github"
                          value={formData.teammate1Github}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-hackathon-light/20 focus:border-hackathon-accent focus:ring-2 focus:ring-hackathon-accent/20 outline-none transition-all"
                          placeholder="https://github.com/username"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="teammate2" className="text-sm font-medium text-hackathon-dark">
                          Teammate 2 Name
                        </label>
                        <input
                          type="text"
                          id="teammate2"
                          name="teammate2"
                          value={formData.teammate2}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-hackathon-light/20 focus:border-hackathon-accent focus:ring-2 focus:ring-hackathon-accent/20 outline-none transition-all"
                          placeholder="Teammate's name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="teammate2Github" className="text-sm font-medium text-hackathon-dark">
                          Teammate 2 GitHub
                        </label>
                        <input
                          type="url"
                          id="teammate2Github"
                          name="teammate2Github"
                          value={formData.teammate2Github}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-hackathon-light/20 focus:border-hackathon-accent focus:ring-2 focus:ring-hackathon-accent/20 outline-none transition-all"
                          placeholder="https://github.com/username"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="teammate3" className="text-sm font-medium text-hackathon-dark">
                          Teammate 3 Name
                        </label>
                        <input
                          type="text"
                          id="teammate3"
                          name="teammate3"
                          value={formData.teammate3}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-hackathon-light/20 focus:border-hackathon-accent focus:ring-2 focus:ring-hackathon-accent/20 outline-none transition-all"
                          placeholder="Teammate's name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="teammate3Github" className="text-sm font-medium text-hackathon-dark">
                          Teammate 3 GitHub
                        </label>
                        <input
                          type="url"
                          id="teammate3Github"
                          name="teammate3Github"
                          value={formData.teammate3Github}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-hackathon-light/20 focus:border-hackathon-accent focus:ring-2 focus:ring-hackathon-accent/20 outline-none transition-all"
                          placeholder="https://github.com/username"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={loading || success}
                  className="btn-gradient w-full py-3 text-lg font-semibold flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} /> Processing...
                    </>
                  ) : success ? (
                    <>
                      <Check size={20} /> Registration Complete
                    </>
                  ) : (
                    'Register Now'
                  )}
                </button>
              </form>
            </div>
            <div className="absolute -top-3 -right-3 -bottom-3 -left-3 bg-gradient-to-r from-hackathon-medium to-hackathon-accent rounded-2xl blur-xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
