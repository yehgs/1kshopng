export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  material: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}
