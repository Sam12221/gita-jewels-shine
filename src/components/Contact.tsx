import { MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-muted to-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            We're here to help you find the perfect piece. Visit our store or get in touch with us.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-md hover:shadow-[var(--shadow-elegant)] hover:scale-105 transition-all duration-500 animate-fade-in group" style={{ animationDelay: '0.1s' }}>
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <MapPin className="w-6 h-6 text-primary group-hover:animate-pulse" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Our Address</h3>
                <p className="text-muted-foreground">
                  14/2/1 West Ghosh Para Road<br />
                  Jagatdal
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-md hover:shadow-[var(--shadow-elegant)] hover:scale-105 transition-all duration-500 animate-fade-in group" style={{ animationDelay: '0.3s' }}>
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <Phone className="w-6 h-6 text-primary group-hover:animate-pulse" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Contact Number</h3>
                <a 
                  href="tel:+917278232514" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg font-medium"
                >
                  +91 7278232514
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
