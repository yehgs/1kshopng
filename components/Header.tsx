import Link from 'next/link';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4 border-b">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
              1K
            </div>
            <span className="text-2xl font-bold text-gray-900">
              1KShop<span className="text-primary">.ng</span>
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands, categories..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 py-4">
          <Link href="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/category/mens-shirts" className="hover:text-primary transition-colors">
            Men
          </Link>
          <Link href="/category/womens-dresses" className="hover:text-primary transition-colors">
            Women
          </Link>
          <Link href="/category/kids-tshirts" className="hover:text-primary transition-colors">
            Kids
          </Link>
          <Link href="/brands" className="hover:text-primary transition-colors">
            Brands
          </Link>
          <Link href="/categories" className="hover:text-primary transition-colors">
            All Categories
          </Link>
          <div className="ml-auto bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
            Everything ₦1,000
          </div>
        </nav>
      </div>
    </header>
  );
}
