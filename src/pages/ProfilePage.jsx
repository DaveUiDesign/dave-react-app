import React, { useState, useEffect } from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from RandomUser API
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        setUser(data.results[0]);  // Get the first user from the response
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Loading and error handling
  if (loading) {
    return (
      <div className="text-center text-white">
        <h2 className="text-2xl">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-white">
        <h2 className="text-2xl">Something went wrong! Please try again later.</h2>
      </div>
    );
  }

  return (
    <div className="bg-teal-300 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-teal-600 mb-12">My Profile</h1>
        <div className="bg-white shadow-xl rounded-lg p-8 max-w-3xl mx-auto">
          <div className="flex items-center mb-6">
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="rounded-full w-32 h-32 object-cover border-4 border-teal-600"
            />
            <div className="ml-6">
              <h2 className="text-3xl font-semibold text-teal-600">{`${user.name.first} ${user.name.last}`}</h2>
              <p className="text-lg text-teal-600">{user.email}</p>
              <p className="text-lg text-teal-600">{`${user.location.city}, ${user.location.country}`}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Contact Information</h3>
            <p className="text-lg">Phone: {user.phone}</p>
            <p className="text-lg">Username: {user.login.username}</p>
            <p className="text-lg">Date of Birth: {new Date(user.dob.date).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
