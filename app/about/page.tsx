import Link from 'next/link';
import { Shield, Truck, Heart, Users, Award, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About 1KShopNG</h1>
            <p className="text-xl text-gray-600">
              Nigeria's premier destination for quality fashion at unbeatable prices.
              Every item, every day - ₦1,000.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded with a simple yet revolutionary idea: quality fashion should be accessible 
                to everyone. At 1KShopNG, we believe that looking good shouldn't break the bank. 
                That's why we've made it our mission to offer premium brands and trendy styles at 
                a single, unbeatable price point of ₦1,000.
              </p>
              <p>
                We started in Lagos with a vision to democratize fashion in Nigeria. Today, we're 
                proud to serve customers nationwide, delivering happiness and style to thousands of 
                satisfied shoppers. Our commitment to quality, affordability, and customer satisfaction 
                has made us one of Nigeria's most trusted online fashion retailers.
              </p>
              <p>
                From men's formal wear to women's casual fashion, from kids' clothing to sportswear, 
                we curate collections from the world's leading brands - Nike, Adidas, Zara, Gucci, 
                and many more - all at our signature ₦1,000 price point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Every product is carefully selected and quality-checked to ensure you receive 
                only the best. We stand behind everything we sell.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're committed to providing exceptional 
                service and support at every step of your shopping journey.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                We deliver nationwide with speed and care. Get your fashion finds delivered 
                to your doorstep quickly and safely.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Brands</h3>
              <p className="text-gray-600">
                Access to the world's top fashion brands at prices you won't believe. 
                Quality meets affordability in every product.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Focus</h3>
              <p className="text-gray-600">
                We're more than a store - we're a community of fashion lovers. Join thousands 
                of satisfied customers across Nigeria.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Nationwide Reach</h3>
              <p className="text-gray-600">
                From Lagos to Abuja, Port Harcourt to Kano - we deliver quality fashion 
                everywhere in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Premium Brands</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">60+</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">36</div>
              <div className="text-gray-600">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Experience Quality Fashion?
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust 1KShopNG for their fashion needs.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
}
