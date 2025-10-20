import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jewelry.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight">
            Gita Jewellers
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground mb-4 leading-relaxed">
            Where Tradition Meets Elegance
          </p>
          <p className="text-lg text-secondary-foreground/90 mb-8 max-w-2xl">
            Discover our exquisite collection of handcrafted gold and silver jewelry, 
            where every piece tells a story of timeless beauty and exceptional craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8 py-6 text-lg shadow-[var(--shadow-gold)] transition-all duration-300 hover:scale-105"
            >
              Visit Our Store
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300"
            >
              View Collections
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
