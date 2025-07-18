import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/form-background.png')] ">
      {/* Header Section */}
      <TopBar />
      <Header />
      

      {/* Login Form Section */}

      <main className="flex-grow flex items-center  justify-center px-4 py-10">
        <div className="bg-slate-50 shadow-2xl border-b-4 border-blue-800 rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold text-blue-800 mb-6 text-center">Official Login</h2>

          {/* Username */}
          <div className="flex items-center border border-gray-300 rounded mb-4 px-3 py-2">
            <span className="mr-3 text-blue-700">👤</span>
            <input
              type="text"
              placeholder="Enter Username"
              className="outline-none w-full text-sm"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-300 rounded mb-4 px-3 py-2">
            <span className="mr-3 text-blue-700">🔑</span>
            <input
              type="password"
              placeholder="Enter Password"
              className="outline-none w-full text-sm"
            />
          </div>

          {/* Captcha */}
          <div className="mb-2 flex justify-between ">
            <img src="/captcha.png" alt="captcha" className="w-80% h-12 object-cover rounded" />
            <div className="text-right text-sm text-blue-600 mt-1 mr-4 cursor-pointer hover:underline">
              🔄 Refresh
            </div>
          </div>

          {/* Captcha Input */}
          <input
            type="text"
            placeholder="Enter Captcha Code"
            className="border border-gray-300 rounded w-full px-3 py-2 text-sm mb-4"
          />

          {/* Login Button */}
          <div className="mx-24">
            <Link to="/dashboard">
              <button className="bg-gray-600 hover:bg-gray-700 text-white w-full py-2 rounded-full text-sm font-medium">
                  LOGIN
              </button>
            </Link>
          </div>

          {/* Forgot password */}
          <p className="text-center text-sm mt-4">
            Forgot Password?{" "}
            <a href="#" className="text-blue-700 underline">Click Here to Reset</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;
