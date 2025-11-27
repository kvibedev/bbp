import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { 
  CheckCircle, 
  AlertTriangle,
  BarChart3,
  TrendingUp,
  DollarSign,
  Activity,
  FileText,
  Shield,
  XCircle,
  ArrowRight,
  Eye,
  Target,
  Clock,
  LineChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function EnhancedReporting() {
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
                Enhanced Reporting
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white" data-testid="hero-headline">
                Enhanced Reporting That Turns Data Into <span className="text-[#D4AF37]">Actionable Decisions</span>
              </h1>
              <p className="text-xl text-blue-100/80 leading-relaxed mb-8" data-testid="hero-subhead">
                Executive dashboards. Custom analytics. Performance metrics that matter. See where your pharmacy dollars go—and where they shouldn't.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-[#D4AF37] text-[#0B1F40] hover:bg-[#B59328] font-semibold text-lg px-8 py-6"
                data-testid="cta-see-data-clearly"
              >
                <Link href="/contact">
                  See Your Data Clearly
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
                Standard PBM Reports Are <span className="text-red-400">Complex, Delayed, and Hide Problems</span>
              </h2>
              <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
                You're drowning in data but starving for insights—hundreds of pages of reports that arrive weeks late and bury critical information
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: FileText,
                  title: "Reports Designed to Confuse",
                  description: "Standard PBM reports are deliberately complex—200-page PDFs with inconsistent terminology, buried metrics, and conflicting data across different sections. Finding actionable information is nearly impossible.",
                  impact: "Complexity by design"
                },
                {
                  icon: Clock,
                  title: "Data Arrives Too Late to Act",
                  description: "Monthly reports arrive 45-60 days after the claims period ends. By the time you see utilization spikes or cost trends, the damage is done and opportunities for intervention have passed.",
                  impact: "Delayed insights = missed action"
                },
                {
                  icon: XCircle,
                  title: "Critical Metrics Buried or Missing",
                  description: "The numbers that matter most—cost per member trends, contract compliance, guarantee performance—are either buried in appendices or missing entirely. You can't manage what you can't see.",
                  impact: "No visibility into what matters"
                },
                {
                  icon: AlertTriangle,
                  title: "No Executive Summary or Context",
                  description: "Raw data without interpretation leaves executives unable to make decisions. What does a 15% specialty increase mean? Is it good or bad? Compared to what? Standard reports don't answer these questions.",
                  impact: "Data without decisions"
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
                Standard PBM reporting is designed to provide data, not insights. <span className="text-red-400 font-semibold">You need actionable intelligence that drives decisions—not more pages to wade through.</span>
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
              Expert Analysis Meets <span className="text-[#4A90E2]">Clear Visualization</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              BenefitsBridge Partners delivers enhanced reporting that transforms raw data into actionable executive intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: BarChart3,
                title: "Real-Time Executive Dashboards",
                description: "Key metrics at a glance",
                details: "Executive summary dashboards present the metrics that matter—spend trends, contract compliance, budget variance—in clear, visual formats that enable immediate understanding.",
                color: "#4A90E2"
              },
              {
                icon: LineChart,
                title: "Custom Analytics",
                description: "Insights tailored to your needs",
                details: "Custom report cards focus on your specific priorities—whether cost containment, clinical outcomes, or contract performance. Get the analysis you need, not generic industry templates.",
                color: "#D4AF37"
              },
              {
                icon: Target,
                title: "Performance Scorecards",
                description: "Measure what matters",
                details: "Clear performance metrics track progress against goals and benchmarks. See immediately if you're on track or need intervention—with context that explains why.",
                color: "#4A90E2"
              },
              {
                icon: Activity,
                title: "Actionable Insights",
                description: "Intelligence that drives decisions",
                details: "Analysis comes with recommendations—not just data. Every trend is interpreted, every variance explained, every opportunity quantified for action.",
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
              We combine pharmacy benefit expertise with data visualization best practices. You get both the analytics to understand your data and the interpretation to know what to do about it.
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
              Clear, actionable reporting that drives better pharmacy benefit decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: BarChart3,
                title: "Executive Summary Dashboards",
                description: "One-page visual summaries of your pharmacy program performance—key metrics, trends, and variances presented clearly for executive decision-making. No wading through hundreds of pages.",
                metric: "Clarity at a glance"
              },
              {
                icon: FileText,
                title: "Custom Report Cards",
                description: "Tailored analytics focused on your specific priorities and goals. Whether tracking clinical outcomes, cost trends, or contract compliance, get reports designed for your decision needs.",
                metric: "Customized intelligence"
              },
              {
                icon: TrendingUp,
                title: "Trend Analysis & Forecasting",
                description: "Historical trend analysis combined with forward-looking projections enables proactive management. See where costs are heading and intervene before budgets are exceeded.",
                metric: "Proactive insight"
              },
              {
                icon: DollarSign,
                title: "Budget Forecasting & Variance",
                description: "Real-time budget tracking shows actual vs. projected spend with variance analysis and explanations. Know immediately if you're on track or need corrective action.",
                metric: "Budget confidence"
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
                Clear Reporting Drives <span className="text-[#4A90E2]">Better Outcomes</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#0B1F40] border border-[#D4AF37]/30 rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center" data-testid="case-study-metric-1">
                  <div className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2">$2.4M</div>
                  <div className="text-blue-100/70">Waste Identified Through Reporting</div>
                </div>
                <div className="text-center" data-testid="case-study-metric-2">
                  <div className="text-5xl md:text-6xl font-bold text-[#4A90E2] mb-2">3 Weeks</div>
                  <div className="text-blue-100/70">Faster Decision-Making</div>
                </div>
                <div className="text-center" data-testid="case-study-metric-3">
                  <div className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2">90%</div>
                  <div className="text-blue-100/70">Reduction in Report Review Time</div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-bold text-white mb-6">Case Study: Multi-State Employer</h3>
                <div className="space-y-4 text-blue-100/70 leading-relaxed">
                  <p>
                    <span className="text-white font-semibold">The Challenge:</span> A 9,000-member employer group received standard PBM reports monthly—200+ page PDFs that arrived 45 days late. Their benefits team spent hours trying to extract meaningful insights, often missing critical utilization patterns.
                  </p>
                  <p>
                    <span className="text-white font-semibold">The BBP Approach:</span> We implemented enhanced reporting with executive dashboards, custom utilization analytics, and automated variance alerts. Key metrics were presented visually with expert interpretation and actionable recommendations.
                  </p>
                  <p>
                    <span className="text-white font-semibold">The Results:</span> Within six months, enhanced utilization reporting identified $2.4M in wasteful spending patterns—specialty drug overutilization, low-value therapy persistence, and preventable ER visits. The clarity enabled immediate intervention.
                  </p>
                  <p className="text-[#D4AF37] font-semibold text-lg pt-4">
                    This wasn't buried in standard reports—this was clear, actionable intelligence that drove measurable cost savings.
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
                  <h4 className="text-xl font-bold text-white mb-4">Standard PBM Reporting</h4>
                  <ul className="space-y-3 text-blue-100/70 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>200-page PDFs arriving 45+ days late</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Critical metrics buried or missing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Data without interpretation or context</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></div>
                      <span>Hours spent extracting insights manually</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-[#D4AF37]/30">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                    <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Enhanced BBP Reporting</h4>
                  <ul className="space-y-3 text-blue-100/70 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Executive dashboards with real-time data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Key metrics highlighted and visualized</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Expert interpretation with recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                      <span>Immediate understanding and action</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Report Categories Section */}
      <section className="py-32 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Report <span className="text-[#4A90E2]">Categories</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              Comprehensive analytics organized by decision focus—from financial to strategic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Financial Reports",
                items: [
                  "Spend trends by category",
                  "Budget vs. actual variance",
                  "Cost per member analysis",
                  "ROI and savings tracking"
                ]
              },
              {
                icon: Activity,
                title: "Clinical Reports",
                items: [
                  "Utilization pattern analysis",
                  "Therapy optimization opportunities",
                  "Adherence metrics by condition",
                  "High-risk member identification"
                ]
              },
              {
                icon: Shield,
                title: "Compliance Reports",
                items: [
                  "Contract adherence tracking",
                  "Guarantee performance status",
                  "SLA compliance monitoring",
                  "Audit trail documentation"
                ]
              },
              {
                icon: Target,
                title: "Strategic Reports",
                items: [
                  "Market position benchmarking",
                  "Renewal readiness assessment",
                  "ROI analysis and projections",
                  "Multi-year trend analysis"
                ]
              }
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                data-testid={`report-category-${i}`}
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
              <Eye className="w-8 h-8 text-[#D4AF37] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Complete Visibility Across All Dimensions</h4>
                <p className="text-blue-100/70 leading-relaxed">
                  Our enhanced reporting covers every aspect of your pharmacy program—from daily financial performance to long-term strategic positioning. You get complete visibility with the context and interpretation needed to drive action.
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
            Turn Your Data Into <span className="text-[#D4AF37]">Actionable Intelligence</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto" data-testid="cta-description">
            Enhanced reporting delivers the clarity and insights you need to make confident pharmacy benefit decisions. Contact us to see your data clearly.
          </p>
          <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-10 h-14 text-lg" data-testid="button-get-started">
            <Link href="/contact">
              Get Enhanced Reporting <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
