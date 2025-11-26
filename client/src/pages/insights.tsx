import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, TrendingUp, Shield, DollarSign, AlertTriangle, Activity, FileBarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [
  {
    category: "PBM Oversight",
    icon: Shield,
    title: "The Rising Tide of PBM Litigation: What Employers Need to Know",
    excerpt: "Recent lawsuits targeting employers for inadequate PBM monitoring are changing the landscape. Learn how to protect your organization with proper oversight and transparency.",
    date: "March 2025",
    readTime: "8 min read"
  },
  {
    category: "Cost Savings",
    icon: DollarSign,
    title: "Annual Market Checks: The 8% Solution",
    excerpt: "Companies that consistently market their pharmacy contracts every year spend, on average, 8% less on prescriptions. Discover the power of competitive benchmarking.",
    date: "February 2025",
    readTime: "6 min read"
  },
  {
    category: "Contract Analysis",
    icon: AlertTriangle,
    title: "The 10% Problem: How Single Exclusions Impact Your Bottom Line",
    excerpt: "A single exclusion in a pharmacy contract can have a 10% impact on costs. Learn how to identify and address these hidden cost drivers.",
    date: "January 2025",
    readTime: "7 min read"
  },
  {
    category: "Performance",
    icon: Activity,
    title: "PBM Guarantee Misses: The 3-5% Problem",
    excerpt: "PBMs very often miss on their contract guarantees by 3-5%. Discover how ongoing reconciliation can recover these lost savings.",
    date: "December 2024",
    readTime: "5 min read"
  },
  {
    category: "Analytics",
    icon: FileBarChart,
    title: "NADAC Benchmarking: Uncovering Inflated Drug Pricing",
    excerpt: "How comparing actual drug costs to NADAC benchmarks can flag pricing issues and improve PBM contract performance.",
    date: "November 2024",
    readTime: "6 min read"
  },
  {
    category: "Technology",
    icon: TrendingUp,
    title: "From 8 Weeks to 1-2: Automating the Pharmacy Renewal Process",
    excerpt: "How integrated data warehouses and automated workflows are transforming PBM contract renewals and saving valuable time.",
    date: "October 2024",
    readTime: "8 min read"
  }
];

export default function Insights() {
  return (
    <div className="font-sans bg-[#0B1F40] min-h-screen text-white selection:bg-[#D4AF37] selection:text-[#0B1F40]">
      <Nav variant="solid" />
      
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a3b6e] via-[#0B1F40] to-[#050e1f]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[#D4AF37] font-medium text-sm mb-6 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Industry Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white">
              PBM Industry <span className="text-[#D4AF37]">Thought Leadership</span>
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed">
              Stay ahead of the curve with analysis, trends, and actionable insights from the forefront of pharmacy benefit management.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#4A90E2]/10 border border-[#D4AF37]/20 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-medium mb-4 uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              Featured Analysis
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              The New Era of PBM Transparency and Accountability
            </h2>
            <p className="text-xl text-blue-100/70 mb-8 leading-relaxed max-w-3xl">
              With increasing national scrutiny on prescription drug programs and recent litigation targeting employers for inadequate PBM monitoring, the landscape is fundamentally changing. Organizations that adopt proactive oversight, transparent evaluation frameworks, and comprehensive analytics are not only protecting themselves legally—they're achieving measurable savings of 8% or more annually.
            </p>
            <Button className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold" data-testid="button-read-report">
              Read Full Report <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Key Statistics Banner */}
      <section className="py-16 bg-[#050e1f] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "8%", label: "Average Savings", sublabel: "With Annual Market Checks" },
              { value: "10%", label: "Cost Impact", sublabel: "From Single Exclusion" },
              { value: "3-5%", label: "Guarantee Variance", sublabel: "Typical PBM Miss Rate" },
              { value: "1-2 wks", label: "Process Time", sublabel: "Down from 8 Weeks" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-2 group-hover:text-white transition-colors">
                  {stat.value}
                </div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-blue-100/50 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
              Latest <span className="text-[#4A90E2]">Research & Analysis</span>
            </h2>
            <p className="text-blue-100/60 max-w-2xl mx-auto">
              In-depth perspectives on PBM strategy, contract optimization, and cost containment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, i) => (
              <Card 
                key={i} 
                className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all group cursor-pointer"
                data-testid={`insight-${i}`}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="w-12 h-12 rounded-lg bg-[#4A90E2]/10 flex items-center justify-center mb-4 border border-[#4A90E2]/20 group-hover:bg-[#4A90E2]/20 transition-colors">
                    <insight.icon className="w-6 h-6 text-[#4A90E2]" />
                  </div>
                  <div className="text-[#4A90E2] text-xs font-bold uppercase tracking-wider mb-4">
                    {insight.category}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {insight.title}
                  </h3>
                  <p className="text-blue-100/60 mb-6 leading-relaxed">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-blue-100/40 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {insight.date}
                    </div>
                    <span>{insight.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 bg-[#050e1f] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-white">
              Core Areas of <span className="text-[#D4AF37]">Expertise</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "PBM Contract Evaluation & Negotiation",
                "Claims Performance Monitoring",
                "Cost Containment Analytics",
                "Formulary Management Strategies",
                "Generic vs. Brand Optimization",
                "NADAC Differential Analysis",
                "Rebate Reconciliation",
                "Market Competitiveness Benchmarking",
                "Biosimilar Adoption Strategies",
                "GLP-1 Program Management",
                "High-Cost Claimant Management",
                "Fiduciary Compliance"
              ].map((topic, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 bg-[#0B1F40] border border-white/10 rounded-lg p-4 hover:border-[#D4AF37]/30 transition-colors"
                  data-testid={`topic-${i}`}
                >
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                  <span className="text-blue-100/80">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Access to Thought Leadership at the <span className="text-[#D4AF37]">Forefront of PBM</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
            Monthly insights on PBM trends, contract strategies, and cost containment opportunities—delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37]/50"
              data-testid="input-newsletter-email"
            />
            <Button className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-8 py-4 h-auto" data-testid="button-subscribe">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
