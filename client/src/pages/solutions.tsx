import { Nav } from "@/components/site-header";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, TrendingUp, Heart, FileText, Target, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const solutions = [
  {
    icon: Shield,
    title: "Compliance & Risk Management",
    description: "Navigate complex regulations with confidence. Our experts ensure your benefit plans meet all federal and state requirements while minimizing organizational risk.",
    features: ["ACA Compliance", "ERISA Guidance", "Fiduciary Support", "Audit Preparation"]
  },
  {
    icon: Users,
    title: "Employee Benefits Strategy",
    description: "Design benefit packages that attract and retain top talent while optimizing costs. Data-driven approaches aligned with your organizational goals.",
    features: ["Plan Design", "Cost Analysis", "Vendor Selection", "Competitive Benchmarking"]
  },
  {
    icon: TrendingUp,
    title: "Healthcare Analytics",
    description: "Leverage proprietary analytics to understand utilization patterns, predict trends, and identify cost-saving opportunities in real-time.",
    features: ["Claims Analysis", "Trend Forecasting", "Population Health", "ROI Modeling"]
  },
  {
    icon: Heart,
    title: "Wellness & Well-being",
    description: "Holistic programs that integrate physical, mental, and financial wellness to improve employee health and productivity.",
    features: ["Wellness Programs", "Mental Health Support", "Financial Wellness", "Engagement Tools"]
  },
  {
    icon: FileText,
    title: "Benefits Administration",
    description: "Streamlined enrollment, seamless integration with payroll, and year-round support that reduces administrative burden.",
    features: ["Online Enrollment", "HRIS Integration", "Life Event Processing", "Billing Reconciliation"]
  },
  {
    icon: Briefcase,
    title: "Executive Benefits",
    description: "Specialized solutions for your leadership team including supplemental coverage, deferred compensation, and retention strategies.",
    features: ["Supplemental Plans", "Deferred Comp", "Succession Planning", "Key Person Insurance"]
  }
];

export default function Solutions() {
  return (
    <div className="font-sans bg-[#0B1F40] min-h-screen text-white selection:bg-[#D4AF37] selection:text-[#0B1F40]">
      <Nav variant="solid" />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a3b6e] via-[#0B1F40] to-[#050e1f]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Comprehensive Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white">
              Tailored Benefits Strategies for <span className="text-[#D4AF37]">Every Challenge</span>
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed">
              From compliance to culture, our solutions address the full spectrum of employee benefits needs with precision and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, i) => (
              <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all group">
                <CardContent className="pt-8 pb-8">
                  <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors border border-[#D4AF37]/20">
                    <solution.icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors">{solution.title}</h3>
                  <p className="text-blue-100/70 mb-6 leading-relaxed">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-blue-100/60">
                        <div className="w-1 h-1 bg-[#4A90E2] rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Ready to optimize your <span className="text-[#D4AF37]">benefits strategy?</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
            Schedule a consultation with our team to discover how we can help you achieve measurable results.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-10 h-14 text-lg">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
