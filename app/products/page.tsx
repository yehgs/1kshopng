'use client';

import { useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Filter } from 'lucide-react';

import productsData from '@/data/products.json';
import categoriesData from '@/data/categories.json';
import brandsData from '@/data/brands.json';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  let filteredProducts = [...productsData];

  // Filter by category
  if (selectedCategory !== 'all') {
    filteredProducts = filteredProducts.filter(
      p => p.categorySlug === selectedCategory
    );
  }

  // Filter by brand
  if (selectedBrand !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.brand === selectedBrand);
  }

  // Sort products
  if (sortBy === 'name-asc') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'name-desc') {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">All Products</h1>
        <p className="text-gray-600">Discover our complete collection - Everything ₦1,000</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg p-6 sticky top-24">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5" />
              <h2 className="text-lg font-bold">Filters</h2>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Category</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="all"
                    checked={selectedCategory === 'all'}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="text-sm">All Categories</span>
                </label>
                {categoriesData.map((category) => (
                  <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={category.slug}
                      checked={selectedCategory === category.slug}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-4 h-4 text-primary"
                    />
                    <span className="text-sm">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Brand</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="brand"
                    value="all"
                    checked={selectedBrand === 'all'}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="text-sm">All Brands</span>
                </label>
                {brandsData.map((brand) => (
                  <label key={brand.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="brand"
                      value={brand.name}
                      checked={selectedBrand === brand.name}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-4 h-4 text-primary"
                    />
                    <span className="text-sm">{brand.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(selectedCategory !== 'all' || selectedBrand !== 'all') && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedBrand('all');
                }}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 py-2 rounded-md font-semibold transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredProducts.length}</span> products
            </p>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="featured">Featured</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No products found matching your filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedBrand('all');
                }}
                className="mt-4 text-primary font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
