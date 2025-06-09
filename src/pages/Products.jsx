import { useState } from 'react';
import { useCart } from '../store/cartStore';

const products = [
  {
    id: 1,
    name: 'Elegant Evening Dress',
    price: 299.99,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Dresses'
  },
  {
    id: 2,
    name: 'Designer Blazer',
    price: 199.99,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Blazers'
  },
  {
    id: 3,
    name: 'Luxury Handbag',
    price: 399.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Accessories'
  },
  {
    id: 4,
    name: 'Premium Sneakers',
    price: 159.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Footwear'
  },
  {
    id: 5,
    name: 'Silk Scarf',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Accessories'
  },
  {
    id: 6,
    name: 'Casual Jacket',
    price: 179.99,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Jackets'
  }
];

const categories = ['All', 'Dresses', 'Blazers', 'Accessories', 'Footwear', 'Jackets'];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const addToCart = useCart((state) => state.addItem);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            OUR <span className="text-yellow-500">COLLECTION</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of premium fashion pieces
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <button
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-6 py-2 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-400"
                >
                  ADD TO CART
                </button>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-lg font-semibold text-black mb-2">{product.name}</h3>
                <p className="text-xl font-bold text-yellow-500">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}