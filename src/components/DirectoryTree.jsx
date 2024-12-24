import React, { useState } from 'react';
import { 
  Folder, 
  FileText, 
  ChevronRight, 
  ChevronDown, 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  User, 
  Video, 
  Cpu 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import WindowFrame from './system/WindowFrame';

// Import your existing components and configurations
import About from '../pages/About';
import Film from '../pages/Film';
import CS from '../pages/CS';
import Contact from '../pages/Contact';

const CONTENT_COMPONENTS = {
  'About': About,
  'Film': Film,
  'CS': CS,
  'Contact': Contact
};

const SOCIAL_LINKS = {
  'GitHub': 'https://github.com/ismailooli',
  'LinkedIn': 'https://www.linkedin.com/in/ismoha4/'
};

const SOCIAL_ICONS = {
  'GitHub': Github,
  'LinkedIn': Linkedin
};

const useWindowManager = () => {
  const [openWindows, setOpenWindows] = useState([]);
  const [maxZIndex, setMaxZIndex] = useState(1);

  const openWindow = (name) => {
    if (!openWindows.find(w => w.name === name)) {
      setOpenWindows(prev => [...prev, { name, zIndex: maxZIndex + 1 }]);
      setMaxZIndex(prev => prev + 1);
    }
    bringToFront(name);
  };

  const closeWindow = (name) => {
    setOpenWindows(prev => prev.filter(w => w.name !== name));
  };

  const bringToFront = (name) => {
    setMaxZIndex(prev => prev + 1);
    setOpenWindows(prev => 
      prev.map(w => ({
        ...w,
        zIndex: w.name === name ? maxZIndex + 1 : w.zIndex
      }))
    );
  };

  return {
    openWindows,
    openWindow,
    closeWindow,
    bringToFront
  };
};

const SocialLink = ({ name, link }) => {
  const Icon = SOCIAL_ICONS[name];
  const { isDark } = useTheme();
  
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 px-4 py-2.5 ${
        isDark 
          ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
          : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
      } transition-colors cursor-pointer`}
    >
      <span className="w-5">
        <Icon size={20} />
      </span>
      <span className="text-base">{name}</span>
    </a>
  );
};

const DirectoryItem = ({ name, path, type = 'folder', children, windowManager }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openWindow } = windowManager;
  const { isDark } = useTheme();

  const getIcon = (name, type) => {
    if (type === 'folder') return Folder;
    switch (name) {
      case 'Contact': return Send;
      case 'About': return User;
      case 'CS': return Cpu;
      case 'Film': return Video;
      default: return FileText;
    }
  };

  const Icon = getIcon(name, type);

  const handleClick = () => {
    if (type === 'folder') {
      setIsOpen(!isOpen);
    } else {
      openWindow(name);
    }
  };

  return (
    <>
      <div 
        onClick={handleClick}
        className={`flex items-center gap-3 px-4 py-2.5 ${
          isDark 
            ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
            : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
        } transition-colors cursor-pointer`}
      >
        <div className="flex items-center gap-3">
          {type === 'folder' && (
            <span className="w-5">
              {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </span>
          )}
          {!type === 'folder' && <span className="w-5" />}
          <Icon size={20} />
          <span className="text-base">{name}</span>
        </div>
      </div>

      {type === 'folder' && isOpen && (
        <div className="pl-8">
          {children}
        </div>
      )}
    </>
  );
};

const DirectoryTree = () => {
  const windowManager = useWindowManager();
  const { openWindows, closeWindow, bringToFront } = windowManager;
  const { isDark } = useTheme();

  return (
    <div className="flex h-full">
      {/* Directory Sidebar */}
      <div className={`w-72 ${
        isDark 
          ? 'bg-gray-900 border-gray-700' 
          : 'bg-gray-100 border-gray-200'
      } border-r transition-colors`}>
        <div className="py-2">
          <DirectoryItem 
            name="About" 
            path="/about" 
            type="file" 
            windowManager={windowManager} 
          />
          <DirectoryItem 
            name="Works" 
            path="/works" 
            type="folder" 
            windowManager={windowManager}
          >
            <DirectoryItem 
              name="Film" 
              path="/works/film" 
              type="file" 
              windowManager={windowManager} 
            />
            <DirectoryItem 
              name="CS" 
              path="/works/cs" 
              type="file" 
              windowManager={windowManager} 
            />
          </DirectoryItem>
          <DirectoryItem 
            name="Contact" 
            path="/contact" 
            type="file" 
            windowManager={windowManager} 
          />
          <DirectoryItem 
            name="Socials" 
            path="/socials" 
            type="folder" 
            windowManager={windowManager}
          >
            {Object.entries(SOCIAL_LINKS).map(([name, link]) => (
              <SocialLink key={name} name={name} link={link} />
            ))}
          </DirectoryItem>
        </div>
      </div>

      {/* Windows Container */}
      <div className={`flex-1 relative ${
        isDark ? 'bg-gray-800' : 'bg-gray-50'
      } transition-colors`}>
        {openWindows.map(({ name, zIndex }) => {
          const ContentComponent = CONTENT_COMPONENTS[name];
          return ContentComponent && (
            <div 
              key={name}
              className="absolute inset-0"
              style={{ zIndex }}
              onMouseDown={() => bringToFront(name)}
            >
              <WindowFrame 
                title={`${name.toLowerCase()}.txt`}
                onClose={() => closeWindow(name)}
              >
                <ContentComponent />
              </WindowFrame>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DirectoryTree;