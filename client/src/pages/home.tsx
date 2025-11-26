import { useState } from "react";
import { 
  Check, 
  Building2, 
  BarChart3, 
  ArrowRight, 
  Menu,
  Shield,
  PieChart,
  TrendingUp,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";

// --- Asset Imports ---
import heroData from "@assets/generated_images/abstract_connecting_bridge_data_visualization.png";
import logoImage from "@assets/BBP LOGO PRESENTATION_1763746252877.png";

// --- Components ---

export default function Home() {
  return (
    <div className="font-sans bg-[#0B1F40] min-h-screen text-white selection:bg-[#D4AF37] selection:text-[#0B1F40]">
      <Nav variant="transparent" />
      
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract background - Navy gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a3b6e] via-[#0B1F40] to-[#050e1f]"></div>
        
        {/* Gold/Blue Mesh Gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#4A90E2] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#D4AF37] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="absolute top-0 right-0 w-1/2 h-full opacity-40 pointer-events-none mix-blend-overlay">
           <img src={heroData} alt="Data Visualization" className="w-full h-full object-cover mask-image-gradient" style={{ maskImage: 'linear-gradient(to left, black, transparent)' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 text-[#D4AF37] font-medium text-sm mb-8 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Bridging Better Benefits
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight font-serif">
              Strategic Intelligence. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F2D57E] to-[#D4AF37]">
                Measurable Results.
              </span>
            </h1>
            
            <p className="text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed font-light">
              BenefitsBridge Partners combines traditional expertise with proprietary analytics to deliver cost-effective, high-impact benefit solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-8 h-14 text-lg">
                Analyze Your Plan
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 text-lg px-8">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid - Gold accented */}
      <section className="py-24 border-y border-white/5 bg-[#0B1F40]/50 backdrop-blur-sm relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {[
              { label: "Average Savings", value: "22%", sub: "Per Client Year 1" },
              { label: "Compliance Score", value: "100%", sub: "Audit Success Rate" },
              { label: "Data Points", value: "1.5M+", sub: "Analyzed Daily" },
              { label: "Client ROI", value: "3.5x", sub: "Return on Investment" }
            ].map((stat, i) => (
              <div key={i} className="px-6 pt-6 md:pt-0 text-center md:text-left group">
                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">{stat.value}</div>
                <div className="text-[#4A90E2] font-medium mb-1 uppercase tracking-wider text-xs">{stat.label}</div>
                <div className="text-white/40 text-sm">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-white">
                Total Visibility. <br/>
                <span className="text-[#4A90E2]">Real-time Control.</span>
              </h2>
              <p className="text-blue-100/70 mb-10 text-lg leading-relaxed">
                Our client portal gives you unprecedented insight into utilization trends, cost drivers, and population health metrics, empowering you to make data-driven decisions.
              </p>
              <ul className="space-y-6">
                {[
                  "Real-time claims analysis & forecasting",
                  "Predictive cost modeling engines",
                  "Population health risk stratification",
                  "Vendor performance benchmarking"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/90">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
                      <Check className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2 relative w-full">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#D4AF37] to-[#4A90E2] rounded-2xl opacity-30 blur-2xl"></div>
              <div className="relative rounded-xl border border-white/10 bg-[#0F264A] p-6 shadow-2xl overflow-hidden">
                {/* Abstract UI Mockup - Rebuilt with specific colors */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-6">
                    <div className="space-y-2">
                      <div className="h-2 w-24 bg-white/10 rounded-full"></div>
                      <div className="h-4 w-48 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="h-10 w-10 bg-[#D4AF37] rounded-full opacity-80"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="h-40 bg-[#0B1F40] rounded-lg border border-white/5 p-4 relative overflow-hidden group">
                      <div className="absolute top-4 left-4 p-2 bg-[#4A90E2]/20 rounded text-[#4A90E2]">
                        <PieChart className="w-5 h-5" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#4A90E2]/20 to-transparent"></div>
                    </div>
                    <div className="h-40 bg-[#0B1F40] rounded-lg border border-white/5 p-4 relative overflow-hidden group">
                      <div className="absolute top-4 left-4 p-2 bg-[#D4AF37]/20 rounded text-[#D4AF37]">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                       <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#D4AF37]/20 to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="h-56 bg-[#0B1F40] rounded-lg border border-white/5 p-6 relative">
                     <div className="flex items-end gap-2 h-full pb-4 justify-between px-2">
                        {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                          <div key={i} className="w-full bg-white/5 hover:bg-[#D4AF37] transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                             <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-[#D4AF37] bg-[#0B1F40] px-2 py-1 rounded border border-[#D4AF37]/30 transition-opacity">
                               {h}%
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
