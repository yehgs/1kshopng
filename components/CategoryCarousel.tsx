'use client';

import { useRef } from 'react';
import { Category } from '@/types/product';
import { CategoryCard } from './CategoryCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryCarouselProps {
  categories: Category[];
  title: string;
}

export function CategoryCarousel({ categories, title }: CategoryCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => (
          <div key={category.id} className="flex-none w-72">
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
