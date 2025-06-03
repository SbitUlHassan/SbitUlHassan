import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../store/cartStore';

export default function Navbar() {
  const cartItems = useCart((state) => state.items);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            ShopHub
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/products" className="text-gray-600 hover:text-gray-800">
              Products
            </Link>
            <Link to="/cart" className="relative text-gray-600 hover:text-gray-800">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}