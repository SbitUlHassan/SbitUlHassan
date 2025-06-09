import { useCart } from '../store/cartStore';

export default function Cart() {
  const { items, removeItem, clearCart } = useCart();
  
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
          SHOPPING <span className="text-yellow-500">CART</span>
        </h1>
        
        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-xl mb-8">Your cart is empty</p>
            <a 
              href="/products"
              className="inline-block bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              CONTINUE SHOPPING
            </a>
          </div>
        ) : (
          <>
            <div className="space-y-6 mb-12">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-white p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-6">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                    <div>
                      <h2 className="text-xl font-semibold text-black">{item.name}</h2>
                      <p className="text-gray-500">{item.category}</p>
                      <p className="text-lg font-bold text-yellow-500">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-800 font-semibold transition-colors duration-300"
                  >
                    REMOVE
                  </button>
                </div>
              ))}
            </div>
            
            <div className="bg-black text-white p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold">TOTAL:</span>
                <span className="text-2xl font-bold text-yellow-500">${total.toFixed(2)}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={clearCart}
                  className="flex-1 bg-gray-700 text-white py-3 font-semibold hover:bg-gray-600 transition-colors duration-300"
                >
                  CLEAR CART
                </button>
                <button className="flex-1 bg-yellow-500 text-black py-3 font-semibold hover:bg-yellow-400 transition-colors duration-300">
                  CHECKOUT
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}