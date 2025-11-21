import { useState } from "react";
import { 
  Check, 
  ChevronDown, 
  Building2, 
  Users, 
  BarChart3, 
  ArrowRight, 
  Shield, 
  Handshake, 
  Lightbulb,
  Menu,
  X,
  Phone,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

// --- Asset Imports ---
import heroCorporate from "@assets/generated_images/corporate_team_meeting_in_modern_office.png";
import heroHuman from "@assets/generated_images/happy_diverse_employees_outdoors.png";
import heroData from "@assets/generated_images/abstract_connecting_bridge_data_visualization.png";
import logoIcon from "@assets/generated_images/benefitsbridge_minimalist_logo_icon.png";

// --- Types ---
type LayoutType = "corporate" | "human" | "data";

// --- Components ---

const Logo = ({ variant = "default" }: { variant?: "default" | "white" }) => (
  <div className="flex items-center gap-3">
    <img src={logoIcon} alt="BenefitsBridge Logo" className="w-8 h-8 rounded-md object-contain bg-white/90 p-0.5" />
    <span className={`font-bold text-xl tracking-tight ${variant === "white" ? "text-white" : "text-slate-900"}`}>
      Benefits<span className={variant === "white" ? "text-blue-200" : "text-primary"}>Bridge</span>
    </span>
  </div>
);

const Nav = ({ layout, variant = "light" }: { layout: LayoutType, variant?: "light" | "dark" | "transparent" }) => {
  const textColor = variant === "light" ? "text-slate-700" : "text-white";
  const hoverColor = variant === "light" ? "hover:text-primary" : "hover:text-blue-200";
  
  return (
    <nav className={`py-4 px-6 flex items-center justify-between ${variant === "transparent" ? "absolute top-0 left-0 right-0 z-50" : "bg-white border-b"}`}>
      <Logo variant={variant === "light" ? "default" : "white"} />
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className={`${textColor} ${hoverColor} text-sm font-medium transition-colors`}>Solutions</a>
        <a href="#" className={`${textColor} ${hoverColor} text-sm font-medium transition-colors`}>Services</a>
        <a href="#" className={`${textColor} ${hoverColor} text-sm font-medium transition-colors`}>About Us</a>
        <a href="#" className={`${textColor} ${hoverColor} text-sm font-medium transition-colors`}>Insights</a>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Button variant={variant === "light" ? "ghost" : "secondary"} size="sm">
          Client Login
        </Button>
        <Button variant={variant === "light" ? "default" : "secondary"} size="sm">
          Contact Us
        </Button>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className={variant === "light" ? "text-slate-900" : "text-white"} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-6 mt-6">
            <a href="#" className="text-lg font-medium">Solutions</a>
            <a href="#" className="text-lg font-medium">Services</a>
            <a href="#" className="text-lg font-medium">About Us</a>
            <a href="#" className="text-lg font-medium">Insights</a>
            <hr />
            <Button>Contact Us</Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

// --- Layout 1: Corporate Trust ---
// Theme: Structured, Blue/Slate, Clean, Trustworthy
const CorporateLayout = () => {
  return (
    <div className="font-sans bg-slate-50 min-h-screen text-slate-900">
      <Nav layout="corporate" variant="light" />
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-900 mb-6">
              Strategic Benefits Consulting
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Bridging the Gap Between <span className="text-primary">Strategy</span> and <span className="text-primary">Success</span>.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              We help organizations navigate the complex landscape of employee benefits, compliance, and risk management with precision and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline">
                View Our Services
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
               <img src={heroCorporate} alt="Corporate Team Meeting" className="w-full h-full object-cover" />
            </div>
            {/* Floating Stat Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-green-100 rounded-full">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Client Retention</p>
                  <p className="text-2xl font-bold text-slate-900">98.5%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Partners for Your Growth</h2>
            <p className="text-slate-600">
              Our multidisciplinary approach ensures that every aspect of your benefits strategy is aligned with your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Handshake, title: "Strategic Consulting", desc: "Tailored benefit strategies that align with your corporate culture and financial objectives." },
              { icon: BarChart3, title: "Data Analytics", desc: "Leveraging advanced analytics to forecast trends and optimize plan performance." },
              { icon: Users, title: "Employee Advocacy", desc: "Dedicated support systems to help your employees navigate their benefits with confidence." }
            ].map((item, i) => (
              <Card key={i} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to optimize your benefits strategy?</h2>
            <p className="text-slate-300">Join the 500+ companies that trust BenefitsBridge.</p>
          </div>
          <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

// --- Layout 2: Modern Human ---
// Theme: Warm, People-Centric, Soft, Serif Headings, Lifestyle Imagery
const HumanLayout = () => {
  return (
    <div className="font-sans bg-[#FDFCF8] min-h-screen text-stone-800">
      <Nav layout="human" variant="light" />
      
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-medium mb-8 text-stone-900 leading-tight"
            >
              Benefits that put <br/>
              <span className="italic text-amber-700">people first.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We believe that the heart of every company is its people. We design benefit programs that nurture, protect, and inspire your workforce.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="rounded-full bg-stone-900 text-white hover:bg-stone-800 px-8">
                Our Philosophy
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-stone-300 hover:bg-stone-100 px-8">
                Meet the Team
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Mosaic */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[500px]">
            <div className="md:col-span-8 h-full rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img src={heroHuman} alt="Happy Employees" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="md:col-span-4 flex flex-col gap-4 h-full">
               <div className="flex-1 rounded-2xl overflow-hidden bg-stone-200 relative">
                 {/* Placeholder for Human Image 2 - using corporate as secondary for now but cropped */}
                 <img src={heroCorporate} alt="Office Culture" className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all" />
               </div>
               <div className="flex-1 rounded-2xl overflow-hidden bg-blue-100 relative p-8 flex flex-col justify-center">
                 <h3 className="text-2xl font-serif mb-2 text-blue-900">24/7 Support</h3>
                 <p className="text-blue-700/80">We are always here when your team needs us most.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6 text-stone-900">More than just insurance. <br/>A partnership for well-being.</h2>
              <div className="space-y-8">
                {[
                  { title: "Holistic Wellness", text: "Integrating physical, mental, and financial health into one cohesive strategy." },
                  { title: "Personalized Care", text: "Dedicated account managers who know your team by name, not just policy number." },
                  { title: "Future-Ready Solutions", text: "Adapting to the changing needs of the modern workforce with innovative benefits." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                      <p className="text-stone-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-stone-50 p-12 rounded-3xl border border-stone-100">
              <h3 className="text-2xl font-serif mb-6">Let's start a conversation.</h3>
              <div className="space-y-4">
                <Input placeholder="Your Name" className="bg-white border-stone-200" />
                <Input placeholder="Company Name" className="bg-white border-stone-200" />
                <Input placeholder="Email Address" className="bg-white border-stone-200" />
                <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                  Request Information
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Layout 3: Data-Driven Tech ---
// Theme: Dark/High-Contrast, Geometric, Tech-forward, Analytics focused
const DataLayout = () => {
  return (
    <div className="font-sans bg-slate-950 min-h-screen text-white">
      <Nav layout="data" variant="transparent" />
      
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-50 pointer-events-none mix-blend-screen">
           <img src={heroData} alt="Data Visualization" className="w-full h-full object-cover mask-image-gradient" style={{ maskImage: 'linear-gradient(to left, black, transparent)' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-blue-400 font-mono text-sm mb-6 tracking-wider">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              DATA-DRIVEN BENEFITS INTELLIGENCE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Optimize your spend. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Maximize impact.
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              BenefitsBridge leverages proprietary analytics to deliver cost-effective, high-impact benefit solutions that drive ROI and employee satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-0">
                Analyze Your Plan
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 hover:text-white">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24 border-y border-slate-800 bg-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {[
              { label: "Average Savings", value: "22%", sub: "Per Client Year 1" },
              { label: "Compliance Score", value: "100%", sub: "Audit Success Rate" },
              { label: "Data Points", value: "1.5M+", sub: "Analyzed Daily" },
              { label: "Client ROI", value: "3.5x", sub: "Return on Investment" }
            ].map((stat, i) => (
              <div key={i} className="px-6 pt-6 md:pt-0 text-center md:text-left">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-400 font-medium mb-1">{stat.label}</div>
                <div className="text-slate-500 text-sm">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-32 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Total Visibility. <br/>Real-time Control.</h2>
              <p className="text-slate-400 mb-8 text-lg">
                Our client portal gives you unprecedented insight into utilization trends, cost drivers, and population health metrics.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time claims analysis",
                  "Predictive cost modeling",
                  "Population health risk stratification",
                  "Vendor performance benchmarking"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-6 h-6 rounded bg-blue-500/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-2xl">
                {/* Abstract UI mockup */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="h-4 w-32 bg-slate-800 rounded"></div>
                    <div className="h-8 w-8 bg-blue-600 rounded"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-slate-800/50 rounded border border-slate-800"></div>
                    <div className="h-32 bg-slate-800/50 rounded border border-slate-800"></div>
                  </div>
                  <div className="h-48 bg-slate-800/50 rounded border border-slate-800"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Main Page Component with Layout Switcher ---
export default function Home() {
  const [currentLayout, setCurrentLayout] = useState<LayoutType>("corporate");
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const layouts = {
    corporate: { name: "Corporate Trust", component: CorporateLayout },
    human: { name: "Modern Human", component: HumanLayout },
    data: { name: "Data Intelligence", component: DataLayout },
  };

  return (
    <div>
      {/* Sticky Layout Switcher */}
      <div className="fixed bottom-6 right-6 z-50">
        <DropdownMenu open={isSelectorOpen} onOpenChange={setIsSelectorOpen}>
          <DropdownMenuTrigger asChild>
            <Button 
              size="lg" 
              className="shadow-2xl bg-slate-900 text-white hover:bg-slate-800 border border-slate-700 rounded-full px-6 h-14 gap-3 transition-all duration-300"
            >
              <span className="font-medium">View: {layouts[currentLayout].name}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isSelectorOpen ? "rotate-180" : ""}`} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 p-2 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            {Object.entries(layouts).map(([key, value]) => (
              <DropdownMenuItem 
                key={key}
                onClick={() => setCurrentLayout(key as LayoutType)}
                className="cursor-pointer py-3 px-4 rounded-md focus:bg-slate-100"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-medium">{value.name}</span>
                  {currentLayout === key && <Check className="w-4 h-4 text-primary" />}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Layout Renderer */}
      <div className="min-h-screen transition-opacity duration-500">
        {currentLayout === "corporate" && <CorporateLayout />}
        {currentLayout === "human" && <HumanLayout />}
        {currentLayout === "data" && <DataLayout />}
      </div>
    </div>
  );
}
