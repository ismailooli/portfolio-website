import React from 'react';
import Sidebar from '../components/Sidebar';
import '../App.css';

const LandingPage = () => {
  return (
    <div className="flex w-full h-screen bg-gray-900 overflow-hidden">
      <Sidebar />
      <div className="flex-1 relative">
        {/* Windows will be rendered here */}
      </div>
    </div>
  );
};

export default LandingPage;