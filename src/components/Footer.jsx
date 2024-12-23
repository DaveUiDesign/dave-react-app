
const Footer = () => {
  return (
    <footer className="bottom-0 bg-teal-700 text-white fixed w-screen">
      <div className="container mx-auto py-4 text-center">
        <p className="text-lg">&copy; 2024 ShopMe. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-white hover:text-gray-300 mx-2">Privacy Policy</a>
          <a href="#" className="text-white hover:text-gray-300 mx-2">Terms of Service</a>
          <a href="#" className="text-white hover:text-gray-300 mx-2">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
