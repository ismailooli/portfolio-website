import React from 'react';
import Header from '../components/Header';
import DirectoryTree from '../components/DirectoryTree';
import '../App.css'

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-900 overflow-hidden">
      <Header />
      <div className="flex-1 flex relative">
        <DirectoryTree />
      </div>
    </div>
  );
};

export default LandingPage;