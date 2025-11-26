import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  AlertCircle, 
  CheckCircle, 
  Database, 
  TrendingUp, 
  Users, 
  Pill,
  BarChart3,
  FileText,
  Shield,
  Zap,
  ArrowRight,
  Target,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Solutions() {
  return (
    <div className="font-sans bg-[#0B1F40] min-h-screen text-white selection:bg-[#D4AF37] selection:text-[#0B1F40]">
      <Nav variant="solid" />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a3b6e] via-[#0B1F40] to-[#050e1f]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Redefining PBM Evaluation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white">
              The Future of <span className="text-[#D4AF37]">PBM Transparency</span>
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed">
              RingmasterRx eliminates guesswork with a modern, integrated PBM evaluation platform—delivering transparency, consistency, and confident decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* The Problem */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl opacity-50 blur"></div>
              <div className="relative bg-[#0F264A] border border-red-500/20 rounded-xl p-8">
                <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
                  <AlertCircle className="w-7 h-7 text-red-400" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white">The Problem</h2>
                <p className="text-blue-100/80 text-lg mb-6 leading-relaxed">
                  PBM contract comparisons are tough due to hidden pricing, complexity, and knowledge gaps. Brokers often rely on oversimplified terms that miss key details.
                </p>
                <ul className="space-y-3">
                  {[
                    "Hidden pricing structures",
                    "Complex contract language",
                    "Industry knowledge gaps",
                    "Oversimplified comparisons",
                    "Lack of transparency"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-blue-100/60">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* The Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#D4AF37] to-[#4A90E2] rounded-2xl opacity-50 blur"></div>
              <div className="relative bg-[#0F264A] border border-[#D4AF37]/30 rounded-xl p-8">
                <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                  <CheckCircle className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white">The Solution</h2>
                <p className="text-blue-100/80 text-lg mb-6 leading-relaxed">
                  <span className="font-bold text-[#D4AF37]">RingmasterRx</span> delivers what the industry has long needed: a fair, fast, and scalable way for PBMs, brokers, and sponsors to collaborate, compete, and deliver better outcomes.
                </p>
                <ul className="space-y-3">
                  {[
                    "Modern, integrated platform",
                    "Complete transparency",
                    "Consistent evaluation",
                    "Confident decision-making",
                    "Proven results"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-blue-100/80">
                      <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three-Dimensional Evaluation Framework */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Comprehensive Analysis
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              Three-Dimensional <span className="text-[#4A90E2]">Evaluation Framework</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              Go beyond unit cost: Evaluate PBMs comprehensively across three critical dimensions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Pill,
                title: "Drug Mix Impact",
                description: "Understand how formulary design, exclusions, and drug mix affect your total cost of care",
                features: [
                  "Formulary analysis",
                  "Exclusion impact modeling",
                  "Drug mix optimization",
                  "Cost impact projections"
                ]
              },
              {
                icon: Users,
                title: "Customer Experience",
                description: "Evaluate PBM infrastructure, services, and member engagement capabilities",
                features: [
                  "Member engagement tools",
                  "Service quality metrics",
                  "Network accessibility",
                  "Support infrastructure"
                ]
              },
              {
                icon: Activity,
                title: "Clinical Strategy",
                description: "Compare clinical programs, formulary management, and therapeutic alternatives",
                features: [
                  "Biosimilar adoption",
                  "GLP-1 strategies",
                  "Formulary management",
                  "Clinical outcomes"
                ]
              }
            ].map((dimension, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
                data-testid={`dimension-${dimension.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#D4AF37] to-[#4A90E2] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                <div className="relative h-full bg-[#0F264A] border border-white/10 rounded-xl p-8 hover:border-[#D4AF37]/30 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center mb-6 border border-[#4A90E2]/20">
                    <dimension.icon className="w-7 h-7 text-[#4A90E2]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">{dimension.title}</h3>
                  <p className="text-blue-100/70 mb-6 leading-relaxed">{dimension.description}</p>
                  
                  <div className="space-y-2">
                    {dimension.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-blue-100/60">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Platform Innovations */}
      <section className="py-32 bg-[#050e1f] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Key Platform <span className="text-[#D4AF37]">Innovations</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              New 2025 capabilities that redefine PBM evaluation and oversight
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Market IQ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-[#0B1F40] border border-white/10 rounded-xl p-10 hover:border-[#4A90E2]/30 transition-all"
              data-testid="innovation-market-iq"
            >
              <div className="w-16 h-16 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center mb-6 border border-[#4A90E2]/20">
                <BarChart3 className="w-8 h-8 text-[#4A90E2]" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Market IQ</h3>
              <p className="text-blue-100/70 text-lg leading-relaxed mb-6">
                Illuminates PBM infrastructure, services, and member engagement—empowering more transparent Customer Experience analysis.
              </p>
              <ul className="space-y-3">
                {[
                  "PBM infrastructure insights",
                  "Service capability analysis",
                  "Member engagement metrics",
                  "Transparent comparisons"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-100/60">
                    <ArrowRight className="w-4 h-4 text-[#4A90E2] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Clinical EQ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-[#0B1F40] border border-white/10 rounded-xl p-10 hover:border-[#D4AF37]/30 transition-all"
              data-testid="innovation-clinical-eq"
            >
              <div className="w-16 h-16 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                <Activity className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Clinical EQ</h3>
              <p className="text-blue-100/70 text-lg leading-relaxed mb-6">
                Enables side-by-side comparison of biosimilar adoption, GLP-1 strategies, and formulary management—with customizable modeling tools.
              </p>
              <ul className="space-y-3">
                {[
                  "Biosimilar adoption tracking",
                  "GLP-1 strategy analysis",
                  "Formulary management",
                  "Customizable modeling"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-100/60">
                    <ArrowRight className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* End-to-End Consulting Architecture */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              End-to-End Consulting <span className="text-[#4A90E2]">Architecture</span>
            </h2>
            <p className="text-blue-100/70 text-xl">
              Seamlessly move through your PBM lifecycle—eliminating spreadsheets and manual effort
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#4A90E2] to-[#D4AF37] -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Analytics",
                  description: "Comprehensive claims analysis, trend identification, and cost driver discovery",
                  icon: BarChart3
                },
                {
                  step: "02",
                  title: "RFPs",
                  description: "Streamlined RFP process with market benchmarks and competitive bidding",
                  icon: FileText
                },
                {
                  step: "03",
                  title: "Reconciliation",
                  description: "Ongoing contract performance monitoring and guarantee verification",
                  icon: Shield
                }
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="relative group"
                  data-testid={`phase-${phase.title.toLowerCase()}`}
                >
                  <div className="bg-[#0F264A] border border-white/10 rounded-xl p-8 hover:border-[#D4AF37]/30 transition-all relative z-10">
                    <div className="text-6xl font-serif font-bold text-white/5 mb-4">{phase.step}</div>
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                      <phase.icon className="w-6 h-6 text-[#0B1F40]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white text-center">{phase.title}</h3>
                    <p className="text-blue-100/60 text-center leading-relaxed">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-32 bg-[#050e1f] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center text-white">
              Why Choose <span className="text-[#D4AF37]">BenefitsBridge Partners</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Database,
                  title: "Crowdsourced Knowledge + Integrated Data",
                  description: "Level the playing field—access PBM insights and pricing analysis in one centralized, user-friendly environment."
                },
                {
                  icon: Zap,
                  title: "Fair, Fast, and Scalable",
                  description: "A platform built for PBMs, brokers, and sponsors to collaborate, compete, and deliver better outcomes."
                },
                {
                  icon: Target,
                  title: "Beyond Unit Cost",
                  description: "Evaluate PBMs holistically across drug mix impact, customer experience, and clinical strategy."
                },
                {
                  icon: TrendingUp,
                  title: "Proven Results",
                  description: "8% savings from annual market checks, identify 10% cost impacts from exclusions, recover 3-5% from guarantee misses."
                }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4"
                  data-testid={`benefit-${i}`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
                    <benefit.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-blue-100/60 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Transform Your <span className="text-[#D4AF37]">PBM Evaluation?</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
            Experience the power of RingmasterRx and see how we deliver transparency, accuracy, and savings.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-10 h-14 text-lg" data-testid="button-schedule-demo">
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
