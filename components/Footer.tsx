import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About 1KShop.ng</h3>
            <p className="text-sm mb-4">
              Your one-stop shop for quality fashion at unbeatable prices. 
              Every item ₦1,000. Top brands, latest styles.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-primary transition-colors">
                  All Categories
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-primary transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-primary transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-primary transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>Lagos, Nigeria</li>
              <li>Phone: +234 XXX XXX XXXX</li>
              <li>Email: support@1kshopng.com</li>
              <li className="mt-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                  Mon - Sat: 9AM - 6PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 1KShopNG.com. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
