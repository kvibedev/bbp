import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoImage from "@assets/BBP LOGO PRESENTATION_1763746252877.png";

const Logo = () => (
  <Link href="/">
    <div className="flex items-center gap-3 cursor-pointer">
      <img src={logoImage} alt="BenefitsBridge Partners Logo" className="h-12 md:h-16 object-contain" />
    </div>
  </Link>
);

interface NavProps {
  variant?: "transparent" | "solid";
}

export const Nav = ({ variant = "solid" }: NavProps) => {
  const [location] = useLocation();
  
  const navLinks = [
    { name: "Solutions", href: "/solutions" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Insights", href: "/insights" },
  ];

  const isTransparent = variant === "transparent";

  return (
    <nav className={`${isTransparent ? "absolute top-0 left-0 right-0" : "bg-[#0B1F40] border-b border-white/10"} z-50 py-6 px-6`}>
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={`text-white/80 hover:text-[#D4AF37] text-sm font-medium transition-colors tracking-wide ${location === link.href ? "text-[#D4AF37]" : ""}`}>
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
