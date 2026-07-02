import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black opacity-50 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
        
        {/* Profile Info */}
        <div>
          <h3 className="text-3xl font-bold mb-2">Anoop lofi</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            React Developer &bull; PostgreSQL &bull; Sketch Artist &bull; Photography
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mt-2">
          <a 
            href="mailto:anooprajapati807@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors text-2xl"
            title="Email"
          >
          </a>
          <a 
            href="https://linkedin.com/in/anoop-kumar-21b462368" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors text-2xl"
            title="LinkedIn"
          >

          </a>
          <a 
            href="https://twitter.com/anooppraja" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors text-2xl"
            title="X (Twitter)"
          >

          </a>
          <a 
            href="https://instagram.com/ur.anoop" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors text-2xl"
            title="Instagram"
          >

          </a>
          <a 
            href="https://www.chess.com/member/anoopprajapati" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors text-2xl"
            title="Chess.com"
          >

          </a>
        </div>

        {/* Copyright Bottom */}
        <div className="w-full border-t border-gray-800 mt-8 pt-8">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Anoop Kumar. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;