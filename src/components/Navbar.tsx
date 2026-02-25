import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useWaitlist } from "@/contexts/WaitlistContext";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Features", href: "/#features" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openWaitlist } = useWaitlist();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-20 transition-all duration-300 py-4 px-6 sm:px-8 lg:px-10",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo - Left */}
        <a href="/" className="flex items-center flex-shrink-0">
          <img
            src="/lovable-uploads/spopeer-logo.png"
            alt="Spopeer"
            className="h-8 sm:h-9 w-auto"
          />
        </a>

        {/* Desktop Navigation - Center */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA - Right (Desktop) */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <Button
            onClick={openWaitlist}
            data-youform-open="jvxfwdwr"
            data-youform-position="center"
            size="sm"
            className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition px-6 py-3"
          >
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-xl"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full mt-0 bg-background border-t border-border shadow-lg animate-fade-in-up z-20">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-border">
              <Button
                onClick={() => {
                  openWaitlist();
                  setMobileMenuOpen(false);
                }}
                data-youform-open="jvxfwdwr"
                data-youform-position="center"
                className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
