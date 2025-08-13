
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll get back to you soon.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-indigo-900/10 to-black/30"></div>
      <div className="section-container relative z-10">
        <h2 className="section-heading text-white">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg animate-slide-up">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-purple-200">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="backdrop-blur-sm bg-white/10 border-white/30 text-white placeholder-purple-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-purple-200">Your Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="backdrop-blur-sm bg-white/10 border-white/30 text-white placeholder-purple-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-purple-200">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                    className="backdrop-blur-sm bg-white/10 border-white/30 text-white placeholder-purple-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-purple-200">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={5}
                    required
                    className="backdrop-blur-sm bg-white/10 border-white/30 text-white placeholder-purple-300"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:shadow-pink-500/50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-pink-300">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="mt-1 mr-4 h-5 w-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-purple-200">contact@mohammedsasrin.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mt-1 mr-4 h-5 w-5 text-pink-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-purple-200">Colombo, Western Province, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-300">Connect With Me</h3>
              <div className="flex space-x-4">
                <Button asChild variant="outline" size="icon" className="rounded-full border-pink-400/50 text-pink-200 hover:bg-pink-600/20 backdrop-blur-sm bg-white/10">
                  <a href="https://github.com/sasrin" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full border-blue-400/50 text-blue-200 hover:bg-blue-600/20 backdrop-blur-sm bg-white/10">
                  <a href="https://www.linkedin.com/in/mohammed-sasrin-32316327a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="p-6 backdrop-blur-sm bg-white/10 rounded-lg border border-white/20">
              <h4 className="font-semibold mb-2 text-pink-300">Looking for DevOps Internship Opportunities</h4>
              <p className="text-purple-200">I'm currently seeking internship roles in DevOps engineering. If you know of any opportunities, I'd be grateful for a connection!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
