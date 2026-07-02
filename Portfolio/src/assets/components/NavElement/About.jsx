import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image Container */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              {/* Replace the src below with the actual path to your profile picture */}
              <img 
                src="/your-profile-pic.jpg" 
                alt="Anoop Kumar" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">
              About Me
            </h2>
            <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Hi, I'm Anoop Kumar.
            </h3>
            
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                I am a passionate <span className="font-semibold text-gray-900">React Developer</span> with a strong foundation in <span className="font-semibold text-gray-900">PostgreSQL</span>. I love translating ideas into responsive, functional, and visually appealing web applications, whether that's building out an e-commerce platform or crafting clean UI themes.
              </p>
              <p>
                My background isn't just in code—I believe the best frontend developers have an eye for design. That's why my technical skills are heavily influenced by my creative hobbies as a <span className="font-semibold text-gray-900">Sketch Artist</span> and <span className="font-semibold text-gray-900">Photographer</span>. 
              </p>
              <p>
                When I'm not pushing commits to GitHub or refining a user interface, you can usually find me behind a camera lens, working on a new sketch, or playing a strategic game of chess.
              </p>
            </div>

            {/* Quick Stats / Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-2xl font-bold text-gray-900">75+</p>
                <p className="text-sm text-gray-500">GitHub Contributions</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-2xl font-bold text-gray-900">React</p>
                <p className="text-sm text-gray-500">Frontend Focus</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 mt-4 sm:mt-0">
                <p className="text-2xl font-bold text-gray-900">Creative</p>
                <p className="text-sm text-gray-500">Art & Photography</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;