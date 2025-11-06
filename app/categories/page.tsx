import { CategoryCard } from '@/components/CategoryCard';
import categoriesData from '@/data/categories.json';

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">All Categories</h1>
        <p className="text-gray-600">Explore our complete range of fashion categories</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoriesData.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
