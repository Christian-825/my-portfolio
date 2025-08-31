import React from 'react';

export default function FooterComponent() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Name & Role */}
        <div>
          <h1 className="text-xl font-bold text-white">Christian Nievera</h1>
          <p className="text-blue-400 text-sm mt-1">Web Developer</p>
        </div>

        {/* CTA Section */}
        <div className="space-y-2">
          <p className="text-base text-white font-medium">Interested in working together?</p>
          <a
            href="#contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-5 rounded-md transition duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-5 pt-2">
          <a
            href="https://www.linkedin.com/in/christian-nievera"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform"
          >
            <img
              className="w-6 h-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn icon"
            />
          </a>
          <a
            href="https://about.gitlab.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitLab"
            className="hover:scale-110 transition-transform"
          >
            <img
              className="w-6 h-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"
              alt="GitLab icon"
            />
          </a>
          <a
            href="https://github.com/Christian-825"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 transition-transform"
          >
            <img
              className="w-6 h-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="GitHub icon"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-4">
          <p className="text-xs text-gray-500">&copy; 2025 Christian Nievera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
