import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const CS = () => {
  const { isDark } = useTheme();
  
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'This portfolio website is something I wanted to create for a while to show off my design and coding capabilities. My inspiration was an old File Explorer.',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      github: 'https://github.com/username/portfolio-website'
    },
    {
      id: 2,
      title: 'Secret Sharer',
      description: 'Used a sentiment analyiss model trained on the relationships between people in my friend group to help improve my friends social awareness.',
      tech: ['Python', 'Flask ', 'Hugging Face API'],
      github: 'https://github.com/ismailooli/secret-sharer'
    },
    {
      id: 3,
      title: '~scarf',
      description: 'Developed a web application that gave me clothing reccomendations based on the weather. My inspiration for this was that I always wanted my weather app to be able to tell me what to wear',
      tech: ['SQL', 'JavaScript', 'Python', 'OpenWeather API'],
      github: 'https://github.com/ismailooli/-scarf'
    },
    {
      id: 4,
      title: 'Moodscape',
      description: 'Created a data analysis and visualization platform on Jupyter Notebook that allowed the user to view correlations between user moods and their music',
      tech: ['Spotify API', 'Jupyter Notebook', 'Python', 'Plotly', 'Pandas'],
      github: 'https://colab.research.google.com/drive/1JSA2x_91j1GMu9VBz7sOhYE2TII4NK7X?authuser=1'
    }
  ];

  const styles = {
    container: {
      color: isDark ? 'rgb(209, 213, 219)' : 'rgb(55, 65, 81)'
    },
    projectCard: {
      backgroundColor: isDark ? 'rgb(31, 41, 55)' : 'rgb(243, 244, 246)',
      color: isDark ? 'rgb(209, 213, 219)' : 'rgb(17, 24, 39)',
      borderColor: isDark ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)'
    },
    description: {
      color: isDark ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)'
    },
    tag: {
      backgroundColor: isDark ? 'rgb(55, 65, 81)' : 'rgb(229, 231, 235)',
      color: isDark ? 'rgb(209, 213, 219)' : 'rgb(31, 41, 55)'
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="px-4 py-3">
        <h2 className="text-2xl font-mono mb-3">► Computer Science Projects</h2>
        <div className="space-y-3">
          {projects.map(project => (
            <motion.div
              key={project.id}
              style={{
                ...styles.projectCard,
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                transform: 'translateY(0)'
              }}
              className="p-4 rounded-lg border cursor-pointer"
              whileHover={{
                y: -2,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.2 }
              }}
              whileTap={{
                y: 0,
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}
              onClick={() => window.open(project.github, '_blank')}
            >
              <h3 style={styles.projectCard} className="text-xl font-mono">
                {project.title}
              </h3>
              <p style={styles.description} className="text-sm mt-2 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span 
                    key={tech} 
                    style={styles.tag}
                    className="px-2 py-0.5 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CS;