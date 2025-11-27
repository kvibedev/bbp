import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { 
  CheckCircle, 
  AlertTriangle,
  DollarSign,
  Calendar,
  TrendingUp,
  FileText,
  Shield,
  XCircle,
  ArrowRight,
  Clock,
  Target,
  Activity,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Reconciliation() {
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
                Proactive Reconciliation
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white" data-testid="hero-headline">
                Proactive Reconciliation That Recovers Dollars <span className="text-[#D4AF37]">Before They're Lost Forever</span>
              </h1>
              <p className="text-xl text-blue-100/80 leading-relaxed mb-8" data-testid="hero-subhead">
                Monthly contract verification. Quarterly guarantee checks. Annual financial reconciliation. We recover mistakenly paid dollars—not just identify them.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-[#D4AF37] text-[#0B1F40] hover:bg-[#B59328] font-semibold text-lg px-8 py-6"
                data-testid="cta-start-recovering"
              >
                <Link href="/contact">
                  Start Recovering Dollars
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
                Most Reconciliation Happens Annually—<span className="text-red-400">After Money Is Unrecoverable</span>
              </h2>
              <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
                You sign contracts with guarantees and rebates, but you won't verify actual performance until year-end—when recovery windows have closed
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Calendar,
                  title: "Annual Reconciliation Comes Too Late",
                  description: "Traditional reconciliation happens once a year after the contract year ends. By the time you identify shortfalls, the performance period is over and your ability to recover is severely limited.",
                  impact: "12-month delay in recovery"
                },
                {
                  icon: XCircle,
                  title: "Guarantee Shortfalls Go Unnoticed",
                  description: "Your PBM guarantees minimum rebates or maximum trend increases—but you won't know if they're missing these targets until annual settlement. Quarterly shortfalls compound undetected.",
                  impact: "Silent guarantee erosion"
                },
                {
                  icon: Clock,
                  title: "Recovery Windows Close",
                  description: "Many contract terms have time limits for disputing charges. Monthly overcharges discovered 18 months later are often beyond recovery windows—the money is permanently gone.",
                  impact: "Expired recovery rights"
                },
                {
                  icon: AlertTriangle,
                  title: "Identification Without Recovery",
                  description: "Traditional audits identify problems but lack the teeth to force recovery. You get a report showing millions in overcharges—but collection is a battle you rarely win.",
                  impact: "Finding ≠ recovering"
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
                Annual reconciliation finds problems after the damage is done. By the time errors are identified, recovery windows have closed. <span className="text-red-400 font-semibold">You need proactive reconciliation that recovers dollars before they're lost forever.</span>
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
              Multi-Tier Reconciliation Meets <span className="text-[#4A90E2]">Immediate Recovery</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              BenefitsBridge Partners delivers monthly, quarterly, and annual reconciliation with aggressive dollar recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "Monthly Contract Verification",
                description: "Continuous accuracy tracking",
                details: "Monthly verification of contract term application ensures pricing errors and discount misapplications are caught within 30 days—while recovery is straightforward.",
                color: "#4A90E2"
              },
              {
                icon: Target,
                title: "Quarterly Guarantee Compliance",
                description: "Performance monitoring in real-time",
                details: "Quarterly checks of guarantee performance identify shortfalls while there's still time to correct them—ensuring annual targets are met, not missed.",
                color: "#D4AF37"
              },
              {
                icon: FileText,
                title: "Annual Financial Reconciliation",
                description: "Complete financial settlement",
                details: "Comprehensive annual reconciliation validates all financial flows—rebates, guarantees, and contract terms—ensuring complete accuracy and maximum dollar recovery.",
                color: "#4A90E2"
              },
              {
                icon: DollarSign,
                title: "Immediate Recovery Pursuit",
                description: "Dollars returned to your budget",
                details: "We don't just identify overcharges—we pursue recovery immediately. Mistakenly paid dollars are returned to your budget, not just documented in reports.",
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
              We combine expert pharmacy benefit knowledge with aggressive recovery advocacy. You get both the expertise to identify what's owed and the tenacity to ensure it's returned to your budget.
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
              Multi-tier reconciliation that delivers documented dollar recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: FileText,
                title: "Monthly Contract Accuracy Reports",
                description: "Detailed monthly verification of contract term application—pricing accuracy, discount compliance, and rebate tracking. Errors caught within 30 days, while recovery is simple and direct.",
                metric: "Monthly verification cycles"
              },
              {
                icon: TrendingUp,
                title: "Quarterly Guarantee Performance",
                description: "Quarterly assessment of guarantee compliance shows if your PBM is on track to meet annual commitments. Shortfalls identified early enable mid-year corrections before money is permanently lost.",
                metric: "Proactive guarantee tracking"
              },
              {
                icon: Shield,
                title: "Annual Financial Settlements",
                description: "Comprehensive year-end reconciliation validates all financial flows and contract performance. Complete documentation ensures you receive every dollar owed under your contract terms.",
                metric: "Complete annual validation"
              },
              {
                icon: DollarSign,
                title: "Documented Dollar Recovery",
                description: "Every overcharge identified is pursued for recovery—not just noted in a report. You get actual dollars returned to your budget, with complete documentation of amounts recovered and returned.",
                metric: "Actual dollar recovery"
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
                Proactive Reconciliation Drives <span className="text-[#4A90E2]">Documented Recovery</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#0B1F40] border border-[#D4AF37]/30 rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center" data-testid="case-study-metric-1">
                  <div className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2">$6.8M</div>
                  <div className="text-blue-100/70">Recovered Through Quarterly Reconciliation</div>
                </div>
                <div className="text-center" data-testid="case-study-metric-2">
                  <div className="text-5xl md:text-6xl font-bold text-[#4A90E2] mb-2">4x/Year</div>
                  <div className="text-blue-100/70">Quarterly Verification Cycles</div>
                </div>
                <div className="text-center" data-testid="case-study-metric-3">
                  <div className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2">100%</div>
                  <div className="text-blue-100/70">Dollars Recovered & Returned</div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-bold text-white mb-6">Case Study: Regional Healthcare System</h3>
                <div className="space-y-4 text-blue-100/70 leading-relaxed">
                  <p>
                    <span className="text-white font-semibold">The Challenge:</span> A 12,000-member healthcare system had annual reconciliation that consistently identified $1-2M in guarantee shortfalls—but recovery happened only after the contract year ended, limiting their ability to recoup full amounts.
                  </p>
                  <p>
                    <span className="text-white font-semibold">The BBP Approach:</span> We implemented quarterly reconciliation cycles that verified guarantee performance every 90 days. Rebate shortfalls and pricing errors were identified within the same quarter they occurred—enabling immediate correction and dollar recovery.
                  </p>
                  <p>
                    <span className="text-white font-semibold">The Results:</span> Over a three-year period, proactive quarterly reconciliation identified and recovered $6.8M in contract deviations—money that would have been partially or completely unrecoverable under annual-only reconciliation.
                  </p>
                  <p className="text-[#D4AF37] font-semibold text-lg pt-4">
                    This wasn't identification without recovery—this was aggressive pursuit that returned mistakenly paid dollars to the client's budget.
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
                  <h4 className="text-xl font-bold text-white mb-4">Annual-Only Reconciliation</h4>
                  <ul className="space-y-3 text-blue-100/70 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Find problems 12-18 months after they occur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Guarantee shortfalls discovered too late</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Many recovery windows already closed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Identification without full dollar recovery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-[#D4AF37]/30">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                    <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Proactive Multi-Tier Reconciliation</h4>
                  <ul className="space-y-3 text-blue-100/70 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Identify errors within 30-90 days of occurrence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Track guarantees quarterly for mid-year correction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Pursue recovery while all windows are open</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Actual dollars recovered and returned to budget</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reconciliation Levels Section */}
      <section className="py-32 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Reconciliation <span className="text-[#4A90E2]">Levels</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              Three tiers of verification ensure no dollar slips through unnoticed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "Monthly Verification",
                frequency: "12 times per year",
                items: [
                  "Contract term compliance checks",
                  "Pricing accuracy verification",
                  "Discount application validation",
                  "Immediate error identification"
                ]
              },
              {
                icon: Activity,
                title: "Quarterly Reconciliation",
                frequency: "4 times per year",
                items: [
                  "Guarantee performance tracking",
                  "Rebate compliance validation",
                  "Trend analysis and projections",
                  "Mid-year correction opportunities"
                ]
              },
              {
                icon: Award,
                title: "Annual Settlement",
                frequency: "Once per year",
                items: [
                  "Full financial reconciliation",
                  "Complete guarantee settlement",
                  "Multi-year trend analysis",
                  "Comprehensive dollar recovery"
                ]
              }
            ].map((level, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                data-testid={`reconciliation-level-${i}`}
              >
                <Card className="bg-white/5 border-white/10 hover:border-[#D4AF37]/30 transition-all h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center mb-6 border border-[#4A90E2]/20">
                      <level.icon className="w-6 h-6 text-[#4A90E2]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{level.title}</h3>
                    <div className="text-[#D4AF37] font-semibold text-sm mb-6">{level.frequency}</div>
                    <ul className="space-y-3">
                      {level.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-blue-100/70">
                          <CheckCircle className="w-4 h-4 text-[#4A90E2] mt-0.5 flex-shrink-0" />
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
            className="mt-16 bg-[#050e1f] border border-[#D4AF37]/30 rounded-xl p-8 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-[#D4AF37] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Layered Protection Throughout Your Contract Term</h4>
                <p className="text-blue-100/70 leading-relaxed">
                  Our multi-tier approach ensures errors are caught quickly while recovery is straightforward. Monthly checks catch pricing errors, quarterly reviews track guarantee performance, and annual settlement validates complete financial accuracy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#050e1f] border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid="cta-headline">
            Start Recovering Your <span className="text-[#D4AF37]">Pharmacy Dollars</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto" data-testid="cta-description">
            Proactive reconciliation recovers dollars before they're lost forever. Contact us to implement monthly, quarterly, and annual verification with aggressive recovery pursuit.
          </p>
          <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-10 h-14 text-lg" data-testid="button-get-started">
            <Link href="/contact">
              Start Recovering Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
