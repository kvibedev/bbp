import { Nav } from "@/components/site-header";

export default function Services() {
  return (
    <div className="font-sans bg-[#0B1F40] min-h-screen text-white selection:bg-[#D4AF37] selection:text-[#0B1F40]">
      <Nav variant="solid" />
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-[#D4AF37]">Services</h1>
        <p className="text-xl text-blue-100/80 max-w-2xl">
          From compliance to employee advocacy, our services cover every aspect of benefits administration.
        </p>
      </div>
    </div>
  );
}
