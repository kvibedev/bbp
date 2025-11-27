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
  ChevronRight,
  AlertTriangle,
  DollarSign,
  Users,
  Briefcase,
  Compass
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { Link } from "wouter";

import heroData from "@assets/generated_images/abstract_connecting_bridge_data_visualization.png";
import logoImage from "@assets/BBP LOGO PRESENTATION 2_1764204475650.png";

export default function Home() {
  return (
    <div className="font-sans bg-[#0B1F40] min-h-screen text-white selection:bg-[#D4AF37] selection:text-[#0B1F40]">
      <Nav variant="transparent" />
      
      {/* Hero Section - Updated with Track 1 Messaging */}
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
              Your Pharmacy Benefits Navigator
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight font-serif">
              Stop Losing Millions on <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F2D57E] to-[#D4AF37]">
                Pharmacy Contract Mistakes
              </span>
              <br/>— Starting Today
            </h1>
            
            <p className="text-xl text-blue-100/80 mb-10 max-w-2xl leading-relaxed font-light">
              We capture your contract terms on Day One and verify every claim from the first prescription — putting mistakenly paid dollars back into your budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-8 h-14 text-lg" data-testid="button-analyze-plan">
                <Link href="/contact">
                  Start Day One Verification
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 text-lg px-8" data-testid="button-view-solutions">
                <Link href="/solutions">
                  See How We Recover Dollars
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-2 text-blue-100/60 text-sm">
              <Shield className="w-5 h-5 text-[#4A90E2]" />
              <span>Trusted by Leading Employers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-32 relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              The Industry's Dirty Secret
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              The <span className="text-[#4A90E2]">Gap Tax</span> You're Paying
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto leading-relaxed">
              Every day, you're losing money you don't even know about. Here's why.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group relative"
                data-testid="problem-step-1"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
                <div className="relative h-full bg-[#0F264A] border border-red-500/20 rounded-xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 flex-shrink-0">
                      <span className="text-2xl font-bold text-red-400">1</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">Today: You Sign</h3>
                      <p className="text-blue-100/70 leading-relaxed">
                        You sign a multi-million dollar pharmacy contract with carefully negotiated terms, discounts, and rebates.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="group relative"
                data-testid="problem-step-2"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
                <div className="relative h-full bg-[#0F264A] border border-orange-500/20 rounded-xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 flex-shrink-0">
                      <span className="text-2xl font-bold text-orange-400">2</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">Tomorrow: Claims Start</h3>
                      <p className="text-blue-100/70 leading-relaxed">
                        Claims processing begins immediately. Thousands, sometimes millions, of prescription adjudications start flowing.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group relative"
                data-testid="problem-step-3"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/20 to-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
                <div className="relative h-full bg-[#0F264A] border border-yellow-500/20 rounded-xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 flex-shrink-0">
                      <span className="text-2xl font-bold text-yellow-400">3</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">3-9 Months Later: The Contract Arrives</h3>
                      <p className="text-blue-100/70 leading-relaxed">
                        You finally receive your actual contract document. But by then, millions of claims have already been processed.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="group relative"
                data-testid="problem-step-4"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-red-600/30 to-red-800/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
                <div className="relative h-full bg-[#0F264A] border border-red-600/30 rounded-xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center border border-red-600/20 flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">The Gap Tax</h3>
                      <p className="text-blue-100/70 leading-relaxed">
                        During that gap, terms were applied without verification. Discounts missed. Rebates miscalculated. <span className="text-red-400 font-bold">Always in favor of the carrier.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-8 text-center">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-3xl font-serif font-bold text-white mb-4">The Scale of the Problem</h3>
              <p className="text-xl text-blue-100/80 leading-relaxed mb-6">
                Even sampling claims after the fact reveals that every audit, every reconciliation uncovers mistakes. 
                <span className="block mt-2 text-red-300 font-bold">And they're always in favor of the carrier. Always.</span>
              </p>
              <p className="text-lg text-blue-100/60">
                Millions of adjudications daily. Even small percentage errors equal massive losses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Day One Solution Section */}
      <section className="py-32 bg-[#050e1f] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              The BenefitsBridge Difference
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              <span className="text-[#D4AF37]">Day One</span> Protection
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto leading-relaxed">
              We don't wait for the damage to be done. We start protecting your investment from the moment the ink dries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                icon: Shield,
                title: "Capture Bid Requirements Upfront",
                description: "We reserve your contract terms as a warranty before the first claim processes.",
                detail: "Your negotiated discounts, rebates, and exclusions are locked in from Day One."
              },
              {
                icon: Target,
                title: "Every Single Claim Verified",
                description: "100% adjudication coverage — not samples, not estimates, not 'close enough.'",
                detail: "We check every prescription claim as it's processed against your actual contract terms."
              },
              {
                icon: Zap,
                title: "Real-Time Contract Compliance",
                description: "Claims are verified as negotiated from the first prescription forward.",
                detail: "Immediate detection of discrepancies means immediate correction, not months-later discoveries."
              },
              {
                icon: DollarSign,
                title: "Recover What's Rightfully Yours",
                description: "Put mistakenly paid dollars back into your budget where they belong.",
                detail: "We don't just identify errors — we help you recover the money that should have stayed in your budget."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
                data-testid={`solution-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#D4AF37] to-[#4A90E2] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                <div className="relative h-full bg-[#0B1F40] border border-white/10 rounded-xl p-8 hover:border-[#D4AF37]/30 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                    <feature.icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-blue-100/70 mb-4 font-medium leading-relaxed">{feature.description}</p>
                  <p className="text-blue-100/50 text-sm leading-relaxed">{feature.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-[#0F264A] border border-[#D4AF37]/30 rounded-full px-8 py-4">
              <Check className="w-6 h-6 text-[#D4AF37]" />
              <div className="text-left">
                <div className="text-white font-bold">Complete Coverage from Day One</div>
                <div className="text-blue-100/60 text-sm">Not samples. Not estimates. Every single adjudication.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Real Results, Real Dollars
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              Proven <span className="text-[#D4AF37]">Recovery</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              The power of complete contract accuracy, delivered from Day One
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative group mb-12"
              data-testid="case-study-featured"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-[#D4AF37] via-[#4A90E2] to-[#D4AF37] rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-[#0F264A] to-[#0B1F40] border border-[#D4AF37]/30 rounded-2xl p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37] mb-6">
                  <DollarSign className="w-10 h-10 text-[#D4AF37]" />
                </div>
                
                <div className="text-7xl md:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F2D57E] to-[#D4AF37] mb-4">
                  $12M
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  Recovered Through Complete Contract Accuracy
                </h3>
                
                <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
                  One client recovered <span className="text-[#D4AF37] font-bold">$12 million in mistakenly paid dollars</span> through our Day One verification approach and 100% adjudication coverage.
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  metric: "100%",
                  label: "Coverage",
                  description: "Every claim verified, not samples"
                },
                {
                  metric: "Day 1",
                  label: "Protection",
                  description: "From the first prescription forward"
                },
                {
                  metric: "$Millions",
                  label: "Recovered",
                  description: "Real dollars back in your budget"
                }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0F264A] border border-white/10 rounded-xl p-6 text-center hover:border-[#D4AF37]/30 transition-colors"
                  data-testid={`result-stat-${i}`}
                >
                  <div className="text-4xl font-serif font-bold text-[#D4AF37] mb-2">{stat.metric}</div>
                  <div className="text-lg font-bold text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-blue-100/60">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid - Moved from top */}
      <section className="py-24 border-y border-white/5 bg-[#0B1F40]/50 backdrop-blur-sm relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
              Industry <span className="text-[#D4AF37]">Findings</span>
            </h3>
            <p className="text-blue-100/60">Key insights from our research and experience</p>
          </div>
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

      {/* Who We Help Section - Replacing Marketplace */}
      <section className="py-32 bg-[#050e1f] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Built For You
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              Who We <span className="text-[#4A90E2]">Help</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              Tailored solutions for organizations committed to pharmacy benefit excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Large Self-Insured Employers",
                criteria: "300+ employees, $1M+ pharmacy claims",
                description: "CFOs, Benefits Directors, and Risk Managers who need to stop losing money they don't even know about.",
                benefits: ["Day One contract verification", "100% claim adjudication coverage", "Proven dollar recovery"]
              },
              {
                icon: Briefcase,
                title: "Insurance Brokers",
                criteria: "National & regional brokerages",
                description: "Brokers looking to enhance their value proposition with cutting-edge technology and expertise.",
                benefits: ["Sticky client retention tools", "Differentiated offering", "Revenue opportunity"]
              },
              {
                icon: Users,
                title: "Innovation-Focused Employers",
                criteria: "Any size, seeking better outcomes",
                description: "Organizations that want innovation without disrupting their current broker relationships.",
                benefits: ["Keep your broker", "Add our technology", "Enhance your program"]
              }
            ].map((audience, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
                data-testid={`audience-${audience.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#D4AF37] to-[#4A90E2] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                <div className="relative h-full bg-[#0B1F40] border border-white/10 rounded-xl p-8 hover:border-[#D4AF37]/30 transition-all">
                  <div className="w-16 h-16 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center mb-6 border border-[#4A90E2]/20 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/20 transition-colors">
                    <audience.icon className="w-8 h-8 text-[#4A90E2] group-hover:text-[#D4AF37] transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{audience.title}</h3>
                  <div className="text-[#D4AF37] text-sm font-medium mb-4 uppercase tracking-wide">{audience.criteria}</div>
                  <p className="text-blue-100/70 mb-6 leading-relaxed">{audience.description}</p>
                  
                  <div className="space-y-2">
                    {audience.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#4A90E2] flex-shrink-0 mt-0.5" />
                        <span className="text-blue-100/60 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Differentiate - BBP Focused */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                The BenefitsBridge Advantage
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
                Expert <span className="text-[#D4AF37]">Navigation</span>, Proven Results
              </h2>
              <p className="text-blue-100/70 text-xl">
                We bring expertise and solutions that traditional consultants simply can't match
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  title: "Day One Verification",
                  desc: "We don't wait for the damage to be done. Contract terms are captured and verified from the first prescription, protecting your investment immediately."
                },
                {
                  icon: Target,
                  title: "100% Adjudication Coverage",
                  desc: "Every single claim checked — not samples, not estimates. Complete coverage means complete protection and maximum recovery."
                },
                {
                  icon: Compass,
                  title: "Expert Navigation",
                  desc: "We guide you through the complex pharmacy benefits landscape, sourcing innovative programs and best-in-class technologies tailored to your needs."
                },
                {
                  icon: DollarSign,
                  title: "Proven Dollar Recovery",
                  desc: "We don't just identify errors — we help you recover the money. Clients have recovered millions in mistakenly paid dollars back into their budgets."
                },
                {
                  icon: Zap,
                  title: "Speed to Results",
                  desc: "With advanced analytics and automated workflows, we reduce pharmacy renewal processes from 8 weeks to 1-2 weeks while improving accuracy."
                },
                {
                  icon: Database,
                  title: "Comprehensive Data Sources",
                  desc: "We leverage extensive public and private data sources including NADAC, NCPDP, and Medi-Span to deliver deeper insights faster."
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
                    <item.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-100/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 bg-[#0F264A] border border-white/10 rounded-full px-8 py-4">
                <Lock className="w-6 h-6 text-[#4A90E2]" />
                <div className="text-left">
                  <div className="text-white font-bold">Enterprise-Grade Security</div>
                  <div className="text-blue-100/60 text-sm">SOC-2 Certified | Secure Cloud Infrastructure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a3b6e]/50 via-[#0B1F40] to-[#050e1f]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Ready to Stop <span className="text-[#D4AF37]">Losing Money?</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
            Let's discuss how BenefitsBridge Partners can protect your investment from Day One and put mistakenly paid dollars back into your budget.
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
