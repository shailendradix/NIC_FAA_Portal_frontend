import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LoginDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-700 text-white px-4 py-1 rounded-full font-medium text-sm flex items-center gap-2"
      >
        🔒 LOGIN
        <FaChevronDown className="text-xs" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded shadow-md z-10">
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Admin Login
          </Link>
          <Link
            to="/user-login"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            User Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default LoginDropdown;
