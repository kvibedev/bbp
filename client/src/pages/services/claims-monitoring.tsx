import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { 
  CheckCircle, 
  AlertTriangle,
  Shield,
  Eye,
  Activity,
  DollarSign,
  Clock,
  Target,
  TrendingUp,
  XCircle,
  ArrowRight,
  Zap,
  BarChart3,
  FileSearch
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ClaimsMonitoring() {
  return (
    <div className="font-sans bg-[#0B1F40] min-h-screen text-white selection:bg-[#D4AF37] selection:text-[#0B1F40]">
      <Nav variant="solid" />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a3b6e] via-[#0B1F40] to-[#050e1f]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                Continuous Claims Monitoring
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white" data-testid="hero-headline">
                Continuous Claims Monitoring That Stops Overcharges <span className="text-[#D4AF37]">Before They Leave Your Budget</span>
              </h1>
              <p className="text-xl text-blue-100/80 leading-relaxed mb-8" data-testid="hero-subhead">
                100% adjudication coverage. Real-time verification. Every prescription checked against your contract—from the first claim forward.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-[#D4AF37] text-[#0B1F40] hover:bg-[#B59328] font-semibold text-lg px-8 py-6"
                data-testid="cta-start-protecting"
              >
                <Link href="/contact">
                  Start Protecting Your Claims
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 text-red-400 font-medium text-sm mb-6 tracking-widest uppercase">
                <span className="w-12 h-[1px] bg-red-400"></span>
                The Problem
                <span className="w-12 h-[1px] bg-red-400"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
                Traditional Audits Find Problems <span className="text-red-400">After the Damage is Done</span>
              </h2>
              <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
                By the time traditional audits reveal overcharges, millions have already left your budget—and recovery is a battle you rarely win
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Target,
                  title: "Traditional Audits Check 1-5% of Claims",
                  description: "Most pharmacy benefit audits sample a tiny fraction of claims—typically 1-5%. This means 95-99% of your prescription adjudications are never verified against your contract terms.",
                  impact: "95-99% of claims unverified"
                },
                {
                  icon: Eye,
                  title: "95-99% of Overcharges Go Undetected",
                  description: "When you only check a small sample, systematic overcharging patterns slip through unnoticed. The errors compound month after month, draining millions from your budget.",
                  impact: "Systematic errors missed"
                },
                {
                  icon: Clock,
                  title: "Money Already Gone When Problems Found",
                  description: "Audits happen months or even years after claims are processed. By the time errors are discovered, the money has been paid out—and getting it back is nearly impossible.",
                  impact: "Retrospective = too late"
                },
                {
                  icon: XCircle,
                  title: "Sampling Misses Systematic Patterns",
                  description: "Random sampling is designed to catch random errors—but overcharging isn't random. It's systematic. Sampling misses the patterns that cost you the most money.",
                  impact: "Pattern blindness"
                }
              ].map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  data-testid={`problem-${i}`}
                >
                  <Card className="bg-white/5 border-red-500/20 hover:border-red-500/40 transition-all h-full">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
                        <problem.icon className="w-7 h-7 text-red-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">{problem.title}</h3>
                      <p className="text-blue-100/70 leading-relaxed mb-4">{problem.description}</p>
                      <div className="pt-4 border-t border-white/10">
                        <div className="text-sm text-red-400 font-semibold">{problem.impact}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12 bg-red-500/10 border border-red-500/30 rounded-xl p-8 text-center"
            >
              <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">The Bottom Line</h3>
              <p className="text-blue-100/80 text-lg max-w-3xl mx-auto">
                Traditional auditing is fundamentally reactive—it finds problems after the fact, when the money is gone and recovery is difficult. <span className="text-red-400 font-semibold">You need proactive protection from the first claim forward.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-32 bg-[#050e1f] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              The BBP Solution
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              Expert Guidance Meets <span className="text-[#4A90E2]">Real-Time Protection</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              BenefitsBridge Partners delivers continuous claims monitoring that catches overcharges before they leave your budget—not months later
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Eye,
                title: "100% Adjudication Coverage",
                description: "Every single claim verified, not samples",
                details: "We verify 100% of prescription adjudications against your contract terms—no sampling, no statistical estimates, no gaps. Every claim is checked from the first prescription forward.",
                color: "#4A90E2"
              },
              {
                icon: Zap,
                title: "Real-Time Verification",
                description: "Catch discrepancies as they occur",
                details: "Claims are verified in real-time as they process. Discrepancies are identified immediately—not months later during an audit—enabling swift correction.",
                color: "#D4AF37"
              },
              {
                icon: Activity,
                title: "Automated Alerts",
                description: "Immediate notification of contract deviations",
                details: "When adjudications don't match your contract terms, you're notified immediately. No waiting for audit reports—immediate visibility into contract compliance.",
                color: "#4A90E2"
              },
              {
                icon: Shield,
                title: "Continuous Monitoring",
                description: "24/7 protection throughout contract term",
                details: "Monitoring continues throughout your entire contract term—every single day, every single claim. Comprehensive protection that never stops.",
                color: "#D4AF37"
              }
            ].map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
                data-testid={`solution-${i}`}
              >
                <div className="relative h-full bg-[#0B1F40] border border-white/10 rounded-xl p-8 hover:border-[#D4AF37]/30 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center mb-6 border border-[#4A90E2]/20">
                    <solution.icon className="w-7 h-7" style={{ color: solution.color }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{solution.title}</h3>
                  <p className="text-[#D4AF37] font-semibold mb-4 text-sm">{solution.description}</p>
                  <p className="text-blue-100/70 leading-relaxed text-sm">{solution.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 bg-[#0B1F40] border border-[#D4AF37]/30 rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              The BenefitsBridge <span className="text-[#D4AF37]">Difference</span>
            </h3>
            <p className="text-blue-100/80 text-lg leading-relaxed">
              We bring expert pharmacy benefit navigation combined with best-in-class monitoring technology. You get both the expertise to understand what should happen and the technology to ensure it does—from the first claim forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-32 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              What You <span className="text-[#D4AF37]">Get</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              Measurable outcomes that protect your pharmacy budget every single day
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: CheckCircle,
                title: "Complete Claim Accuracy Verification",
                description: "Every prescription adjudication is verified against your contract terms in real-time. No sampling means no blind spots—you get complete visibility into contract compliance across 100% of your claims.",
                metric: "100% verified"
              },
              {
                icon: Zap,
                title: "Immediate Overcharge Identification",
                description: "Discrepancies are caught as they occur, not months later. Real-time monitoring means overcharges are identified immediately—enabling swift correction before losses compound.",
                metric: "Real-time detection"
              },
              {
                icon: DollarSign,
                title: "Proactive Correction Before Dollars Leave",
                description: "When errors are caught in real-time, correction happens before money leaves your account. This isn't recovery—it's prevention. Dollars stay in your budget where they belong.",
                metric: "Preventive protection"
              },
              {
                icon: FileSearch,
                title: "Comprehensive Documentation for Accountability",
                description: "Every discrepancy is documented with complete audit trails. When you need to hold your PBM accountable, you have ironclad evidence of contract deviations—not estimates or samples.",
                metric: "Complete accountability"
              }
            ].map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
                data-testid={`outcome-${i}`}
              >
                <Card className="bg-white/5 border-white/10 hover:border-[#4A90E2]/30 transition-all h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center flex-shrink-0 border border-[#4A90E2]/20">
                        <outcome.icon className="w-6 h-6 text-[#4A90E2]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{outcome.title}</h3>
                        <div className="text-[#D4AF37] font-semibold text-sm">{outcome.metric}</div>
                      </div>
                    </div>
                    <p className="text-blue-100/70 leading-relaxed">{outcome.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Results / Case Study */}
      <section className="py-32 bg-[#050e1f] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                Proven Results
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
                Real-Time Monitoring vs. <span className="text-[#4A90E2]">Retrospective Auditing</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#0B1F40] border border-[#D4AF37]/30 rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center" data-testid="case-study-metric-1">
                  <div className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2">$4.7M</div>
                  <div className="text-blue-100/70">Annual Savings from Claim Corrections</div>
                </div>
                <div className="text-center" data-testid="case-study-metric-2">
                  <div className="text-5xl md:text-6xl font-bold text-[#4A90E2] mb-2">100%</div>
                  <div className="text-blue-100/70">Claims Verified Daily</div>
                </div>
                <div className="text-center" data-testid="case-study-metric-3">
                  <div className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2">Real-Time</div>
                  <div className="text-blue-100/70">Error Detection</div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-bold text-white mb-6">Case Study: Multi-Location Healthcare System</h3>
                <div className="space-y-4 text-blue-100/70 leading-relaxed">
                  <p>
                    <span className="text-white font-semibold">The Challenge:</span> A regional healthcare system with 15,000 covered lives was conducting traditional annual audits that sampled 3-5% of claims. They suspected systematic overcharging but couldn't prove it with statistical samples. By the time audit findings were ready, the money was gone.
                  </p>
                  <p>
                    <span className="text-white font-semibold">The BBP Approach:</span> We implemented continuous claims monitoring with 100% adjudication coverage. Every prescription was verified against contract terms in real-time. Discrepancies triggered immediate alerts, enabling swift correction before losses compounded.
                  </p>
                  <p>
                    <span className="text-white font-semibold">The Results:</span> Within the first year, our real-time monitoring identified systematic overcharging patterns that would have been invisible to traditional sampling. The client recovered $4.7M in overcharges—money that would have been permanently lost under the old audit approach.
                  </p>
                  <p className="text-[#D4AF37] font-semibold text-lg pt-4">
                    This wasn't retrospective recovery—this was proactive prevention. Discrepancies were caught before dollars left the budget, not fought over months after payment.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
                    <XCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Retrospective Auditing</h4>
                  <ul className="space-y-3 text-blue-100/70 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Sample 1-5% of claims months after processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Miss 95-99% of systematic overcharges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Discover problems after money is gone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Fight for recovery with statistical estimates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-[#D4AF37]/30">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                    <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Real-Time Monitoring</h4>
                  <ul className="space-y-3 text-blue-100/70 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Verify 100% of claims as they process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Catch systematic patterns immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Prevent overcharges before payment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Document every discrepancy with proof</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Coverage Section */}
      <section className="py-32 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Comprehensive <span className="text-[#4A90E2]">Monitoring Coverage</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              Every element of your pharmacy contract verified in real-time across 100% of claims
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Pricing Accuracy",
                items: [
                  "AWP calculations and updates",
                  "MAC pricing verification",
                  "Ingredient cost validation",
                  "Specialty drug pricing"
                ]
              },
              {
                icon: TrendingUp,
                title: "Discount Application",
                items: [
                  "Contract guarantees vs. actual",
                  "Brand vs. generic discounts",
                  "Specialty tier discounts",
                  "Network discount compliance"
                ]
              },
              {
                icon: BarChart3,
                title: "Rebate Compliance",
                items: [
                  "Manufacturer rebate tracking",
                  "Formulary rebate verification",
                  "Performance rebate validation",
                  "Pass-through accuracy"
                ]
              },
              {
                icon: FileSearch,
                title: "Dispensing Fees & Admin Charges",
                items: [
                  "Per-claim dispensing fees",
                  "Administrative charges",
                  "Specialty handling fees",
                  "Network differential fees"
                ]
              },
              {
                icon: Shield,
                title: "Plan Design Adherence",
                items: [
                  "Tier placement accuracy",
                  "Copay/coinsurance structure",
                  "Deductible application",
                  "Out-of-pocket maximums"
                ]
              },
              {
                icon: Target,
                title: "Network Compliance",
                items: [
                  "In-network vs. out-of-network",
                  "Preferred pharmacy verification",
                  "Mail order compliance",
                  "Specialty pharmacy networks"
                ]
              }
            ].map((coverage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                data-testid={`coverage-${i}`}
              >
                <Card className="bg-white/5 border-white/10 hover:border-[#4A90E2]/30 transition-all h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center mb-6 border border-[#4A90E2]/20">
                      <coverage.icon className="w-6 h-6 text-[#4A90E2]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{coverage.title}</h3>
                    <ul className="space-y-2">
                      {coverage.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-blue-100/70">
                          <CheckCircle className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 bg-[#4A90E2]/10 border border-[#4A90E2]/30 rounded-xl p-8 max-w-4xl mx-auto text-center"
          >
            <Eye className="w-12 h-12 text-[#4A90E2] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Complete Visibility, Complete Protection</h3>
            <p className="text-blue-100/80 text-lg leading-relaxed">
              Our comprehensive monitoring covers every aspect of your pharmacy contract—pricing, discounts, rebates, fees, plan design, and network compliance. Nothing escapes verification. Nothing gets missed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#050e1f] border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid="cta-headline">
            Stop Overcharges <span className="text-[#D4AF37]">Before They Start</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto" data-testid="cta-description">
            Contact us today to learn how continuous claims monitoring can protect your pharmacy budget from Day One—catching overcharges in real-time, not months later.
          </p>
          <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-10 h-14 text-lg" data-testid="button-get-started">
            <Link href="/contact">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
