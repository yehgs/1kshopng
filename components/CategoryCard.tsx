import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/types/product';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link 
      href={`/category/${category.slug}`}
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-2">{category.name}</h3>
          <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
            <span>Shop Now</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
