import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, ShieldCheck, Truck } from "lucide-react";
import { Link } from "wouter";
import sheetImg from '@assets/generated_images/stack_of_colorful_translucent_acrylic_sheets.png';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-32 md:pt-32 md:pb-48">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 font-display">
                Clarity in <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Every Shape</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Premium acrylic manufacturing and custom fabrication. 
                From industrial sheets to bespoke awards, we craft perfection.
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="/products">
                  <Button size="lg" className="h-12 px-8 text-base rounded-full">
                    Shop Products
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full">
                    Custom Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>
              <img 
                src={sheetImg}
                alt="Acrylic Sheets" 
                className="relative rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Layers,
              title: "Custom Fabrication",
              desc: "Laser cutting, bending, and bonding to your exact specifications."
            },
            {
              icon: ShieldCheck,
              title: "Premium Quality",
              desc: "High-grade cast and extruded acrylics that never yellow."
            },
            {
              icon: Truck,
              title: "Fast Delivery",
              desc: "Secure packaging and rapid shipping for all standard orders."
            }
          ].map((feature, i) => (
            <div key={i} className="glass-card p-8 rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl p-12 md:p-20 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to start your project?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
              Whether you need a single trophy or bulk manufacturing, Venus Acrylic delivers excellence.
            </p>
            <Link href="/products">
              <Button size="lg" variant="secondary" className="h-12 px-8 rounded-full gap-2">
                View Catalog <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
