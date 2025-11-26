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
  Target,
  Clock,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const mainServices = [
  {
    title: "Contract Management & Setup",
    icon: FileBarChart,
    description: "We capture all bid requirements and contract terms upfront, reserving them as a warranty for verification to ensure Day One readiness.",
    features: [
      "Capture all bid requirements and contract terms",
      "Reserve terms as a warranty for verification",
      "Ensure Day One readiness",
      "Comprehensive RFP management and negotiation"
    ],
    outcome: "Contracts that work from the moment you sign them"
  },
  {
    title: "Continuous Claims Monitoring",
    icon: Activity,
    description: "Real-time verification of every prescription claim with 100% adjudication coverage—not sampling, not estimates, not 'close enough.'",
    features: [
      "Real-time verification of every prescription claim",
      "100% adjudication coverage (no sampling)",
      "Immediate discrepancy alerts",
      "Automated compliance tracking"
    ],
    outcome: "Stop overcharges before they leave your budget"
  },
  {
    title: "Proactive Reconciliation",
    icon: Shield,
    description: "Monthly contract term verification combined with annual market checks ensure your contracts remain competitive and compliant year after year.",
    features: [
      "Monthly contract term verification",
      "Annual market checks for competitiveness",
      "Guarantee compliance monitoring",
      "Performance trend analysis"
    ],
    outcome: "Recover millions in mistakenly paid dollars"
  },
  {
    title: "Strategic Consulting & Navigation",
    icon: Target,
    description: "Expert guidance on pharmacy benefit strategy, technology sourcing, and implementation through best-in-class solution partnerships.",
    features: [
      "Expert guidance on pharmacy benefit strategy",
      "Technology sourcing and implementation",
      "Best-in-class solution partnerships",
      "Industry thought leadership"
    ],
    outcome: "Navigate to greater affordability with confidence"
  }
];

const successStories = [
  {
    icon: DollarSign,
    metric: "$12M",
    description: "Recovered in reduced costs for a single client through complete contract accuracy",
    category: "Cost Recovery"
  },
  {
    icon: TrendingUp,
    metric: "100%",
    description: "Claim adjudication coverage from Day One—every prescription verified against contract terms",
    category: "Coverage"
  },
  {
    icon: Clock,
    metric: "3-9 Months",
    description: "Gap eliminated between contract signing and verification—protection starts immediately",
    category: "Time Saved"
  },
  {
    icon: Target,
    metric: "Millions",
    description: "Identified in overcharges through real-time monitoring across client portfolios",
    category: "Savings Identified"
  }
];

const implementationProcess = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "Comprehensive analysis of your current pharmacy benefits, contracts, and claims data to identify opportunities",
    icon: Search
  },
  {
    step: "02",
    title: "Contract Configuration",
    description: "Capture all bid requirements and contract terms, establishing verification benchmarks for ongoing monitoring",
    icon: FileBarChart
  },
  {
    step: "03",
    title: "Day One Verification Launch",
    description: "Immediate claims verification begins—100% coverage from the first prescription processed",
    icon: Activity
  },
  {
    step: "04",
    title: "Ongoing Monitoring & Recovery",
    description: "Continuous performance tracking, monthly reconciliation, and proactive recovery of mistakenly paid dollars",
    icon: TrendingUp
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
              Our Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white" data-testid="hero-headline">
              Services That Put Dollars Back in <span className="text-[#D4AF37]">Your Budget</span>
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed" data-testid="hero-subhead">
              From contract negotiation to ongoing monitoring, we ensure every pharmacy dollar is spent according to your terms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
              Outcome-Focused <span className="text-[#4A90E2]">Services</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              Comprehensive pharmacy benefit management services designed to protect your budget from Day One
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/[0.07] hover:border-[#D4AF37]/30 transition-all group"
                data-testid={`service-${i}`}
              >
                <div className="w-14 h-14 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center mb-6 border border-[#4A90E2]/20 group-hover:bg-[#4A90E2]/20 transition-colors">
                  <service.icon className="w-7 h-7 text-[#4A90E2]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-blue-100/70 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-blue-100/60">
                      <CheckCircle className="w-4 h-4 text-[#4A90E2] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="text-sm text-[#D4AF37] font-medium mb-1">OUTCOME</div>
                  <div className="text-white font-semibold">{service.outcome}</div>
                </div>
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
                    "You sign multi-million dollar pharmacy contracts today. Claims start processing tomorrow. But you won't see your actual contract performance for 3-9 months.",
                    "During that gap, terms and conditions are being applied without verification. Discounts missed. Rebates miscalculated. Every time.",
                    "Traditional approach samples claims after the fact—damage already done, money already gone.",
                    "Every audit, every sampling reveals mistakes. They're always in favor of the carrier. Always."
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
                    "Day One protection—claims are processed as negotiated from the first prescription",
                    "100% verification of every adjudication—no sampling, no gaps, no guessing",
                    "Immediate alerts when discrepancies occur, allowing real-time correction",
                    "Millions in mistakenly paid dollars recovered and returned to your budget"
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

      {/* Results Section */}
      <section className="py-32 bg-[#050e1f] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Proven Results
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              Real Outcomes for <span className="text-[#D4AF37]">Real Clients</span>
            </h2>
            <p className="text-blue-100/70 text-xl max-w-3xl mx-auto">
              Our approach delivers measurable results—dollars saved, percentages recovered, and time improved
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                data-testid={`result-${i}`}
              >
                <Card className="bg-[#0B1F40] border-white/10 hover:border-[#D4AF37]/30 transition-all h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                      <story.icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div className="text-sm text-[#4A90E2] font-medium mb-2">{story.category}</div>
                    <div className="text-4xl font-bold text-white mb-4">{story.metric}</div>
                    <p className="text-blue-100/60 text-sm leading-relaxed">{story.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white/5 border border-white/10 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-white mb-2">The Scale of the Problem</h4>
                <p className="text-blue-100/70 leading-relaxed">
                  Millions of prescription claim adjudications happen daily across our client portfolios. Even small percentage errors compound into massive losses. Our approach eliminates the gap between contract signing and verification, protecting every dollar from Day One.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Implementation <span className="text-[#D4AF37]">Process</span>
            </h2>
            <p className="text-xl text-blue-100/70 max-w-2xl mx-auto">
              A straightforward path from assessment to ongoing protection and recovery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {implementationProcess.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center relative"
                data-testid={`process-step-${phase.step}`}
              >
                <div className="text-7xl font-serif font-bold text-white/5 mb-4">{phase.step}</div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center mb-4 border border-[#4A90E2]/20 mx-auto">
                    <phase.icon className="w-6 h-6 text-[#4A90E2]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{phase.title}</h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#050e1f] border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid="cta-headline">
            Let's Start Recovering Your <span className="text-[#D4AF37]">Pharmacy Dollars</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto" data-testid="cta-description">
            Contact us today to learn how we can protect your pharmacy budget from Day One and recover millions in mistakenly paid dollars.
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
