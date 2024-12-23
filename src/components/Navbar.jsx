import { NavLink } from 'react-router';

import Dlogo from '../assets/Dlogo.png';

const Navbar = () => {
  return (
    <nav className="top-0 fixed w-full z-50 flex justify-between items-center p-5 bg-teal-600">
      <div className="flex items-center">
        <img src={Dlogo} alt="Logo" className="h-12 w-12 mr-2 ml-10" />
        <span className="text-white text-xl font-bold">ShopMe</span>
      </div>

      <ul className="flex space-x-6">
        <li>
          <NavLink to="/" className="text-white text-lg hover:text-gray-300 transition duration-300">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="text-white text-lg hover:text-gray-300 transition duration-300">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/Profile" className="text-white text-lg hover:text-gray-300 transition duration-300">
            Profile
          </NavLink>
        </li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
