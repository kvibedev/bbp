import { Nav } from "@/components/site-header";
import { Award, Target, Compass, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Client-Centric",
    description: "Your success is our only metric. We measure ourselves by the measurable value we deliver to your organization."
  },
  {
    icon: Compass,
    title: "Data-Driven",
    description: "Proprietary analytics and evidence-based strategies guide every recommendation we make."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Industry-leading expertise combined with white-glove service in every engagement."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Long-term relationships built on trust, transparency, and consistent delivery."
  }
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "98.5%", label: "Client Retention" },
  { value: "$2.1B", label: "Benefits Managed" },
  { value: "25+", label: "Years Combined Experience" }
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
              Bridging the Gap Between <span className="text-[#D4AF37]">Strategy and Success</span>
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed">
              Founded on the principle that employee benefits should be a strategic advantage—not just a cost center—BenefitsBridge Partners combines deep industry expertise with cutting-edge analytics to deliver measurable value.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-blue-100/70 leading-relaxed text-center mb-12">
              To empower organizations with the insights, strategies, and support they need to optimize their benefits programs—reducing costs while enhancing employee satisfaction and retention.
            </p>
          </div>
          
          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4 border border-[#D4AF37]/20">
                  <value.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-blue-100/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-serif font-bold text-[#D4AF37] mb-2">{stat.value}</div>
                <div className="text-blue-100/60 uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">What Makes Us Different</h2>
            
            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Proprietary Analytics Platform</h3>
                <p className="text-blue-100/70 leading-relaxed">
                  Our technology stack processes over 1.5 million data points daily to provide real-time insights into utilization trends, cost drivers, and opportunities for optimization. You get visibility that most consultants simply can't offer.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Integrated Expertise</h3>
                <p className="text-blue-100/70 leading-relaxed">
                  Our team includes former health plan executives, ERISA attorneys, actuaries, and HR leaders. This multidisciplinary approach ensures we see your challenges from every angle and deliver holistic solutions.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Fiduciary-Level Care</h3>
                <p className="text-blue-100/70 leading-relaxed">
                  We operate with the same standard of care as a fiduciary—your interests always come first. No hidden commissions, no vendor bias, just objective guidance aligned with your organizational goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
