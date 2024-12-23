import { Link } from 'react-router'; 
import productImage from '../assets/product-image.jpg'; 
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';  // Import new product image
import product3 from '../assets/product3.jpg';  // Import third product image
import Header from '../components/Navbar';
import Footer from '../components/Footer';

const ProductPage = () => {
  return (
    <main className="bg-teal-400 text-white py-12 mt-12 mb-16">
      <Header/>
      <div className="container mx-auto flex-col md:flex-row items-center justify-between px-4">
        <div className="w-full md:w-1/2 text-white z-10">
          <h1 className="text-4xl font-serif font-bold mb-4">ShopMe</h1>

          {/* First Product */}
          <div className="mb-8">
            <img
              src={product1}
              alt="Product 1"
              className="max-w-40 rounded-lg mb-6 transform transition duration-300 hover:scale-105"
            />
            <p className="text-lg mb-6">
              This is a detailed description of Product 1. It includes features, specifications, and other relevant information that helps customers make informed decisions.
            </p>
            <p className="text-lg mb-2">Price: ₱10,000.00</p>
            <button className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700 transition duration-300">
              Add to Cart
            </button>
          </div>

          {/* New Product (Product 2) */}
          <div className="mb-8">
            <img
              src={product2}
              alt="Product 2"
              className="max-w-40 rounded-lg mb-6 transform transition duration-300 hover:scale-105"
            />
            <p className="text-lg mb-6">
              This is a detailed description of Product 2. It includes features, specifications, and other relevant information that helps customers make informed decisions.
            </p>
            <p className="text-lg mb-2">Price: ₱12,500.00</p>
            <button className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          <div className="bg-white text-teal-600 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={product1}
              alt="Product 1"
              className="w-full h-56 object-cover transform transition duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Product 1</h3>
              <p className="text-lg mb-2">₱10,000.00</p>
              <Link to="/product1">
                <button className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700 transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white text-teal-600 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={product2}
              alt="Product 2"
              className="w-full h-56 object-cover transform transition duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Product 2</h3>
              <p className="text-lg mb-2">₱12,500.00</p>
              <Link to="/product2">
                <button className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700 transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white text-teal-600 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={product3}
              alt="Product 3"
              className="w-full h-56 object-cover transform transition duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Product 3</h3>
              <p className="text-lg mb-2">₱15,000.00</p>
              <Link to="/product3">
                <button className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700 transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default ProductPage;
