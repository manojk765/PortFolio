
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "manojkoneti05@gmail.com",
      link: "mailto:manojkoneti05@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 7893154178",
      link: "tel:+917893154178",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Proddatur,AP, India",
      link: "#",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/manojk765",
      link: "https://github.com/manojk765",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/koneti-manoj",
      link: "http://www.linkedin.com/in/koneti-manoj",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="contact" className="bg-muted/30 dark:bg-muted/10 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {/* Contact Info */}
          <div className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-center gap-4 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 transform group-hover:scale-110">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-border">
                  <h4 className="font-medium mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/manojk765"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card flex items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:scale-110 hover:rotate-12"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="http://www.linkedin.com/in/koneti-manoj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card flex items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:scale-110 hover:rotate-12"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="mailto:manojkoneti05@gmail.com"
                      className="w-10 h-10 rounded-full bg-card flex items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:scale-110 hover:rotate-12"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`md:col-span-2 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className={`text-sm font-medium transition-colors duration-300 ${
                        focusedField === 'name' ? 'text-primary' : ''
                      }`}>
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        className={`transition-shadow duration-300 ${
                          focusedField === 'name' ? 'shadow-md shadow-primary/20' : ''
                        }`}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className={`text-sm font-medium transition-colors duration-300 ${
                        focusedField === 'email' ? 'text-primary' : ''
                      }`}>
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        className={`transition-shadow duration-300 ${
                          focusedField === 'email' ? 'shadow-md shadow-primary/20' : ''
                        }`}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className={`text-sm font-medium transition-colors duration-300 ${
                      focusedField === 'subject' ? 'text-primary' : ''
                    }`}>
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={handleBlur}
                      className={`transition-shadow duration-300 ${
                        focusedField === 'subject' ? 'shadow-md shadow-primary/20' : ''
                      }`}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className={`text-sm font-medium transition-colors duration-300 ${
                      focusedField === 'message' ? 'text-primary' : ''
                    }`}>
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      className={`transition-shadow duration-300 ${
                        focusedField === 'message' ? 'shadow-md shadow-primary/20' : ''
                      }`}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto button-primary relative overflow-hidden group"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10 flex items-center">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                    <span className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-white/20"></span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
