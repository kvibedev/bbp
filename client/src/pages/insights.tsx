import { Nav } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [
  {
    category: "Trends",
    title: "2025 Benefits Benchmark Report",
    excerpt: "Our annual analysis of 500+ employers reveals shifting priorities in mental health coverage, pharmacy benefits, and voluntary offerings.",
    date: "March 2025",
    readTime: "8 min read"
  },
  {
    category: "Analytics",
    title: "The Hidden Cost of Poor Enrollment Communication",
    excerpt: "Data shows that inadequate benefits education leads to a 22% increase in unnecessary claims and frustrated employees.",
    date: "February 2025",
    readTime: "6 min read"
  },
  {
    category: "Compliance",
    title: "ACA Reporting: What's New for 2025",
    excerpt: "Key changes to Form 1095-C reporting requirements and how to ensure your organization stays compliant.",
    date: "January 2025",
    readTime: "5 min read"
  },
  {
    category: "Strategy",
    title: "Predictive Modeling for Benefits Planning",
    excerpt: "How advanced analytics can help CFOs forecast costs with 95% accuracy and plan multi-year benefit strategies.",
    date: "December 2024",
    readTime: "10 min read"
  },
  {
    category: "Wellness",
    title: "ROI of Holistic Wellness Programs",
    excerpt: "Case study: How one employer reduced healthcare costs by 18% while improving employee satisfaction scores.",
    date: "November 2024",
    readTime: "7 min read"
  },
  {
    category: "Technology",
    title: "The Rise of Benefits Decision Support Tools",
    excerpt: "AI-powered platforms are transforming how employees select coverage—and the results are impressive.",
    date: "October 2024",
    readTime: "6 min read"
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
              Data-Driven <span className="text-[#D4AF37]">Thought Leadership</span>
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed">
              Stay ahead of the curve with analysis, trends, and actionable insights from our team of benefits experts.
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
              Why 2025 Will Be the Year of Benefits Transformation
            </h2>
            <p className="text-xl text-blue-100/70 mb-8 leading-relaxed max-w-3xl">
              Economic pressures, shifting demographics, and regulatory changes are converging to create the perfect conditions for organizations to rethink their entire approach to employee benefits. Our analysis of macro trends points to three critical areas where forward-thinking employers will gain competitive advantage.
            </p>
            <Button className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold">
              Read Full Report <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, i) => (
              <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all group cursor-pointer">
                <CardContent className="pt-8 pb-8">
                  <div className="text-[#4A90E2] text-xs font-bold uppercase tracking-wider mb-4">
                    {insight.category}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {insight.title}
                  </h3>
                  <p className="text-blue-100/60 mb-6 leading-relaxed">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-blue-100/40">
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

      {/* Newsletter CTA */}
      <section className="py-20 bg-white/[0.02] border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Get insights delivered to your inbox
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
            Monthly roundup of trends, analysis, and actionable strategies—no fluff, just value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37]/50"
            />
            <Button className="bg-[#D4AF37] hover:bg-[#B59328] text-[#0B1F40] font-bold px-8 py-4 h-auto">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
