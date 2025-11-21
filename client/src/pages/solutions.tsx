import { Nav } from "@/components/site-header";

export default function Solutions() {
  return (
    <div className="font-sans bg-[#0B1F40] min-h-screen text-white selection:bg-[#D4AF37] selection:text-[#0B1F40]">
      <Nav variant="solid" />
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-[#D4AF37]">Solutions</h1>
        <p className="text-xl text-blue-100/80 max-w-2xl">
          Explore our comprehensive range of benefit strategies designed to optimize your workforce investment.
        </p>
        {/* Content placeholder */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
           {/* We will fill this in */}
           <div className="h-64 rounded-xl border border-white/10 bg-white/5 p-8">
             <div className="h-8 w-8 bg-[#D4AF37] rounded mb-4"></div>
             <div className="h-6 w-32 bg-white/20 rounded mb-4"></div>
             <div className="h-20 w-full bg-white/5 rounded"></div>
           </div>
        </div>
      </div>
    </div>
  );
}
