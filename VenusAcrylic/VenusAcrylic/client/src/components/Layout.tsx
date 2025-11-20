import { Link, useLocation } from "wouter";
import { ShoppingCart, Menu, X, User, Phone, Package, Home } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { items } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/products", label: "Products", icon: Package },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                V
              </div>
              Venus Acrylic
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}>
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link href="/checkout">
              <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-primary">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px]">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <a 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-lg font-medium flex items-center gap-2 ${
                          location === link.href ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        <link.icon className="h-5 w-5" />
                        {link.label}
                      </a>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Venus Acrylic</h3>
            <p className="text-sm leading-relaxed">
              Premium acrylic products for businesses and individuals. 
              Custom fabrication, laser cutting, and design services.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products"><a className="hover:text-white">All Products</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-white">Contact Us</a></Link></li>
              <li><Link href="/login"><a className="hover:text-white">Client Portal</a></Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>info@venusacrylic.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Plastic Avenue, Industry City</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-xs">
          © 2025 Venus Acrylic. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
