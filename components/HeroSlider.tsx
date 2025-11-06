'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Everything ₦1,000',
    subtitle: 'Quality Fashion for Everyone',
    description: 'Shop premium brands at unbeatable prices',
    image: '/placeholder-hero-1.jpg',
    cta: 'Shop Now'
  },
  {
    id: 2,
    title: 'New Arrivals',
    subtitle: 'Latest Fashion Trends',
    description: 'Discover the newest styles from top brands',
    image: '/placeholder-hero-2.jpg',
    cta: 'Explore'
  },
  {
    id: 3,
    title: 'Top Brands',
    subtitle: 'Designer Collections',
    description: 'Nike, Adidas, Zara and more at ₦1,000',
    image: '/placeholder-hero-3.jpg',
    cta: 'View Brands'
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          } ${index < currentSlide ? '-translate-x-full' : ''}`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h2 className="text-5xl md:text-7xl font-bold mb-4">{slide.title}</h2>
                <p className="text-2xl md:text-3xl font-semibold mb-2 text-primary">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md text-lg font-semibold transition-colors">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
