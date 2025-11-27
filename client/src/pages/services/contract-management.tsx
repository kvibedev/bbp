import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { 
  CheckCircle, 
  AlertTriangle,
  Shield,
  FileText,
  Activity,
  DollarSign,
  Clock,
  Target,
  TrendingUp,
  XCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ContractManagement() {
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
                PBM Contract Management
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white" data-testid="hero-headline">
                PBM Contract Management That Works <span className="text-[#D4AF37]">From Day One</span>
              </h1>
              <p className="text-xl text-blue-100/80 leading-relaxed mb-8" data-testid="hero-subhead">
                We capture your contract terms before claims start processing—ensuring every dollar flows according to what you negotiated, not what the PBM decides.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-[#D4AF37] text-[#0B1F40] hover:bg-[#B59328] font-semibold text-lg px-8 py-6"
                data-testid="cta-protect-contract"
              >
                <Link href="/contact">
                  Protect Your Contract
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
                The <span className="text-red-400">Contract Gap</span> That Costs Millions
              </h2>
              <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
                You sign multi-million dollar pharmacy contracts today. Claims start processing tomorrow. But you won't see your actual contract performance for months.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Contracts Signed But Not Delivered",
                  description: "You sign the contract today, but it takes 3-9 months before you actually receive the final document with all terms and conditions. During this gap, you have no verification of what was actually agreed upon.",
                  impact: "3-9 month verification gap"
                },
                {
                  icon: Activity,
                  title: "Claims Processing Starts Immediately",
                  description: "Your employees' prescriptions start processing the very next day. Thousands of claims flow through without any verification that contracted terms are being applied correctly.",
                  impact: "Unverified claims from Day One"
                },
                {
                  icon: XCircle,
                  title: "Terms Applied Incorrectly",
                  description: "Discounts missed. Rebates miscalculated. Guarantees ignored. Every audit, every sampling reveals mistakes—and they're always in favor of the carrier. Always.",
                  impact: "Systemic errors favoring carriers"
                },
                {
                  icon: DollarSign,
                  title: "Millions Already Lost",
                  description: "By the time you receive your contract and can verify terms, months of claims have already been processed incorrectly. The damage is done, the money is gone, and recovery is minimal at best.",
                  impact: "Preventable losses compound daily"
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
                Traditional approaches audit after the fact—damage already done, money already gone. By the time you see your contract, millions are already lost. <span className="text-red-400 font-semibold">You need protection from Day One.</span>
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
              Expert Guidance Meets <span className="text-[#4A90E2]">Best-in-Class Technology</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              BenefitsBridge Partners combines decades of pharmacy benefit expertise with cutting-edge technology to protect your contract from the first prescription
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Target,
                title: "Day One Configuration",
                description: "Capture all bid requirements upfront as a warranty",
                details: "We reserve your bid requirements before claims processing begins—creating an ironclad warranty of what you negotiated. No gaps, no waiting, no guessing.",
                color: "#4A90E2"
              },
              {
                icon: Shield,
                title: "Contract Verification Setup",
                description: "Every term, discount, rebate, and guarantee locked in",
                details: "We source best-in-class technology to configure every contracted term into the verification system. Complete coverage from day one.",
                color: "#D4AF37"
              },
              {
                icon: Activity,
                title: "Pre-Claims Launch",
                description: "Systems configured before first prescription processes",
                details: "Technology is fully configured and tested before your first claim processes. Your employees get immediate protection, not eventual auditing.",
                color: "#4A90E2"
              },
              {
                icon: TrendingUp,
                title: "Ongoing Compliance",
                description: "Continuous monitoring throughout contract term",
                details: "Real-time verification of every claim combined with expert oversight ensures your contract delivers what was promised—for the entire term.",
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
              We don't just provide technology—we provide expert navigation. Our team combines deep pharmacy benefit expertise with access to best-in-class verification technology. You get both the knowledge to understand what should happen and the tools to ensure it does.
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
              Measurable outcomes that protect your budget from the first prescription
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: CheckCircle,
                title: "Contract Accuracy From the First Claim",
                description: "Every prescription verified against your negotiated terms from Day One—no waiting period, no gap, no exposure. Your contract works the way it should from the moment it starts.",
                metric: "100% accuracy"
              },
              {
                icon: Shield,
                title: "Zero 'Gap Period' Overcharges",
                description: "Eliminate the 3-9 month verification gap that costs millions. With upfront contract capture and immediate verification, there's no period of unprotected claims processing.",
                metric: "0 days unprotected"
              },
              {
                icon: AlertTriangle,
                title: "Immediate Alerts on Contract Deviations",
                description: "Real-time monitoring identifies discrepancies as they occur—not months later during an audit. Immediate detection enables immediate correction before losses compound.",
                metric: "Real-time detection"
              },
              {
                icon: DollarSign,
                title: "Dollar Recovery on Day One Discrepancies",
                description: "When errors are caught immediately, recovery is straightforward. No lengthy audits, no disputes over ancient claims—just swift correction and dollar recovery.",
                metric: "Immediate recovery"
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
                Prevention Beats <span className="text-[#4A90E2]">Post-Damage Audits</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#0B1F40] border border-[#D4AF37]/30 rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center" data-testid="case-study-metric-1">
                  <div className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2">$2.3M</div>
                  <div className="text-blue-100/70">Recovered in First 90 Days</div>
                </div>
                <div className="text-center" data-testid="case-study-metric-2">
                  <div className="text-5xl md:text-6xl font-bold text-[#4A90E2] mb-2">100%</div>
                  <div className="text-blue-100/70">Claims Verified</div>
                </div>
                <div className="text-center" data-testid="case-study-metric-3">
                  <div className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2">Day 1</div>
                  <div className="text-blue-100/70">Protection Started</div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-bold text-white mb-6">Case Study: National Employer Group</h3>
                <div className="space-y-4 text-blue-100/70 leading-relaxed">
                  <p>
                    <span className="text-white font-semibold">The Challenge:</span> A large employer group signed a new PBM contract with aggressive discount guarantees and complex rebate structures. Under the traditional approach, they would have waited 6-9 months to verify contract performance—during which time millions in claims would process without validation.
                  </p>
                  <p>
                    <span className="text-white font-semibold">The BBP Approach:</span> We captured all bid requirements upfront as a warranty, configured verification technology before the contract went live, and verified every claim from Day One. No gap period, no unprotected claims, no waiting.
                  </p>
                  <p>
                    <span className="text-white font-semibold">The Results:</span> In the first 90 days alone, our real-time verification identified $2.3M in contract discrepancies—discounts not applied correctly, rebates miscalculated, and guarantees missed. Every dollar was recovered and returned to the client's budget.
                  </p>
                  <p className="text-[#D4AF37] font-semibold text-lg pt-4">
                    This wasn't an audit that found problems after the fact. This was prevention that stopped overcharges before they left the budget.
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
                  <h4 className="text-xl font-bold text-white mb-4">Traditional Approach</h4>
                  <ul className="space-y-3 text-blue-100/70 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Wait 6-9 months for contract delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Sample a fraction of claims after damage is done</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Fight to recover money already paid incorrectly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Millions in preventable losses</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-[#D4AF37]/30">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                    <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">BBP Approach</h4>
                  <ul className="space-y-3 text-blue-100/70 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Capture contract terms as warranty upfront</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Verify 100% of claims from Day One</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Catch and correct errors in real-time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Millions in preventable losses prevented</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Process */}
      <section className="py-32 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              How It <span className="text-[#4A90E2]">Works</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              A proven four-step process that protects your contract from the first prescription
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  step: "01",
                  icon: FileText,
                  title: "Contract Capture",
                  subtitle: "We reserve your bid requirements",
                  description: "Before claims processing begins, we capture every contract term, discount schedule, rebate structure, and performance guarantee. These become your warranty—a complete record of what was negotiated and what should be delivered.",
                  deliverable: "Complete contract warranty documentation"
                },
                {
                  step: "02",
                  icon: Shield,
                  title: "System Configuration",
                  subtitle: "Terms loaded before go-live",
                  description: "We source and configure best-in-class verification technology with your complete contract terms. Every discount, every rebate tier, every performance metric is programmed into the system before your first claim processes.",
                  deliverable: "Fully configured verification system"
                },
                {
                  step: "03",
                  icon: Activity,
                  title: "Pre-Launch Verification",
                  subtitle: "Test claims against your contract",
                  description: "Before go-live, we run test claims through the verification system to ensure everything is configured correctly. Any discrepancies are identified and corrected before real claims and real dollars are at risk.",
                  deliverable: "Verified system ready for launch"
                },
                {
                  step: "04",
                  icon: TrendingUp,
                  title: "Day One Protection",
                  subtitle: "Monitor from first prescription",
                  description: "From the very first prescription, every claim is verified against your contract terms in real-time. Discrepancies trigger immediate alerts, enabling swift correction before losses compound. Continuous monitoring throughout the entire contract term.",
                  deliverable: "Ongoing protection & recovery"
                }
              ].map((process, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  data-testid={`process-step-${i + 1}`}
                >
                  <Card className="bg-white/5 border-white/10 hover:border-[#4A90E2]/30 transition-all h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="text-6xl font-serif font-bold text-white/5">{process.step}</div>
                        <div className="w-14 h-14 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center border border-[#4A90E2]/20">
                          <process.icon className="w-7 h-7 text-[#4A90E2]" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{process.title}</h3>
                      <p className="text-[#D4AF37] font-semibold mb-4">{process.subtitle}</p>
                      <p className="text-blue-100/70 leading-relaxed mb-6">{process.description}</p>
                      <div className="pt-4 border-t border-white/10">
                        <div className="text-sm text-blue-100/50 uppercase tracking-wide mb-1">Deliverable</div>
                        <div className="text-white font-semibold">{process.deliverable}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-[#050e1f]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Stop the Gap Period. <span className="text-[#D4AF37]">Start Day One Protection.</span>
            </h2>
            <p className="text-blue-100/70 text-xl mb-8 leading-relaxed">
              Every day without contract verification is another day of preventable losses. Let BenefitsBridge Partners show you how expert guidance and best-in-class technology can protect your pharmacy benefit dollars from the first prescription.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#D4AF37] text-[#0B1F40] hover:bg-[#B59328] font-semibold text-lg px-8 py-6"
                data-testid="cta-protect-contract-bottom"
              >
                <Link href="/contact">
                  Protect Your Contract
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#4A90E2] text-white hover:bg-[#4A90E2]/10 font-semibold text-lg px-8 py-6"
                data-testid="cta-learn-more"
              >
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
