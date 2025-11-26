import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { Award, Target, Shield, Lock, Building2, CheckCircle, FileCheck, Compass, Users, TrendingUp, Lightbulb, ArrowRight, BookOpen, Zap, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const trustCriteria = [
  {
    icon: Shield,
    title: "Security",
    description: "Protection against unauthorized access"
  },
  {
    icon: CheckCircle,
    title: "Availability",
    description: "System accessibility as agreed upon"
  },
  {
    icon: FileCheck,
    title: "Processing Integrity",
    description: "Timely and accurate data processing"
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "Protection of sensitive information"
  },
  {
    icon: Award,
    title: "Privacy",
    description: "Proper handling of personal information"
  }
];

export default function About() {
  return (
    <div className="font-sans bg-[#0B1F40] min-h-screen text-white selection:bg-[#D4AF37] selection:text-[#0B1F40]">
      <Nav variant="solid" />
      
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a3b6e] via-[#0B1F40] to-[#050e1f]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase justify-center">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              About BenefitsBridge Partners
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white leading-tight" data-testid="text-hero-headline">
              Your Navigator to <span className="text-[#D4AF37]">Pharmacy Benefits Excellence</span>
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed" data-testid="text-hero-subhead">
              BenefitsBridge Partners combines deep industry expertise with cutting-edge technology to stop pharmacy overspending from Day One.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                Our Story
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white" data-testid="text-our-story-heading">
                Built to Solve a <span className="text-[#4A90E2]">Critical Problem</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-[#0F264A] border border-white/10 rounded-xl p-8"
                data-testid="card-story-problem"
              >
                <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                  <Target className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">The Problem We Saw</h3>
                <p className="text-blue-100/70 leading-relaxed mb-4">
                  Pharmacy contract gaps were causing employers to lose millions in overcharges. Between contract signature and first verification, countless adjudication errors went undetected—always in favor of the carrier.
                </p>
                <p className="text-blue-100/60 text-sm leading-relaxed">
                  Employers needed more than just technology. They needed expert navigation through the complex world of pharmacy benefits management.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-[#0F264A] border border-white/10 rounded-xl p-8"
                data-testid="card-story-solution"
              >
                <div className="w-14 h-14 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center mb-6 border border-[#4A90E2]/20">
                  <Compass className="w-7 h-7 text-[#4A90E2]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Our Solution</h3>
                <p className="text-blue-100/70 leading-relaxed mb-4">
                  Founded on <span className="font-bold text-white">30+ years of combined benefits expertise</span>, we positioned ourselves as trusted solutions architects—not just technology vendors.
                </p>
                <p className="text-blue-100/60 text-sm leading-relaxed">
                  Building on the established credibility of Alamo, BenefitsBridge Partners guides employers to the right solutions at the right time, ensuring their pharmacy benefits work from Day One.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-32 bg-[#050e1f] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                What Makes Us Different
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white" data-testid="text-different-heading">
                Beyond Technology, <span className="text-[#D4AF37]">True Partnership</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-[#0B1F40] border border-white/10 rounded-xl p-8"
                data-testid="card-different-navigation"
              >
                <div className="w-12 h-12 rounded-lg bg-[#4A90E2]/10 flex items-center justify-center mb-6 border border-[#4A90E2]/20">
                  <Compass className="w-6 h-6 text-[#4A90E2]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Expert Navigation</h3>
                <p className="text-blue-100/70 leading-relaxed">
                  We don't just sell technology—we guide you to the right solutions. Our team brings decades of benefits expertise to ensure your strategy aligns with your goals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#0B1F40] border border-white/10 rounded-xl p-8"
                data-testid="card-different-dayone"
              >
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                  <Zap className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Day One Focus</h3>
                <p className="text-blue-100/70 leading-relaxed">
                  No more waiting 3-9 months to see if your contract works. We capture terms upfront and verify compliance from the first prescription.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#0B1F40] border border-white/10 rounded-xl p-8"
                data-testid="card-different-coverage"
              >
                <div className="w-12 h-12 rounded-lg bg-[#4A90E2]/10 flex items-center justify-center mb-6 border border-[#4A90E2]/20">
                  <Eye className="w-6 h-6 text-[#4A90E2]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Complete Coverage</h3>
                <p className="text-blue-100/70 leading-relaxed">
                  100% adjudication verification, not sampling. Every claim checked, every dollar accounted for—no gaps, no guesswork.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#0B1F40] border border-white/10 rounded-xl p-8"
                data-testid="card-different-results"
              >
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                  <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Proven Results</h3>
                <p className="text-blue-100/70 leading-relaxed">
                  <span className="font-bold text-white">$12M+ recovered</span> for clients through precise contract verification and ongoing optimization.
                </p>
              </motion.div>
            </div>

            {/* Technology Partnerships - Generic Mention */}
            <div className="bg-gradient-to-br from-[#0F264A] to-[#050e1f] border border-white/10 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#4A90E2]/10 flex items-center justify-center flex-shrink-0 border border-[#4A90E2]/20">
                  <Lightbulb className="w-6 h-6 text-[#4A90E2]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Technology Partnerships</h3>
                  <p className="text-blue-100/70 leading-relaxed">
                    We partner with leading technology platforms to deliver best-in-class solutions tailored to your specific needs. Our expertise lies in sourcing, implementing, and optimizing the right tools to maximize your pharmacy benefits performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                How We Work
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white" data-testid="text-how-we-work-heading">
                A Proven <span className="text-[#4A90E2]">Process</span>
              </h2>
              <p className="text-xl text-blue-100/70 max-w-3xl mx-auto leading-relaxed">
                Our systematic approach ensures you get results from day one and continue optimizing over time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: "01",
                  title: "Strategic Consulting",
                  description: "We start by understanding your goals, challenges, and current state to design the right strategy.",
                  icon: Target
                },
                {
                  number: "02",
                  title: "Technology Sourcing",
                  description: "We identify and implement the best-in-class platforms that align with your specific needs.",
                  icon: Lightbulb
                },
                {
                  number: "03",
                  title: "Ongoing Navigation",
                  description: "We provide continuous guidance and support to ensure you maximize value and stay compliant.",
                  icon: Compass
                },
                {
                  number: "04",
                  title: "Results Optimization",
                  description: "We measure performance and optimize continuously to drive greater savings and efficiency.",
                  icon: TrendingUp
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0F264A] border border-white/10 rounded-xl p-6 relative"
                  data-testid={`card-process-${i}`}
                >
                  <div className="text-[#D4AF37] font-bold text-5xl opacity-20 absolute top-4 right-4">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-[#4A90E2]/10 flex items-center justify-center mb-4 border border-[#4A90E2]/20 relative z-10">
                    <step.icon className="w-6 h-6 text-[#4A90E2]" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance - Concise Version */}
      <section className="py-32 bg-[#050e1f] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                Security & Compliance
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white" data-testid="text-security-heading">
                SOC 2 <span className="text-[#4A90E2]">Compliant</span>
              </h2>
              <p className="text-xl text-blue-100/70 max-w-3xl mx-auto leading-relaxed">
                Your data security is our priority. Our platform partners maintain SOC 2 compliance, ensuring your sensitive information is protected with enterprise-grade security.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6 mb-12">
              {trustCriteria.map((criteria, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#0B1F40] border border-white/10 rounded-xl p-6 text-center"
                  data-testid={`trust-criteria-${i}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#4A90E2]/10 flex items-center justify-center mx-auto mb-4 border border-[#4A90E2]/20">
                    <criteria.icon className="w-6 h-6 text-[#4A90E2]" />
                  </div>
                  <h4 className="font-bold text-white mb-2 text-sm">{criteria.title}</h4>
                  <p className="text-blue-100/60 text-xs leading-relaxed">{criteria.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#1a3b6e] to-[#0B1F40] border border-white/10 rounded-2xl p-10 text-center">
              <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6 border-2 border-[#D4AF37]/30">
                <Lock className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Enterprise-Grade Security</h3>
              <p className="text-blue-100/70 text-lg max-w-2xl mx-auto leading-relaxed">
                All data is housed in secure cloud infrastructure with comprehensive encryption, granular access controls, and complete audit trails—meeting the highest standards for healthcare data protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                Who We Serve
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white" data-testid="text-who-we-serve-heading">
                Trusted by Leading <span className="text-[#D4AF37]">Organizations</span>
              </h2>
              <p className="text-xl text-blue-100/70 max-w-3xl mx-auto leading-relaxed">
                We specialize in serving organizations that demand sophisticated PBM oversight, transparency, and accountability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { 
                  title: "Large Self-Insured Employers", 
                  desc: "Organizations with 300+ employees and $1M+ in annual pharmacy claims",
                  icon: Building2
                },
                { 
                  title: "Insurance Brokers", 
                  desc: "National and regional brokerages enhancing their value proposition",
                  icon: Users
                },
                { 
                  title: "Public Employers", 
                  desc: "Government entities, school districts, and municipalities",
                  icon: Award
                },
                { 
                  title: "Innovation Seekers", 
                  desc: "Organizations seeking cutting-edge solutions without disruption",
                  icon: Lightbulb
                }
              ].map((client, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0F264A] border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/30 transition-all"
                  data-testid={`client-type-${i}`}
                >
                  <div className="w-12 h-12 rounded-full bg-[#4A90E2]/10 flex items-center justify-center mx-auto mb-4 border border-[#4A90E2]/20">
                    <client.icon className="w-6 h-6 text-[#4A90E2]" />
                  </div>
                  <h4 className="font-bold text-white mb-2 text-center">{client.title}</h4>
                  <p className="text-blue-100/60 text-sm text-center leading-relaxed">{client.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-[#0F264A] border border-[#D4AF37]/30 rounded-2xl p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/20">
                  <Target className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Our Focus: <span className="text-[#4A90E2]">Large Public & Private Employers</span>
                  </h3>
                  <p className="text-blue-100/70 leading-relaxed mb-4">
                    With increasing national focus on prescription drug program oversight—including recent litigation targeting employers for inadequate PBM monitoring—proactive oversight is no longer optional.
                  </p>
                  <p className="text-blue-100/60 leading-relaxed">
                    BenefitsBridge Partners provides the expertise, tools, and transparency needed to meet your fiduciary obligations, ensure contract compliance, and protect your organization from costly oversights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#050e1f] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-[#1a3b6e] to-[#0B1F40] border border-[#D4AF37]/30 rounded-2xl p-12"
            >
              <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6 border-2 border-[#D4AF37]/30">
                <Compass className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white" data-testid="text-cta-heading">
                Ready to Navigate Your Way to <span className="text-[#D4AF37]">Savings?</span>
              </h2>
              <p className="text-xl text-blue-100/70 mb-8 leading-relaxed">
                Let's discuss how BenefitsBridge Partners can help you stop overspending and start maximizing your pharmacy benefits from Day One.
              </p>
              <Link href="/contact">
                <button 
                  className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0B1F40] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#C5A028] transition-all hover:scale-105"
                  data-testid="button-lets-talk"
                >
                  Let's Talk
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
