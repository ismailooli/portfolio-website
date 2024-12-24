import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import DirectoryTree from './DirectoryTree';

const Sidebar = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`w-72 flex flex-col ${
      isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-200'
    } border-r transition-colors`}>
      <Header />
      <DirectoryTree />
    </div>
  );
};

export default Sidebar;