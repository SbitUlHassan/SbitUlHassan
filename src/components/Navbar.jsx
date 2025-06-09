import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../store/cartStore';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useCart((state) => state.items);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-black' : 'text-white'
          }`}>
            <span className="text-yellow-500">TREND</span>OZA
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors duration-300 hover:text-yellow-500 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              Home
            </Link>
            <Link to="/products" className={`font-medium transition-colors duration-300 hover:text-yellow-500 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              Collection
            </Link>
            <Link to="#" className={`font-medium transition-colors duration-300 hover:text-yellow-500 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              About
            </Link>
            <Link to="#" className={`font-medium transition-colors duration-300 hover:text-yellow-500 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              Contact
            </Link>
            <Link to="/cart" className={`relative transition-colors duration-300 hover:text-yellow-500 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-black hover:text-yellow-500 font-medium">
                Home
              </Link>
              <Link to="/products" className="block px-3 py-2 text-black hover:text-yellow-500 font-medium">
                Collection
              </Link>
              <Link to="#" className="block px-3 py-2 text-black hover:text-yellow-500 font-medium">
                About
              </Link>
              <Link to="#" className="block px-3 py-2 text-black hover:text-yellow-500 font-medium">
                Contact
              </Link>
              <Link to="/cart" className="flex items-center px-3 py-2 text-black hover:text-yellow-500 font-medium">
                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                Cart ({cartItems.length})
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}