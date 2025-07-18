
import React from 'react'

function TopBar(){
    return(
        <div className="bg-black text-white text-sm px-4 py-1 flex justify-end items-center">
            <a href="#main-content" className="underline">Skip to main content</a>
            <div className="h-6 w-px bg-gray-400 mx-4" ></div>

            <div className="flex items-center gap-2">
                <span role="img" aria-label="globe">🌐</span>
                <select className="bg-black text-white border border-white text-xs">
                    <option>English</option>
                    <option>हिंदी</option>
                </select>
            </div>
        </div>
      
    );
}

export default TopBar;