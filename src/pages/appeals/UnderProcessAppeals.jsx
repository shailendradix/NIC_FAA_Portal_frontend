import React from 'react';
import Header from '../../components/Header';
import TopBar from '../../components/TopBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
const UnderProcessAppeals = () => {
    const pendingData = [
    {
      id: 1,
      registrationNo: 'GORAG/A/2024/#001',
      name: 'XXXXX XXXXX',
      receivedDate: '01/12/2024',
    },
    {
      id: 2,
      registrationNo: 'GORAG/A/2024/#002',
      name: 'YYYYY YYYYY',
      receivedDate: '05/12/2024',
    }
];
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header Section */}
      <TopBar />
      <Header />
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-6 py-4">
        <h2 className="text-xl font-bold text-red-800 mb-4">
          Appeals Under Process
        </h2>

        <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Registration Number</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Received Date</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingData.map((appeal, index) => (
                <tr key={appeal.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{appeal.registrationNo}</td>
                  <td className="px-4 py-2">{appeal.name}</td>
                  <td className="px-4 py-2">{appeal.receivedDate}</td>
                  <td className="px-4 py-2">
                    <Link to="/appeal-assessment">
                        <button className="text-blue-600 hover:underline">
                            Assess
                        </button>
                    </Link>
                  </td>
                </tr>
              ))}
              {pendingData.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-gray-500 py-6">
                    No pending appeals found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer Always Sticks Bottom */}
      <Footer />
    </div>
  );
};

export default UnderProcessAppeals;
