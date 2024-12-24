import React from 'react';
import Sidebar from '../components/Sidebar';
import '../App.css'

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-900 overflow-hidden">
      <div className="flex-1 flex relative">
        <Sidebar />
      </div>
    </div>
  );
};

export default LandingPage;