import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3">
      <div className="flex items-center gap-6 text-sm">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Search</a>
        <a href="#" className="hover:underline">Assessment</a>
        <a href="#" className="hover:underline">Reports</a>
        <a href="#" className="hover:underline">Utility</a>
        <a href="#" className="hover:underline">Logout</a>
      </div>
    </nav>
  );
}

export default Navbar;
