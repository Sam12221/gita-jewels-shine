import goldCollection from "@/assets/gold-collection.jpg";
import silverCollection from "@/assets/silver-collection.jpg";
import goldBangles from "@/assets/gold-bangles.jpg";
import silverEarrings from "@/assets/silver-earrings.jpg";
import goldNecklace from "@/assets/gold-necklace.jpg";

const Collections = () => {
  const collections = [
    {
      title: "Gold Collection",
      description: "Timeless elegance in pure gold",
      image: goldCollection,
    },
    {
      title: "Silver Masterpieces",
      description: "Contemporary designs in sterling silver",
      image: silverCollection,
    },
    {
      title: "Gold Bangles",
      description: "Traditional bangles with modern flair",
      image: goldBangles,
    },
    {
      title: "Silver Earrings",
      description: "Delicate craftsmanship in every detail",
      image: silverEarrings,
    },
    {
      title: "Gold Necklaces",
      description: "Statement pieces for special moments",
      image: goldNecklace,
    },
  ];

  return (
    <section id="collections" className="py-20 md:py-32 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our Collections
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Explore our carefully curated collection of gold and silver jewelry, 
            each piece crafted with precision and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-[var(--shadow-gold)] transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-secondary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-secondary-foreground/90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
