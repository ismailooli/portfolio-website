import React from 'react';
import { useTheme } from '../context/ThemeContext';
import aboutMePic from '../assets/aboutmepic.jpg'

const About = () => {
  const { isDark } = useTheme();
  
  const codingTools = [
    'Python', 'CSS', 'HTML', 'Java', 'C', 'C++',
    'JavaScript', 'React', 'MySQL', 'R', 'Docker'
  ];

  const designTools = [
    'Adobe Photoshop', 'Adobe Premiere Pro', 'Figma'
  ];

  return (
    <div className="h-[calc(100vh-120px)] overflow-y-auto">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-start gap-12">
          <div className="flex-1 max-w-xl">
            <h1 className="text-2xl font-mono mb-3">Hi, I'm Ismail</h1>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              I am studying Computer Science and Economics at the University of Urbana-Champaign (UIUC). 
              My interests within Computer Science lie in data visualization as well as user interface design. 
              However, each month I usually have a new interest that I tend to tunnel vision on. 
              For the past few weeks, it's been 3D modeling and printing.
            </p>
          </div>
          <img
            src={aboutMePic}
            alt="Profile"
            className="w-64 h-64 object-cover rounded-lg p-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-xl font-mono mb-3">Education</h2>
          <p className="text-[var(--text-secondary)]">
            B.S. in Computer Science + Economics
          </p>
        </div>

        <div>
          <h2 className="text-xl font-mono mb-3">Other Interests</h2>
          <ul className="list-disc list-inside text-[var(--text-secondary)] ml-4 space-y-2">
            <li>Making Short Films</li>
            <li>Cooking (check out what my roommates and I cook @ <a 
                href="https://instagram.com/chefsdechampaign" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >chefsdechampaign</a>)</li>
            <li>Reading Manga (currently reading: <a 
                href="https://myanimelist.net/manga/143196/Red_Blue" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >Red Blue</a>)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-mono mb-3">Coding Tools</h2>
          <div className="flex flex-wrap gap-2">
            {codingTools.map((tool) => (
              <span key={tool} className="skill-tag">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="pb-2">
          <h2 className="text-xl font-mono mb-3">Design Tools</h2>
          <div className="flex flex-wrap gap-2">
            {designTools.map((tool) => (
              <span key={tool} className="skill-tag">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

