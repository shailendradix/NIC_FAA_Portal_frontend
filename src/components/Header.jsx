import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { button } from 'framer-motion/client';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const handleLogout=()=>{
      localStorage.removeItem('authToken');
      navigate('/');// redirect to Login
    };
     const showLogout = location.pathname !== '/';


  return (

    <div className="flex justify-between items-center px-24 py-2 bg-white border border-slate-300 shadow-md">
  {/* Left: Logos and Title */}
        <div className="flex items-center gap-4 mx-auto">
            <img src="/logo.png" alt="NIC" className="h-12" />
            <div className="h-10 w-px bg-gray-300 "></div>
            <img src="/rti-logo.png" alt="RTI" className="h-12" />
            <div className="ml-6 flex-col ">
                <div className=' flex justify-center my-2'>
                    <h1 className="text-xl font-bold text-blue-800 ml-20 ">
                        Right to Information Online Portal
                    </h1>
                </div>
                

                <p className="text-sm text-gray-600 ml-20 " >
                    An initiative of Administrative Reforms, Training, Pension and Public Grievances Department, Government of Tripura
                </p>
        </div>
    </div>

    {/* Right: Logout button (only show if not on login page) */}
      {showLogout && (
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1 rounded hover:bg-red-200"
        >
          <FiLogOut />
          Logout
        </button>
      )}

        
        
</div>

  );
};

export default Header
