import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import DirectoryTree from './DirectoryTree';

const Sidebar = () => {
    const { isDark } = useTheme();
    
    return (
      <div className={`w-72 flex flex-col ${
        isDark 
          ? 'bg-gray-900 border-r border-gray-600 shadow-lg' 
          : 'bg-gray-100 border-r border-gray-300 shadow'
      } transition-colors`}>
        <Header />
        <DirectoryTree />
      </div>
    );
  };

export default Sidebar;