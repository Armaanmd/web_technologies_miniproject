import sheetImg from '@assets/generated_images/stack_of_colorful_translucent_acrylic_sheets.png';
import standImg from '@assets/generated_images/clear_acrylic_jewelry_display_stand.png';
import trophyImg from '@assets/generated_images/geometric_laser_cut_acrylic_trophy.png';
import frameImg from '@assets/generated_images/magnetic_acrylic_photo_block.png';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Cast Acrylic Sheet - Clear",
    price: 45.00,
    description: "High-clarity cast acrylic sheet, 4mm thickness. Perfect for laser cutting and fabrication.",
    image: sheetImg,
    category: "Sheets"
  },
  {
    id: 2,
    name: "Premium Display Stand",
    price: 28.50,
    description: "Minimalist clear acrylic stand for jewelry or small collectibles. Polished edges.",
    image: standImg,
    category: "Displays"
  },
  {
    id: 3,
    name: "Custom Award Trophy",
    price: 120.00,
    description: "Bespoke laser-cut acrylic trophy with custom engraving options. Modern geometric design.",
    image: trophyImg,
    category: "Awards"
  },
  {
    id: 4,
    name: "Magnetic Photo Block",
    price: 35.00,
    description: "Double-sided clear acrylic photo block with magnetic corners. 5x7 inch.",
    image: frameImg,
    category: "Frames"
  },
  {
    id: 5,
    name: "Colored Acrylic Sheet - Neon",
    price: 55.00,
    description: "Vibrant neon pink cast acrylic sheet. Translucent finish for amazing light diffusion.",
    image: sheetImg,
    category: "Sheets"
  },
  {
    id: 6,
    name: "Brochure Holder A4",
    price: 15.00,
    description: "Standard A4 brochure holder, wall mountable or freestanding.",
    image: standImg,
    category: "Displays"
  }
];
