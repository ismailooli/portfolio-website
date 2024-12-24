import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import profilePic from '../assets/profileicon.avif';
import profilePicDark from '../assets/profileicon-dark.png';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="flex flex-col">
      {/* Top toolbar with centered time */}
      <div style={{ 
        backgroundColor: 'var(--background-secondary)',
        borderColor: 'var(--border-color)',
        color: 'var(--text-secondary)'
      }} className="flex justify-center items-center px-4 py-1 border-b">
        <div className="text-sm">
          {currentTime.toLocaleTimeString()} - {currentTime.toLocaleDateString()}
        </div>
      </div>

      {/* Main header content */}
      <div style={{ backgroundColor: 'var(--background-primary)' }} className="flex items-center gap-4 p-4">
        <div className="relative w-16 h-16">
          <motion.div 
            className="absolute w-full h-16 rounded-full cursor-pointer overflow-hidden"
            animate={{ rotateY: isDark ? 0 : 180 }}
            transition={{ duration: 0.6 }}
            onClick={toggleTheme}
            style={{ 
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <img
              src={profilePicDark}
              alt="Dark Mode"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            className="absolute w-full h-16 rounded-full cursor-pointer overflow-hidden"
            animate={{ rotateY: isDark ? 180 : 360 }}
            transition={{ duration: 0.6 }}
            onClick={toggleTheme}
            style={{ 
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <img
              src={profilePic}
              alt="Light Mode"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div>
          <h1 style={{ color: 'var(--text-primary)' }} className="text-xl font-mono">
            Ismail's Laptop
          </h1>
          <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
            C:/Portfolio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;