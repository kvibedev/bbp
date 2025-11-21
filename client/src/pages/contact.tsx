import { Nav } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Contact() {
  return (
    <div className="font-sans bg-[#0B1F40] min-h-screen text-white selection:bg-[#D4AF37] selection:text-[#0B1F40]">
      <Nav variant="solid" />
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-[#D4AF37]">Contact Us</h1>
            <p className="text-xl text-blue-100/80 mb-8">
              Ready to start the conversation? Reach out to our team of experts today.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
             <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="bg-white/10 border-white/10 text-white placeholder:text-white/50" />
                  <Input placeholder="Last Name" className="bg-white/10 border-white/10 text-white placeholder:text-white/50" />
                </div>
                <Input placeholder="Email Address" className="bg-white/10 border-white/10 text-white placeholder:text-white/50" />
                <Input placeholder="Company" className="bg-white/10 border-white/10 text-white placeholder:text-white/50" />
                <Button className="w-full bg-[#D4AF37] text-[#0B1F40] hover:bg-[#B59328] font-bold">
                  Send Message
                </Button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
