const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Gita Jewellers</h3>
            <p className="text-secondary-foreground/80">
              Your trusted destination for exquisite gold and silver jewelry.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#collections" className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300">
                  Collections
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <p className="text-secondary-foreground/80 mb-2">
              14/2/1 West Ghosh Para Road, Jagatdal
            </p>
            <p className="text-secondary-foreground/80">
              Phone: <a href="tel:+917278232514" className="hover:text-primary transition-colors duration-300">+91 7278232514</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} Gita Jewellers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
