import { Link } from 'react-router'; 
import productImage from '../assets/product-image.jpg'; 
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <main className="bg-teal-400 text-white py-12 mt-12 my-16"> 
    <Header/>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="w-full md:w-1/2 text-white z-10">
          <h1 className="text-4xl font-bold mb-4 ">Welcome to ShopMe</h1>
          <p className="text-lg mb-6">
            Explore the best products and services we offer. Our platform brings you the latest in tech, innovation, and design. 
            Discover quality products and services at unbeatable prices.
          </p>
          <Link to='/products'>
            <button className="bg-white text-teal-600 py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>

        <div className="pl-40 hidden md:block w-1/2">
          <img
            src={productImage}
            alt="Featured Product"
            className="max-w-full rounded-lg transform transition duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Our Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="bg-white text-teal-600 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={product1}
              alt="Product 1"
              className="w-full h-56 object-cover transform transition duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Product 1</h3>
              <p className="text-lg mb-2">₱10,000.00</p>
              <button className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700 transition duration-300">
                View Details
              </button>
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
              <button className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700 transition duration-300">
                View Details
              </button>
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
              <button className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-te al-700 transition duration-300">
                View Details
              </button>
            </div>
          </div>

          <div className="bg-white text-teal-600 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={product4}
              alt="Product 4"
              className="w-full h-56 object-cover transform transition duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Product 4</h3>
              <p className="text-lg mb-2">₱17,500.00</p>
              <button className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700 transition duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default Homepage;