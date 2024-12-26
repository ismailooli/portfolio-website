import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import "../App.css"

const Film = () => {
  const { isDark } = useTheme();

  const films = [
    {
      id: 1,
      title: 'Avatar: The Last Shura Member',
      description: 'A short film I did for Film Fest 2024 hosted by the Muslim Student Association - My roommate "broke" his elbow while shooting.',
      roles: ['Director', 'Cinematographer', 'Writer'],
      year: '2024',
      format: 'HD/5D',
      youtubeUrl: 'https://youtu.be/vhSQCmEzz08'
    }
  ];

  const styles = {
    title: {
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
        <h1 style={styles.title} className="text-2xl font-mono mb-3">
          ► Filmography & Video Work
        </h1>

        <div className="space-y-3">
          {films.map(film => (
            <motion.div
              key={film.id}
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
              onClick={() => window.open(film.youtubeUrl, '_blank')}
            >
              <h2 style={styles.projectCard} className="text-xl font-mono">
                {film.title}
              </h2>
              
              <p style={styles.description} className="text-sm mt-2 mb-3">
                {film.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-2">
                {film.roles.map((role, index) => (
                  <span 
                    key={index}
                    style={styles.tag}
                    className="px-2 py-0.5 rounded text-xs font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="text-xs flex items-center gap-2" style={styles.description}>
                <span>{film.year}</span>
                <span>{film.format}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Film;