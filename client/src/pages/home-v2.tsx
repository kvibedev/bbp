import { useState, useEffect, useCallback, useRef } from "react";
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
  Compass,
  FileText,
  Pill,
  FlaskConical,
  PieChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { HeroReveal } from "@/components/hero-reveal";
import { Link } from "wouter";

import pharmaTech1 from "@assets/generated_images/pharma_tech_hero_bg_1.png";
import pharmaTech2 from "@assets/generated_images/pharma_tech_hero_bg_2.png";
import pharmaTech3 from "@assets/generated_images/pharma_tech_hero_bg_3.png";

const heroImages = [pharmaTech1, pharmaTech2, pharmaTech3];


function StewardshipReportSection() {
  return (
    <section className="py-24 bg-[#071328] border-y border-white/5" data-testid="stewardship-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            Enhanced Reporting Offerings
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
            Stewardship <span className="text-[#D4AF37]">Report</span>
          </h2>
          <p className="text-blue-100/70 text-xl max-w-4xl mx-auto leading-relaxed">
            Provides a comprehensive, year-over-year view of pharmacy plan performance, utilization, and cost trends. This offers executive-level insights to support strategic planning, budgeting, and vendor performance review.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-10">

            {/* LEFT: Executive Summary */}
            <div>
              <div className="bg-[#0B1F40] border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-[#D4AF37]" />
                  <h3 className="text-xl font-bold text-white">Executive Summary</h3>
                </div>

                {/* Plan Summary */}
                <div className="text-xs text-blue-100/40 uppercase tracking-wider mb-3">Plan Summary</div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Total Gross Cost", value: "$5,143,536.19" },
                    { label: "Average Members", value: "2,358" },
                    { label: "Plan Cost PMPM", value: "$148.32" },
                    { label: "Adjusted Scripts PMPM", value: "1.25" },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#0F264A] border border-white/5 rounded-xl p-4">
                      <div className="text-xs text-blue-100/50 uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-2xl font-bold text-[#D4AF37]">{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* Plan Trends */}
                <div className="text-xs text-blue-100/40 uppercase tracking-wider mb-3">Plan Trends</div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Plan Cost PMPM", value: "$148.32", change: "+5.12%", up: true },
                    { label: "Adjusted Scripts PMPM", value: "1.25", change: "-0.62%", up: false },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#0F264A] border border-white/5 rounded-xl p-4">
                      <div className="text-xs text-blue-100/50 mb-1">{item.label}</div>
                      <div className="flex items-end gap-1 mb-2 h-8">
                        {[40, 55, 45, 65, 50, 70, 60, 80, 75, 90, 85, 100].map((h, idx) => (
                          <div key={idx} style={{ height: `${h * 0.3}px` }} className="w-1.5 bg-[#4A90E2] rounded-t-sm" />
                        ))}
                      </div>
                      <div className={`text-sm font-bold ${item.up ? 'text-red-400' : 'text-green-400'}`}>
                        {item.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Total Plan Cost", value: "$4,225,185.57" },
                    { label: "Scripts", value: "24,273" },
                    { label: "Specialty % of Gross Cost", value: "60.22%", sub: "5.79%", highlight: true },
                    { label: "Generic Dispensing Rate", value: "89.57%", sub: "0.24%" },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#0F264A] border border-white/5 rounded-xl p-4">
                      <div className="text-xs text-blue-100/50 uppercase tracking-wider mb-1">{item.label}</div>
                      <div className={`text-xl font-bold ${'highlight' in item && item.highlight ? 'text-red-400' : 'text-white'}`}>{item.value}</div>
                      {'sub' in item && item.sub && <div className="text-xs text-green-400 mt-1">{item.sub}</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Performance Dashboards */}
            <div>
              <div className="bg-[#0B1F40] border border-white/10 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="w-6 h-6 text-[#4A90E2]" />
                  <h3 className="text-xl font-bold text-white">Performance Dashboards</h3>
                </div>
                <p className="text-sm text-blue-100/50 mb-6">Illustrates Financial and Utilization Trend by comparing prior performance vs. current</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Financial Trends */}
                  <div className="bg-[#0F264A] border border-white/5 rounded-xl p-4">
                    <div className="text-xs text-blue-100/40 font-semibold mb-3">Financial Trends</div>
                    <div className="space-y-1.5">
                      {[
                        { label: "Total Gross Cost", current: "$5,143,536.19", prior: "$4,230,052.13" },
                        { label: "Gross Cost PMPM", current: "$181.78", prior: "$142.05" },
                        { label: "Gross Cost per 30 Days Supply", current: "$149.58", prior: "$129.78" },
                        { label: "Plan Cost", current: "$4,225,185.57", prior: "$3,684,337.64" },
                        { label: "Plan Cost PMPM", current: "$148.32", prior: "$142.05" },
                        { label: "Plan Cost per 30 Days Supply", current: "$119.18", prior: "$119.07" },
                        { label: "Member Cost", current: "$918,020.63", prior: "$545,407.53" },
                        { label: "Member Cost PMPM", current: "$32.40", prior: "$32.98" },
                        { label: "Member Cost per 30 Days Supply", current: "$25.04", prior: "$19.31" },
                        { label: "Member Cost Share", current: "17.85%", prior: "12.91%" },
                      ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between text-[10px]">
                          <span className="text-blue-100/50 truncate mr-1 flex-1">{row.label}</span>
                          <span className="text-white font-medium w-24 text-right">{row.current}</span>
                          <span className="text-blue-100/30 w-24 text-right">{row.prior}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Performance & Utilization */}
                  <div className="space-y-4">
                    <div className="bg-[#0F264A] border border-white/5 rounded-xl p-4">
                      <div className="text-xs text-blue-100/40 font-semibold mb-3">Key Performance Metrics</div>
                      <div className="space-y-1.5">
                        {[
                          { label: "Average Members", current: "2,358", prior: "2,358" },
                          { label: "Unique Utilizing Members", current: "2,794", prior: "2,887" },
                          { label: "Scripts", current: "24,273", prior: "24,574" },
                          { label: "Adjusted Scripts PMPM", current: "1.25", prior: "1.28" },
                          { label: "Days Supply PMPM", current: "37.48", prior: "31.75" },
                          { label: "Generic Dispensing Rate", current: "89.57%", prior: "89.33%" },
                          { label: "Mail Utilization Rate", current: "7.06%", prior: "7.8%" },
                          { label: "Specialty % of Gross Cost", current: "60.22%", prior: "58.97%" },
                          { label: "Claimants with Plan Cost > $100,000", current: "5", prior: "5" },
                        ].map((row, i) => (
                          <div key={i} className="flex items-center justify-between text-[10px]">
                            <span className="text-blue-100/50 truncate mr-1 flex-1">{row.label}</span>
                            <span className="text-white font-medium w-16 text-right">{row.current}</span>
                            <span className="text-blue-100/30 w-16 text-right">{row.prior}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#0F264A] border border-white/5 rounded-xl p-4">
                      <div className="text-xs text-blue-100/40 font-semibold mb-3">Utilization Trends</div>
                      <div className="space-y-1.5">
                        {[
                          { label: "Average Members", current: "2,358", trend: "2,358" },
                          { label: "Unique Utilizing", current: "2,794", trend: "2,887" },
                          { label: "Scripts PMPM", current: "0.846", trend: "0.846" },
                          { label: "Days Supply PMPM", current: "21.08", trend: "21.08" },
                          { label: "Mail Utilization Rate", current: "7.06%", trend: "9.17%" },
                        ].map((row, i) => (
                          <div key={i} className="flex items-center justify-between text-[10px]">
                            <span className="text-blue-100/50 truncate mr-1 flex-1">{row.label}</span>
                            <span className="text-white font-medium w-16 text-right">{row.current}</span>
                            <span className="text-blue-100/30 w-16 text-right">{row.trend}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cost and Allocations - Charts */}
                <div className="text-xs text-blue-100/40 font-semibold mb-3">Cost and Allocations</div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Gross Cost PMPM" },
                    { label: "Member Cost PMPM" },
                    { label: "Plan Cost PMPM" },
                  ].map((chart, i) => (
                    <div key={i} className="bg-[#0F264A] border border-white/5 rounded-xl p-3">
                      <div className="text-[10px] text-blue-100/40 mb-2">{chart.label}</div>
                      <div className="flex items-end justify-center gap-2 h-14">
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-5 bg-[#4A90E2] rounded-t-sm" style={{ height: '32px' }}></div>
                          <span className="text-[8px] text-blue-100/30">Current</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-5 bg-[#D4AF37] rounded-t-sm" style={{ height: '28px' }}></div>
                          <span className="text-[8px] text-blue-100/30">Prior</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Donut Charts */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0F264A] border border-white/5 rounded-xl p-4 flex flex-col items-center">
                    <div className="text-xs text-blue-100/40 mb-3">Generic Dispensing Rate</div>
                    <div className="relative w-24 h-24">
                      <svg viewBox="0 0 36 36" className="w-24 h-24 transform -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#1a3b6e" strokeWidth="3" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#4A90E2" strokeWidth="3" strokeDasharray="87.96" strokeDashoffset={87.96 * (1 - 0.8957)} strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-white">89.6%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#0F264A] border border-white/5 rounded-xl p-4 flex flex-col items-center">
                    <div className="text-xs text-blue-100/40 mb-3">Share of Specialty</div>
                    <div className="relative w-24 h-24">
                      <svg viewBox="0 0 36 36" className="w-24 h-24 transform -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#1a3b6e" strokeWidth="3" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#D4AF37" strokeWidth="3" strokeDasharray="87.96" strokeDashoffset={87.96 * (1 - 0.6022)} strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-white">60.2%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Highlight Cards */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-[#0B1F40] border border-white/10 rounded-xl p-5 hover:border-[#D4AF37]/30 transition-colors" data-testid="stewardship-highlight-0">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-5 h-5 text-red-400" />
                <span className="text-xs text-blue-100/50 uppercase tracking-wider">Top Claimant</span>
              </div>
              <div className="text-lg font-bold text-red-400 mb-1">$94,333.03</div>
              <div className="text-sm text-white font-medium mb-1">Crysvita</div>
              <div className="text-xs text-blue-100/40">12.69% of Total Plan Cost</div>
            </div>
            <div className="bg-[#0B1F40] border border-white/10 rounded-xl p-5 hover:border-[#D4AF37]/30 transition-colors" data-testid="stewardship-highlight-1">
              <div className="flex items-center gap-2 mb-3">
                <FlaskConical className="w-5 h-5 text-[#4A90E2]" />
                <span className="text-xs text-blue-100/50 uppercase tracking-wider">Top Therapeutic Class</span>
              </div>
              <div className="text-lg font-bold text-[#4A90E2] mb-1">Endocrine And Metabolic Agents - Misc.</div>
              <div className="text-sm text-white font-medium mb-1">$604,190.46</div>
              <div className="text-xs text-blue-100/40">16.19% of Total Plan Cost</div>
            </div>
            <div className="bg-[#0B1F40] border border-white/10 rounded-xl p-5 hover:border-[#D4AF37]/30 transition-colors" data-testid="stewardship-highlight-2">
              <div className="flex items-center gap-2 mb-3">
                <Pill className="w-5 h-5 text-orange-400" />
                <span className="text-xs text-blue-100/50 uppercase tracking-wider">Drug with Largest Plan Cost Increase</span>
              </div>
              <div className="text-lg font-bold text-orange-400 mb-1">Mavenclad (10 Tabs)</div>
              <div className="text-sm text-white font-medium mb-1">$175,119.46</div>
              <div className="text-xs text-blue-100/40">$175,119.46</div>
            </div>
            <div className="bg-[#0B1F40] border border-white/10 rounded-xl p-5 hover:border-[#D4AF37]/30 transition-colors" data-testid="stewardship-highlight-3">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-xs text-blue-100/50 uppercase tracking-wider">Top Trend Driver</span>
              </div>
              <div className="text-lg font-bold text-[#D4AF37] mb-1">Psychotherapeutic And Neurological Agents - Misc.</div>
              <div className="text-sm text-white font-medium mb-1">$159,633.64</div>
              <div className="text-xs text-blue-100/40">6.77% Trend Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [revealComplete, setRevealComplete] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans min-h-screen text-white selection:bg-[#D4AF37] selection:text-[#0B1F40]" style={{
      background: 'linear-gradient(135deg, #0B1F40 0%, #132a52 25%, #0B1F40 50%, #0a1a35 75%, #0B1F40 100%)'
    }}>
      <HeroReveal onComplete={() => setRevealComplete(true)} />
      <Nav variant="transparent" revealComplete={revealComplete} />
      {/* Hero Section - Updated with Track 1 Messaging */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B1F40]"></div>
        
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none"
          >
            <img 
              src={heroImages[currentImageIndex]} 
              alt="" 
              className="w-full h-full object-cover blur-[1px]"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F40]/95 via-[#0B1F40]/75 to-[#0B1F40]/30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F40]/90 via-transparent to-[#0B1F40]/50 pointer-events-none"></div>
        
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#4A90E2] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#D4AF37] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

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
            
            <h1 className="md:text-7xl font-bold mb-8 tracking-tight font-serif text-[68px]">
              Stop Losing Millions on <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F2D57E] to-[#D4AF37]">
                Pharmacy Contract Mistakes
              </span>
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
              <span className="text-[#4A90E2]">Hidden PBM Costs</span> Drain Health Plan
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto leading-relaxed">
              Every day, you're losing money you don't even know about. Here's why.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-6 mb-12 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group relative"
                data-testid="problem-step-1"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
                <div className="relative h-full bg-[#0F264A] border border-red-500/20 rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 flex-shrink-0">
                      <span className="text-2xl font-bold text-red-400">1</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">Complex Legal Contracts</h3>
                      <p className="text-blue-100/70 leading-relaxed">
                        PBM contracts are legal contracts that requires deep knowledge of possible "gotchas".
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
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 flex-shrink-0">
                      <span className="text-2xl font-bold text-orange-400">2</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">Expensive Data Sources</h3>
                      <p className="text-blue-100/70 leading-relaxed">
                        Pharmacy comparisons require expensive 3rd party data sources.
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
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 flex-shrink-0">
                      <span className="text-2xl font-bold text-yellow-400">3</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">Time-Consuming Comparisons</h3>
                      <p className="text-blue-100/70 leading-relaxed">
                        Pharmacy comparisons are incredibly time consuming because they require merging bidders contract terms, 3rd party data sources and client pharmacy data to compare contracts using an apples-to-apples methodology.
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
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center border border-red-600/20 flex-shrink-0">
                      <span className="text-2xl font-bold text-red-400">4</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">Biased PBM Projections</h3>
                      <p className="text-blue-100/70 leading-relaxed">
                        Plan sponsors and consultants cannot rely on the PBM's own projections as they always use the most favorable assumptions for themselves. PBM comparisons require certain assumptions — so a single methodology needs to be used.
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
                <span className="block mt-2 text-red-300 font-bold">And they're always in favor of the carrier.</span>
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
              The BenefitsBridge Solutions
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              What We Do for <span className="text-[#D4AF37]">YOU</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                icon: Shield,
                title: "Best-Fit PBM Selection",
                description: "You can be confident that your decision on PBM is the best fit for you and your beneficiaries."
              },
              {
                icon: Check,
                title: "Continuous Claims Monitoring",
                description: "You can rest assured that there is constant monitoring of your claims to protect against abusive pricing practices."
              },
              {
                icon: TrendingUp,
                title: "Annual Market Checks",
                description: "You will never fall behind the market on pricing as we can efficiently perform annual market checks."
              },
              {
                icon: Compass,
                title: "Industry Thought Leadership",
                description: "You will have access to thought leadership at the forefront of the PBM industry."
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
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-blue-100/70 font-medium leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
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
      {/* Enhanced Reporting - Stewardship Report Section */}
      <section className="py-24 bg-[#071328] border-y border-white/5" data-testid="stewardship-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Enhanced Reporting Offerings
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              Stewardship <span className="text-[#D4AF37]">Report</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-4xl mx-auto leading-relaxed">
              Comprehensive year-over-year pharmacy plan performance analysis.
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="bg-[#0B1F40] border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-[#D4AF37]" />
                <h3 className="text-xl font-bold text-white">Executive Summary</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#0F264A] border border-white/5 rounded-xl p-4">
                  <div className="text-xs text-blue-100/50 uppercase tracking-wider mb-1">Total Gross Cost</div>
                  <div className="text-2xl font-bold text-[#D4AF37]">$5,143,536</div>
                </div>
                <div className="bg-[#0F264A] border border-white/5 rounded-xl p-4">
                  <div className="text-xs text-blue-100/50 uppercase tracking-wider mb-1">Average Members</div>
                  <div className="text-2xl font-bold text-[#D4AF37]">2,358</div>
                </div>
                <div className="bg-[#0F264A] border border-white/5 rounded-xl p-4">
                  <div className="text-xs text-blue-100/50 uppercase tracking-wider mb-1">Plan Cost PMPM</div>
                  <div className="text-2xl font-bold text-[#D4AF37]">$148.32</div>
                </div>
                <div className="bg-[#0F264A] border border-white/5 rounded-xl p-4">
                  <div className="text-xs text-blue-100/50 uppercase tracking-wider mb-1">Generic Dispensing Rate</div>
                  <div className="text-2xl font-bold text-[#D4AF37]">89.6%</div>
                </div>
              </div>
            </div>
            <div className="bg-[#0B1F40] border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-6 h-6 text-[#4A90E2]" />
                <h3 className="text-xl font-bold text-white">Performance Dashboards</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0F264A] border border-white/5 rounded-xl p-4 flex flex-col items-center">
                  <div className="text-xs text-blue-100/40 mb-3">Generic Dispensing Rate</div>
                  <div className="relative w-24 h-24">
                    <svg viewBox="0 0 36 36" className="w-24 h-24 transform -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#1a3b6e" strokeWidth="3" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#4A90E2" strokeWidth="3" strokeDasharray="87.96" strokeDashoffset="9.18" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">89.6%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0F264A] border border-white/5 rounded-xl p-4 flex flex-col items-center">
                  <div className="text-xs text-blue-100/40 mb-3">Share of Specialty</div>
                  <div className="relative w-24 h-24">
                    <svg viewBox="0 0 36 36" className="w-24 h-24 transform -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#1a3b6e" strokeWidth="3" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#D4AF37" strokeWidth="3" strokeDasharray="87.96" strokeDashoffset="34.97" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">60.2%</span>
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
