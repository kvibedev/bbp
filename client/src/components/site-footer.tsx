import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import logoImage from "@assets/BBP LOGO PRESENTATION_1763746252877.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050e1f] border-t border-white/5 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img src={logoImage} alt="BenefitsBridge Partners" className="h-16 mb-6" />
            <p className="text-blue-100/60 text-sm leading-relaxed mb-6">
              Pharmacy Benefit Management consulting powered by Ringmaster Technologies. Delivering transparency, cost savings, and contract compliance for large public employers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/30 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-blue-100/60 hover:text-[#D4AF37]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/30 flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-blue-100/60 hover:text-[#D4AF37]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions" className="text-blue-100/60 hover:text-[#D4AF37] transition-colors text-sm">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100/60 hover:text-[#D4AF37] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100/60 hover:text-[#D4AF37] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-blue-100/60 hover:text-[#D4AF37] transition-colors text-sm">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100/60 hover:text-[#D4AF37] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">PBM Services</h3>
            <ul className="space-y-3 text-sm text-blue-100/60">
              <li>PBM Contract Management</li>
              <li>Claims Monitoring</li>
              <li>Cost Containment Analytics</li>
              <li>Annual Market Checks</li>
              <li>Contract Reconciliation</li>
              <li>Enhanced Reporting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-blue-100/60">
                <Phone className="w-5 h-5 text-[#4A90E2] mt-0.5 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-100/60">
                <Mail className="w-5 h-5 text-[#4A90E2] mt-0.5 flex-shrink-0" />
                <span>info@benefitsbridge.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-100/60">
                <MapPin className="w-5 h-5 text-[#4A90E2] mt-0.5 flex-shrink-0" />
                <span>123 Benefits Way<br />Suite 100<br />Chicago, IL 60601</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100/40 text-sm">
            © {currentYear} BenefitsBridge Partners, LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-blue-100/40">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
