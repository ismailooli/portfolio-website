import React, { useMemo } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import '../../App.css'

const WindowFrame = ({ title = 'Window', children, onClose }) => {
  const { isDark } = useTheme();

  const position = useMemo(() => {
    const hash = title.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);

    const maxLeft = Math.max(window.innerWidth - 800, 0);
    const maxTop = Math.max(window.innerHeight - 400, 0);

    const left = (Math.abs(hash) % (maxLeft * 0.6)) + (maxLeft * 0.1);
    const top = (Math.abs(hash * 31) % (maxTop * 0.6)) + (maxTop * 0.1);

    return { left, top };
  }, [title]);

  return (
    <motion.div 
      style={{
        backgroundColor: 'var(--background-primary)',
        borderColor: 'var(--border-color)',
        width: '60%',
        maxWidth: '800px',
        left: position.left,
        top: position.top,
        maxHeight: '80vh', // Changed from fixed height to maxHeight
      }}
      className="fixed rounded-lg shadow-lg overflow-hidden border-2 flex flex-col"
      drag
      dragMomentum={false}
      dragElastic={0}
      initial={{ opacity: 0, scale: 0.95, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{
        duration: 0.2,
        ease: "easeOut"
      }}
    >
      {/* Title Bar */}
      <motion.div 
        style={{
          backgroundColor: 'var(--background-secondary)',
          color: 'var(--text-secondary)'
        }}
        className="px-4 py-2 flex items-center justify-between cursor-grab active:cursor-grabbing z-10"
        onPointerDown={(e) => {
          e.stopPropagation();
        }}
      >
        <span className=" text-sm select-none">{title}</span>
        <div className="flex gap-2">
          <button 
            className="hover:bg-red-500/10 hover:text-red-500 p-1 rounded cursor-pointer transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClose && onClose();
            }}
          >
            <X size={14} />
          </button>
        </div>
      </motion.div>
      
      {/* Window Content */}
      <div 
        style={{ color: 'var(--text-primary)' }} 
        className="flex-1 overflow-auto min-h-0"
      >
        {children}
      </div>
    </motion.div>
  );
};

export default WindowFrame;