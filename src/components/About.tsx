const About = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Crafting Dreams in Gold & Silver
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 animate-fade-in-up">
            At Gita Jewellers, we bring together traditional craftsmanship and contemporary design 
            to create jewelry that celebrates life's precious moments.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up">
            With decades of expertise in creating exquisite gold and silver ornaments, 
            we pride ourselves on quality, authenticity, and personalized service that makes 
            every customer feel special.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-card rounded-lg shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 animate-scale-in">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Certified gold and silver with hallmark guarantee</p>
            </div>
            
            <div className="p-6 bg-card rounded-lg shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Exquisite Designs</h3>
              <p className="text-muted-foreground">Traditional and modern collections for every occasion</p>
            </div>
            
            <div className="p-6 bg-card rounded-lg shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Trusted Service</h3>
              <p className="text-muted-foreground">Decades of experience serving our valued customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
