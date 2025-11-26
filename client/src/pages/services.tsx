import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Shield, 
  AlertTriangle,
  DollarSign,
  FileBarChart,
  Activity,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const enhancedReports = [
  {
    icon: TrendingUp,
    title: "Stewardship Report",
    subtitle: "Executive-Level Performance Overview",
    description: "Provides a comprehensive, year-over-year view of pharmacy plan performance, utilization, and cost trends. This offers executive-level insights to support strategic planning, budgeting, and vendor performance review.",
    features: [
      "Financial and utilization trend analysis",
      "Year-over-year comparisons",
      "Total Plan Cost and PMPM metrics",
      "High-level executive overview"
    ],
    formats: "Single comprehensive format"
  },
  {
    icon: FileBarChart,
    title: "Top Drugs Report",
    subtitle: "High-Cost Medication Analysis",
    description: "Identifies the top 50 drugs by ingredient cost and usage. This report pinpoints high-cost medications driving plan spend and targeted intervention opportunities.",
    features: [
      "Top 50 drugs by ingredient cost",
      "Change in ingredient cost tracking",
      "Script count analysis",
      "Change in script count trends"
    ],
    formats: "4 Formats Available"
  },
  {
    icon: Users,
    title: "Large Claimant Report",
    subtitle: "High-Risk Member Identification",
    description: "Highlights high-cost individual claimants and their prescription spend. This report helps assess risk concentration and potential stop-loss impact.",
    features: [
      "High-cost claimant identification",
      "Top utilized drugs per member",
      "Current vs. previous plan cost comparison",
      "Share of total spend analysis"
    ],
    formats: "2 Formats Available"
  },
  {
    icon: AlertTriangle,
    title: "Multi-Source Brand Report",
    subtitle: "Generic Savings Opportunities",
    description: "Lists brand drugs with available generic equivalents. This report identifies cost-saving opportunities by switching to generics.",
    features: [
      "Brand drugs with generic alternatives",
      "Ingredient cost comparisons",
      "Script count analysis",
      "Potential savings identification"
    ],
    formats: "2 Formats Available"
  },
  {
    icon: DollarSign,
    title: "NADAC Differential Report",
    subtitle: "Pricing Transparency Benchmark",
    description: "Compares actual drug costs to NADAC (National Average Drug Acquisition Cost) benchmarks. This report flags inflated drug pricing and evaluates PBM contract performance for transparency and pricing fairness.",
    features: [
      "NADAC differential analysis",
      "Percentage markup calculation",
      "Dollar difference tracking",
      "Average NADAC differential"
    ],
    formats: "3 Formats Available"
  },
  {
    icon: Target,
    title: "Repricing Report",
    subtitle: "Multi-Vendor Cost Comparison",
    description: "Models cost across multiple PBM vendors based on historical claims data. This supports PBM selection and renewal decisions by quantifying potential savings under alternative pricing arrangements.",
    features: [
      "Multi-vendor cost comparison",
      "Total net spend analysis",
      "Total savings calculation",
      "Alternative pricing scenarios"
    ],
    formats: "Comparative analysis format"
  },
  {
    icon: Shield,
    title: "Reconciliation Report",
    subtitle: "Contract Guarantee Validation",
    description: "Compares actual performance against contract guarantees on discounts, dispensing fees, and rebates. Identifies contract shortfalls or overperformance and validates PBM compliance.",
    features: [
      "Actual vs. guaranteed performance",
      "Discount compliance tracking",
      "Rebate verification",
      "Percentage and dollar variances"
    ],
    formats: "Contract compliance format"
  }
];

const coreServices = [
  {
    title: "PBM Contract Management",
    description: "Complete RFP management, competitive bidding, and contract negotiation services grounded in nationally benchmarked best practices.",
    icon: FileBarChart
  },
  {
    title: "Ongoing Claims Monitoring",
    description: "Continuous performance monitoring to ensure compliance with negotiated discounts, rebates, and financial guarantees.",
    icon: Activity
  },
  {
    title: "Cost Containment Analytics",
    description: "Both retrospective and predictive analytics to identify opportunities for cost containment while minimizing member disruption.",
    icon: TrendingUp
  },
  {
    title: "Annual Market Checks",
    description: "Year-over-year market competitiveness reviews to ensure long-term accountability and optimal pricing.",
    icon: Target
  }
];

export default function Services() {
  return (
    <div className="font-sans bg-[#0B1F40] min-h-screen text-white selection:bg-[#D4AF37] selection:text-[#0B1F40]">
      <Nav variant="solid" />
      
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#1a3b6e] via-[#0B1F40] to-[#050e1f]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Enhanced Analytics & Reporting
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white">
              Industry-Leading <span className="text-[#D4AF37]">PBM Services</span>
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed">
              Comprehensive pharmacy benefit management services powered by advanced analytics, deep industry expertise, and proprietary technology platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
              What We Do for <span className="text-[#4A90E2]">You</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              BenefitsBridge Partners, supported by Ringmaster Technologies, delivers a best-in-class integrated service model
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/[0.07] hover:border-[#D4AF37]/30 transition-all group"
                data-testid={`core-service-${i}`}
              >
                <div className="w-14 h-14 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center mb-6 border border-[#4A90E2]/20 group-hover:bg-[#4A90E2]/20 transition-colors">
                  <service.icon className="w-7 h-7 text-[#4A90E2]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-blue-100/70 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-[#050e1f] border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Why Pharmacy Contracts Are <span className="text-[#D4AF37]">Difficult</span>
                </h3>
                <div className="space-y-4">
                  {[
                    "PBM contracts are legal contracts requiring deep knowledge of possible 'gotchas'",
                    "Pharmacy comparisons require expensive 3rd party data sources (Medi-Span, First Data Bank, NCPDP)",
                    "Incredibly time-consuming merging of contract terms, data sources, and client pharmacy data",
                    "Cannot rely on PBM's own projections—they use the most favorable assumptions for themselves"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                      <span className="text-blue-100/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  What You <span className="text-[#4A90E2]">Can Expect</span>
                </h3>
                <div className="space-y-4">
                  {[
                    "Confident that your PBM decision is the best fit for you and your beneficiaries",
                    "Constant monitoring of your claims to protect against abusive pricing practices",
                    "Never fall behind the market with efficient annual market checks",
                    "Access to thought leadership at the forefront of the PBM industry"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#4A90E2] mt-0.5 flex-shrink-0" />
                      <span className="text-blue-100/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Reports */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Enhanced Reporting Offerings
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              Seven Powerful <span className="text-[#D4AF37]">Analytics Reports</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              Comprehensive insights to drive strategic decisions, identify savings opportunities, and ensure contract compliance
            </p>
          </div>

          <div className="space-y-6">
            {enhancedReports.map((report, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                data-testid={`report-${report.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Card className="bg-[#0F264A] border-white/10 hover:border-[#D4AF37]/30 transition-all group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-12 gap-0">
                      {/* Icon & Title Section */}
                      <div className="md:col-span-4 bg-gradient-to-br from-[#0B1F40] to-[#050e1f] p-8 flex flex-col justify-between border-r border-white/5">
                        <div>
                          <div className="w-16 h-16 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/20 transition-colors">
                            <report.icon className="w-8 h-8 text-[#D4AF37]" />
                          </div>
                          <h3 className="text-2xl font-bold mb-2 text-white">{report.title}</h3>
                          <p className="text-[#4A90E2] text-sm font-medium mb-4">{report.subtitle}</p>
                        </div>
                        <div className="text-sm text-blue-100/50 font-medium border-t border-white/5 pt-4">
                          {report.formats}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="md:col-span-8 p-8">
                        <p className="text-blue-100/80 mb-6 leading-relaxed text-lg">
                          {report.description}
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {report.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-blue-100/60">
                              <CheckCircle className="w-4 h-4 text-[#4A90E2] mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Report Disclaimer */}
          <div className="mt-12 bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Reporting Disclaimer</h4>
            <div className="text-sm text-blue-100/60 space-y-2 leading-relaxed">
              <p>• Financial results are based on analysis of provided claims data. Claims with missing or incomplete pricing information may have been excluded.</p>
              <p>• Analysis assumes consistent utilization patterns and does not reflect potential changes in drug mix, script volumes, or future market conditions.</p>
              <p>• Financial estimates are intended for illustrative purposes only; actual results may vary due to changes in utilization, pricing policies, or external factors.</p>
              <p>• Pricing terms or guarantees are provided for internal evaluation purposes only and should not be disclosed to external parties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-[#050e1f] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Next Steps for <span className="text-[#D4AF37]">Engagement</span>
            </h2>
            <p className="text-xl text-blue-100/70 max-w-2xl mx-auto">
              A straightforward process to get you started with comprehensive PBM oversight
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                step: "01", 
                title: "Prescription Intake", 
                desc: "Complete prescription intake analysis with requested documentation and reporting" 
              },
              { 
                step: "02", 
                title: "Review & Sign", 
                desc: "Letter of Authority, SOW (Statement of Work), and Business Associate Agreement" 
              },
              { 
                step: "03", 
                title: "Implementation", 
                desc: "Begin comprehensive analytics, monitoring, and optimization services" 
              }
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
                data-testid={`step-${phase.step}`}
              >
                <div className="text-7xl font-serif font-bold text-white/5 mb-4">{phase.step}</div>
                <div className="bg-[#0B1F40] border border-white/10 rounded-xl p-8 hover:border-[#D4AF37]/30 transition-all">
                  <h3 className="text-2xl font-bold mb-3 text-white">{phase.title}</h3>
                  <p className="text-blue-100/60">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Let's Start Your <span className="text-[#D4AF37]">PBM Transformation</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
            Contact us today to learn how our enhanced analytics and reporting can optimize your pharmacy benefit program.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-10 h-14 text-lg" data-testid="button-get-started">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
