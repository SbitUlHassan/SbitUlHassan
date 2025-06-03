export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to ShopHub</h1>
      <p className="text-xl text-gray-600 mb-8">Discover amazing products at great prices</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quality Products</h2>
          <p className="text-gray-600">Carefully curated selection of high-quality items</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Fast Shipping</h2>
          <p className="text-gray-600">Quick delivery to your doorstep</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">24/7 Support</h2>
          <p className="text-gray-600">Always here to help you</p>
        </div>
      </div>
    </div>
  );
}