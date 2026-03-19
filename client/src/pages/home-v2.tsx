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
  PieChart,
  Scale,
  GitCompare
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
            className="transition-all duration-1000 ease-out"
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const slide0Ref = useRef<HTMLDivElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(-1);
  const TOTAL_SLIDES = 3;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = -rect.top;
      const sectionScrollable = section.offsetHeight - window.innerHeight;

      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        setActiveSlide(-1);
        return;
      }

      if (sectionTop < -100) {
        setActiveSlide(-1);
        return;
      }

      const progress = Math.max(0, Math.min(1, sectionTop / sectionScrollable));
      const slideIndex = Math.min(TOTAL_SLIDES - 1, Math.floor(progress * TOTAL_SLIDES));
      setActiveSlide(slideIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    [slide0Ref, slide1Ref, slide2Ref].forEach((ref) => {
      if (ref.current) ref.current.scrollTop = 0;
    });
  }, [activeSlide]);

  const costData = [
    { label: "Gross Cost PMPM", current: 181.78, prior: 142.05 },
    { label: "Member Cost PMPM", current: 32.40, prior: 32.98 },
    { label: "Plan Cost PMPM", current: 148.32, prior: 142.05 },
  ];
  const maxCost = Math.max(...costData.flatMap(d => [d.current, d.prior]));

  const slideLabels = ["Executive Summary", "Performance Dashboards", "Key Insights"];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#071328] border-y border-white/5"
      style={{ height: `${TOTAL_SLIDES * 100}vh` }}
      data-testid="stewardship-section"
    >
      <div className="sticky top-0 h-screen flex flex-col">
        <div className="container mx-auto px-6 flex flex-col h-full py-8">

          <div
            className="text-center mb-6 shrink-0"
          >
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-4 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Enhanced Reporting Offerings
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-3 text-white">
              Stewardship <span className="text-[#D4AF37]">Report</span>
            </h2>
            <p className="text-blue-100/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive year-over-year pharmacy plan performance, utilization, and cost trends.
            </p>
          </div>

          <div className="flex-1 relative max-w-6xl mx-auto w-full min-h-0">

            <div
              className="absolute inset-0 transition-all duration-600 ease-out"
              style={{
                opacity: activeSlide === 0 ? 1 : 0,
                transform: activeSlide === 0 ? 'translateY(0) scale(1)' : activeSlide > 0 ? 'translateY(-40px) scale(0.96)' : 'translateY(40px) scale(0.96)',
                pointerEvents: activeSlide === 0 ? 'auto' : 'none',
              }}
            >
              <div ref={slide0Ref} className="bg-[#0B1F40] border border-white/10 rounded-3xl p-6 md:p-10 h-full overflow-y-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Executive Summary</h3>
                    <p className="text-blue-100/50 text-xs">Plan performance at a glance</p>
                  </div>
                </div>

                <div className="text-xs text-blue-100/40 uppercase tracking-wider mb-3 font-medium">Plan Summary</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {[
                    { label: "Total Gross Cost", value: "$5,143,536", icon: DollarSign, color: "text-[#D4AF37]" },
                    { label: "Average Members", value: "2,358", icon: Users, color: "text-[#4A90E2]" },
                    { label: "Plan Cost PMPM", value: "$148.32", icon: BarChart3, color: "text-[#D4AF37]" },
                    { label: "Adjusted Scripts PMPM", value: "1.25", icon: Pill, color: "text-[#4A90E2]" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-[#0F264A] border border-white/5 rounded-xl p-4 transition-all duration-500 ease-out"
                      style={{
                        opacity: activeSlide === 0 ? 1 : 0,
                        transform: activeSlide === 0 ? 'translateY(0)' : 'translateY(15px)',
                        transitionDelay: activeSlide === 0 ? `${200 + i * 80}ms` : '0ms',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                        <div className="text-[10px] text-blue-100/50 uppercase tracking-wider font-medium">{item.label}</div>
                      </div>
                      <div className={`text-2xl md:text-3xl font-bold ${item.color}`}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="text-xs text-blue-100/40 uppercase tracking-wider mb-3 font-medium">Plan Trends</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Plan Cost PMPM", value: "$148.32", change: "+5.12%", up: true, bars: [40, 55, 45, 65, 50, 70, 60, 80, 75, 90, 85, 100] },
                    { label: "Adjusted Scripts PMPM", value: "1.25", change: "-0.62%", up: false, bars: [80, 75, 85, 70, 65, 60, 55, 50, 55, 45, 50, 40] },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#0F264A] border border-white/5 rounded-xl p-4">
                      <div className="text-sm text-blue-100/60 mb-2 font-medium">{item.label}</div>
                      <div className="flex items-end gap-[3px] mb-2 h-10">
                        {item.bars.map((h, idx) => (
                          <AnimatedBar key={idx} height={h * 0.4} delay={400 + idx * 35} color="#4A90E2" isVisible={activeSlide === 0} />
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold text-base">{item.value}</span>
                        <span className={`text-sm font-bold ${item.up ? 'text-red-400' : 'text-green-400'}`}>
                          {item.up ? '▲' : '▼'} {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-xs text-blue-100/40 uppercase tracking-wider mb-3 font-medium">Key Metrics</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "Total Plan Cost", value: "$4,225,186", highlight: false },
                    { label: "Total Scripts", value: "24,273", highlight: false },
                    { label: "Specialty % of Gross", value: "60.22%", sub: "▲ 5.79%", highlight: true },
                    { label: "Generic Dispensing Rate", value: "89.57%", sub: "▲ 0.24%", highlight: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`bg-[#0F264A] border rounded-xl p-4 transition-all duration-500 ease-out ${item.highlight ? 'border-red-500/30 bg-red-900/10' : 'border-white/5'}`}
                      style={{
                        opacity: activeSlide === 0 ? 1 : 0,
                        transform: activeSlide === 0 ? 'scale(1)' : 'scale(0.92)',
                        transitionDelay: activeSlide === 0 ? `${600 + i * 60}ms` : '0ms',
                      }}
                    >
                      <div className="text-[10px] text-blue-100/50 uppercase tracking-wider mb-1 font-medium">{item.label}</div>
                      <div className={`text-xl font-bold ${item.highlight ? 'text-red-400' : 'text-white'}`}>{item.value}</div>
                      {'sub' in item && item.sub && (
                        <div className={`text-xs mt-1 font-semibold ${item.highlight ? 'text-red-400/70' : 'text-green-400'}`}>{item.sub}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 transition-all duration-600 ease-out"
              style={{
                opacity: activeSlide === 1 ? 1 : 0,
                transform: activeSlide === 1 ? 'translateY(0) scale(1)' : activeSlide > 1 ? 'translateY(-40px) scale(0.96)' : 'translateY(40px) scale(0.96)',
                pointerEvents: activeSlide === 1 ? 'auto' : 'none',
              }}
            >
              <div ref={slide1Ref} className="bg-[#0B1F40] border border-white/10 rounded-3xl p-6 md:p-10 h-full overflow-y-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#4A90E2]/10 border border-[#4A90E2]/20 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-[#4A90E2]" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Performance Dashboards</h3>
                    <p className="text-blue-100/50 text-xs">Prior performance vs. current comparison</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-6">
                  <div className="bg-[#0F264A] border border-white/5 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs text-blue-100/50 font-semibold uppercase tracking-wider">Financial Trends</div>
                      <div className="flex gap-2 text-[10px]">
                        <span className="text-[#4A90E2]">● Current</span>
                        <span className="text-blue-100/30">● Prior</span>
                      </div>
                    </div>
                    <div className="space-y-2">
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
                            opacity: activeSlide === 1 ? 1 : 0,
                            transform: activeSlide === 1 ? 'translateX(0)' : 'translateX(-15px)',
                            transitionDelay: activeSlide === 1 ? `${150 + i * 50}ms` : '0ms',
                          }}
                        >
                          <span className="text-blue-100/60 flex-1">{row.label}</span>
                          <span className="text-white font-semibold w-24 text-right">{row.current}</span>
                          <span className="text-blue-100/30 w-24 text-right">{row.prior}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-[#0F264A] border border-white/5 rounded-xl p-5">
                      <div className="text-xs text-blue-100/50 font-semibold mb-3 uppercase tracking-wider">Key Performance</div>
                      <div className="space-y-2">
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
                              opacity: activeSlide === 1 ? 1 : 0,
                              transform: activeSlide === 1 ? 'translateX(0)' : 'translateX(15px)',
                              transitionDelay: activeSlide === 1 ? `${200 + i * 50}ms` : '0ms',
                            }}
                          >
                            <span className="text-blue-100/60 flex-1">{row.label}</span>
                            <span className="text-white font-semibold w-20 text-right">{row.current}</span>
                            <span className="text-blue-100/30 w-20 text-right">{row.prior}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#0F264A] border border-white/5 rounded-xl p-5">
                      <div className="text-xs text-blue-100/50 font-semibold mb-3 uppercase tracking-wider">Utilization Trends</div>
                      <div className="space-y-2">
                        {[
                          { label: "Scripts PMPM", current: "0.846", prior: "0.846" },
                          { label: "Days Supply PMPM", current: "21.08", prior: "21.08" },
                          { label: "Mail Utilization", current: "7.06%", prior: "9.17%" },
                        ].map((row, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between text-sm transition-all duration-400 ease-out"
                            style={{
                              opacity: activeSlide === 1 ? 1 : 0,
                              transform: activeSlide === 1 ? 'translateX(0)' : 'translateX(15px)',
                              transitionDelay: activeSlide === 1 ? `${400 + i * 50}ms` : '0ms',
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

                <div className="text-xs text-blue-100/40 font-semibold mb-3 uppercase tracking-wider">Cost and Allocations</div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {costData.map((chart, i) => (
                    <div key={i} className="bg-[#0F264A] border border-white/5 rounded-xl p-4">
                      <div className="text-xs text-blue-100/50 mb-2 font-medium">{chart.label}</div>
                      <div className="flex items-end justify-center gap-3 h-16">
                        <div className="flex flex-col items-center gap-1 w-7">
                          <AnimatedBar height={(chart.current / maxCost) * 50} delay={i * 150} color="#4A90E2" isVisible={activeSlide === 1} />
                          <span className="text-[9px] text-blue-100/40 font-medium">${chart.current}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 w-7">
                          <AnimatedBar height={(chart.prior / maxCost) * 50} delay={i * 150 + 75} color="#D4AF37" isVisible={activeSlide === 1} />
                          <span className="text-[9px] text-blue-100/40 font-medium">${chart.prior}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <AnimatedDonut percent={0.8957} color="#4A90E2" label="Generic Dispensing Rate" value="89.6%" isVisible={activeSlide === 1} />
                  <AnimatedDonut percent={0.6022} color="#D4AF37" label="Share of Specialty" value="60.2%" isVisible={activeSlide === 1} />
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 transition-all duration-600 ease-out"
              style={{
                opacity: activeSlide === 2 ? 1 : 0,
                transform: activeSlide === 2 ? 'translateY(0) scale(1)' : activeSlide < 2 ? 'translateY(40px) scale(0.96)' : 'translateY(-40px) scale(0.96)',
                pointerEvents: activeSlide === 2 ? 'auto' : 'none',
              }}
            >
              <div ref={slide2Ref} className="bg-[#0B1F40] border border-white/10 rounded-3xl p-6 md:p-10 h-full overflow-y-auto flex flex-col justify-center">
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
                      className="bg-[#0F264A] border border-white/10 rounded-2xl p-6 transition-all duration-500 ease-out hover:border-white/20 hover:scale-[1.02]"
                      style={{
                        opacity: activeSlide === 2 ? 1 : 0,
                        transform: activeSlide === 2 ? 'translateY(0) scale(1)' : 'translateY(25px) scale(0.95)',
                        transitionDelay: activeSlide === 2 ? `${i * 120}ms` : '0ms',
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

          <div className="flex items-center justify-center gap-3 mt-4 shrink-0">
            {slideLabels.map((label, i) => (
              <button
                key={i}
                className="flex items-center gap-2 transition-all duration-300"
                style={{ opacity: activeSlide >= 0 ? 1 : 0 }}
                onClick={() => {
                  const section = sectionRef.current;
                  if (!section) return;
                  const sectionTop = section.offsetTop;
                  const sectionScrollable = section.offsetHeight - window.innerHeight;
                  const targetScroll = sectionTop + (i / TOTAL_SLIDES) * sectionScrollable + 10;
                  window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                }}
                data-testid={`stewardship-dot-${i}`}
              >
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: activeSlide === i ? '24px' : '8px',
                    height: '8px',
                    backgroundColor: activeSlide === i ? '#D4AF37' : 'rgba(255,255,255,0.2)',
                  }}
                />
                <span
                  className="text-xs font-medium transition-all duration-300 whitespace-nowrap"
                  style={{
                    color: activeSlide === i ? '#D4AF37' : 'rgba(255,255,255,0.3)',
                    maxWidth: activeSlide === i ? '200px' : '0px',
                    overflow: 'hidden',
                    opacity: activeSlide === i ? 1 : 0,
                  }}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReportingAnalyticsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slide0Ref = useRef<HTMLDivElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const slide3Ref = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(-1);
  const TOTAL_SLIDES = 4;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = -rect.top;
      const sectionScrollable = section.offsetHeight - window.innerHeight;

      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        setActiveSlide(-1);
        return;
      }

      if (sectionTop < -100) {
        setActiveSlide(-1);
        return;
      }

      const progress = Math.max(0, Math.min(1, sectionTop / sectionScrollable));
      const slideIndex = Math.min(TOTAL_SLIDES - 1, Math.floor(progress * TOTAL_SLIDES));
      setActiveSlide(slideIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    [slide0Ref, slide1Ref, slide2Ref, slide3Ref].forEach((ref) => {
      if (ref.current) ref.current.scrollTop = 0;
    });
  }, [activeSlide]);

  const topDrugs = [
    { rank: 1, name: "Crysvita", scripts: 24, prevScripts: 26, cost: 613426, prevCost: 658713, change: -45286, changePct: "-6.9%", share: "12.00%", up: false },
    { rank: 2, name: "Humira (2 Pen)", scripts: 84, prevScripts: 56, cost: 526430, prevCost: 319841, change: 206585, changePct: "+64.6%", share: "10.29%", up: true },
    { rank: 3, name: "Stelara", scripts: 15, prevScripts: 10, cost: 341463, prevCost: 231564, change: 109898, changePct: "+47.5%", share: "6.68%", up: true },
    { rank: 4, name: "Mavenclad (10 Tabs)", scripts: 2, prevScripts: 0, cost: 184344, prevCost: 0, change: 184344, changePct: "New", share: "3.60%", up: true },
    { rank: 5, name: "Ibrance", scripts: 13, prevScripts: 11, cost: 179757, prevCost: 143861, change: 35896, changePct: "+25.0%", share: "3.52%", up: true },
    { rank: 6, name: "Trulicity", scripts: 76, prevScripts: 70, cost: 149645, prevCost: 139694, change: 9951, changePct: "+7.1%", share: "2.93%", up: true },
    { rank: 7, name: "Taltz", scripts: 15, prevScripts: 7, cost: 130407, prevCost: 54213, change: 76195, changePct: "+140.5%", share: "2.55%", up: true },
    { rank: 8, name: "Cosentyx Sensoready (300 MG)", scripts: 20, prevScripts: 13, cost: 125767, prevCost: 94897, change: 30870, changePct: "+32.5%", share: "2.46%", up: true },
    { rank: 9, name: "Xtandi", scripts: 9, prevScripts: 14, cost: 110999, prevCost: 164496, change: -53498, changePct: "-32.5%", share: "2.17%", up: false },
    { rank: 10, name: "Jardiance", scripts: 73, prevScripts: 48, cost: 104814, prevCost: 66171, change: 38643, changePct: "+58.4%", share: "2.05%", up: true },
  ];

  const maxDrugCost = Math.max(...topDrugs.map(d => d.cost));

  const claimants = [
    { rank: 1, id: "ABCD1234", drug: "Crysvita", current: 546336, previous: 655924, change: -109588, changePct: "-16.7%", share: "12.88%", up: false },
    { rank: 2, id: "ABCD1235", drug: "Mavenclad (10 Tabs)", current: 182351, previous: 0, change: 182351, changePct: "New", share: "4.30%", up: true },
    { rank: 3, id: "ABCD1236", drug: "Ibrance", current: 140157, previous: 140843, change: -686, changePct: "-0.5%", share: "3.30%", up: false },
    { rank: 4, id: "ABCD1237", drug: "Stelara", current: 115150, previous: 38432, change: 76718, changePct: "+199.6%", share: "2.71%", up: true },
    { rank: 5, id: "ABCD1238", drug: "Xtandi", current: 102145, previous: 149242, change: -47097, changePct: "-31.6%", share: "2.41%", up: false },
    { rank: 6, id: "ABCD1239", drug: "Stelara", current: 97399, previous: 87288, change: 10111, changePct: "+11.6%", share: "2.30%", up: true },
    { rank: 7, id: "ABCD1240", drug: "Stelara", current: 96768, previous: 101834, change: -5067, changePct: "-5.0%", share: "2.28%", up: false },
    { rank: 8, id: "ABCD1241", drug: "Humira (2 Pen)", current: 86701, previous: 15645, change: 71056, changePct: "+454.2%", share: "2.04%", up: true },
    { rank: 9, id: "ABCD1242", drug: "Crysvita", current: 74915, previous: 22585, change: 52330, changePct: "+231.7%", share: "1.77%", up: true },
    { rank: 10, id: "ABCD1243", drug: "Ocrevus", current: 72909, previous: 0, change: 72909, changePct: "New", share: "1.72%", up: true },
  ];

  const maxClaimantCost = Math.max(...claimants.map(c => c.current));

  const brandDrugs = [
    { rank: 1, name: "Vyvanse", cost: 56805, scripts: 161 },
    { rank: 2, name: "Aubagio", cost: 56083, scripts: 7 },
    { rank: 3, name: "Symbicort", cost: 21491, scripts: 26 },
    { rank: 4, name: "Advair Diskus", cost: 17246, scripts: 18 },
    { rank: 5, name: "Latuda", cost: 12434, scripts: 9 },
    { rank: 6, name: "Flovent HFA", cost: 7880, scripts: 31 },
    { rank: 7, name: "Breo Ellipta", cost: 7193, scripts: 9 },
    { rank: 8, name: "Keppra", cost: 5769, scripts: 5 },
    { rank: 9, name: "Synthroid", cost: 4907, scripts: 50 },
    { rank: 10, name: "Advair HFA", cost: 3334, scripts: 5 },
  ];

  const maxBrandCost = Math.max(...brandDrugs.map(d => d.cost));
  const totalBrandSpend = brandDrugs.reduce((sum, d) => sum + d.cost, 0);

  const nadacDrugs = [
    { rank: 1, name: "Rinvoq", scripts: 13, ingredientCost: 73546, nadac: 71602, nadacDiff: 1944, markupPct: 2.7, avgDiff: 150 },
    { rank: 2, name: "Posaconazole", scripts: 1, ingredientCost: 2174, nadac: 403, nadacDiff: 1770, markupPct: 438.8, avgDiff: 1770 },
    { rank: 3, name: "Sildenafil Citrate", scripts: 1, ingredientCost: 868, nadac: 6, nadacDiff: 862, markupPct: 14464.1, avgDiff: 862 },
    { rank: 4, name: "Mycophenolate Mofetil", scripts: 4, ingredientCost: 1039, nadac: 499, nadacDiff: 539, markupPct: 108.0, avgDiff: 135 },
    { rank: 5, name: "Hydroxychloroquine Sulfate", scripts: 4, ingredientCost: 559, nadac: 117, nadacDiff: 442, markupPct: 377.0, avgDiff: 111 },
    { rank: 6, name: "Dupixent", scripts: 1, ingredientCost: 6930, nadac: 6549, nadacDiff: 381, markupPct: 5.8, avgDiff: 381 },
    { rank: 7, name: "Omeprazole", scripts: 5, ingredientCost: 354, nadac: 23, nadacDiff: 331, markupPct: 1422.5, avgDiff: 66 },
    { rank: 8, name: "Valsartan", scripts: 4, ingredientCost: 418, nadac: 87, nadacDiff: 331, markupPct: 382.1, avgDiff: 83 },
    { rank: 9, name: "Rosuvastatin Calcium", scripts: 11, ingredientCost: 338, nadac: 62, nadacDiff: 276, markupPct: 446.3, avgDiff: 25 },
    { rank: 10, name: "Atorvastatin Calcium", scripts: 18, ingredientCost: 321, nadac: 73, nadacDiff: 248, markupPct: 341.8, avgDiff: 14 },
  ];

  const totalNadacOverpay = nadacDrugs.reduce((sum, d) => sum + d.nadacDiff, 0);
  const highestMarkup = Math.max(...nadacDrugs.map(d => d.markupPct));
  const maxNadacDiff = Math.max(...nadacDrugs.map(d => d.nadacDiff));

  const getMarkupColor = (pct: number) => {
    if (pct >= 1000) return 'text-red-400';
    if (pct >= 300) return 'text-orange-400';
    if (pct >= 100) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getMarkupBarColor = (pct: number) => {
    if (pct >= 1000) return '#ef4444';
    if (pct >= 300) return '#f97316';
    if (pct >= 100) return '#eab308';
    return '#22c55e';
  };

  const slideLabels = ["Top Drugs Report", "Large Claimant Report", "Multi-Source Brand", "NADAC Differential"];

  const formatCurrency = (n: number) => `$${n.toLocaleString()}`;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#071328] border-y border-white/5"
      style={{ height: `${TOTAL_SLIDES * 100}vh` }}
      data-testid="reporting-analytics-section"
    >
      <div className="sticky top-0 h-screen flex flex-col">
        <div className="container mx-auto px-6 flex flex-col h-full py-8">

          <div className="text-center mb-6 shrink-0">
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-4 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Enhanced Reporting Offerings
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-3 text-white">
              Reporting <span className="text-[#D4AF37]">Analytics</span>
            </h2>
            <p className="text-blue-100/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Pinpoint high-cost medications and claimants driving plan spend — actionable intelligence for targeted intervention.
            </p>
          </div>

          <div className="flex-1 relative max-w-6xl mx-auto w-full min-h-0">

            <div
              className="absolute inset-0 transition-all duration-600 ease-out"
              style={{
                opacity: activeSlide === 0 ? 1 : 0,
                transform: activeSlide === 0 ? 'translateY(0) scale(1)' : activeSlide > 0 ? 'translateY(-40px) scale(0.96)' : 'translateY(40px) scale(0.96)',
                pointerEvents: activeSlide === 0 ? 'auto' : 'none',
              }}
            >
              <div ref={slide0Ref} className="bg-[#0B1F40] border border-white/10 rounded-3xl p-6 md:p-8 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                      <Pill className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white" data-testid="text-top-drugs-title">Top Drugs Report</h3>
                      <p className="text-blue-100/50 text-xs">Top 10 drugs by ingredient cost</p>
                    </div>
                  </div>
                  <div className="hidden md:block bg-[#0F264A] border border-[#D4AF37]/20 rounded-xl px-4 py-2.5">
                    <div className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Available Formats</div>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[10px] text-blue-100/50">
                      <span>By Ingredient Cost</span>
                      <span>By Change in Ingredient Cost</span>
                      <span>By Script Count</span>
                      <span>By Change in Script Count</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Top Drug Cost", value: "$613,426", sub: "Crysvita", color: "text-[#D4AF37]", tid: "top-drug-cost" },
                    { label: "Total Top 10 Cost", value: "$2.47M", sub: "48.25% of Plan", color: "text-[#4A90E2]", tid: "top-10-cost" },
                    { label: "Avg Cost Change", value: "+36.0%", sub: "8 of 10 increased", color: "text-red-400", tid: "avg-cost-change" },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="bg-[#0F264A] border border-white/5 rounded-xl p-3 transition-all duration-500 ease-out"
                      data-testid={`card-${card.tid}`}
                      style={{
                        opacity: activeSlide === 0 ? 1 : 0,
                        transform: activeSlide === 0 ? 'translateY(0)' : 'translateY(15px)',
                        transitionDelay: activeSlide === 0 ? `${150 + i * 80}ms` : '0ms',
                      }}
                    >
                      <div className="text-[10px] text-blue-100/50 uppercase tracking-wider font-medium mb-1">{card.label}</div>
                      <div className={`text-xl font-bold ${card.color}`}>{card.value}</div>
                      <div className="text-[11px] text-blue-100/40 mt-0.5">{card.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#0F264A] border border-white/5 rounded-xl overflow-hidden">
                  <div className="grid grid-cols-[1.5rem_1fr_1fr_5.5rem_3.5rem] gap-x-2 px-4 py-2 text-[10px] text-blue-100/40 uppercase tracking-wider font-semibold border-b border-white/5">
                    <span>#</span>
                    <span>Drug Name</span>
                    <span>Ingredient Cost</span>
                    <span className="text-right">Change</span>
                    <span className="text-right">Share</span>
                  </div>
                  {topDrugs.map((drug, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[1.5rem_1fr_1fr_5.5rem_3.5rem] gap-x-2 items-center px-4 py-1.5 text-sm border-b border-white/[0.03] transition-all duration-400 ease-out hover:bg-white/[0.02]"
                      style={{
                        opacity: activeSlide === 0 ? 1 : 0,
                        transform: activeSlide === 0 ? 'translateX(0)' : 'translateX(-20px)',
                        transitionDelay: activeSlide === 0 ? `${250 + i * 50}ms` : '0ms',
                      }}
                      data-testid={`top-drug-row-${i}`}
                    >
                      <span className="text-blue-100/30 font-mono text-xs">{drug.rank}</span>
                      <div>
                        <span className="text-white font-medium truncate text-[13px] block">{drug.name}</span>
                        <span className="text-blue-100/40 text-[10px]">{drug.scripts} scripts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-3.5 bg-[#0B1F40] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-700 ease-out"
                            style={{
                              width: activeSlide === 0 ? `${(drug.cost / maxDrugCost) * 100}%` : '0%',
                              backgroundColor: drug.up ? '#4A90E2' : '#D4AF37',
                              transitionDelay: activeSlide === 0 ? `${350 + i * 50}ms` : '0ms',
                            }}
                          />
                        </div>
                        <span className="text-white font-semibold text-xs w-14 text-right">{formatCurrency(drug.cost)}</span>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs font-semibold block ${drug.up ? 'text-red-400' : 'text-green-400'}`}>
                          {drug.changePct === "New" ? (
                            <span className="text-orange-400">New</span>
                          ) : (
                            <>{drug.up ? '▲' : '▼'} {drug.changePct}</>
                          )}
                        </span>
                        <span className={`text-[10px] ${drug.change >= 0 ? 'text-red-400/60' : 'text-green-400/60'}`}>
                          {drug.changePct === "New" ? `+${formatCurrency(drug.change)}` : `${drug.change >= 0 ? '+' : '-'}${formatCurrency(Math.abs(drug.change))}`}
                        </span>
                      </div>
                      <span className="text-blue-100/50 text-right text-xs">{drug.share}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 transition-all duration-600 ease-out"
              style={{
                opacity: activeSlide === 1 ? 1 : 0,
                transform: activeSlide === 1 ? 'translateY(0) scale(1)' : activeSlide < 1 ? 'translateY(40px) scale(0.96)' : 'translateY(-40px) scale(0.96)',
                pointerEvents: activeSlide === 1 ? 'auto' : 'none',
              }}
            >
              <div ref={slide1Ref} className="bg-[#0B1F40] border border-white/10 rounded-3xl p-6 md:p-8 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#4A90E2]/10 border border-[#4A90E2]/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#4A90E2]" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white" data-testid="text-large-claimant-title">Large Claimant Report</h3>
                      <p className="text-blue-100/50 text-xs">Top 10 claimants by plan cost</p>
                    </div>
                  </div>
                  <div className="hidden md:block bg-[#0F264A] border border-[#4A90E2]/20 rounded-xl px-4 py-2.5">
                    <div className="text-[10px] text-[#4A90E2] uppercase tracking-wider font-semibold mb-1">Available Formats</div>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[10px] text-blue-100/50">
                      <span>By Plan Cost</span>
                      <span>By Change in Plan Cost</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Top Claimant Cost", value: "$546,336", sub: "Crysvita — ABCD1234", color: "text-[#4A90E2]", tid: "top-claimant-cost" },
                    { label: "Total Top 10 Spend", value: "$1.52M", sub: "35.81% of Plan Cost", color: "text-[#D4AF37]", tid: "claimant-total-spend" },
                    { label: "Risk Concentration", value: "12.88%", sub: "#1 claimant share", color: "text-red-400", tid: "risk-concentration" },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="bg-[#0F264A] border border-white/5 rounded-xl p-3 transition-all duration-500 ease-out"
                      data-testid={`card-${card.tid}`}
                      style={{
                        opacity: activeSlide === 1 ? 1 : 0,
                        transform: activeSlide === 1 ? 'translateY(0)' : 'translateY(15px)',
                        transitionDelay: activeSlide === 1 ? `${150 + i * 80}ms` : '0ms',
                      }}
                    >
                      <div className="text-[10px] text-blue-100/50 uppercase tracking-wider font-medium mb-1">{card.label}</div>
                      <div className={`text-xl font-bold ${card.color}`}>{card.value}</div>
                      <div className="text-[11px] text-blue-100/40 mt-0.5">{card.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#0F264A] border border-white/5 rounded-xl p-4 mb-5">
                  <div className="text-[10px] text-blue-100/40 uppercase tracking-wider font-semibold mb-3">Cost Concentration — Top 3 Claimants</div>
                  <div className="flex items-center gap-4">
                    <div className="w-full h-5 bg-[#0B1F40] rounded-full overflow-hidden flex">
                      {claimants.slice(0, 3).map((c, i) => {
                        const totalTop10 = claimants.reduce((sum, cl) => sum + cl.current, 0);
                        const pct = (c.current / totalTop10) * 100;
                        const colors = ['#4A90E2', '#D4AF37', '#ef4444'];
                        return (
                          <div
                            key={i}
                            className="h-full transition-all duration-700 ease-out first:rounded-l-full last:rounded-r-full"
                            style={{
                              width: activeSlide === 1 ? `${pct}%` : '0%',
                              backgroundColor: colors[i],
                              transitionDelay: activeSlide === 1 ? `${400 + i * 150}ms` : '0ms',
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    {claimants.slice(0, 3).map((c, i) => {
                      const colors = ['#4A90E2', '#D4AF37', '#ef4444'];
                      return (
                        <div key={i} className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors[i] }} />
                          <span className="text-[10px] text-blue-100/50">{c.id} · {c.share}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-[#0F264A] border border-white/5 rounded-xl overflow-hidden">
                  <div className="grid grid-cols-[1.5rem_1fr_5rem_5rem_5.5rem_3.5rem] gap-x-2 px-4 py-2 text-[10px] text-blue-100/40 uppercase tracking-wider font-semibold border-b border-white/5">
                    <span>#</span>
                    <span>Member / Drug</span>
                    <span className="text-right">Current</span>
                    <span className="text-right">Previous</span>
                    <span className="text-right">Change</span>
                    <span className="text-right">Share</span>
                  </div>
                  {claimants.map((c, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[1.5rem_1fr_5rem_5rem_5.5rem_3.5rem] gap-x-2 items-center px-4 py-1.5 text-sm border-b border-white/[0.03] transition-all duration-400 ease-out hover:bg-white/[0.02]"
                      style={{
                        opacity: activeSlide === 1 ? 1 : 0,
                        transform: activeSlide === 1 ? 'translateX(0)' : 'translateX(20px)',
                        transitionDelay: activeSlide === 1 ? `${250 + i * 50}ms` : '0ms',
                      }}
                      data-testid={`claimant-row-${i}`}
                    >
                      <span className="text-blue-100/30 font-mono text-xs">{c.rank}</span>
                      <div>
                        <span className="text-[#4A90E2] font-mono text-[10px]">{c.id}</span>
                        <span className="text-white font-medium truncate text-[13px] block">{c.drug}</span>
                      </div>
                      <span className="text-white font-semibold text-xs text-right">{formatCurrency(c.current)}</span>
                      <span className="text-blue-100/30 text-xs text-right">{c.previous > 0 ? formatCurrency(c.previous) : '—'}</span>
                      <div className="text-right">
                        <span className={`text-xs font-semibold block ${c.up ? 'text-red-400' : 'text-green-400'}`}>
                          {c.changePct === "New" ? (
                            <span className="text-orange-400">New</span>
                          ) : (
                            <>{c.up ? '▲' : '▼'} {c.changePct}</>
                          )}
                        </span>
                        <span className={`text-[10px] ${c.change >= 0 ? 'text-red-400/60' : 'text-green-400/60'}`}>
                          {c.change >= 0 ? '+' : '-'}{formatCurrency(Math.abs(c.change))}
                        </span>
                      </div>
                      <span className="text-blue-100/50 text-right text-xs">{c.share}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 transition-all duration-600 ease-out"
              style={{
                opacity: activeSlide === 2 ? 1 : 0,
                transform: activeSlide === 2 ? 'translateY(0) scale(1)' : activeSlide < 2 ? 'translateY(40px) scale(0.96)' : 'translateY(-40px) scale(0.96)',
                pointerEvents: activeSlide === 2 ? 'auto' : 'none',
              }}
            >
              <div ref={slide2Ref} className="bg-[#0B1F40] border border-white/10 rounded-3xl p-6 md:p-8 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                      <GitCompare className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white" data-testid="text-multi-source-brand-title">Multi-Source Brand Report</h3>
                      <p className="text-blue-100/50 text-xs">Lists brand drugs with available generic equivalents — identifies cost-saving opportunities by switching to generics</p>
                    </div>
                  </div>
                  <div className="hidden md:block bg-[#0F264A] border border-green-500/20 rounded-xl px-4 py-2.5">
                    <div className="text-[10px] text-green-400 uppercase tracking-wider font-semibold mb-1">Available Formats</div>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[10px] text-blue-100/50">
                      <span>By Ingredient Cost</span>
                      <span>By Script Count</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Total Brand Spend", value: formatCurrency(totalBrandSpend), sub: "10 brand drugs identified", color: "text-green-400", tid: "total-brand-spend" },
                    { label: "Drugs with Generics", value: "10", sub: "All have generic alternatives", color: "text-[#D4AF37]", tid: "drugs-with-generics" },
                    { label: "Top Brand Cost", value: formatCurrency(brandDrugs[0].cost), sub: `${brandDrugs[0].name} — ${brandDrugs[0].scripts} scripts`, color: "text-[#4A90E2]", tid: "top-brand-cost" },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="bg-[#0F264A] border border-white/5 rounded-xl p-3 transition-all duration-500 ease-out"
                      data-testid={`card-${card.tid}`}
                      style={{
                        opacity: activeSlide === 2 ? 1 : 0,
                        transform: activeSlide === 2 ? 'translateY(0)' : 'translateY(15px)',
                        transitionDelay: activeSlide === 2 ? `${150 + i * 80}ms` : '0ms',
                      }}
                    >
                      <div className="text-[10px] text-blue-100/50 uppercase tracking-wider font-medium mb-1">{card.label}</div>
                      <div className={`text-xl font-bold ${card.color}`}>{card.value}</div>
                      <div className="text-[11px] text-blue-100/40 mt-0.5">{card.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#0F264A] border border-white/5 rounded-xl overflow-hidden">
                  <div className="grid grid-cols-[1.5rem_1fr_1fr_4rem] gap-x-2 px-4 py-2 text-[10px] text-blue-100/40 uppercase tracking-wider font-semibold border-b border-white/5">
                    <span>#</span>
                    <span>Drug Name</span>
                    <span>Ingredient Cost</span>
                    <span className="text-right">Scripts</span>
                  </div>
                  {brandDrugs.map((drug, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[1.5rem_1fr_1fr_4rem] gap-x-2 items-center px-4 py-1.5 text-sm border-b border-white/[0.03] transition-all duration-400 ease-out hover:bg-white/[0.02]"
                      style={{
                        opacity: activeSlide === 2 ? 1 : 0,
                        transform: activeSlide === 2 ? 'translateX(0)' : 'translateX(-20px)',
                        transitionDelay: activeSlide === 2 ? `${250 + i * 50}ms` : '0ms',
                      }}
                      data-testid={`brand-drug-row-${i}`}
                    >
                      <span className="text-blue-100/30 font-mono text-xs">{drug.rank}</span>
                      <span className="text-white font-medium truncate text-[13px]">{drug.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-3.5 bg-[#0B1F40] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-700 ease-out"
                            style={{
                              width: activeSlide === 2 ? `${(drug.cost / maxBrandCost) * 100}%` : '0%',
                              backgroundColor: '#22c55e',
                              transitionDelay: activeSlide === 2 ? `${350 + i * 50}ms` : '0ms',
                            }}
                          />
                        </div>
                        <span className="text-white font-semibold text-xs w-14 text-right">{formatCurrency(drug.cost)}</span>
                      </div>
                      <span className="text-blue-100/50 text-right text-xs font-mono">{drug.scripts}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 transition-all duration-600 ease-out"
              style={{
                opacity: activeSlide === 3 ? 1 : 0,
                transform: activeSlide === 3 ? 'translateY(0) scale(1)' : activeSlide < 3 ? 'translateY(40px) scale(0.96)' : 'translateY(-40px) scale(0.96)',
                pointerEvents: activeSlide === 3 ? 'auto' : 'none',
              }}
            >
              <div ref={slide3Ref} className="bg-[#0B1F40] border border-white/10 rounded-3xl p-6 md:p-8 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                      <Scale className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white" data-testid="text-nadac-differential-title">NADAC Differential Report</h3>
                      <p className="text-blue-100/50 text-xs">Compares actual drug costs to NADAC benchmarks — flags inflated pricing and evaluates PBM contract performance</p>
                    </div>
                  </div>
                  <div className="hidden md:block bg-[#0F264A] border border-orange-500/20 rounded-xl px-4 py-2.5">
                    <div className="text-[10px] text-orange-400 uppercase tracking-wider font-semibold mb-1">Available Formats</div>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[10px] text-blue-100/50">
                      <span>By NADAC Differential</span>
                      <span>By Ingredient Cost Markup</span>
                      <span>By Average NADAC Differential</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Total NADAC Overpay", value: formatCurrency(totalNadacOverpay), sub: "Above NADAC benchmark", color: "text-orange-400", tid: "total-nadac-overpay" },
                    { label: "Highest Markup", value: `${highestMarkup.toLocaleString()}%`, sub: "Sildenafil Citrate", color: "text-red-400", tid: "highest-markup" },
                    { label: "Drugs Flagged", value: "10", sub: "Priced above NADAC", color: "text-[#D4AF37]", tid: "drugs-flagged" },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="bg-[#0F264A] border border-white/5 rounded-xl p-3 transition-all duration-500 ease-out"
                      data-testid={`card-${card.tid}`}
                      style={{
                        opacity: activeSlide === 3 ? 1 : 0,
                        transform: activeSlide === 3 ? 'translateY(0)' : 'translateY(15px)',
                        transitionDelay: activeSlide === 3 ? `${150 + i * 80}ms` : '0ms',
                      }}
                    >
                      <div className="text-[10px] text-blue-100/50 uppercase tracking-wider font-medium mb-1">{card.label}</div>
                      <div className={`text-xl font-bold ${card.color}`}>{card.value}</div>
                      <div className="text-[11px] text-blue-100/40 mt-0.5">{card.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#0F264A] border border-white/5 rounded-xl overflow-hidden">
                  <div className="grid grid-cols-[1.5rem_1fr_2.5rem_4.5rem_4.5rem_4.5rem_4.5rem_4rem] gap-x-1 px-4 py-2 text-[10px] text-blue-100/40 uppercase tracking-wider font-semibold border-b border-white/5">
                    <span>#</span>
                    <span>Drug Name</span>
                    <span className="text-right">Rx</span>
                    <span className="text-right">Cost</span>
                    <span className="text-right">NADAC</span>
                    <span className="text-right">Diff $</span>
                    <span className="text-right">Markup</span>
                    <span className="text-right">Avg Diff</span>
                  </div>
                  {nadacDrugs.map((drug, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[1.5rem_1fr_2.5rem_4.5rem_4.5rem_4.5rem_4.5rem_4rem] gap-x-1 items-center px-4 py-1.5 text-sm border-b border-white/[0.03] transition-all duration-400 ease-out hover:bg-white/[0.02]"
                      style={{
                        opacity: activeSlide === 3 ? 1 : 0,
                        transform: activeSlide === 3 ? 'translateX(0)' : 'translateX(20px)',
                        transitionDelay: activeSlide === 3 ? `${250 + i * 50}ms` : '0ms',
                      }}
                      data-testid={`nadac-drug-row-${i}`}
                    >
                      <span className="text-blue-100/30 font-mono text-xs">{drug.rank}</span>
                      <div>
                        <span className="text-white font-medium truncate text-[13px] block">{drug.name}</span>
                        <div className="h-1.5 bg-[#0B1F40] rounded-full overflow-hidden mt-0.5 w-full max-w-[120px]">
                          <div
                            className="h-full rounded-full transition-all duration-700 ease-out"
                            style={{
                              width: activeSlide === 3 ? `${Math.min((drug.nadacDiff / maxNadacDiff) * 100, 100)}%` : '0%',
                              backgroundColor: getMarkupBarColor(drug.markupPct),
                              transitionDelay: activeSlide === 3 ? `${350 + i * 50}ms` : '0ms',
                            }}
                          />
                        </div>
                      </div>
                      <span className="text-blue-100/50 text-right text-xs font-mono">{drug.scripts}</span>
                      <span className="text-white font-semibold text-xs text-right">{formatCurrency(drug.ingredientCost)}</span>
                      <span className="text-blue-100/30 text-xs text-right">{formatCurrency(drug.nadac)}</span>
                      <span className="text-orange-400 font-semibold text-xs text-right">{formatCurrency(drug.nadacDiff)}</span>
                      <span className={`text-right text-xs font-semibold ${getMarkupColor(drug.markupPct)}`}>
                        {drug.markupPct.toLocaleString()}%
                      </span>
                      <span className="text-blue-100/50 text-right text-xs">{formatCurrency(drug.avgDiff)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-4 shrink-0">
            {slideLabels.map((label, i) => (
              <button
                key={i}
                className="flex items-center gap-2 transition-all duration-300"
                style={{ opacity: activeSlide >= 0 ? 1 : 0 }}
                onClick={() => {
                  const section = sectionRef.current;
                  if (!section) return;
                  const sectionTop = section.offsetTop;
                  const sectionScrollable = section.offsetHeight - window.innerHeight;
                  const targetScroll = sectionTop + (i / TOTAL_SLIDES) * sectionScrollable + 10;
                  window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                }}
                data-testid={`reporting-dot-${i}`}
              >
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: activeSlide === i ? '24px' : '8px',
                    height: '8px',
                    backgroundColor: activeSlide === i ? '#D4AF37' : 'rgba(255,255,255,0.2)',
                  }}
                />
                <span
                  className="text-xs font-medium transition-all duration-300 whitespace-nowrap"
                  style={{
                    color: activeSlide === i ? '#D4AF37' : 'rgba(255,255,255,0.3)',
                    maxWidth: activeSlide === i ? '200px' : '0px',
                    overflow: 'hidden',
                    opacity: activeSlide === i ? 1 : 0,
                  }}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EnhancedComplianceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slide0Ref = useRef<HTMLDivElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(-1);
  const TOTAL_SLIDES = 2;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = -rect.top;
      const sectionScrollable = section.offsetHeight - window.innerHeight;

      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        setActiveSlide(-1);
        return;
      }

      if (sectionTop < -100) {
        setActiveSlide(-1);
        return;
      }

      const progress = Math.max(0, Math.min(1, sectionTop / sectionScrollable));
      const slideIndex = Math.min(TOTAL_SLIDES - 1, Math.floor(progress * TOTAL_SLIDES));
      setActiveSlide(slideIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    [slide0Ref, slide1Ref].forEach((ref) => {
      if (ref.current) ref.current.scrollTop = 0;
    });
  }, [activeSlide]);

  const formatCurrency = (n: number) => `$${n.toLocaleString()}`;

  const financialRows = [
    { label: "Gross Drug Cost", incumbent: 5117483.85, testPBM: 5479630.43, testPBM2: 5345389.10, highlight: false },
    { label: "Less Member Cost", incumbent: 765000, testPBM: 765000, testPBM2: 765000, highlight: false },
    { label: "Employer Cost", incumbent: 4352483.85, testPBM: 4714630.43, testPBM2: 4580389.10, highlight: false },
    { label: "Rebates", incumbent: 1277400, testPBM: 1826300, testPBM2: 1446650, highlight: false },
    { label: "(-) Pharmacy Mgmt Fund", incumbent: 12750, testPBM: 8500, testPBM2: 12750, highlight: false },
    { label: "(+) Consulting Fees", incumbent: 24220, testPBM: 24200, testPBM2: 24200, highlight: false },
    { label: "(+) Technology Fees", incumbent: 14532, testPBM: 14532, testPBM2: 14532, highlight: false },
  ];

  const contractMeta = [
    { label: "Contract Type", values: ["Traditional", "Traditional", "Traditional"] },
    { label: "Formulary Name", values: ["Elite Formulary", "Closed Formulary", "Test"] },
    { label: "Formulary Type", values: ["Closed", "Closed", "Closed"] },
    { label: "Network Type", values: ["Broad", "Broad", "Broad"] },
    { label: "Specialty Network", values: ["Exclusive", "Exclusive", "Exclusive"] },
    { label: "Maintenance", values: ["Voluntary", "Voluntary", "Voluntary"] },
  ];

  const scores = [75, 97, 73];
  const netSpend = [3107086.45, 2918563.03, 3159721.48];
  const totalSavings = netSpend.map((v, i) => i === 0 ? 0 : netSpend[0] - v);
  const pctSavings = totalSavings.map((v, i) => i === 0 ? "—" : `${((v / netSpend[0]) * 100).toFixed(2)}%`);

  const discountRows = [
    { category: "Retail 30 Generic", awpTotal: 1629759, effDiscount: "89.01%", ingredientCost: 179134, guarantee: "82.00%", variancePct: "-7.01%", variance: -114222, isTotal: false },
    { category: "Retail 30 Brand", awpTotal: 488368, effDiscount: "19.50%", ingredientCost: 393114, guarantee: "18.00%", variancePct: "-1.50%", variance: -7348, isTotal: false },
    { category: "Retail 30 Total", awpTotal: 2118127, effDiscount: "", ingredientCost: 572249, guarantee: "", variancePct: "", variance: -121570, isTotal: true },
    { category: "Retail 90 Generic", awpTotal: 1989821, effDiscount: "88.74%", ingredientCost: 224010, guarantee: "84.00%", variancePct: "-4.74%", variance: -94362, isTotal: false },
    { category: "Retail 90 Brand", awpTotal: 923363, effDiscount: "26.87%", ingredientCost: 675271, guarantee: "20.00%", variancePct: "-6.87%", variance: -63419, isTotal: false },
    { category: "Retail 90 Total", awpTotal: 2913184, effDiscount: "", ingredientCost: 899281, guarantee: "", variancePct: "", variance: -157781, isTotal: true },
    { category: "Mail Total", awpTotal: 916754, effDiscount: "", ingredientCost: 374300, guarantee: "", variancePct: "", variance: -26823, isTotal: true },
    { category: "Specialty Generic", awpTotal: 113495, effDiscount: "47.84%", ingredientCost: 59194, guarantee: "20.00%", variancePct: "-27.84%", variance: -31602, isTotal: false },
    { category: "Specialty Brand", awpTotal: 1564599, effDiscount: "20.75%", ingredientCost: 1239910, guarantee: "20.00%", variancePct: "-0.75%", variance: -11769, isTotal: false },
    { category: "LDD Brand", awpTotal: 2201354, effDiscount: "17.54%", ingredientCost: 1815160, guarantee: "15.00%", variancePct: "-2.54%", variance: -55991, isTotal: false },
    { category: "Specialty Total", awpTotal: 3879448, effDiscount: "", ingredientCost: 3114264, guarantee: "", variancePct: "", variance: -99362, isTotal: true },
  ];

  const totalDiscountVariance = discountRows.filter(r => r.isTotal).reduce((sum, r) => sum + r.variance, 0);
  const rebateShortfall = -45730;
  const totalVariance = totalDiscountVariance + rebateShortfall;

  const slideLabels = ["Repricing Report", "Reconciliation Report"];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#071328] border-y border-white/5"
      style={{ height: `${TOTAL_SLIDES * 100}vh` }}
      data-testid="enhanced-compliance-section"
    >
      <div className="sticky top-0 h-screen flex flex-col">
        <div className="container mx-auto px-6 flex flex-col h-full py-8">

          <div className="text-center mb-6 shrink-0">
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-4 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Enhanced Reporting Offerings
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-3 text-white">
              Compliance & <span className="text-[#D4AF37]">Pricing Analysis</span>
            </h2>
            <p className="text-blue-100/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Compare PBM vendor pricing and validate contract guarantee compliance — ensuring transparency and optimal value.
            </p>
          </div>

          <div className="flex-1 relative max-w-6xl mx-auto w-full min-h-0">

            <div
              className="absolute inset-0 transition-all duration-600 ease-out"
              style={{
                opacity: activeSlide === 0 ? 1 : 0,
                transform: activeSlide === 0 ? 'translateY(0) scale(1)' : activeSlide > 0 ? 'translateY(-40px) scale(0.96)' : 'translateY(40px) scale(0.96)',
                pointerEvents: activeSlide === 0 ? 'auto' : 'none',
              }}
            >
              <div ref={slide0Ref} className="bg-[#0B1F40] border border-white/10 rounded-3xl p-6 md:p-8 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white" data-testid="text-repricing-report-title">Repricing Report</h3>
                      <p className="text-blue-100/50 text-xs">Models cost across multiple PBM vendors based on historical claims data — supports PBM selection and renewal decisions</p>
                    </div>
                  </div>
                  <div className="hidden md:block bg-[#0F264A] border border-orange-500/20 rounded-xl px-4 py-2.5">
                    <div className="text-[10px] text-orange-400 uppercase tracking-wider font-semibold mb-1">Available Formats</div>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[10px] text-blue-100/50">
                      <span>Financial Summary</span>
                      <span>Contract Comparison</span>
                      <span>Specialty & LDD List</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Best Net Spend", value: "$2,918,563", sub: "Test PBM", color: "text-green-400", tid: "best-net-spend" },
                    { label: "Max Savings", value: "$188,523", sub: "6.07% vs Incumbent", color: "text-[#D4AF37]", tid: "max-savings" },
                    { label: "PBMs Compared", value: "3", sub: "Incumbent + 2 alternatives", color: "text-[#4A90E2]", tid: "pbms-compared" },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="bg-[#0F264A] border border-white/5 rounded-xl p-3 transition-all duration-500 ease-out"
                      data-testid={`card-${card.tid}`}
                      style={{
                        opacity: activeSlide === 0 ? 1 : 0,
                        transform: activeSlide === 0 ? 'translateY(0)' : 'translateY(15px)',
                        transitionDelay: activeSlide === 0 ? `${150 + i * 80}ms` : '0ms',
                      }}
                    >
                      <div className="text-[10px] text-blue-100/50 uppercase tracking-wider font-medium mb-1">{card.label}</div>
                      <div className={`text-xl font-bold ${card.color}`}>{card.value}</div>
                      <div className="text-[11px] text-blue-100/40 mt-0.5">{card.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#0F264A] border border-white/5 rounded-xl overflow-hidden">
                  <div className="grid grid-cols-[1fr_5.5rem_5.5rem_5.5rem] gap-x-1 px-4 py-2 text-[10px] text-blue-100/40 uppercase tracking-wider font-semibold border-b border-white/5">
                    <span></span>
                    <span className="text-right text-orange-400">Incumbent</span>
                    <span className="text-right text-green-400">Test PBM</span>
                    <span className="text-right text-blue-300">Test PBM 2</span>
                  </div>

                  <div className="grid grid-cols-[1fr_5.5rem_5.5rem_5.5rem] gap-x-1 px-4 py-1.5 border-b border-white/5 items-center transition-all duration-400 ease-out"
                    style={{
                      opacity: activeSlide === 0 ? 1 : 0,
                      transform: activeSlide === 0 ? 'translateX(0)' : 'translateX(-20px)',
                      transitionDelay: activeSlide === 0 ? '200ms' : '0ms',
                    }}
                    data-testid="repricing-score-row"
                  >
                    <span className="text-[11px] text-blue-100/60 font-medium">Contract Score</span>
                    {scores.map((s, i) => (
                      <div key={i} className="flex items-center justify-end gap-1.5">
                        <div className="w-12 h-2 bg-[#0B1F40] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-700 ease-out"
                            style={{
                              width: activeSlide === 0 ? `${s}%` : '0%',
                              backgroundColor: s >= 90 ? '#22c55e' : s >= 70 ? '#eab308' : '#ef4444',
                              transitionDelay: activeSlide === 0 ? `${300 + i * 100}ms` : '0ms',
                            }}
                          />
                        </div>
                        <span className={`text-xs font-bold ${s >= 90 ? 'text-green-400' : s >= 70 ? 'text-yellow-400' : 'text-red-400'}`}>{s}%</span>
                      </div>
                    ))}
                  </div>

                  {contractMeta.map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[1fr_5.5rem_5.5rem_5.5rem] gap-x-1 px-4 py-1 border-b border-white/[0.03] transition-all duration-400 ease-out"
                      style={{
                        opacity: activeSlide === 0 ? 1 : 0,
                        transform: activeSlide === 0 ? 'translateX(0)' : 'translateX(-20px)',
                        transitionDelay: activeSlide === 0 ? `${250 + i * 30}ms` : '0ms',
                      }}
                    >
                      <span className="text-[10px] text-blue-100/40">{row.label}</span>
                      {row.values.map((v, j) => (
                        <span key={j} className="text-[10px] text-blue-100/50 text-right">{v}</span>
                      ))}
                    </div>
                  ))}

                  <div className="border-t border-white/10 mt-1" />

                  {financialRows.map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[1fr_5.5rem_5.5rem_5.5rem] gap-x-1 px-4 py-1 border-b border-white/[0.03] transition-all duration-400 ease-out hover:bg-white/[0.02]"
                      style={{
                        opacity: activeSlide === 0 ? 1 : 0,
                        transform: activeSlide === 0 ? 'translateX(0)' : 'translateX(-20px)',
                        transitionDelay: activeSlide === 0 ? `${350 + i * 40}ms` : '0ms',
                      }}
                      data-testid={`repricing-row-${i}`}
                    >
                      <span className="text-[11px] text-blue-100/60">{row.label}</span>
                      <span className="text-[11px] text-white text-right font-mono">{formatCurrency(Math.round(row.incumbent))}</span>
                      <span className="text-[11px] text-white text-right font-mono">{formatCurrency(Math.round(row.testPBM))}</span>
                      <span className="text-[11px] text-white text-right font-mono">{formatCurrency(Math.round(row.testPBM2))}</span>
                    </div>
                  ))}

                  <div className="border-t border-[#D4AF37]/30 mt-1" />

                  <div className="grid grid-cols-[1fr_5.5rem_5.5rem_5.5rem] gap-x-1 px-4 py-1.5 bg-[#0B1F40]/50 transition-all duration-400 ease-out"
                    style={{
                      opacity: activeSlide === 0 ? 1 : 0,
                      transitionDelay: activeSlide === 0 ? '650ms' : '0ms',
                    }}
                    data-testid="repricing-net-spend-row"
                  >
                    <span className="text-[11px] text-[#D4AF37] font-bold">Total Net Spend</span>
                    {netSpend.map((v, i) => (
                      <span key={i} className="text-[11px] text-[#D4AF37] font-bold text-right font-mono">{formatCurrency(Math.round(v))}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-[1fr_5.5rem_5.5rem_5.5rem] gap-x-1 px-4 py-1.5 transition-all duration-400 ease-out"
                    style={{
                      opacity: activeSlide === 0 ? 1 : 0,
                      transitionDelay: activeSlide === 0 ? '700ms' : '0ms',
                    }}
                    data-testid="repricing-savings-row"
                  >
                    <span className="text-[11px] text-blue-100/60 font-medium">Total Savings</span>
                    <span className="text-[11px] text-blue-100/30 text-right">—</span>
                    <span className="text-[11px] text-green-400 font-bold text-right font-mono">{formatCurrency(Math.round(totalSavings[1]))}</span>
                    <span className="text-[11px] text-red-400 font-bold text-right font-mono">({formatCurrency(Math.abs(Math.round(totalSavings[2])))})</span>
                  </div>
                  <div className="grid grid-cols-[1fr_5.5rem_5.5rem_5.5rem] gap-x-1 px-4 py-1.5 transition-all duration-400 ease-out"
                    style={{
                      opacity: activeSlide === 0 ? 1 : 0,
                      transitionDelay: activeSlide === 0 ? '750ms' : '0ms',
                    }}
                    data-testid="repricing-pct-savings-row"
                  >
                    <span className="text-[11px] text-blue-100/60 font-medium">% Savings</span>
                    {pctSavings.map((v, i) => (
                      <span key={i} className={`text-[11px] text-right font-bold ${i === 1 ? 'text-green-400' : i === 2 ? 'text-red-400' : 'text-blue-100/30'}`}>{v}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 transition-all duration-600 ease-out"
              style={{
                opacity: activeSlide === 1 ? 1 : 0,
                transform: activeSlide === 1 ? 'translateY(0) scale(1)' : activeSlide < 1 ? 'translateY(40px) scale(0.96)' : 'translateY(-40px) scale(0.96)',
                pointerEvents: activeSlide === 1 ? 'auto' : 'none',
              }}
            >
              <div ref={slide1Ref} className="bg-[#0B1F40] border border-white/10 rounded-3xl p-6 md:p-8 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#4A90E2]/10 border border-[#4A90E2]/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-[#4A90E2]" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white" data-testid="text-reconciliation-report-title">Reconciliation Report</h3>
                      <p className="text-blue-100/50 text-xs">Compares actual performance against contract guarantees on discounts, dispensing fees, and rebates — validates PBM compliance</p>
                    </div>
                  </div>
                  <div className="hidden md:block bg-[#0F264A] border border-[#4A90E2]/20 rounded-xl px-4 py-2.5">
                    <div className="text-[10px] text-[#4A90E2] uppercase tracking-wider font-semibold mb-1">Available Formats</div>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[10px] text-blue-100/50">
                      <span>Performance Summary</span>
                      <span>Dispensing Fees</span>
                      <span>Rebates Analysis</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Total Discount Variance", value: `-${formatCurrency(Math.abs(totalDiscountVariance))}`, sub: "Overperformance vs guarantee", color: "text-green-400", tid: "total-discount-variance" },
                    { label: "Rebate Shortfall", value: `-${formatCurrency(Math.abs(rebateShortfall))}`, sub: "Below guaranteed rebates", color: "text-red-400", tid: "rebate-shortfall" },
                    { label: "Total Variance", value: `-${formatCurrency(Math.abs(totalVariance))}`, sub: "Net contract impact", color: "text-[#D4AF37]", tid: "total-variance" },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="bg-[#0F264A] border border-white/5 rounded-xl p-3 transition-all duration-500 ease-out"
                      data-testid={`card-${card.tid}`}
                      style={{
                        opacity: activeSlide === 1 ? 1 : 0,
                        transform: activeSlide === 1 ? 'translateY(0)' : 'translateY(15px)',
                        transitionDelay: activeSlide === 1 ? `${150 + i * 80}ms` : '0ms',
                      }}
                    >
                      <div className="text-[10px] text-blue-100/50 uppercase tracking-wider font-medium mb-1">{card.label}</div>
                      <div className={`text-xl font-bold ${card.color}`}>{card.value}</div>
                      <div className="text-[11px] text-blue-100/40 mt-0.5">{card.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="text-[10px] text-blue-100/40 uppercase tracking-wider font-semibold mb-2 px-1">Discount Performance</div>
                <div className="bg-[#0F264A] border border-white/5 rounded-xl overflow-hidden mb-4">
                  <div className="grid grid-cols-[1fr_5rem_4rem_5rem_4rem_4rem_5rem] gap-x-1 px-3 py-2 text-[9px] text-blue-100/40 uppercase tracking-wider font-semibold border-b border-white/5">
                    <span>Category</span>
                    <span className="text-right">AWP Total</span>
                    <span className="text-right">Eff. Disc.</span>
                    <span className="text-right">Ingr. Cost</span>
                    <span className="text-right">Guarantee</span>
                    <span className="text-right">Var. %</span>
                    <span className="text-right">Variance $</span>
                  </div>
                  {discountRows.map((row, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-[1fr_5rem_4rem_5rem_4rem_4rem_5rem] gap-x-1 px-3 py-1 border-b border-white/[0.03] transition-all duration-400 ease-out hover:bg-white/[0.02] ${row.isTotal ? 'bg-[#0B1F40]/50' : ''}`}
                      style={{
                        opacity: activeSlide === 1 ? 1 : 0,
                        transform: activeSlide === 1 ? 'translateX(0)' : 'translateX(20px)',
                        transitionDelay: activeSlide === 1 ? `${250 + i * 40}ms` : '0ms',
                      }}
                      data-testid={`discount-row-${i}`}
                    >
                      <span className={`text-[10px] ${row.isTotal ? 'text-white font-bold' : 'text-blue-100/60'}`}>{row.category}</span>
                      <span className="text-[10px] text-white text-right font-mono">{formatCurrency(row.awpTotal)}</span>
                      <span className="text-[10px] text-blue-100/50 text-right">{row.effDiscount || '—'}</span>
                      <span className="text-[10px] text-white text-right font-mono">{formatCurrency(row.ingredientCost)}</span>
                      <span className="text-[10px] text-blue-100/50 text-right">{row.guarantee || '—'}</span>
                      <span className={`text-[10px] text-right font-semibold ${row.variancePct ? 'text-green-400' : 'text-blue-100/30'}`}>{row.variancePct || '—'}</span>
                      <span className={`text-[10px] text-right font-semibold ${row.variance < 0 ? 'text-green-400' : 'text-red-400'}`}>
                        ({formatCurrency(Math.abs(row.variance))})
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-[10px] text-blue-100/40 uppercase tracking-wider font-semibold mb-2 px-1">Rebate Performance</div>
                <div className="bg-[#0F264A] border border-white/5 rounded-xl overflow-hidden">
                  <div className="grid grid-cols-[1fr_5rem_6rem_6rem_5rem_5rem] gap-x-1 px-3 py-2 text-[9px] text-blue-100/40 uppercase tracking-wider font-semibold border-b border-white/5">
                    <span></span>
                    <span className="text-right">Claims</span>
                    <span className="text-right">Guarantee</span>
                    <span className="text-right">Paid Rebates</span>
                    <span className="text-right">Var. %</span>
                    <span className="text-right">Variance $</span>
                  </div>
                  <div
                    className="grid grid-cols-[1fr_5rem_6rem_6rem_5rem_5rem] gap-x-1 px-3 py-1.5 bg-[#0B1F40]/50 transition-all duration-400 ease-out"
                    style={{
                      opacity: activeSlide === 1 ? 1 : 0,
                      transform: activeSlide === 1 ? 'translateX(0)' : 'translateX(20px)',
                      transitionDelay: activeSlide === 1 ? '700ms' : '0ms',
                    }}
                    data-testid="rebate-total-row"
                  >
                    <span className="text-[10px] text-white font-bold">Total</span>
                    <span className="text-[10px] text-white text-right font-mono">23,101</span>
                    <span className="text-[10px] text-white text-right font-mono">{formatCurrency(1045730)}</span>
                    <span className="text-[10px] text-white text-right font-mono">{formatCurrency(1000000)}</span>
                    <span className="text-[10px] text-red-400 text-right font-semibold">-4.37%</span>
                    <span className="text-[10px] text-red-400 text-right font-semibold">({formatCurrency(Math.abs(rebateShortfall))})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-4 shrink-0">
            {slideLabels.map((label, i) => (
              <button
                key={i}
                className="flex items-center gap-2 transition-all duration-300"
                style={{ opacity: activeSlide >= 0 ? 1 : 0 }}
                onClick={() => {
                  const section = sectionRef.current;
                  if (!section) return;
                  const sectionTop = section.offsetTop;
                  const sectionScrollable = section.offsetHeight - window.innerHeight;
                  const targetScroll = sectionTop + (i / TOTAL_SLIDES) * sectionScrollable + 10;
                  window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                }}
                data-testid={`compliance-dot-${i}`}
              >
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: activeSlide === i ? '24px' : '8px',
                    height: '8px',
                    backgroundColor: activeSlide === i ? '#D4AF37' : 'rgba(255,255,255,0.2)',
                  }}
                />
                <span
                  className="text-xs font-medium transition-all duration-300 whitespace-nowrap"
                  style={{
                    color: activeSlide === i ? '#D4AF37' : 'rgba(255,255,255,0.3)',
                    maxWidth: activeSlide === i ? '200px' : '0px',
                    overflow: 'hidden',
                    opacity: activeSlide === i ? 1 : 0,
                  }}
                >
                  {label}
                </span>
              </button>
            ))}
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
      {/* Enhanced Reporting - Analytics Section */}
      <ReportingAnalyticsSection />
      {/* Enhanced Reporting - Compliance & Pricing Section */}
      <EnhancedComplianceSection />
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
