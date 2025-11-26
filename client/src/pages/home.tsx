import { useState } from "react";
import { 
  Check, 
  Building2, 
  BarChart3, 
  ArrowRight, 
  Shield,
  Database,
  TrendingUp,
  Activity,
  Zap,
  Lock,
  Target,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { Link } from "wouter";

// --- Asset Imports ---
import heroData from "@assets/generated_images/abstract_connecting_bridge_data_visualization.png";
import logoImage from "@assets/BBP LOGO PRESENTATION_1763746252877.png";

export default function Home() {
  return (
    <div className="font-sans bg-[#0B1F40] min-h-screen text-white selection:bg-[#D4AF37] selection:text-[#0B1F40]">
      <Nav variant="transparent" />
      
      {/* Hero - PBM Focus */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a3b6e] via-[#0B1F40] to-[#050e1f]"></div>
        
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
              Powered by Ringmaster Technologies
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight font-serif">
              Pharmacy Benefit Management <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F2D57E] to-[#D4AF37]">
                Redefined for Public Employers
              </span>
            </h1>
            
            <p className="text-xl text-blue-100/80 mb-10 max-w-2xl leading-relaxed font-light">
              BenefitsBridge Partners delivers best-in-class PBM consulting and analytics powered by proprietary technology. We eliminate guesswork, ensure contract compliance, and deliver measurable savings for large public employers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-8 h-14 text-lg" data-testid="button-analyze-plan">
                <Link href="/contact">
                  Analyze Your PBM Contract
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 text-lg px-8" data-testid="button-view-solutions">
                <Link href="/solutions">
                  View Solutions
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-2 text-blue-100/60 text-sm">
              <Shield className="w-5 h-5 text-[#4A90E2]" />
              <span>SOC-2 Certified | Trusted by Leading Public Employers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid - Real Data from PowerPoint */}
      <section className="py-24 border-y border-white/5 bg-[#0B1F40]/50 backdrop-blur-sm relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {[
              { label: "Annual Savings", value: "8%", sub: "Market Check Advantage", icon: TrendingUp },
              { label: "Cost Impact", value: "10%", sub: "Per Contract Exclusion", icon: Target },
              { label: "Guarantee Variance", value: "3-5%", sub: "Typical PBM Miss Rate", icon: Activity },
              { label: "Process Time", value: "1-2 wks", sub: "Down from 8 Weeks", icon: Zap }
            ].map((stat, i) => (
              <div key={i} className="px-6 pt-6 md:pt-0 text-center md:text-left group" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="flex items-center gap-3 mb-3">
                  <stat.icon className="w-6 h-6 text-[#4A90E2]" />
                  <div className="text-4xl md:text-5xl font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors">{stat.value}</div>
                </div>
                <div className="text-[#4A90E2] font-medium mb-1 uppercase tracking-wider text-xs">{stat.label}</div>
                <div className="text-white/40 text-sm">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Platform - Rx-LinQ */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Our Technology Solution
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              Rx-LinQ<span className="text-[#4A90E2]">®</span> Platform
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto leading-relaxed">
              Designed to facilitate greater data accuracy, ensure contract competitiveness, and maximize cost abatement for your pharmacy benefit program.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "ACCURACY",
                stat: "10% Cost Impact",
                description: "Did you know a single exclusion in a pharmacy contract can have a 10% impact on costs?",
                detail: "Rx-LinQ merges data from Medi-Span, NCPDP, CMS, Drug Lists, and your claims data to ensure precise calculations."
              },
              {
                icon: TrendingUp,
                title: "MARKET CHECKS",
                stat: "8% Savings",
                description: "Companies that consistently market their pharmacy contracts every year spend, on average, 8% less on prescriptions.",
                detail: "Rx-LinQ enables year-over-year market checks to ensure your contracts remain competitive."
              },
              {
                icon: Shield,
                title: "CONTRACT RECONCILIATION",
                stat: "3-5% Recovery",
                description: "PBMs very often miss on their contract guarantees by 3-5%.",
                detail: "Rx-LinQ analytics platform tracks performance and ensures contract terms are met."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
                data-testid={`feature-${feature.title.toLowerCase()}`}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#D4AF37] to-[#4A90E2] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                <div className="relative h-full bg-[#0F264A] border border-white/10 rounded-xl p-8 hover:border-[#D4AF37]/30 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                    <feature.icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-white uppercase tracking-wide">{feature.title}</h3>
                  <div className="text-3xl font-serif font-bold text-[#4A90E2] mb-4">{feature.stat}</div>
                  
                  <p className="text-blue-100/70 mb-4 font-medium leading-relaxed">{feature.description}</p>
                  <p className="text-blue-100/50 text-sm leading-relaxed">{feature.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-[#0F264A] border border-white/10 rounded-full px-8 py-4">
              <Lock className="w-6 h-6 text-[#4A90E2]" />
              <div className="text-left">
                <div className="text-white font-bold">5-Star Security</div>
                <div className="text-blue-100/60 text-sm">SOC-2 Certified | AWS Cloud Infrastructure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One Stop Benefits Marketplace */}
      <section className="py-32 bg-[#050e1f] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Integrated Ecosystem
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              One Stop Benefits <span className="text-[#4A90E2]">Marketplace</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              A connected, API-powered ecosystem designed to accelerate quoting, optimize delivery, and enable scalable growth—all from a single platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Quote-LinQ", desc: "RFP Products", icon: Database },
              { title: "Smart-LinQ & Market IQ", desc: "Analytics & Reporting", icon: BarChart3 },
              { title: "TPA Marketplace", desc: "Connected Network", icon: Building2 },
              { title: "Reference-Based Pricing", desc: "Transparent Cost Control", icon: Target },
              { title: "Enhanced Level-Funded", desc: "Flexible Options", icon: TrendingUp }
            ].map((component, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-[#0B1F40] border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/30 transition-all hover:shadow-lg hover:shadow-[#D4AF37]/10"
                data-testid={`platform-${component.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <component.icon className="w-10 h-10 text-[#4A90E2] mb-4 group-hover:text-[#D4AF37] transition-colors" />
                <h3 className="text-lg font-bold text-white mb-2">{component.title}</h3>
                <p className="text-blue-100/50 text-sm">{component.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Differentiate */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
                How We <span className="text-[#D4AF37]">Differentiate</span>
              </h2>
              <p className="text-blue-100/70 text-xl">
                We bring capabilities that traditional consultants simply can't match
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Crowd-Sourced Pharmacy Knowledge",
                  desc: "You don't have to spend every day scouring contracts to find the next 'gotcha' from a PBM."
                },
                {
                  title: "Deeper Insights – Faster",
                  desc: "Through sophisticated analytics we drive you to a more thorough analysis of your PBM offers and help you deliver high-end output."
                },
                {
                  title: "Answer the BIG Questions",
                  desc: "With analytics and comprehensive reporting packages you can identify which carriers are delivering on their promises and which are falling short."
                },
                {
                  title: "Tap Into Extensive Data Sources",
                  desc: "We leverage massive amounts of data from public and private sources including NADAC, NCPDP and Medi-Span to help deliver insights."
                },
                {
                  title: "Integrations Expand Your Capacity",
                  desc: "With our integrated data warehouse and automated workflow, take the pharmacy renewal process from 8 weeks to 1-2 weeks."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4 group"
                  data-testid={`differentiator-${i}`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/20 transition-colors">
                    <Check className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-100/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a3b6e]/50 via-[#0B1F40] to-[#050e1f]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Ready to Optimize Your <span className="text-[#D4AF37]">PBM Strategy?</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
            Let's discuss how BenefitsBridge Partners can help you ensure contract compliance, maximize savings, and protect your fiduciary interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-10 h-14 text-lg" data-testid="button-schedule-consultation">
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 text-lg px-10" data-testid="button-view-services">
              <Link href="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
