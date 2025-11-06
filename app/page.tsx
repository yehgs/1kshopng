import  HeroSlider  from '@/components/HeroSlider';
import { CategoryCarousel } from '@/components/CategoryCarousel';
import { ProductCard } from '@/components/ProductCard';
import { BrandCard } from '@/components/BrandCard';
import { Tag, Truck, Shield, RefreshCw } from 'lucide-react';

// Import data
import productsData from '@/data/products.json';
import categoriesData from '@/data/categories.json';
import brandsData from '@/data/brands.json';

export default function Home() {
  const featuredProducts = productsData.slice(0, 8);
  const newArrivals = productsData.slice(8, 16);

  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <HeroSlider />
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 bg-white p-6 rounded-lg">
              <div className="bg-primary/10 p-3 rounded-full">
                <Tag className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Fixed Price</h3>
                <p className="text-sm text-gray-600">Everything ₦1,000</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white p-6 rounded-lg">
              <div className="bg-primary/10 p-3 rounded-full">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Nationwide shipping</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white p-6 rounded-lg">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Secure Payment</h3>
                <p className="text-sm text-gray-600">100% protected</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white p-6 rounded-lg">
              <div className="bg-primary/10 p-3 rounded-full">
                <RefreshCw className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Easy Returns</h3>
                <p className="text-sm text-gray-600">14-day guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="container mx-auto px-4 py-16">
        <CategoryCarousel categories={categoriesData} title="Shop by Category" />
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <a href="/products" className="text-primary font-semibold hover:underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Top Brands */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Top Brands
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brandsData.slice(0, 12).map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="/brands" 
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-semibold transition-colors"
            >
              View All Brands
            </a>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
          <a href="/products" className="text-primary font-semibold hover:underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Get the latest updates on new arrivals, special offers, and exclusive deals.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <button className="bg-primary-foreground text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
