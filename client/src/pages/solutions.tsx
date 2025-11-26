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
  Activity,
  DollarSign,
  Clock,
  Eye
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
              Stop the Bleeding
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white">
              Advanced Pharmacy Claim Verification <span className="text-[#D4AF37]">That Works From Day One</span>
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed">
              We don't just audit your pharmacy contracts after the damage is done. We verify every claim from the first prescription—ensuring you only pay what you're supposed to pay.
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
                  You sign a multi-million dollar pharmacy contract today. Claims start processing tomorrow. But you won't verify contract compliance for months—if ever.
                </p>
                <ul className="space-y-3">
                  {[
                    "Contract terms not captured upfront",
                    "3-9 month gap before verification",
                    "Sampling misses most errors",
                    "Mistakes always favor the carrier",
                    "Millions in preventable losses"
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
                  <span className="font-bold text-[#D4AF37]">BenefitsBridge Partners</span> delivers what the industry has long needed: expert guidance combined with best-in-class technology that verifies every claim from the first prescription.
                </p>
                <ul className="space-y-3">
                  {[
                    "Day One contract verification",
                    "100% adjudication coverage",
                    "Real-time error detection",
                    "Immediate dollar recovery",
                    "Expert navigation & guidance"
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

      {/* Our Approach */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Outcomes-Focused
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              Our <span className="text-[#4A90E2]">Approach</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              We focus on measurable outcomes, not just technology features—delivering protection from the moment your contract begins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Day One Configuration",
                description: "Capture all contract terms before claims processing starts—no waiting, no gaps, no guesswork",
                features: [
                  "Complete bid requirement capture",
                  "Contract terms as warranties",
                  "Proactive setup & configuration",
                  "Immediate protection activation"
                ]
              },
              {
                icon: Eye,
                title: "Continuous Verification",
                description: "Real-time checking of every adjudication against your negotiated terms—100% coverage, zero sampling",
                features: [
                  "Every claim verified in real-time",
                  "Automatic discount validation",
                  "Rebate compliance monitoring",
                  "Instant discrepancy alerts"
                ]
              },
              {
                icon: DollarSign,
                title: "Proactive Reconciliation",
                description: "Immediate correction of overcharges and mistakenly paid amounts returned to your budget",
                features: [
                  "Automatic error identification",
                  "Dollar recovery tracking",
                  "Contract performance reports",
                  "Ongoing optimization insights"
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

      {/* How It Works */}
      <section className="py-32 bg-[#050e1f] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              How It <span className="text-[#D4AF37]">Works</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              A proven four-step process that protects your budget from the first prescription
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                step: "01",
                title: "Contract Capture",
                description: "We reserve bid requirements as a warranty before claims processing begins",
                icon: FileText,
                color: "#4A90E2"
              },
              {
                step: "02",
                title: "Claims Verification",
                description: "Every prescription checked against your negotiated terms in real-time",
                icon: Shield,
                color: "#D4AF37"
              },
              {
                step: "03",
                title: "Dollar Recovery",
                description: "Mistakenly paid amounts identified and returned to your budget",
                icon: DollarSign,
                color: "#4A90E2"
              },
              {
                step: "04",
                title: "Ongoing Monitoring",
                description: "Continuous protection throughout your entire contract term",
                icon: Activity,
                color: "#D4AF37"
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0B1F40] border border-white/10 rounded-xl p-8 hover:border-[#D4AF37]/30 transition-all"
                data-testid={`innovation-${step.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="text-5xl font-serif font-bold text-white/5 mb-4">{step.step}</div>
                <div className="w-14 h-14 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center mb-6 border border-[#4A90E2]/20">
                  <step.icon className="w-7 h-7" style={{ color: step.color }} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-blue-100/70 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              What You <span className="text-[#4A90E2]">Get</span>
            </h2>
            <p className="text-blue-100/70 text-xl">
              Comprehensive protection and expert guidance that delivers measurable results
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#4A90E2] to-[#D4AF37] -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Complete Contract Accuracy",
                  description: "Protection from Day One with all terms captured and verified before claims processing",
                  icon: CheckCircle
                },
                {
                  step: "02",
                  title: "100% Adjudication Coverage",
                  description: "Every prescription checked—not sampling, not estimates, complete verification",
                  icon: Eye
                },
                {
                  step: "03",
                  title: "Real-Time Alerts",
                  description: "Immediate notification of discrepancies with measurable dollar recovery tracking",
                  icon: Zap
                }
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="relative group"
                  data-testid={`phase-${phase.title.toLowerCase().replace(/\s+/g, '-')}`}
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

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-[#0F264A] border border-[#D4AF37]/30 rounded-xl p-10">
              <h3 className="text-2xl font-bold mb-6 text-white text-center">Expert Navigation & Strategic Guidance</h3>
              <p className="text-blue-100/70 text-lg leading-relaxed text-center mb-6">
                BenefitsBridge Partners brings more than technology—we provide expert guidance and strategic navigation throughout your entire pharmacy benefits lifecycle.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Best-in-class technology partnerships",
                  "Tailored solutions for your needs",
                  "Expert implementation support",
                  "Ongoing optimization guidance"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-blue-100/60">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results That Matter */}
      <section className="py-32 bg-[#050e1f] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center text-white">
              Results That <span className="text-[#D4AF37]">Matter</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: DollarSign,
                  title: "$12 Million Recovered",
                  description: "Single client example of complete contract accuracy through Day One verification—putting mistakenly paid dollars back into the budget."
                },
                {
                  icon: TrendingUp,
                  title: "8% Additional Savings",
                  description: "Average savings from annual market checks—ensuring you stay competitive throughout your contract term."
                },
                {
                  icon: Target,
                  title: "10% Cost Impact Identified",
                  description: "Hidden costs from formulary exclusions and drug mix changes caught before they drain your budget."
                },
                {
                  icon: Clock,
                  title: "3-5% Guarantee Recovery",
                  description: "Typical recovery from missed guarantees and contract term misapplications—money that would be lost forever with traditional audits."
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

            <div className="bg-[#0B1F40] border border-white/10 rounded-xl p-10 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">The BenefitsBridge Advantage</h3>
              <p className="text-blue-100/70 text-lg leading-relaxed">
                We source best-in-class technology and deliver it with expert guidance—ensuring you get outcomes that traditional approaches simply can't match. Our expertise in pharmacy benefits combined with cutting-edge verification technology means you stop losing money from the moment your contract begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to <span className="text-[#D4AF37]">Stop the Bleeding?</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
            Discover how BenefitsBridge Partners delivers complete contract accuracy and measurable dollar recovery from Day One.
          </p>
          <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-10 h-14 text-lg" data-testid="button-schedule-demo">
            <Link href="/contact">
              Start Saving From Day One
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
