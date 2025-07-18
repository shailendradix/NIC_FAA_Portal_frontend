import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import Header from '../components/Header'
import Footer from '../components/Footer';
function Dashboard() {
  const metrics = [
    {
      title: "Appeal Pending ≤ 10 Days",
      count: 20,
      icon: "⏰",
      key: "pendingWithin10Days",
    },
    {
      title: "New Appeal(s)",
      count: 2,
      icon: "🆕",
      key: "newAppeals",
    },
    {
      title: "Appeal Under Process",
      count: 2,
      icon: "🔄",
      key: "appealsUnderProcess",
    },
    
  ];

  return (
    
    <div className=" flex flex-col min-h-screen bg-[url('form-background.png')]  bg-center ">

      <TopBar/>
      <Header/>
      <Navbar/>
      <main className='flex-grow'>
      <div className=' flex justify-center'>
        <h1 className=" py-2 text-red-800 font-bold mb-6">
          Welcome to Appellate Authority Module of RTI-MIS
        </h1>
      </div>
      <div className=' flex justify-between mx-20 mb-10 font-bold text-red-800  '>
          <p>Public Authority : Income Tax Department</p>
          <p>Role :PIO Officer</p>
          <p>User : Abhishek Singh </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-4 gap-12">
        {metrics.map((item) => (
          <Link to={`/appeals/${item.key}`} key={item.key}>
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-lg transition cursor-pointer">
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="text-xl font-semibold text-gray-700 text-center">
                {item.title}
              </div>
              <div className="text-3xl font-bold text-blue-600 mt-2">
                {item.count}
              </div>
            </div>
          </Link>
        ))}
      </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Dashboard;
