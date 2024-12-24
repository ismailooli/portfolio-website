import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();

  const inputStyle = {
    backgroundColor: 'var(--background-tertiary)',
    color: 'var(--text-primary)',
    borderColor: 'var(--border-color)'
  };

  const labelStyle = {
    color: 'var(--text-secondary)'
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 style={{ color: 'var(--text-primary)' }} className="text-2xl font-mono mb-6">
        Contact Me
      </h1>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label style={labelStyle} className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              style={inputStyle}
              className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label style={labelStyle} className="block mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              style={inputStyle}
              className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label style={labelStyle} className="block mb-2 text-sm">
            Subject
          </label>
          <input
            type="text"
            style={inputStyle}
            className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label style={labelStyle} className="block mb-2 text-sm">
            Message
          </label>
          <textarea
            style={inputStyle}
            className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px]"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;