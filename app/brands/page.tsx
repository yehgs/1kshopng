import { BrandCard } from '@/components/BrandCard';
import brandsData from '@/data/brands.json';

export default function BrandsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">All Brands</h1>
        <p className="text-gray-600">Shop from the world's top fashion brands - All at ₦1,000</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {brandsData.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
}
