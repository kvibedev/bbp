import { Nav } from "@/components/site-header";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const serviceCategories = [
  {
    category: "Strategic Consulting",
    services: [
      "Benefits Program Design & Optimization",
      "Cost Containment Strategies",
      "Vendor RFP & Selection Support",
      "Market Analysis & Benchmarking",
      "Multi-year Strategic Planning",
      "Merger & Acquisition Benefits Integration"
    ]
  },
  {
    category: "Compliance & Administration",
    services: [
      "ACA Reporting & Compliance",
      "ERISA & DOL Compliance",
      "5500 Filing Support",
      "COBRA & HIPAA Administration",
      "Non-Discrimination Testing (ADP/ACP)",
      "Regulatory Update Monitoring"
    ]
  },
  {
    category: "Data & Analytics",
    services: [
      "Claims Data Analysis",
      "Predictive Cost Modeling",
      "Population Health Management",
      "Utilization Review & Reporting",
      "Custom Dashboard Development",
      "Benchmarking & KPI Tracking"
    ]
  },
  {
    category: "Employee Support",
    services: [
      "Year-Round Concierge Service",
      "Benefits Education & Communication",
      "Online Enrollment Platforms",
      "Decision Support Tools",
      "Claims Resolution Advocacy",
      "Life Event Guidance"
    ]
  }
];

export default function Services() {
  return (
    <div className="font-sans bg-[#0B1F40] min-h-screen text-white selection:bg-[#D4AF37] selection:text-[#0B1F40]">
      <Nav variant="solid" />
      
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#1a3b6e] via-[#0B1F40] to-[#050e1f]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Full-Service Support
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white">
              Services Built Around <span className="text-[#D4AF37]">Your Success</span>
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed">
              End-to-end benefits management from strategy to execution, powered by expertise and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {serviceCategories.map((cat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors">
                <h2 className="text-2xl font-bold mb-6 text-[#D4AF37] font-serif">{cat.category}</h2>
                <ul className="space-y-4">
                  {cat.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#4A90E2] mt-0.5 flex-shrink-0" />
                      <span className="text-blue-100/80">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Our Approach</h2>
            <p className="text-xl text-blue-100/70 max-w-2xl mx-auto">
              A proven methodology that delivers measurable results every time
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Deep analysis of your current state, goals, and pain points" },
              { step: "02", title: "Strategy", desc: "Custom roadmap with clear objectives and success metrics" },
              { step: "03", title: "Implementation", desc: "Seamless execution with minimal disruption to operations" },
              { step: "04", title: "Optimization", desc: "Continuous monitoring and refinement for sustained value" }
            ].map((phase, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-[#D4AF37]/20 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{phase.title}</h3>
                <p className="text-blue-100/60 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Let's start with a <span className="text-[#D4AF37]">conversation</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
            Every engagement begins with understanding your unique needs and goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-10 h-14 text-lg">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
