import Link from 'next/link';
import Image from 'next/image';
import { Brand } from '@/types/product';

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <Link 
      href={`/brand/${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
      className="group"
    >
      <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-primary">
        <div className="relative aspect-square overflow-hidden rounded-md bg-gray-50 flex items-center justify-center">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={120}
            height={120}
            className="object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="text-center mt-4 font-semibold text-gray-900 group-hover:text-primary transition-colors">
          {brand.name}
        </h3>
      </div>
    </Link>
  );
}
