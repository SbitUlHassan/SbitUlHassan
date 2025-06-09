import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../store/cartStore';

const featuredProducts = [
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
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [productsVisible, setProductsVisible] = useState(false);
  const addToCart = useCart((state) => state.addItem);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const productsTimer = setTimeout(() => {
      setProductsVisible(true);
    }, 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(productsTimer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        
        <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            DEFINE YOUR
            <span className="block text-yellow-500">STYLE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the latest fashion trends with Trendoza's exclusive collection
          </p>
          <div className="space-x-4">
            <Link 
              to="/products"
              className="inline-block bg-yellow-500 text-black px-8 py-4 text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
            >
              SHOP NOW
            </Link>
            <button className="inline-block border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
              EXPLORE
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              FEATURED <span className="text-yellow-500">COLLECTION</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Handpicked pieces that define contemporary fashion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className={`group cursor-pointer transition-all duration-700 transform ${
                  productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
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
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                THE <span className="text-yellow-500">TRENDOZA</span> STORY
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Born from a passion for exceptional fashion, Trendoza represents the perfect fusion of contemporary style and timeless elegance. We believe that fashion is more than clothing—it's a form of self-expression.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our carefully curated collections feature premium materials, innovative designs, and impeccable craftsmanship that speaks to the modern fashion enthusiast.
              </p>
              <Link 
                to="/products"
                className="inline-block bg-yellow-500 text-black px-8 py-3 font-semibold hover:bg-yellow-400 transition-colors duration-300"
              >
                DISCOVER MORE
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fashion Model"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 border-4 border-yellow-500 transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            STAY IN <span className="text-yellow-500">STYLE</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and fashion insights.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-yellow-500"
            />
            <button className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors duration-300">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-yellow-500">TREND</span>OZA
              </h3>
              <p className="text-gray-400 mb-4">
                Defining contemporary fashion with style, elegance, and innovation.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">CEO: Nouman Ahmed</p>
                <p className="text-sm text-gray-400">Email: noumantaj80@gmail.com</p>
                <p className="text-sm text-gray-400">WhatsApp: 03229410939</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors">Home</Link></li>
                <li><Link to="/products" className="text-gray-400 hover:text-yellow-500 transition-colors">Collection</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-yellow-500 transition-colors">About Us</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">CATEGORIES</h4>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Dresses</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Blazers</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Accessories</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Footwear</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">CUSTOMER CARE</h4>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Size Guide</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Shipping Info</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Returns</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-yellow-500 transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Trendoza. All rights reserved. | Designed with passion for fashion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}