import react from 'react'
import About from './NavElement/About'

// const About = (e) => {
//     return  <>
//     <h1>heyy</h1>
//     </>
// }


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <a href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Anoop Kumar
          </a>

          {/* Navigation Links */}
          <ul className="flex space-x-6 sm:space-x-8">
            <li>
              <a href="#About" className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;