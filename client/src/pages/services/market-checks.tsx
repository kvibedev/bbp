import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  Target,
  DollarSign,
  BarChart3,
  Award,
  XCircle,
  ArrowRight,
  Calendar,
  Database,
  FileSearch,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function MarketChecks() {
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
                Annual Market Checks
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white" data-testid="hero-headline">
                Annual Market Checks That Ensure You're Not Leaving <span className="text-[#D4AF37]">Millions on the Table</span>
              </h1>
              <p className="text-xl text-blue-100/80 leading-relaxed mb-8" data-testid="hero-subhead">
                Benchmark your PBM contract against current market rates. Know your competitive position before renewal—not after.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-[#D4AF37] text-[#0B1F40] hover:bg-[#B59328] font-semibold text-lg px-8 py-6"
                data-testid="cta-check-market-position"
              >
                <Link href="/contact">
                  Check Your Market Position
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
                Most Employers Renew Without Knowing <span className="text-red-400">If They're Competitive</span>
              </h2>
              <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
                You signed a great contract three years ago. But the market has changed—and you have no idea if you're still competitive today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Calendar,
                  title: "Contracts Age Without Market Checks",
                  description: "You negotiated your current contract 2-3 years ago based on what was competitive then. But PBM pricing evolves constantly—discounts improve, rebate structures change, guarantees strengthen.",
                  impact: "Market moves, your contract doesn't"
                },
                {
                  icon: XCircle,
                  title: "No Baseline for Renewal Negotiations",
                  description: "When renewal time comes, you have no objective benchmark. Your PBM says your rates are 'very competitive'—but compared to what? You're negotiating blind.",
                  impact: "Negotiating without leverage"
                },
                {
                  icon: DollarSign,
                  title: "Leaving Millions on the Table",
                  description: "Without market intelligence, you don't know what's achievable. You might be 5-10% behind current market rates—translating to millions in unnecessary spend over a three-year term.",
                  impact: "Millions in avoidable costs"
                },
                {
                  icon: AlertTriangle,
                  title: "Renewal Becomes Crisis Management",
                  description: "By the time you realize you need to check the market, your contract is expiring in 90 days. Rushed benchmarking leads to weak positioning and missed opportunities.",
                  impact: "Reactive, not strategic"
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
                Without annual market checks, you have no idea if your contract is competitive. <span className="text-red-400 font-semibold">You're renewing blind—and leaving millions on the table.</span>
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
              Expert Market Intelligence Meets <span className="text-[#4A90E2]">Annual Benchmarking</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              BenefitsBridge Partners delivers annual competitive benchmarking that positions you for renewal success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Database,
                title: "Annual Competitive Benchmarking",
                description: "Know where you stand in the market",
                details: "We compare your contract terms against current market rates annually—ensuring you know exactly where you stand competitively throughout your contract term.",
                color: "#4A90E2"
              },
              {
                icon: BarChart3,
                title: "Market Rate Analysis",
                description: "Understand what's achievable today",
                details: "Comprehensive analysis of current discount levels, rebate structures, and guarantee terms across similar employers—giving you objective benchmarks for what's possible.",
                color: "#D4AF37"
              },
              {
                icon: Target,
                title: "Contract Positioning Assessment",
                description: "Identify gaps and opportunities",
                details: "Clear documentation of where your contract exceeds market standards and where gaps exist—creating a roadmap for renewal negotiations or mid-term improvements.",
                color: "#4A90E2"
              },
              {
                icon: Award,
                title: "Renewal Leverage Development",
                description: "Enter renewals with confidence",
                details: "Armed with market intelligence, you negotiate from strength—knowing exactly what to ask for and having the data to back it up.",
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
              We bring deep market knowledge and access to current benchmarking data across hundreds of contracts. You get both the intelligence to understand your competitive position and the expertise to leverage it during renewals.
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
              Actionable market intelligence that drives better renewal outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: FileSearch,
                title: "Market Comparison Reports",
                description: "Detailed benchmarking reports comparing your contract terms to current market standards—discount levels, rebate structures, guarantee terms, and more. You see exactly where you stand competitively.",
                metric: "Complete market visibility"
              },
              {
                icon: Target,
                title: "Renewal Leverage & Positioning",
                description: "Strategic guidance on renewal positioning based on market intelligence. Know what to ask for, what's negotiable, and where to push hardest—backed by objective market data.",
                metric: "Data-driven negotiation"
              },
              {
                icon: TrendingUp,
                title: "Competitive Intelligence",
                description: "Ongoing insights into market trends, emerging pricing models, and industry shifts that could impact your contract value. Stay ahead of market movements throughout your term.",
                metric: "Proactive market awareness"
              },
              {
                icon: DollarSign,
                title: "Savings Opportunity Identification",
                description: "Clear quantification of potential savings available through market-rate pricing. Know exactly how much you're leaving on the table—and what you can recover at renewal.",
                metric: "Quantified opportunities"
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
                Market Intelligence Drives <span className="text-[#4A90E2]">Renewal Success</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#0B1F40] border border-[#D4AF37]/30 rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center" data-testid="case-study-metric-1">
                  <div className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2">$5.1M</div>
                  <div className="text-blue-100/70">Additional Annual Savings at Renewal</div>
                </div>
                <div className="text-center" data-testid="case-study-metric-2">
                  <div className="text-5xl md:text-6xl font-bold text-[#4A90E2] mb-2">8%</div>
                  <div className="text-blue-100/70">Improvement Over Incumbent Offer</div>
                </div>
                <div className="text-center" data-testid="case-study-metric-3">
                  <div className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2">100%</div>
                  <div className="text-blue-100/70">Market Data-Backed Positioning</div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-bold text-white mb-6">Case Study: Fortune 500 Manufacturer</h3>
                <div className="space-y-4 text-blue-100/70 leading-relaxed">
                  <p>
                    <span className="text-white font-semibold">The Challenge:</span> A large manufacturing employer was approaching renewal with 22,000 covered lives. Their incumbent PBM claimed their current rates were "industry-leading"—but the client had no objective benchmark to evaluate this claim.
                  </p>
                  <p>
                    <span className="text-white font-semibold">The BBP Approach:</span> We conducted comprehensive market benchmarking 18 months before renewal, comparing their contract against current market rates for similar employers. The analysis revealed significant gaps—especially in specialty rebates and MAC pricing.
                  </p>
                  <p>
                    <span className="text-white font-semibold">The Results:</span> Armed with objective market intelligence, the client negotiated from strength. They achieved an 8% improvement over their incumbent's "best and final" offer—translating to $5.1M in additional annual savings over the new three-year term.
                  </p>
                  <p className="text-[#D4AF37] font-semibold text-lg pt-4">
                    This wasn't guesswork or hope—this was market-informed negotiation that put millions back into the budget.
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
                  <h4 className="text-xl font-bold text-white mb-4">Renewing Without Market Intelligence</h4>
                  <ul className="space-y-3 text-blue-100/70 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Accept PBM claims of "competitive" rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Negotiate without objective benchmarks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Leave millions in savings on the table</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Realize gaps only after contract is signed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-[#D4AF37]/30">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                    <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Market-Informed Renewal</h4>
                  <ul className="space-y-3 text-blue-100/70 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Know exactly where you stand competitively</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Negotiate with objective market data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Capture all available market-rate savings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Enter renewal with confidence and leverage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Benchmark Section */}
      <section className="py-32 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              What We <span className="text-[#4A90E2]">Benchmark</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              Comprehensive competitive analysis across every contract element that impacts your costs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Pricing Analysis",
                items: [
                  "AWP discount levels by tier",
                  "MAC pricing methodologies",
                  "Specialty drug pricing structures",
                  "Dispensing fee comparisons"
                ]
              },
              {
                icon: TrendingUp,
                title: "Rebate Structures",
                items: [
                  "Manufacturer rebate guarantees",
                  "Formulary rebate levels",
                  "Performance-based rebates",
                  "Specialty rebate pass-through"
                ]
              },
              {
                icon: Shield,
                title: "Guarantee Terms",
                items: [
                  "Minimum savings commitments",
                  "Trend cap guarantees",
                  "Generic fill rate guarantees",
                  "Performance penalty terms"
                ]
              },
              {
                icon: Award,
                title: "Network Access",
                items: [
                  "Retail pharmacy network breadth",
                  "Specialty network discounts",
                  "Mail order pricing",
                  "Out-of-network access terms"
                ]
              }
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                data-testid={`benchmark-category-${i}`}
              >
                <Card className="bg-white/5 border-white/10 hover:border-[#4A90E2]/30 transition-all h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center mb-6 border border-[#4A90E2]/20">
                      <category.icon className="w-6 h-6 text-[#4A90E2]" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-blue-100/70">
                          <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
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
              <BarChart3 className="w-8 h-8 text-[#D4AF37] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Comprehensive Market Intelligence</h4>
                <p className="text-blue-100/70 leading-relaxed">
                  Our benchmarking covers every element that impacts your total pharmacy spend—from ingredient costs to network access. You get complete competitive visibility across your entire contract, not just selected highlights.
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
            Know Your Competitive Position <span className="text-[#D4AF37]">Before Renewal</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto" data-testid="cta-description">
            Annual market checks ensure you enter renewals with leverage—not hope. Contact us to benchmark your contract against current market rates.
          </p>
          <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-10 h-14 text-lg" data-testid="button-get-started">
            <Link href="/contact">
              Get Your Market Analysis <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
