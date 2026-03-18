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


function useScrollVisibility(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold, rootMargin: '0px 0px -50px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

function AnimatedBar({ height, delay, color, isVisible }: { height: number; delay: number; color: string; isVisible: boolean }) {
  return (
    <div
      className="rounded-t-sm transition-all duration-700 ease-out"
      style={{
        width: '100%',
        height: isVisible ? `${height}px` : '0px',
        backgroundColor: color,
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    />
  );
}

function AnimatedDonut({ percent, color, label, value, isVisible }: { percent: number; color: string; label: string; value: string; isVisible: boolean }) {
  const circumference = 2 * Math.PI * 14;
  const offset = isVisible ? circumference * (1 - percent) : circumference;
  return (
    <div className="flex flex-col items-center">
      <div className="text-sm text-blue-100/50 mb-4 uppercase tracking-wider font-medium">{label}</div>
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 36 36" className="w-32 h-32 transform -rotate-90">
          <circle cx="18" cy="18" r="14" fill="none" stroke="#1a3b6e" strokeWidth="2.5" />
          <circle
            cx="18" cy="18" r="14" fill="none" stroke={color} strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1200 ease-out"
            style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white">{value}</span>
        </div>
      </div>
    </div>
  );
}

function StewardshipReportSection() {
  const header = useScrollVisibility(0.3);
  const slide1 = useScrollVisibility(0.15);
  const slide2 = useScrollVisibility(0.15);
  const slide3 = useScrollVisibility(0.15);

  const costData = [
    { label: "Gross Cost PMPM", current: 181.78, prior: 142.05 },
    { label: "Member Cost PMPM", current: 32.40, prior: 32.98 },
    { label: "Plan Cost PMPM", current: 148.32, prior: 142.05 },
  ];
  const maxCost = Math.max(...costData.flatMap(d => [d.current, d.prior]));

  return (
    <section className="py-20 bg-[#071328] border-y border-white/5" data-testid="stewardship-section">
      <div className="container mx-auto px-6">

        <div
          ref={header.ref}
          className="text-center mb-20 transition-all duration-700 ease-out"
          style={{
            opacity: header.isVisible ? 1 : 0,
            transform: header.isVisible ? 'translateY(0)' : 'translateY(40px)',
          }}
        >
          <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            Enhanced Reporting Offerings
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
            Stewardship <span className="text-[#D4AF37]">Report</span>
          </h2>
          <p className="text-blue-100/70 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            A comprehensive, year-over-year view of pharmacy plan performance, utilization, and cost trends — executive-level insights for strategic planning, budgeting, and vendor review.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">

          <div
            ref={slide1.ref}
            className="transition-all duration-800 ease-out"
            style={{
              opacity: slide1.isVisible ? 1 : 0,
              transform: slide1.isVisible ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.97)',
            }}
          >
            <div className="bg-[#0B1F40] border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Executive Summary</h3>
                  <p className="text-blue-100/50 text-sm">Plan performance at a glance</p>
                </div>
              </div>

              <div className="text-sm text-blue-100/40 uppercase tracking-wider mb-4 font-medium">Plan Summary</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Total Gross Cost", value: "$5,143,536", icon: DollarSign, color: "text-[#D4AF37]" },
                  { label: "Average Members", value: "2,358", icon: Users, color: "text-[#4A90E2]" },
                  { label: "Plan Cost PMPM", value: "$148.32", icon: BarChart3, color: "text-[#D4AF37]" },
                  { label: "Adjusted Scripts PMPM", value: "1.25", icon: Pill, color: "text-[#4A90E2]" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#0F264A] border border-white/5 rounded-2xl p-5 transition-all duration-500 ease-out"
                    style={{
                      opacity: slide1.isVisible ? 1 : 0,
                      transform: slide1.isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transitionDelay: slide1.isVisible ? `${300 + i * 100}ms` : '0ms',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <div className="text-xs text-blue-100/50 uppercase tracking-wider font-medium">{item.label}</div>
                    </div>
                    <div className={`text-3xl font-bold ${item.color}`}>{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="text-sm text-blue-100/40 uppercase tracking-wider mb-4 font-medium">Plan Trends</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Plan Cost PMPM", value: "$148.32", change: "+5.12%", up: true, bars: [40, 55, 45, 65, 50, 70, 60, 80, 75, 90, 85, 100] },
                  { label: "Adjusted Scripts PMPM", value: "1.25", change: "-0.62%", up: false, bars: [80, 75, 85, 70, 65, 60, 55, 50, 55, 45, 50, 40] },
                ].map((item, i) => (
                  <div key={i} className="bg-[#0F264A] border border-white/5 rounded-2xl p-5">
                    <div className="text-sm text-blue-100/60 mb-2 font-medium">{item.label}</div>
                    <div className="flex items-end gap-1 mb-3 h-12">
                      {item.bars.map((h, idx) => (
                        <AnimatedBar key={idx} height={h * 0.45} delay={500 + idx * 40} color="#4A90E2" isVisible={slide1.isVisible} />
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-lg">{item.value}</span>
                      <span className={`text-base font-bold ${item.up ? 'text-red-400' : 'text-green-400'}`}>
                        {item.up ? '▲' : '▼'} {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-sm text-blue-100/40 uppercase tracking-wider mb-4 font-medium">Key Metrics</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Total Plan Cost", value: "$4,225,186", highlight: false },
                  { label: "Total Scripts", value: "24,273", highlight: false },
                  { label: "Specialty % of Gross", value: "60.22%", sub: "▲ 5.79%", highlight: true },
                  { label: "Generic Dispensing Rate", value: "89.57%", sub: "▲ 0.24%", highlight: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`bg-[#0F264A] border rounded-2xl p-5 transition-all duration-500 ease-out ${item.highlight ? 'border-red-500/30 bg-red-900/10' : 'border-white/5'}`}
                    style={{
                      opacity: slide1.isVisible ? 1 : 0,
                      transform: slide1.isVisible ? 'scale(1)' : 'scale(0.9)',
                      transitionDelay: slide1.isVisible ? `${700 + i * 80}ms` : '0ms',
                    }}
                  >
                    <div className="text-xs text-blue-100/50 uppercase tracking-wider mb-2 font-medium">{item.label}</div>
                    <div className={`text-2xl font-bold ${item.highlight ? 'text-red-400' : 'text-white'}`}>{item.value}</div>
                    {'sub' in item && item.sub && (
                      <div className={`text-sm mt-1 font-semibold ${item.highlight ? 'text-red-400/70' : 'text-green-400'}`}>{item.sub}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={slide2.ref}
            className="transition-all duration-800 ease-out"
            style={{
              opacity: slide2.isVisible ? 1 : 0,
              transform: slide2.isVisible ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.97)',
            }}
          >
            <div className="bg-[#0B1F40] border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#4A90E2]/10 border border-[#4A90E2]/20 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-[#4A90E2]" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Performance Dashboards</h3>
                  <p className="text-blue-100/50 text-sm">Prior performance vs. current comparison</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#0F264A] border border-white/5 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-blue-100/50 font-semibold uppercase tracking-wider">Financial Trends</div>
                    <div className="flex gap-3 text-xs">
                      <span className="text-[#4A90E2]">● Current</span>
                      <span className="text-blue-100/30">● Prior</span>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: "Total Gross Cost", current: "$5,143,536", prior: "$4,230,052" },
                      { label: "Gross Cost PMPM", current: "$181.78", prior: "$142.05" },
                      { label: "Plan Cost", current: "$4,225,186", prior: "$3,684,338" },
                      { label: "Plan Cost PMPM", current: "$148.32", prior: "$142.05" },
                      { label: "Member Cost", current: "$918,021", prior: "$545,408" },
                      { label: "Member Cost PMPM", current: "$32.40", prior: "$32.98" },
                      { label: "Member Cost Share", current: "17.85%", prior: "12.91%" },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-sm transition-all duration-400 ease-out"
                        style={{
                          opacity: slide2.isVisible ? 1 : 0,
                          transform: slide2.isVisible ? 'translateX(0)' : 'translateX(-20px)',
                          transitionDelay: slide2.isVisible ? `${200 + i * 60}ms` : '0ms',
                        }}
                      >
                        <span className="text-blue-100/60 flex-1">{row.label}</span>
                        <span className="text-white font-semibold w-24 text-right">{row.current}</span>
                        <span className="text-blue-100/30 w-24 text-right">{row.prior}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-[#0F264A] border border-white/5 rounded-2xl p-6">
                    <div className="text-sm text-blue-100/50 font-semibold mb-4 uppercase tracking-wider">Key Performance</div>
                    <div className="space-y-2.5">
                      {[
                        { label: "Average Members", current: "2,358", prior: "2,358" },
                        { label: "Unique Utilizing", current: "2,794", prior: "2,887" },
                        { label: "Scripts", current: "24,273", prior: "24,574" },
                        { label: "GDR", current: "89.57%", prior: "89.33%" },
                        { label: "Mail Utilization", current: "7.06%", prior: "7.8%" },
                        { label: "Specialty %", current: "60.22%", prior: "58.97%" },
                      ].map((row, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-sm transition-all duration-400 ease-out"
                          style={{
                            opacity: slide2.isVisible ? 1 : 0,
                            transform: slide2.isVisible ? 'translateX(0)' : 'translateX(20px)',
                            transitionDelay: slide2.isVisible ? `${300 + i * 60}ms` : '0ms',
                          }}
                        >
                          <span className="text-blue-100/60 flex-1">{row.label}</span>
                          <span className="text-white font-semibold w-20 text-right">{row.current}</span>
                          <span className="text-blue-100/30 w-20 text-right">{row.prior}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#0F264A] border border-white/5 rounded-2xl p-6">
                    <div className="text-sm text-blue-100/50 font-semibold mb-4 uppercase tracking-wider">Utilization Trends</div>
                    <div className="space-y-2.5">
                      {[
                        { label: "Scripts PMPM", current: "0.846", prior: "0.846" },
                        { label: "Days Supply PMPM", current: "21.08", prior: "21.08" },
                        { label: "Mail Utilization", current: "7.06%", prior: "9.17%" },
                      ].map((row, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-sm transition-all duration-400 ease-out"
                          style={{
                            opacity: slide2.isVisible ? 1 : 0,
                            transform: slide2.isVisible ? 'translateX(0)' : 'translateX(20px)',
                            transitionDelay: slide2.isVisible ? `${500 + i * 60}ms` : '0ms',
                          }}
                        >
                          <span className="text-blue-100/60 flex-1">{row.label}</span>
                          <span className="text-white font-semibold w-20 text-right">{row.current}</span>
                          <span className="text-blue-100/30 w-20 text-right">{row.prior}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-sm text-blue-100/40 font-semibold mb-4 uppercase tracking-wider">Cost and Allocations</div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {costData.map((chart, i) => (
                  <div key={i} className="bg-[#0F264A] border border-white/5 rounded-2xl p-5">
                    <div className="text-sm text-blue-100/50 mb-3 font-medium">{chart.label}</div>
                    <div className="flex items-end justify-center gap-4 h-20">
                      <div className="flex flex-col items-center gap-1 w-8">
                        <AnimatedBar height={(chart.current / maxCost) * 60} delay={i * 200} color="#4A90E2" isVisible={slide2.isVisible} />
                        <span className="text-xs text-blue-100/40 font-medium">${chart.current}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 w-8">
                        <AnimatedBar height={(chart.prior / maxCost) * 60} delay={i * 200 + 100} color="#D4AF37" isVisible={slide2.isVisible} />
                        <span className="text-xs text-blue-100/40 font-medium">${chart.prior}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-8">
                <AnimatedDonut percent={0.8957} color="#4A90E2" label="Generic Dispensing Rate" value="89.6%" isVisible={slide2.isVisible} />
                <AnimatedDonut percent={0.6022} color="#D4AF37" label="Share of Specialty" value="60.2%" isVisible={slide2.isVisible} />
              </div>
            </div>
          </div>

          <div
            ref={slide3.ref}
            className="transition-all duration-800 ease-out"
            style={{
              opacity: slide3.isVisible ? 1 : 0,
              transform: slide3.isVisible ? 'translateY(0)' : 'translateY(50px)',
            }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Key <span className="text-[#D4AF37]">Insights</span>
              </h3>
              <p className="text-blue-100/50 text-sm mt-2">Highlights from plan analysis</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: DollarSign, color: "#ef4444", label: "Top Claimant", value: "$94,333.03", name: "Crysvita", detail: "12.69% of Total Plan Cost" },
                { icon: FlaskConical, color: "#4A90E2", label: "Top Therapeutic Class", value: "Endocrine & Metabolic Agents", name: "$604,190.46", detail: "16.19% of Total Plan Cost" },
                { icon: Pill, color: "#f97316", label: "Largest Cost Increase", value: "Mavenclad (10 Tabs)", name: "$175,119.46", detail: "New to plan" },
                { icon: TrendingUp, color: "#D4AF37", label: "Top Trend Driver", value: "Psychotherapeutic Agents", name: "$159,633.64", detail: "6.77% Trend Impact" },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-[#0B1F40] border border-white/10 rounded-2xl p-6 transition-all duration-600 ease-out hover:border-white/20 hover:scale-[1.02]"
                  style={{
                    opacity: slide3.isVisible ? 1 : 0,
                    transform: slide3.isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                    transitionDelay: slide3.isVisible ? `${i * 150}ms` : '0ms',
                  }}
                  data-testid={`stewardship-highlight-${i}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${card.color}15`, border: `1px solid ${card.color}30` }}>
                      <card.icon className="w-5 h-5" style={{ color: card.color }} />
                    </div>
                    <span className="text-xs text-blue-100/50 uppercase tracking-wider font-medium">{card.label}</span>
                  </div>
                  <div className="text-xl font-bold mb-2 leading-tight" style={{ color: card.color }}>{card.value}</div>
                  <div className="text-base text-white font-medium mb-1">{card.name}</div>
                  <div className="text-sm text-blue-100/40">{card.detail}</div>
                </div>
              ))}
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
      {/* Enhanced Reporting - Stewardship Report Section */}
      <StewardshipReportSection />
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
