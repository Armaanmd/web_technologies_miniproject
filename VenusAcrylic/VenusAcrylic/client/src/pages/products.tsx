import { products } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

export default function Products() {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2 font-display">Our Products</h1>
          <p className="text-muted-foreground text-lg">High-quality acrylics for every application.</p>
        </div>
        <div className="flex gap-2">
          {/* Filter placeholders could go here */}
          <Badge variant="secondary" className="px-4 py-2 text-sm cursor-pointer hover:bg-slate-200">All</Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-slate-50">Sheets</Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-slate-50">Displays</Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-slate-50">Awards</Badge>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="group overflow-hidden border-none shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <div className="aspect-square relative overflow-hidden bg-slate-100">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <Badge className="absolute top-4 left-4 bg-white/90 text-slate-900 hover:bg-white/100 backdrop-blur-sm">
                {product.category}
              </Badge>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <span className="font-bold text-primary text-lg">${product.price.toFixed(2)}</span>
              </div>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
                className="w-full rounded-full gap-2" 
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
