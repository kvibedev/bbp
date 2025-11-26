import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { Award, Target, Shield, Lock, Building2, CheckCircle, AlertCircle, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

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
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white leading-tight">
              Powered by <span className="text-[#D4AF37]">Ringmaster Technologies</span>
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed">
              BenefitsBridge Partners, supported by our strategic technology partner Ringmaster Technologies, Inc., delivers a best-in-class Software as a Solution (SAAS) designed specifically to empower large public employers.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership & Mission */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-[#0F264A] border border-white/10 rounded-xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center mb-6 border border-[#4A90E2]/20">
                  <Building2 className="w-7 h-7 text-[#4A90E2]" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white">Strategic Partnership</h2>
                <p className="text-blue-100/70 leading-relaxed mb-4">
                  This integrated service model pairs BBP's pharmacy consulting expertise with Ringmaster's industry-leading technology, providing clients with powerful tools designed specifically for PBM oversight and optimization.
                </p>
                <p className="text-blue-100/60 text-sm leading-relaxed">
                  Together, BenefitsBridge Partners and Ringmaster bring a fully independent, best-in-class model that supports fiduciary obligations and financial stewardship.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-[#0F264A] border border-white/10 rounded-xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                  <Target className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white">Our Focus</h2>
                <p className="text-blue-100/70 leading-relaxed mb-4">
                  We specialize in serving <span className="font-bold text-white">large public employers</span> who need sophisticated PBM oversight, transparency, and accountability.
                </p>
                <p className="text-blue-100/60 text-sm leading-relaxed">
                  With increasing national focus on prescription drug program oversight—including recent litigation targeting employers for inadequate PBM monitoring—our partnership provides a compliant, transparent, and results-oriented solution.
                </p>
              </motion.div>
            </div>

            {/* What We Provide */}
            <div className="bg-gradient-to-br from-[#0F264A] to-[#050e1f] border border-[#D4AF37]/30 rounded-2xl p-10">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">
                What We Provide <span className="text-[#D4AF37]">Clients</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Manage competitive PBM RFPs grounded in nationally benchmarked best practices",
                  "Perform ongoing claims and contract performance monitoring to ensure compliance",
                  "Leverage retrospective and predictive analytics to identify cost containment opportunities",
                  "Conduct annual market checks to ensure long-term competitiveness and fiduciary accountability"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100/80 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOC-2 Certification */}
      <section className="py-32 bg-[#050e1f] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                Security & Compliance
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
                SOC 2 <span className="text-[#4A90E2]">Compliant</span>
              </h2>
              <p className="text-xl text-blue-100/70 max-w-3xl mx-auto leading-relaxed">
                BenefitsBridge Partners is proud of our strategic partnership with Ringmaster Technologies, a SOC 2 compliant organization. Achieving SOC 2 compliance involves rigorous third-party audits to evaluate controls, policies, and procedures, ensuring they meet or exceed industry standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* What is SOC 2 */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">What is SOC 2 Compliance?</h3>
                <p className="text-blue-100/60 mb-8 leading-relaxed">
                  SOC 2 (System and Organization Controls 2) is a framework developed by the American Institute of CPAs (AICPA) for managing customer data based on five "Trust Service Criteria":
                </p>
                <div className="space-y-4">
                  {trustCriteria.map((criteria, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-4 bg-[#0B1F40] border border-white/10 rounded-lg p-4"
                      data-testid={`trust-criteria-${i}`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#4A90E2]/10 flex items-center justify-center flex-shrink-0 border border-[#4A90E2]/20">
                        <criteria.icon className="w-5 h-5 text-[#4A90E2]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{criteria.title}</h4>
                        <p className="text-blue-100/60 text-sm">{criteria.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Smart-LinQ Security */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Commitment to Data Security</h3>
                <p className="text-blue-100/60 mb-8 leading-relaxed">
                  BBP and Ringmaster Technologies understand the critical need for secure communication and data management, especially in the healthcare sector. Our flagship product, <span className="font-bold text-[#D4AF37]">Smart-LinQ</span>, offers:
                </p>
                <div className="space-y-6">
                  <div className="bg-[#0B1F40] border border-white/10 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Lock className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-white mb-2">Secure Communication Channels</h4>
                        <p className="text-blue-100/60 text-sm leading-relaxed">
                          Eliminating reliance on unsecured email by providing encrypted messaging features that comply with HIPAA regulations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0B1F40] border border-white/10 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Shield className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-white mb-2">Granular User Controls</h4>
                        <p className="text-blue-100/60 text-sm leading-relaxed">
                          Ensuring only authorized personnel can access sensitive information, minimizing the risk of human error and data breaches.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0B1F40] border border-white/10 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <FileCheck className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-white mb-2">Comprehensive Audit Trails</h4>
                        <p className="text-blue-100/60 text-sm leading-relaxed">
                          Maintaining detailed records of all system activities to demonstrate compliance and enhance accountability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AWS Cloud Infrastructure */}
            <div className="bg-gradient-to-br from-[#1a3b6e] to-[#0B1F40] border border-white/10 rounded-2xl p-10 text-center">
              <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6 border-2 border-[#D4AF37]/30">
                <Lock className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">5-Star Security</h3>
              <p className="text-blue-100/70 text-lg max-w-2xl mx-auto leading-relaxed">
                All data is housed in the AWS Cloud so you can rest assured your data is stored securely. Ringmaster is trusted by the industry and is used by thousands of private commercial clients and public entities like school districts and municipalities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Context */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0F264A] border border-[#D4AF37]/30 rounded-2xl p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/20">
                  <AlertCircle className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    The Changing PBM <span className="text-[#D4AF37]">Landscape</span>
                  </h2>
                  <p className="text-blue-100/70 text-lg leading-relaxed mb-6">
                    With the increasing national focus on prescription drug program oversight—including recent litigation targeting employers for inadequate PBM monitoring—proactive oversight is no longer optional.
                  </p>
                  <p className="text-blue-100/60 leading-relaxed">
                    BenefitsBridge Partners provides the tools, expertise, and transparency needed to meet your fiduciary obligations, ensure contract compliance, and protect your organization from costly oversights.
                  </p>
                </div>
              </div>
            </div>

            {/* Client Types */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-8 text-white">
                Trusted by Leading <span className="text-[#4A90E2]">Organizations</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Large Public Employers", desc: "Government entities and public sector organizations" },
                  { title: "School Districts", desc: "Educational institutions nationwide" },
                  { title: "Municipalities", desc: "Cities, counties, and local governments" }
                ].map((client, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#0B1F40] border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/30 transition-all"
                    data-testid={`client-type-${i}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#4A90E2]/10 flex items-center justify-center mx-auto mb-4 border border-[#4A90E2]/20">
                      <Building2 className="w-6 h-6 text-[#4A90E2]" />
                    </div>
                    <h4 className="font-bold text-white mb-2">{client.title}</h4>
                    <p className="text-blue-100/60 text-sm">{client.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
