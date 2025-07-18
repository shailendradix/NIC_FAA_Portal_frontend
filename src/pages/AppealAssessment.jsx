import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AppealAssessment = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow px-6 py-6">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Appeal Assessment</h2>

        <div className="w-[80%] mx-auto bg-white p-6 rounded shadow-md border text-sm">
          {/* Top Right Links */}
          <div className="flex justify-end space-x-4 text-blue-700 text-sm mb-4">
            <a href="#" className="hover:underline">View RTI Request Details</a>
            <span>|</span>
            <a href="#" className="hover:underline">View Appeal Details</a>
          </div>

          {/* Static Detail Fields */}
          <div className="space-y-[1px] border border-gray-300">
            {[
              ['Registration No.', 'GORAG/A/2024/#001'],
              ['Appeal is received by', 'Online Receipt'],
              ['Date of Receipt', '01/12/2024'],
              ['Name', 'XXXXX XXXXX'],
              ['Gender', 'Male'],
              ['Address', 'Agartala, Tripura'],
              ['Pincode', '799114'],
              ['Phone No', 'Details not provided'],
              ['Mobile No', '+91-9876543210'],
              ['Email Address', 'Details not provided'],
              ['State', 'Tripura'],
              ['District', 'No District'],
              ['Country', 'India'],
              ['RTI Request Registration No.', 'GORAG/R/'],
              ['RTI Request Registration Date', '01/12/2024'],
              ['Appeal Letter No.', 'Details not provided'],
              ['Appeal Letter Date', 'Details not provided'],
              ['Citizenship Status', 'NRI Dual Citizenship'],
              ['Is Appellant Below Poverty Line?', 'No'],
              ['Amount', '0'],
              ['Does it concern the Life or Liberty of a Person?', 'No'],
              ['Name of PIO', 'XXXXX XXXXX'],
              ['PIO’s Order/Decision No.', 'Details not provided'],
              ['Date of Receipt of PIO’s Order/Decision', 'Details not provided'],
              ['Ground for Appeal', 'No Response Within the Time Limit'],
              ['Prayer or Relief Sought', 'Fertilizer License queries and procedure'],
              ['Reason for delay (if any)', 'Details not provided']
            ].map(([label, value], index) => (
              <div key={index} className="flex bg-gray-50">
                <div className="w-1/2 px-4 py-2 font-semibold bg-gray-200 border-r border-gray-300">
                  {label}
                </div>
                <div className="w-1/2 px-4 py-2">{value}</div>
              </div>
            ))}
          </div>

          {/* Editable Fields (Styled as Static Rows) */}
          <div className="mt-6 space-y-[1px] border border-gray-300">
            {/* Decision Dropdown */}
            <div className="flex">
              <label className="w-1/2 px-4 py-2 font-semibold bg-gray-200 border-r border-gray-300">
                Please Select a Decision <span className="text-red-600">*</span>
              </label>
              <select className="w-1/2 border border-gray-300 px-4 py-2 outline-none">
                <option>APPEAL DISPOSE OF</option>
                <option>FORWARD TO PIO</option>
                <option>REJECTED</option>
              </select>
            </div>

            {/* Textarea */}
            <div className="flex">
              <label className="w-1/2 px-4 py-2 font-semibold bg-gray-200 border-r border-gray-300">
                Appellate Authority's Decision
              </label>
              <textarea
                rows="4"
                className="w-1/2 border border-gray-300 px-4 py-2 resize-none outline-none"
                placeholder="Write your decision here..."
              />
            </div>

            {/* File Upload */}
            <div className="flex">
              <label className="w-1/2 px-4 py-2 font-semibold bg-gray-200 border-r border-gray-300">
                Upload Final Reply Document
              </label>
              <input
                type="file"
                className="w-1/2 text-sm border border-gray-300 px-4 py-2"
              />
            </div>

            {/* Submit Button (Right Side Only) */}
            <div className="flex">
              <div className="w-1/2"></div>
              <div className="w-1/2 px-4 py-3 text-right">
                <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AppealAssessment;
