import { useCart } from '../store/cartStore';

export default function Cart() {
  const { items, removeItem, clearCart } = useCart();
  
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-semibold">${total.toFixed(2)}</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={clearCart}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition-colors"
              >
                Clear Cart
              </button>
              <button
                className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}