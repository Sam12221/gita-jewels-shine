import { MapPin, Phone, Clock } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-md hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Our Address</h3>
                <p className="text-muted-foreground">
                  14/2/1 West Ghosh Para Road<br />
                  Jagatdal
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-md hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Contact Number</h3>
                <a 
                  href="tel:+917278232514" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  +91 7278232514
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-md hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Saturday: 10:00 AM - 8:00 PM<br />
                  Sunday: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.0846274856934!2d88.41820631495657!3d22.666665785118806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e5e5e5e5e5f%3A0x5e5e5e5e5e5e5e5e!2sJagatdal%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gita Jewellers Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
