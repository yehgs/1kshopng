const fs = require('fs');
const path = require('path');

const brands = [
  'Nike', 'Adidas', 'Puma', 'Zara', 'H&M', 'Gucci', 'Louis Vuitton', 
  'Tommy Hilfiger', 'Calvin Klein', 'Levi\'s', 'Ralph Lauren', 'Armani',
  'Versace', 'Balenciaga', 'Off-White'
];

const categories = [
  { id: 'mens-shirts', name: 'Men\'s Shirts', slug: 'mens-shirts' },
  { id: 'mens-trousers', name: 'Men\'s Trousers', slug: 'mens-trousers' },
  { id: 'mens-jackets', name: 'Men\'s Jackets', slug: 'mens-jackets' },
  { id: 'womens-dresses', name: 'Women\'s Dresses', slug: 'womens-dresses' },
  { id: 'womens-tops', name: 'Women\'s Tops', slug: 'womens-tops' },
  { id: 'womens-skirts', name: 'Women\'s Skirts', slug: 'womens-skirts' },
  { id: 'kids-tshirts', name: 'Kids T-Shirts', slug: 'kids-tshirts' },
  { id: 'kids-shorts', name: 'Kids Shorts', slug: 'kids-shorts' },
  { id: 'unisex-hoodies', name: 'Unisex Hoodies', slug: 'unisex-hoodies' },
  { id: 'sportswear', name: 'Sportswear', slug: 'sportswear' }
];

const colors = [
  'Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 
  'Yellow', 'Pink', 'Purple', 'Brown', 'Beige'
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const materials = [
  '100% Cotton',
  'Cotton Blend',
  'Polyester',
  'Denim',
  'Silk',
  'Linen',
  'Wool Blend',
  'Spandex Mix'
];

const productDescriptions = {
  'shirt': 'A stylish and comfortable shirt perfect for any occasion. Features premium fabric and excellent stitching.',
  'trouser': 'Comfortable and durable trousers with a modern fit. Perfect for both casual and formal wear.',
  'jacket': 'Stay warm and stylish with this premium jacket. Features quality materials and timeless design.',
  'dress': 'Elegant and fashionable dress that makes you stand out. Perfect fit and beautiful design.',
  'top': 'Trendy top with comfortable fit. Perfect for everyday wear or special occasions.',
  'skirt': 'Beautiful skirt with flattering design. Comfortable and versatile for various occasions.',
  'tshirt': 'Classic t-shirt with soft fabric. Perfect for casual daily wear.',
  'shorts': 'Comfortable shorts ideal for warm weather. Great quality and stylish design.',
  'hoodie': 'Cozy hoodie perfect for cool weather. Soft interior and durable exterior.',
  'sportswear': 'High-performance sportswear designed for active lifestyles. Breathable and comfortable.'
};

const features = [
  'Premium quality fabric',
  'Durable stitching',
  'Easy care - Machine washable',
  'Breathable material',
  'Comfortable fit',
  'Fade resistant colors',
  'Pre-shrunk fabric',
  'Moisture wicking',
  'Wrinkle resistant',
  'Stylish design'
];

function getRandomElements(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateProductName(category, brand) {
  const categoryMap = {
    'mens-shirts': 'Shirt',
    'mens-trousers': 'Trouser',
    'mens-jackets': 'Jacket',
    'womens-dresses': 'Dress',
    'womens-tops': 'Top',
    'womens-skirts': 'Skirt',
    'kids-tshirts': 'T-Shirt',
    'kids-shorts': 'Shorts',
    'unisex-hoodies': 'Hoodie',
    'sportswear': 'Athletic Wear'
  };
  
  const styles = ['Classic', 'Modern', 'Vintage', 'Premium', 'Essential', 'Signature', 'Elite', 'Ultimate'];
  return `${brand} ${getRandomElements(styles, 1)[0]} ${categoryMap[category]}`;
}

function generateProducts() {
  const products = [];
  let productCounter = 1;

  categories.forEach(category => {
    for (let i = 0; i < 6; i++) {
      const brand = brands[Math.floor(Math.random() * brands.length)];
      const productColors = getRandomElements(colors, Math.floor(Math.random() * 3) + 2);
      const productSizes = getRandomElements(sizes, Math.floor(Math.random() * 4) + 3);
      
      const categoryType = category.slug.split('-')[1] || 'shirt';
      const description = productDescriptions[categoryType] || productDescriptions['shirt'];
      
      const product = {
        id: `prod-${productCounter.toString().padStart(3, '0')}`,
        name: generateProductName(category.id, brand),
        brand: brand,
        category: category.name,
        categorySlug: category.slug,
        price: 1000,
        images: [
          `/placeholder-${categoryType}-1.jpg`,
          `/placeholder-${categoryType}-2.jpg`,
          `/placeholder-${categoryType}-3.jpg`,
          `/placeholder-${categoryType}-4.jpg`
        ],
        description: description,
        sizes: productSizes,
        colors: productColors,
        material: materials[Math.floor(Math.random() * materials.length)],
        inStock: Math.random() > 0.1,
        rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
        reviews: Math.floor(Math.random() * 500) + 10,
        features: getRandomElements(features, 5)
      };
      
      products.push(product);
      productCounter++;
    }
  });

  return products;
}

// Generate products
const products = generateProducts();

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Write products to file
fs.writeFileSync(
  path.join(dataDir, 'products.json'),
  JSON.stringify(products, null, 2)
);

// Write categories to file
const categoryData = categories.map(cat => ({
  ...cat,
  image: `/placeholder-category-${cat.slug}.jpg`
}));

fs.writeFileSync(
  path.join(dataDir, 'categories.json'),
  JSON.stringify(categoryData, null, 2)
);

// Write brands to file
const brandData = brands.map((brand, index) => ({
  id: `brand-${(index + 1).toString().padStart(2, '0')}`,
  name: brand,
  logo: `/placeholder-brand-${brand.toLowerCase().replace(/\s+/g, '-')}.jpg`
}));

fs.writeFileSync(
  path.join(dataDir, 'brands.json'),
  JSON.stringify(brandData, null, 2)
);

console.log(`✅ Generated ${products.length} products`);
console.log(`✅ Generated ${categoryData.length} categories`);
console.log(`✅ Generated ${brandData.length} brands`);
console.log('📁 Files saved in /data directory');
