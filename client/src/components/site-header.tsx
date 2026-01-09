import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoImage from "@assets/BBP LOGO PRESENTATION 2_1764204475650.png";

interface NavProps {
  variant?: "transparent" | "solid";
}

export const Nav = ({ variant = "solid" }: NavProps) => {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const navLinks = [
    { name: "Solutions", href: "/solutions" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Insights", href: "/insights" },
  ];

  const isTransparent = variant === "transparent";
  const isHomePage = isTransparent;

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 300;
      
      if (animationComplete) {
        return;
      }
      
      if (scrollY > 20) {
        setScrolled(true);
        setAnimationComplete(true);
        setScrollProgress(1);
        return;
      }
      
      const progress = Math.min(scrollY / threshold, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, animationComplete]);

  if (isHomePage) {
    const showHeroLogo = !animationComplete;
    
    return (
      <>
        {showHeroLogo && (
          <div 
            className="fixed inset-0 z-40 flex items-center justify-center"
            style={{
              opacity: 1 - scrollProgress,
              transform: `scale(${1 - scrollProgress * 0.3})`,
              transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
              pointerEvents: scrollProgress > 0.5 ? 'none' : 'auto',
            }}
          >
            <div className="absolute inset-0 bg-[#0B1F40]/75" />
            <Link href="/" className="relative z-10">
              <img 
                src={logoImage} 
                alt="BenefitsBridge Partners Logo" 
                className="object-contain"
                style={{
                  width: '75vw',
                  maxWidth: '800px',
                  transition: 'transform 0.15s ease-out',
                }}
              />
            </Link>
          </div>
        )}

        <nav 
          className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
            scrolled || animationComplete
              ? "bg-[#0B1F40]/95 backdrop-blur-md border-b border-white/10" 
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/">
              <div 
                className="flex items-center gap-3 cursor-pointer transition-all duration-300"
                style={{
                  opacity: animationComplete ? 1 : scrollProgress,
                  transform: animationComplete ? 'translateX(0)' : `translateX(${(1 - scrollProgress) * -20}px)`,
                }}
              >
                <img 
                  src={logoImage} 
                  alt="BenefitsBridge Partners Logo" 
                  className="h-12 md:h-14 object-contain"
                />
              </div>
            </Link>
            
            <div 
              className="hidden md:flex items-center gap-8 transition-all duration-300"
              style={{
                opacity: animationComplete ? 1 : scrollProgress,
                transform: animationComplete ? 'translateY(0)' : `translateY(${(1 - scrollProgress) * -10}px)`,
              }}
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`text-white/80 hover:text-[#D4AF37] text-sm font-medium transition-colors tracking-wide ${
                    location === link.href ? "text-[#D4AF37]" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div 
              className="hidden md:flex items-center gap-4 transition-all duration-300"
              style={{
                opacity: animationComplete ? 1 : scrollProgress,
                transform: animationComplete ? 'translateY(0)' : `translateY(${(1 - scrollProgress) * -10}px)`,
              }}
            >
              <Button variant="ghost" className="text-white hover:text-[#D4AF37] hover:bg-white/5">
                Client Login
              </Button>
              <Button asChild className="bg-[#D4AF37] text-[#0B1F40] hover:bg-[#B59328] font-semibold">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden text-white transition-opacity duration-300"
                  style={{ opacity: animationComplete ? 1 : scrollProgress }}
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#0B1F40] border-white/10 text-white">
                <div className="flex flex-col gap-6 mt-6">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="text-lg font-medium hover:text-[#D4AF37]">
                      {link.name}
                    </Link>
                  ))}
                  <hr className="border-white/10" />
                  <Button asChild className="bg-[#D4AF37] text-[#0B1F40] hover:bg-[#B59328] w-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </>
    );
  }

  return (
    <nav className="bg-[#0B1F40] border-b border-white/10 z-50 py-6 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={logoImage} alt="BenefitsBridge Partners Logo" className="h-12 md:h-14 object-contain" />
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-white/80 hover:text-[#D4AF37] text-sm font-medium transition-colors tracking-wide ${
                location === link.href ? "text-[#D4AF37]" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-[#D4AF37] hover:bg-white/5">
            Client Login
          </Button>
          <Button asChild className="bg-[#D4AF37] text-[#0B1F40] hover:bg-[#B59328] font-semibold">
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-[#0B1F40] border-white/10 text-white">
            <div className="flex flex-col gap-6 mt-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-lg font-medium hover:text-[#D4AF37]">
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10" />
              <Button asChild className="bg-[#D4AF37] text-[#0B1F40] hover:bg-[#B59328] w-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
