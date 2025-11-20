import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Check, Printer } from "lucide-react";

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState<'form' | 'bill'>('form');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('bill');
  };

  if (items.length === 0 && step === 'form') {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-muted-foreground mb-8">Add some beautiful acrylic products to get started.</p>
        <Button onClick={() => window.location.href = '/products'}>Browse Shop</Button>
      </div>
    );
  }

  if (step === 'bill') {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <Card className="w-full max-w-2xl border shadow-2xl bg-white print:shadow-none">
          <CardHeader className="text-center border-b bg-slate-50/50">
            <div className="flex justify-between items-center mb-4 print:hidden">
               <Button variant="ghost" size="sm" onClick={() => window.print()}>
                 <Printer className="w-4 h-4 mr-2" /> Print Bill
               </Button>
               <Button variant="ghost" size="sm" onClick={() => { clearCart(); window.location.href = '/'; }}>
                 Done
               </Button>
            </div>
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mx-auto mb-4 text-xl font-bold">V</div>
            <CardTitle className="text-3xl font-display">Venus Acrylic</CardTitle>
            <p className="text-sm text-muted-foreground">Official Tax Invoice</p>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs font-bold uppercase text-muted-foreground mb-2">Billed To</h3>
                <p className="font-bold text-lg">{formData.name}</p>
                <p>{formData.address}</p>
                <p>{formData.phone}</p>
                <p>{formData.email}</p>
              </div>
              <div className="text-right">
                <h3 className="text-xs font-bold uppercase text-muted-foreground mb-2">Invoice Details</h3>
                <p><span className="text-muted-foreground">Date:</span> {new Date().toLocaleDateString()}</p>
                <p><span className="text-muted-foreground">Invoice #:</span> {Math.floor(Math.random() * 10000)}</p>
              </div>
            </div>

            <div>
              <table className="w-full">
                <thead>
                  <tr className="border-b text-sm text-muted-foreground">
                    <th className="text-left py-2">Item</th>
                    <th className="text-right py-2">Qty</th>
                    <th className="text-right py-2">Price</th>
                    <th className="text-right py-2">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="py-4 font-medium">{item.name}</td>
                      <td className="text-right py-4">{item.quantity}</td>
                      <td className="text-right py-4">${item.price.toFixed(2)}</td>
                      <td className="text-right py-4">${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end border-t pt-8">
              <div className="w-1/2 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (10%)</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${(total * 1.1).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center text-sm border border-green-100">
              <Check className="w-4 h-4 inline mr-2" />
              Thank you for your business! Your order is being processed.
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 font-display">Checkout</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Details</CardTitle>
              <CardDescription>Enter your information to generate your invoice.</CardDescription>
            </CardHeader>
            <CardContent>
              <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input 
                    name="name" 
                    required 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Address</label>
                  <Input 
                    name="address" 
                    required 
                    placeholder="123 Street Name, City" 
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input 
                      name="phone" 
                      required 
                      placeholder="+1 234 567 890" 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      name="email" 
                      required 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-slate-50/50">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x {item.quantity}</span>
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" form="checkout-form" className="w-full rounded-full">
                Generate Bill
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
