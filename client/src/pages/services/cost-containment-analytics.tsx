import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { 
  CheckCircle, 
  AlertTriangle,
  DollarSign,
  TrendingUp,
  Target,
  BarChart3,
  Activity,
  ArrowRight,
  Search,
  XCircle,
  Zap,
  PieChart,
  Pill,
  FileBarChart,
  LineChart,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function CostContainmentAnalytics() {
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
                Cost Containment Analytics
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white" data-testid="hero-headline">
                Cost Containment Analytics That Find Money <span className="text-[#D4AF37]">You Didn't Know You Were Losing</span>
              </h1>
              <p className="text-xl text-blue-100/80 leading-relaxed mb-8" data-testid="hero-subhead">
                Advanced pricing analysis, waste elimination strategies, and utilization management that deliver measurable savings—not just reports.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-[#D4AF37] text-[#0B1F40] hover:bg-[#B59328] font-semibold text-lg px-8 py-6"
                data-testid="cta-discover-savings"
              >
                <Link href="/contact">
                  Discover Your Savings
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
                Hidden Costs Are <span className="text-red-400">Bleeding Your Budget</span>
              </h2>
              <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
                Complex pricing structures and wasteful spending patterns hide millions in unnecessary costs—most organizations don't even know to look for them
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Search,
                  title: "Hidden Costs Buried in Complex PBM Pricing",
                  description: "AWP spreads, MAC pricing variations, NADAC differentials—your pharmacy benefits are billed through layers of complex pricing mechanisms designed to obscure true costs. Without expert analysis, millions slip through unnoticed.",
                  impact: "Complexity = Hidden costs"
                },
                {
                  icon: AlertCircle,
                  title: "Wasteful Spending Patterns Go Unidentified",
                  description: "Duplicate therapies, inappropriate utilization, dosage inefficiencies—wasteful spending patterns compound month after month. Traditional reporting doesn't catch them because no one is specifically looking.",
                  impact: "Waste compounds monthly"
                },
                {
                  icon: XCircle,
                  title: "Generic Rebates vs. Specialty Rebates Misalignment",
                  description: "Manufacturer rebates and formulary rebates don't always align with what's best for your budget. Rebate optimization requires deep analysis that most organizations lack the expertise to perform.",
                  impact: "Missed rebate opportunities"
                },
                {
                  icon: TrendingUp,
                  title: "Utilization Creep Driving Unnecessary Spend",
                  description: "Member utilization patterns drift upward over time—more prescriptions, higher dosages, longer durations. Without continuous monitoring, utilization creep silently drains millions from your budget.",
                  impact: "Silent budget drain"
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
                Standard reporting shows you what you spent—not what you could have saved. <span className="text-red-400 font-semibold">Cost containment analytics reveal the hidden money you're losing every single day.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Analytics Approach Section */}
      <section className="py-32 bg-[#050e1f] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              BBP Expertise
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              Our <span className="text-[#4A90E2]">Analytics Approach</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              BenefitsBridge Partners combines deep pharmacy benefit expertise with advanced analytics to identify every opportunity for cost containment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Pricing Deep Dive",
                description: "Advanced pricing analysis reveals hidden opportunities",
                details: [
                  "Multi-source brand analysis identifies lower-cost alternatives",
                  "NADAC differentials expose pricing inefficiencies",
                  "Repricing opportunities uncover contract term gaps",
                  "Spread pricing analysis reveals carrier markups"
                ],
                color: "#4A90E2"
              },
              {
                icon: AlertCircle,
                title: "Waste Identification",
                description: "Systematic waste elimination across your portfolio",
                details: [
                  "Duplicate therapies consuming unnecessary budget",
                  "Inappropriate utilization driving avoidable costs",
                  "Dosage optimization opportunities",
                  "Therapeutic interchange possibilities"
                ],
                color: "#D4AF37"
              },
              {
                icon: BarChart3,
                title: "Rebate Optimization",
                description: "Maximize rebate capture and formulary alignment",
                details: [
                  "Manufacturer vs. formulary alignment analysis",
                  "Missed rebate opportunity identification",
                  "Formulary optimization recommendations",
                  "Rebate guarantee compliance verification"
                ],
                color: "#4A90E2"
              },
              {
                icon: TrendingUp,
                title: "Trend Analysis",
                description: "Predictive analytics for proactive cost management",
                details: [
                  "Spending pattern identification and forecasting",
                  "High-cost claimant trend monitoring",
                  "Therapeutic alternative opportunities",
                  "Utilization trend early warning system"
                ],
                color: "#D4AF37"
              }
            ].map((approach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
                data-testid={`approach-${i}`}
              >
                <div className="relative h-full bg-[#0B1F40] border border-white/10 rounded-xl p-8 hover:border-[#D4AF37]/30 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center mb-6 border border-[#4A90E2]/20">
                    <approach.icon className="w-7 h-7" style={{ color: approach.color }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{approach.title}</h3>
                  <p className="text-[#D4AF37] font-semibold mb-6 text-sm">{approach.description}</p>
                  <ul className="space-y-2">
                    {approach.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-blue-100/70">
                        <div className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
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
              We don't just deliver data dashboards—we provide expert analysis with actionable recommendations. Our team combines decades of pharmacy benefit experience with advanced analytics to find every dollar of savings opportunity in your program.
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
              Outcomes you can measure—dollars identified, opportunities quantified, and savings realized
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Actionable Cost Reduction Strategies",
                description: "Every finding includes specific recommendations with implementation guidance. We don't just tell you what's wrong—we show you exactly how to fix it and how much you'll save.",
                metric: "Implementation-ready"
              },
              {
                icon: DollarSign,
                title: "Specific Dollar Amounts Identified for Recovery",
                description: "We quantify every opportunity in actual dollars, not percentages or estimates. You know exactly how much money is at stake and where it's hiding in your program.",
                metric: "Quantified savings"
              },
              {
                icon: Activity,
                title: "Utilization Management Recommendations",
                description: "Clinical utilization insights paired with financial impact analysis. Our recommendations balance clinical appropriateness with cost containment objectives.",
                metric: "Clinical + Financial"
              },
              {
                icon: BarChart3,
                title: "Performance vs. Market Benchmarking",
                description: "Understand how your program performs against industry benchmarks and similar organizations. Identify areas of competitive advantage and opportunities for improvement.",
                metric: "Market context"
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

      {/* Proven Results / Case Studies */}
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
                Real Savings from <span className="text-[#4A90E2]">Real Analytics</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Case Study 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-[#0B1F40] border border-[#D4AF37]/30 rounded-2xl p-8"
                data-testid="case-study-1"
              >
                <div className="text-5xl font-bold text-[#D4AF37] mb-3">$3.2M</div>
                <div className="text-xl font-bold text-white mb-4">Multi-Source Brand Analysis</div>
                <p className="text-blue-100/70 leading-relaxed mb-4">
                  A regional employer with 8,500 covered lives was paying full brand pricing for medications with therapeutic alternatives available. Our multi-source brand analysis identified opportunities to shift utilization while maintaining clinical outcomes.
                </p>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-sm text-[#4A90E2] font-semibold mb-2">OUTCOME</div>
                  <p className="text-blue-100/70 text-sm">
                    Implementation of our recommendations saved <span className="text-[#D4AF37] font-semibold">$3.2M annually</span> through strategic formulary optimization and utilization management.
                  </p>
                </div>
              </motion.div>

              {/* Case Study 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#0B1F40] border border-[#D4AF37]/30 rounded-2xl p-8"
                data-testid="case-study-2"
              >
                <div className="text-5xl font-bold text-[#D4AF37] mb-3">$1.8M</div>
                <div className="text-xl font-bold text-white mb-4">NADAC Differential Corrections</div>
                <p className="text-blue-100/70 leading-relaxed mb-4">
                  A healthcare system discovered their contract included guaranteed NADAC-based pricing, but actual adjudications showed significant differentials. Our pricing deep dive quantified the exact discrepancy and contract deviation.
                </p>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-sm text-[#4A90E2] font-semibold mb-2">OUTCOME</div>
                  <p className="text-blue-100/70 text-sm">
                    <span className="text-[#D4AF37] font-semibold">$1.8M recovered</span> through retroactive pricing corrections and ongoing compliance monitoring to prevent future deviations.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Additional Results */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  metric: "18%",
                  title: "Specialty Spend Reduction",
                  description: "Average reduction in specialty pharmacy costs through utilization management and rebate optimization"
                },
                {
                  metric: "12%",
                  title: "Generic Efficiency Gain",
                  description: "Improvement in generic utilization rate through targeted intervention strategies"
                },
                {
                  metric: "22%",
                  title: "Waste Elimination",
                  description: "Reduction in duplicate therapy and inappropriate utilization costs"
                }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center bg-white/5 border border-white/10 rounded-xl p-6"
                  data-testid={`stat-${i}`}
                >
                  <div className="text-4xl font-bold text-[#4A90E2] mb-2">{stat.metric}</div>
                  <div className="text-lg font-bold text-white mb-3">{stat.title}</div>
                  <p className="text-blue-100/60 text-sm leading-relaxed">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Categories Section */}
      <section className="py-32 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Comprehensive <span className="text-[#4A90E2]">Analytics Categories</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              Four distinct analytics disciplines working together to identify every savings opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: PieChart,
                title: "Pricing Analytics",
                subtitle: "AWP vs. MAC vs. NADAC benchmarking",
                capabilities: [
                  "AWP spread analysis and trend monitoring",
                  "MAC list pricing verification and optimization",
                  "NADAC differential identification and quantification",
                  "Ingredient cost benchmarking across sources",
                  "Specialty drug pricing deep dive",
                  "Rebate pass-through accuracy validation"
                ]
              },
              {
                icon: Pill,
                title: "Clinical Analytics",
                subtitle: "Utilization patterns and therapy optimization",
                capabilities: [
                  "Utilization pattern analysis and trending",
                  "Therapy duplication identification",
                  "Dosage optimization opportunities",
                  "Therapeutic interchange evaluation",
                  "Step therapy compliance monitoring",
                  "Prior authorization effectiveness analysis"
                ]
              },
              {
                icon: FileBarChart,
                title: "Rebate Analytics",
                subtitle: "Formulary performance and manufacturer contracts",
                capabilities: [
                  "Manufacturer rebate opportunity analysis",
                  "Formulary performance vs. rebate capture",
                  "Contract guarantee compliance verification",
                  "Specialty rebate optimization",
                  "Rebate timing and payment accuracy",
                  "Exclusion list impact assessment"
                ]
              },
              {
                icon: LineChart,
                title: "Financial Analytics",
                subtitle: "Trend analysis and budget forecasting",
                capabilities: [
                  "Spending trend identification and forecasting",
                  "High-cost claimant monitoring and intervention",
                  "Budget variance analysis and explanation",
                  "Cost driver identification and quantification",
                  "Market benchmark comparison",
                  "ROI modeling for intervention strategies"
                ]
              }
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
                data-testid={`category-${i}`}
              >
                <Card className="bg-white/5 border-white/10 hover:border-[#4A90E2]/30 transition-all h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center flex-shrink-0 border border-[#4A90E2]/20">
                        <category.icon className="w-7 h-7 text-[#4A90E2]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{category.title}</h3>
                        <p className="text-[#D4AF37] text-sm font-semibold">{category.subtitle}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {category.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-blue-100/70">
                          <CheckCircle className="w-4 h-4 text-[#4A90E2] mt-0.5 flex-shrink-0" />
                          <span>{capability}</span>
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
            className="mt-12 bg-[#050e1f] border border-white/10 rounded-xl p-8 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Integrated Analytics Approach</h4>
                <p className="text-blue-100/70 leading-relaxed">
                  These four analytics disciplines don't work in isolation—they're integrated into a comprehensive cost containment strategy. Pricing insights inform clinical recommendations, utilization trends shape rebate optimization, and financial forecasting guides strategic decision-making. This holistic approach ensures no savings opportunity goes unidentified.
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
            Uncover the Savings Hiding in <span className="text-[#D4AF37]">Your Pharmacy Budget</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto" data-testid="cta-description">
            Contact us today to discover how our cost containment analytics can identify millions in hidden savings opportunities.
          </p>
          <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-10 h-14 text-lg" data-testid="button-get-analytics">
            <Link href="/contact">
              Get Your Analytics Assessment <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
