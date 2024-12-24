import React from 'react';
import { useTheme } from '../context/ThemeContext';

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
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-mono mb-4">Hi, I'm Ismail</h1>
          <p className="text-[var(--text-secondary)] mb-8">
            A software developer passionate about creating designs and working with data. I
            enjoy building intuitive user interfaces and solving complex problems.
          </p>
        </div>
        <img
          src="/api/placeholder/150/150"
          alt="Profile"
          className="rounded-lg w-32 h-32 object-cover"
        />
      </div>

      <div>
        <h2 className="text-xl font-mono mb-2">Education</h2>
        <p className="text-[var(--text-secondary)]">
          B.S. in Computer Science + Economics - University of Illinois at Urbana-Champaign
        </p>
      </div>

      <div>
        <h2 className="text-xl font-mono mb-2">Other Interests</h2>
        <ul className="list-disc list-inside text-[var(--text-secondary)] ml-4">
          <li>Photo Editing</li>
          <li>3D Printing</li>
          <li>Manga</li>
          <li>Film</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-mono mb-2">Coding Tools</h2>
        <div className="flex flex-wrap gap-2">
          {codingTools.map((tool) => (
            <span key={tool} className="skill-tag">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-mono mb-2">Design Tools</h2>
        <div className="flex flex-wrap gap-2">
          {designTools.map((tool) => (
            <span key={tool} className="skill-tag">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;