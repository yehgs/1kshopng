const fs = require('fs');
const path = require('path');

// Real online fashion images from Unsplash (free to use)
const imagesByCategory = {
  'shirts': [
    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800',
    'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800',
    'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800'
  ],
  'trousers': [
    'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800',
    'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800',
    'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800',
    'https://images.unsplash.com/photo-1511105043137-132b89b75d0b?w=800'
  ],
  'jackets': [
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
    'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800',
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
    'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800'
  ],
  'dresses': [
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
    'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800',
    'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=800',
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800'
  ],
  'tops': [
    'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800',
    'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=800',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
    'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800'
  ],
  'skirts': [
    'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800',
    'https://images.unsplash.com/photo-1551803091-e20673f15770?w=800',
    'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800',
    'https://images.unsplash.com/photo-1518622179344-1b4b8a7e4e2a?w=800'
  ],
  'tshirts': [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800'
  ],
  'shorts': [
    'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800',
    'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800',
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800',
    'https://images.unsplash.com/photo-1519235624215-85175d5eb36e?w=800'
  ],
  'hoodies': [
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800',
    'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800',
    'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=800',
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800'
  ],
  'sportswear': [
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800'
  ]
};

// Map category slugs to image keys
const categoryToImageKey = {
  'mens-shirts': 'shirts',
  'mens-trousers': 'trousers',
  'mens-jackets': 'jackets',
  'womens-dresses': 'dresses',
  'womens-tops': 'tops',
  'womens-skirts': 'skirts',
  'kids-tshirts': 'tshirts',
  'kids-shorts': 'shorts',
  'unisex-hoodies': 'hoodies',
  'sportswear': 'sportswear'
};

function updateProductImages() {
  // Read the products JSON file
  const productsPath = path.join(__dirname, '..', 'data', 'products.json');
  const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

  // Update each product with real images
  const updatedProducts = products.map(product => {
    const imageKey = categoryToImageKey[product.categorySlug];
    const images = imagesByCategory[imageKey] || imagesByCategory['shirts'];
    
    return {
      ...product,
      images: images
    };
  });

  // Write updated products back to file
  fs.writeFileSync(
    productsPath,
    JSON.stringify(updatedProducts, null, 2)
  );

  console.log('✅ Successfully updated all product images with real online images!');
  console.log(`📦 Updated ${updatedProducts.length} products`);
  console.log('🌐 All images are from Unsplash (free to use)');
}

// Run the update
updateProductImages();
