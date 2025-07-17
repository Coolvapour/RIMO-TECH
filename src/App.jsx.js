import React, { useState, useEffect } from 'react';

export default function App() {
  // State to manage the current active page
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for theme: 'light' or 'dark'
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });

  // Define theme color palettes with explicit Tailwind class names
  const themes = {
    light: {
      bgPrimary50: 'from-blue-50', bgSecondary50: 'to-indigo-50',
      bgPrimaryDark: 'bg-blue-600', bgSecondaryDark: 'bg-indigo-700',
      textPrimaryDark: 'text-blue-800', textPrimary: 'text-blue-600',
      borderPrimaryDark: 'border-blue-600', borderPrimaryMedium: 'border-blue-300',
      borderPrimaryLight: 'border-blue-200',
      hoverBgSecondaryDark: 'hover:bg-indigo-700',
      focusRingPrimaryLight: 'focus:ring-blue-300',
      bgContentOverlay: 'bg-white/80', // Light overlay for content sections
      textColor: 'text-gray-800', // General text color for content
      headingColor: 'text-gray-900', // General heading color for content
      cardBg: 'bg-gray-50', // Card background
      cardBorder: 'border-gray-200', // Card border
      footerBg: 'bg-gray-800', // Footer background
      footerText: 'text-white', // Footer text
      navBg: 'bg-white', // Navbar background
      navText: 'text-gray-700', // Navbar text
      navHoverText: 'hover:text-blue-600', // Navbar hover text
      shadow: 'shadow-md',
      shadowHover: 'hover:shadow-xl',
    },
    dark: {
      bgPrimary50: 'from-gray-900', bgSecondary50: 'to-gray-800',
      bgPrimaryDark: 'bg-blue-600', bgSecondaryDark: 'bg-indigo-700',
      textPrimaryDark: 'text-blue-400', textPrimary: 'text-blue-400',
      borderPrimaryDark: 'border-blue-600', borderPrimaryMedium: 'border-blue-600',
      borderPrimaryLight: 'border-blue-800',
      hoverBgSecondaryDark: 'hover:bg-indigo-800',
      focusRingPrimaryLight: 'focus:ring-blue-500',
      bgContentOverlay: 'bg-gray-800/80', // Dark overlay for content sections
      textColor: 'text-gray-200', // General text color for content
      headingColor: 'text-white', // General heading color for content
      cardBg: 'bg-gray-700', // Card background
      cardBorder: 'border-gray-600', // Card border
      footerBg: 'bg-gray-900', // Footer background
      footerText: 'text-gray-100', // Footer text
      navBg: 'bg-gray-900', // Navbar background
      navText: 'text-gray-200', // Navbar text
      navHoverText: 'hover:text-blue-400', // Navbar hover text
      shadow: 'shadow-lg',
      shadowHover: 'hover:shadow-2xl',
    },
  };

  const currentTheme = themes[theme];

  // Dynamically apply theme classes based on the current theme
  const primaryColorClass = currentTheme.bgPrimaryDark;
  const primaryTextColorClass = currentTheme.textPrimary; // For icons and general primary text
  const primaryBorderColorClass = currentTheme.borderPrimaryDark;
  const primaryHoverBgClass = currentTheme.hoverBgSecondaryDark;
  const primaryFocusRingClass = currentTheme.focusRingPrimaryLight;
  const primaryLightBgClass = currentTheme.bgPrimaryLight; // This is now a border color, not bg
  const primaryLightBorderClass = currentTheme.borderPrimaryLight;
  const primaryDarkTextColorClass = currentTheme.textPrimaryDark; // For headings and strong accents
  const primaryMediumBorderClass = currentTheme.borderPrimaryMedium;

  // Effect to save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Apply global background color to body for full page effect
    document.body.className = `font-sans antialiased ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Navbar Component
  const Navbar = () => (
    <header className={`${currentTheme.navBg} ${currentTheme.shadow} sticky top-0 z-50 transition-colors duration-500`}>
      <nav className="container mx-auto flex justify-between items-center py-6 px-4"> {/* Increased py for thicker header */}
        {/* Company Logo and Name */}
        <div className="flex items-center space-x-2">
          <button onClick={() => setCurrentPage('home')} className="focus:outline-none">
            {/* Rimo Technologies SVG Logo */}
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${primaryTextColorClass} transition-colors duration-300`}>
              {/* Stylized 'R' with tech/network elements */}
              <path d="M25 20 L25 80 L50 80 C70 80, 70 50, 50 50 L25 50" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="70" cy="30" r="10" fill="currentColor"/>
              <circle cx="70" cy="70" r="10" fill="currentColor"/>
              <line x1="50" y1="50" x2="65" y2="30" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
              <line x1="50" y1="50" x2="65" y2="70" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
            </svg>
          </button>
          <button onClick={() => setCurrentPage('home')} className={`text-2xl font-extrabold ${currentTheme.headingColor} ${currentTheme.navHoverText} focus:outline-none transition-colors duration-300`}>
            Rimo Technologies
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><button onClick={() => setCurrentPage('home')} className={`text-lg font-medium ${currentTheme.navHoverText} transition-colors duration-200 ${currentPage === 'home' ? `${primaryTextColorClass} border-b-2 ${primaryBorderColorClass}` : currentTheme.navText}`}>Home</button></li>
          <li><button onClick={() => setCurrentPage('about')} className={`text-lg font-medium ${currentTheme.navHoverText} transition-colors duration-200 ${currentPage === 'about' ? `${primaryTextColorClass} border-b-2 ${primaryBorderColorClass}` : currentTheme.navText}`}>About</button></li>
          <li><button onClick={() => setCurrentPage('services')} className={`text-lg font-medium ${currentTheme.navHoverText} transition-colors duration-200 ${currentPage === 'services' ? `${primaryTextColorClass} border-b-2 ${primaryBorderColorClass}` : currentTheme.navText}`}>Services</button></li>
          <li><button onClick={() => setCurrentPage('portfolio')} className={`text-lg font-medium ${currentTheme.navHoverText} transition-colors duration-200 ${currentPage === 'portfolio' ? `${primaryTextColorClass} border-b-2 ${primaryBorderColorClass}` : currentTheme.navText}`}>Portfolio</button></li>
          <li><button onClick={() => setCurrentPage('contact')} className={`text-lg font-medium ${currentTheme.navHoverText} transition-colors duration-200 ${currentPage === 'contact' ? `${primaryTextColorClass} border-b-2 ${primaryBorderColorClass}` : currentTheme.navText}`}>Contact</button></li>
          <li>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`ml-4 p-2 rounded-full ${primaryLightBgClass} ${primaryTextColorClass} focus:outline-none focus:ring-2 ${primaryFocusRingClass} transition-colors duration-300`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.841 18.841a.75.75 0 011.06-1.06l1.591 1.59a.75.75 0 11-1.06 1.06l-1.59-1.591zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18a.75.75 0 01.75-.75zM4.22 18.841a.75.75 0 011.06 1.06l-1.59 1.591a.75.75 0 11-1.06-1.06l1.591-1.59zM18.75 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5h-2.25a.75.75 0 01-.75-.75zM5.25 12a.75.75 0 01-.75-.75H2.25a.75.75 0 010 1.5h2.25a.75.75 0 01.75-.75zM6.652 5.25a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06l-1.591-1.59a.75.75 0 010-1.06z"></path></svg> // Sun icon
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9.5 1.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V2a.75.75 0 01.75-.75zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM16.121 17.621a.75.75 0 011.061 0l1.591 1.591a.75.75 0 01-1.061 1.061l-1.591-1.591a.75.75 0 010-1.061zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18a.75.75 0 01.75-.75zM7.879 17.621a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 01-1.061-1.061l1.591-1.591a.75.75 0 011.061 0zM18 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5h-2.25a.75.75 0 01-.75-.75zM5.25 12a.75.75 0 01-.75-.75H2.25a.75.75 0 010 1.5h2.25a.75.75 0 01.75-.75zM6.652 5.25a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06l-1.591-1.59a.75.75 0 010-1.06z"></path></svg> // Moon icon
            )}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          {/* Theme Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            className={`mr-4 p-2 rounded-full ${primaryLightBgClass} ${primaryTextColorClass} focus:outline-none focus:ring-2 ${primaryFocusRingClass} transition-colors duration-300`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.841 18.841a.75.75 0 011.06-1.06l1.591 1.59a.75.75 0 11-1.06 1.06l-1.59-1.591zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18a.75.75 0 01.75-.75zM4.22 18.841a.75.75 0 011.06 1.06l-1.59 1.591a.75.75 0 11-1.06-1.06l1.591-1.59zM18.75 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5h-2.25a.75.75 0 01-.75-.75zM5.25 12a.75.75 0 01-.75-.75H2.25a.75.75 0 010 1.5h2.25a.75.75 0 01.75-.75zM6.652 5.25a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06l-1.591-1.59a.75.75 0 010-1.06z"></path></svg> // Sun icon
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9.5 1.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V2a.75.75 0 01.75-.75zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM16.121 17.621a.75.75 0 011.061 0l1.591 1.591a.75.75 0 01-1.061 1.061l-1.591-1.591a.75.75 0 010-1.061zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18a.75.75 0 01.75-.75zM7.879 17.621a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 01-1.061-1.061l1.591-1.591a.75.75 0 011.061 0zM18 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5h-2.25a.75.75 0 01-.75-.75zM5.25 12a.75.75 0 01-.75-.75H2.25a.75.75 0 010 1.5h2.25a.75.75 0 01.75-.75zM6.652 5.25a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06l-1.591-1.59a.75.75 0 010-1.06z"></path></svg> // Moon icon
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${currentTheme.navText} ${currentTheme.navHoverText} focus:outline-none`}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${currentTheme.navBg} ${currentTheme.shadow} py-2`}>
          <ul className="flex flex-col items-center space-y-3">
            <li><button onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }} className={`text-lg font-medium ${currentTheme.navText} ${currentTheme.navHoverText} transition-colors duration-200`}>Home</button></li>
            <li><button onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); }} className={`text-lg font-medium ${currentTheme.navText} ${currentTheme.navHoverText} transition-colors duration-200`}>About</button></li>
            <li><button onClick={() => { setCurrentPage('services'); setIsMobileMenuOpen(false); }} className={`text-lg font-medium ${currentTheme.navText} ${currentTheme.navHoverText} transition-colors duration-200`}>Services</button></li>
            <li><button onClick={() => { setCurrentPage('portfolio'); setIsMobileMenuOpen(false); }} className={`text-lg font-medium ${currentTheme.navText} ${currentTheme.navHoverText} transition-colors duration-200`}>Portfolio</button></li>
            <li><button onClick={() => { setCurrentPage('contact'); setIsMobileMenuOpen(false); }} className={`text-lg font-medium ${currentTheme.navText} ${currentTheme.navHoverText} transition-colors duration-200`}>Contact</button></li>
          </ul>
        </div>
      )}
    </header>
  );

  // Footer Component
  const Footer = () => (
    <footer className={`${currentTheme.footerBg} ${currentTheme.footerText} mt-16 p-6 text-center text-sm rounded-t-lg transition-colors duration-500`}>
      <p>&copy; {new Date().getFullYear()} Rimo Technologies. All rights reserved.</p>
      <p className="mt-2">Engineered with precision and passion.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="https://www.facebook.com/search/top/?q=Moses%20K%20Leleito%20(coolvapour)" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Facebook">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.262c-1.225 0-1.62.756-1.62 1.542V12h2.77l-.443 2.89h-2.327v6.987C18.343 21.128 22 16.991 22 12z"></path></svg>
        </a>
        <a href="https://twitter.com/Coolvapour" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.414 0-6.184 2.77-6.184 6.184 0 .485.054.957.149 1.407-5.147-.252-9.696-2.724-12.748-6.474-.533.91-.84 1.962-.84 3.226 0 2.138 1.085 4.022 2.724 5.122-.798-.024-1.547-.245-2.205-.605v.078c0 2.986 2.13 5.474 4.925 6.042-.488.134-.997.203-1.52.203-.372 0-.735-.035-1.091-.104.782 2.443 3.056 4.227 5.767 4.276-2.094 1.64-4.708 2.625-7.524 2.625-.487 0-.97-.029-1.442-.084 2.703 1.737 5.922 2.756 9.39 2.756 11.292 0 17.493-9.312 17.493-17.493 0-.267-.007-.534-.02-.8zm-6.015 1.621c-.499-.294-1.109-.475-1.785-.475-1.049 0-1.905.426-2.583 1.258-.678.832-1.02 1.91-1.02 3.12 0 1.21.342 2.288 1.02 3.12.678.832 1.534 1.258 2.583 1.258 1.049 0 1.905-.426 2.583-1.258.678-.832 1.02-1.91 1.02-3.12 0-1.21-.342-2.288-1.02-3.12-.678-.832-1.534-1.258-2.583-1.258z"></path></svg>
        </a>
        <a href="https://www.instagram.com/Coolvapour/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Instagram">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85 0 3.204-.012 3.584-.07 4.85-1.691 3.252-1.691 4.771-4.919 4.919-1.265.058-1.645.069-4.85.069-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85 0-3.204.012-3.584.07-4.85 3.252-1.691 4.771-1.691 4.919-4.919 1.265-.058 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.947-.072 4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.444.648-1.444 1.444s.648 1.444 1.444 1.444 1.444-.648 1.444-1.444-.648-1.444-1.444-1.444z"></path></svg>
        </a>
        <a href="https://www.linkedin.com/search/results/all/?keywords=kipronoleleito594%40gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
        </a>
      </div>
    </footer>
  );

  // Home Page Component
  const Home = () => (
    <section key="home" className={`min-h-[calc(100vh-180px)] flex items-center justify-center bg-gradient-to-r ${currentTheme.bgPrimary50} ${currentTheme.bgSecondary50} p-8 rounded-lg ${currentTheme.shadow} transition-all duration-500`}>
      <div className={`text-center max-w-3xl ${currentTheme.bgContentOverlay} p-6 rounded-lg ${currentTheme.shadow} backdrop-blur-sm transition-colors duration-500`}>
        <h1 className={`text-5xl md:text-6xl font-extrabold ${currentTheme.headingColor} leading-tight animate-fade-in-down`}>
          Rimo Technologies
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-700 font-light animate-fade-in-up">
          Modern Software. Measurable Impact.
        </p>
        <p className={`mt-6 text-lg md:text-xl ${currentTheme.textColor} leading-relaxed animate-fade-in`}>
          We engineer robust web applications, intelligent automation tools, and scalable cloud-based systems that empower businesses to grow, optimize operations, and stay ahead in a dynamic digital landscape.
        </p>
        <button
          onClick={() => setCurrentPage('contact')}
          className={`mt-10 px-8 py-4 ${primaryColorClass} text-white font-semibold text-lg rounded-full ${currentTheme.shadow} ${primaryHoverBgClass} transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 ${primaryFocusRingClass} animate-bounce-once`}
        >
          Let’s Build Together
        </button>

        <div className="mt-16 text-left">
          <h2 className={`text-3xl font-bold ${currentTheme.headingColor} mb-6`}>Why Choose Us?</h2>
          <ul className={`space-y-4 text-lg ${currentTheme.textColor}`}>
            <li className="flex items-start animate-slide-in-left">
              <span className={`${primaryTextColorClass} mr-3 text-2xl`}>💡</span>
              <div>
                <strong className="font-semibold">Business-Oriented Solutions</strong>
                <p>We delve deep into your business challenges to deliver software that solves real problems and drives tangible value, not just lines of code.</p>
              </div>
            </li>
            <li className="flex items-start animate-slide-in-left delay-100">
              <span className={`${primaryTextColorClass} mr-3 text-2xl`}>📈</span>
              <div>
                <strong className="font-semibold">Scalable & Future-Proof</strong>
                <p>Our solutions are designed to grow with your business, ensuring long-term viability and adaptability to evolving needs.</p>
              </div>
            </li>
            <li className="flex items-start animate-slide-in-left delay-200">
              <span className={`${primaryTextColorClass} mr-3 text-2xl`}>🚀</span>
              <div>
                <strong className="font-semibold">Reliable Delivery & Support</strong>
                <p>We are committed to shipping what we promise, on time and within budget, followed by dedicated support to ensure smooth operations.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );

  // About Page Component
  const About = () => (
    <section key="about" className={`min-h-[calc(100vh-180px)] p-8 rounded-lg ${currentTheme.shadow} animate-fade-in bg-gradient-to-r ${currentTheme.bgPrimary50} ${currentTheme.bgSecondary50} transition-all duration-500`}>
      <h1 className={`text-4xl font-bold ${currentTheme.headingColor} mb-6 border-b-4 ${primaryBorderColorClass} pb-2 transition-colors duration-500`}>Who We Are</h1>
      <p className={`text-lg ${currentTheme.textColor} leading-relaxed animate-fade-in delay-100`}>
        Rimo Technologies was founded with a clear vision: to bridge the gap between innovative ideas and their seamless execution into high-quality software. We firmly believe that technology should be an enabler, solving real-world challenges and propelling businesses forward, rather than introducing new complexities. Our approach is rooted in understanding your unique needs and crafting bespoke solutions that deliver measurable impact.
      </p>

      <div className={`mt-12 ${currentTheme.cardBg} p-6 rounded-lg shadow-inner animate-fade-in delay-200 transition-colors duration-500`}>
        <h2 className={`text-3xl font-semibold ${currentTheme.headingColor} mb-4`}>Founder’s Note</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          <img
            src="https://drive.google.com/file/d/1XPdRMltQDNfQYd8Iqf7Bl-ENowY6NR_Z/view?usp=drive_link"
            alt="Moses, Founder of Rimo Technologies"
            className={`w-32 h-32 rounded-full object-cover ${currentTheme.shadow} border-4 ${primaryMediumBorderClass} transition-colors duration-500`}
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/ADD8E6/000000?text=Founder"; }}
          />
          <div>
            <p className={`text-xl font-medium ${currentTheme.headingColor}`}>Hi, I’m Moses,</p>
            <p className={`mt-2 text-lg ${currentTheme.textColor} leading-relaxed`}>
              founder of Rimo Technologies. My journey in software began with a passion for building, but also a frustration with seeing businesses struggle with inadequate or poorly implemented technology. I started this company to change that narrative. At Rimo Technologies, we are dedicated to delivering software that is not just functional, but truly impactful – driving efficiency, fostering growth, and creating lasting value for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  // Services Page Component
  const Services = () => {
    const [industryInput, setIndustryInput] = useState('');
    const [generatedServiceIdea, setGeneratedServiceIdea] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Function to "silently record" the keyword (conceptual)
    const recordKeyword = (keyword) => {
      console.log(`Keyword recorded: "${keyword}". In a real application, this would be sent to a backend for storage and email to kipronoleleito594@gmail.com.`);
      // In a real application, you would make a fetch/axios call to your backend here:
      /*
      fetch('/api/record-keyword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keyword: keyword, email: 'kipronoleleito594@gmail.com' }),
      })
      .then(response => response.json())
      .then(data => console.log('Backend response:', data))
      .catch(error => console.error('Error sending keyword to backend:', error));
      */
    };

    const generateIdea = async () => {
      setLoading(true);
      setGeneratedServiceIdea('');
      setError('');

      const prompt = `Generate a concise, innovative software service idea for Rimo Technologies related to the "${industryInput || 'general technology'}" industry. The idea should be a single, clear concept. Focus on a specific problem it solves or a unique value proposition.`;

      // Record the keyword before generating the idea
      recordKeyword(industryInput);

      try {
        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: prompt }] });
        const payload = { contents: chatHistory };
        const apiKey = ""; // If you want to use models other than gemini-2.0-flash or imagen-3.0-generate-002, provide an API key here. Otherwise, leave this as-is.
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        console.log("Calling Gemini API with prompt:", prompt);
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          const errorBody = await response.text();
          throw new Error(`API call failed with status: ${response.status}, body: ${errorBody}`);
        }

        const result = await response.json();
        console.log("Gemini API raw response:", result);

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
          const text = result.candidates[0].content.parts[0].text;
          setGeneratedServiceIdea(text);
        } else {
          setError('Failed to generate idea. Unexpected API response structure.');
          console.error('Gemini API response structure unexpected:', result);
        }
      } catch (err) {
        setError(`An error occurred while connecting to the AI: ${err.message}. Please try again later.`);
        console.error('Error calling Gemini API:', err);
      } finally {
        setLoading(false);
      }
    };

    return (
      <section key="services" className={`min-h-[calc(100vh-180px)] p-8 rounded-lg ${currentTheme.shadow} animate-fade-in bg-gradient-to-r ${currentTheme.bgPrimary50} ${currentTheme.bgSecondary50} transition-all duration-500`}>
        <h1 className={`text-4xl font-bold ${currentTheme.headingColor} mb-8 border-b-4 ${primaryBorderColorClass} pb-2 transition-colors duration-500`}>What We Offer</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Web Development"
            description="We craft modern, responsive, and high-performance websites tailored to your brand identity and business objectives, from dynamic marketing sites to complex web applications."
            icon="🌐"
            primaryTextColorClass={primaryTextColorClass}
            cardBg={currentTheme.cardBg}
            cardBorder={currentTheme.cardBorder}
            textColor={currentTheme.textColor}
            headingColor={currentTheme.headingColor}
            shadowHover={currentTheme.shadowHover}
          />
          <ServiceCard
            title="Automation Solutions"
            description="Streamline your operations with intelligent scripts and bots. We develop custom automation tools to eliminate repetitive tasks, save time and optimize workflow efficiency."
            icon="🤖"
            primaryTextColorClass={primaryTextColorClass}
            cardBg={currentTheme.cardBg}
            cardBorder={currentTheme.cardBorder}
            textColor={currentTheme.textColor}
            headingColor={currentTheme.headingColor}
            shadowHover={currentTheme.shadowHover}
          />
          <ServiceCard
            title="Graphic Design"
            description="From compelling posters and eye-catching advertisements to comprehensive brand identity kits, we create stunning visual assets that communicate your message effectively and leave a lasting impression."
            icon="🎨"
            primaryTextColorClass={primaryTextColorClass}
            cardBg={currentTheme.cardBg}
            cardBorder={currentTheme.cardBorder}
            textColor={currentTheme.textColor}
            headingColor={currentTheme.headingColor}
            shadowHover={currentTheme.shadowHover}
          />
          <ServiceCard
            title="Data Analysis & Reporting"
            description="Transform raw data into actionable insights. We specialize in analyzing complex datasets (including Excel sheets), generating clear reports, creating impactful visualizations, and providing comprehensive typing and printing services for your documentation needs."
            icon="📊"
            primaryTextColorClass={primaryTextColorClass}
            cardBg={currentTheme.cardBg}
            cardBorder={currentTheme.cardBorder}
            textColor={currentTheme.textColor}
            headingColor={currentTheme.headingColor}
            shadowHover={currentTheme.shadowHover}
          />
          <ServiceCard
            title="Software Analysis & Design"
            description="Our experts provide thorough planning, detailed requirements gathering, and robust architecture design to ensure your software project is built on a solid foundation for success."
            icon="📐"
            primaryTextColorClass={primaryTextColorClass}
            cardBg={currentTheme.cardBg}
            cardBorder={currentTheme.cardBorder}
            textColor={currentTheme.textColor}
            headingColor={currentTheme.headingColor}
            shadowHover={currentTheme.shadowHover}
          />
          <ServiceCard
            title="Tech Consulting"
            description="Gain strategic insights and expert guidance to navigate your digital transformation journey. We offer tailored advice to help you make informed technology decisions and foster digital growth."
            icon="💡"
            primaryTextColorClass={primaryTextColorClass}
            cardBg={currentTheme.cardBg}
            cardBorder={currentTheme.cardBorder}
            textColor={currentTheme.textColor}
            headingColor={currentTheme.headingColor}
            shadowHover={currentTheme.shadowHover}
          />
          <ServiceCard
            title="Custom Software Development"
            description="Beyond our core services, we build bespoke software solutions to meet your unique and specific business needs, ensuring a perfect fit for your operational requirements."
            icon="🛠️"
            primaryTextColorClass={primaryTextColorClass}
            cardBg={currentTheme.cardBg}
            cardBorder={currentTheme.cardBorder}
            textColor={currentTheme.textColor}
            headingColor={currentTheme.headingColor}
            shadowHover={currentTheme.shadowHover}
          />
        </div>

        {/* Gemini API Integration: Service Idea Generator */}
        <div className={`mt-16 p-8 ${currentTheme.bgPrimaryLight} rounded-lg shadow-inner border ${currentTheme.borderPrimaryLight} transition-colors duration-500`}>
          <h2 className={`${primaryDarkTextColorClass} text-3xl font-bold mb-6 text-center`}>✨ Generate a New Service Idea ✨</h2>
          <p className={`text-lg ${currentTheme.textColor} text-center mb-6`}>
            Curious about what innovative service Rimo Technologies could offer next? Enter an industry or keyword below and let our AI suggest a new concept!
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="e.g., Healthcare, Education, FinTech, Logistics, AI"
              value={industryInput}
              onChange={(e) => setIndustryInput(e.target.value)}
              className={`flex-grow p-3 border ${primaryMediumBorderClass} rounded-lg focus:ring-2 ${primaryFocusRingClass} focus:border-transparent transition-all duration-200 shadow-sm ${currentTheme.cardBg} ${currentTheme.textColor}`}
            />
            <button
              onClick={generateIdea}
              disabled={loading}
              className={`px-6 py-3 ${primaryColorClass} text-white font-semibold rounded-lg ${currentTheme.shadow} ${primaryHoverBgClass} transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 ${primaryFocusRingClass} disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loading ? 'Generating...' : 'Generate Idea'}
            </button>
          </div>

          {error && (
            <p className="mt-6 text-center text-red-600 text-md animate-fade-in">{error}</p>
          )}

          {generatedServiceIdea && (
            <div className={`mt-8 p-6 ${currentTheme.cardBg} border ${primaryMediumBorderClass} rounded-lg ${currentTheme.shadow} animate-fade-in`}>
              <h3 className={`${primaryDarkTextColorClass} text-2xl font-semibold mb-3`}>Suggested Service Idea:</h3>
              <p className={`text-lg ${currentTheme.textColor} leading-relaxed`}>{generatedServiceIdea}</p>
            </div>
          )}
        </div>
      </section>
    );
  };

  // Reusable Service Card Component
  const ServiceCard = ({ title, description, icon, primaryTextColorClass, cardBg, cardBorder, textColor, headingColor, shadowHover }) => (
    <div className={`group ${cardBg} p-6 rounded-lg ${currentTheme.shadow} ${shadowHover} transition-all duration-300 border ${cardBorder} transform hover:-translate-y-1 animate-fade-in`}>
      <div className={`text-5xl mb-4 ${primaryTextColorClass} group-hover:scale-110 transform`}>{icon}</div>
      <h2 className={`text-2xl font-semibold ${headingColor} mb-3 group-hover:${primaryDarkTextColorClass} transition-colors duration-300`}>{title}</h2>
      <p className={`text-md ${textColor} leading-relaxed`}>{description}</p>
    </div>
  );

  // Portfolio Page Component
  const Portfolio = () => (
    <section key="portfolio" className={`min-h-[calc(100vh-180px)] p-8 rounded-lg ${currentTheme.shadow} animate-fade-in bg-gradient-to-r ${currentTheme.bgPrimary50} ${currentTheme.bgSecondary50} transition-all duration-500`}>
      <h1 className={`text-4xl font-bold ${currentTheme.headingColor} mb-8 border-b-4 ${primaryBorderColorClass} pb-2 transition-colors duration-500`}>Our Work: Case Studies</h1>
      <p className={`text-lg ${currentTheme.textColor} leading-relaxed mb-10 animate-fade-in delay-100`}>
        We take immense pride in the innovative projects we’ve delivered, transforming complex challenges into elegant, functional solutions. Here are a few examples that highlight our capabilities and commitment to excellence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PortfolioCard
          title="Personal Portfolio Website"
          description="Designed and developed a sleek, fast-loading personal portfolio website for a creative professional, focusing on intuitive navigation and a visually engaging showcase of their work."
          imageUrl="https://placehold.co/600x400/D1E7DD/000000?text=Portfolio+Site"
          tags={['Web Development', 'UI/UX', 'React']}
          projectUrl="#" // Placeholder for personal portfolio
          primaryTextColorClass={primaryTextColorClass}
          cardBg={currentTheme.cardBg}
          cardBorder={currentTheme.cardBorder}
          textColor={currentTheme.textColor}
          headingColor={currentTheme.headingColor}
          primaryLightBgClass={currentTheme.bgPrimaryLight} // For tag background
          shadowHover={currentTheme.shadowHover}
        />
        <PortfolioCard
          title="Pioneer Elite Academy Website"
          description="A modern educational platform for Pioneer Elite Academy, showcasing courses, faculty, and admissions information with a user-friendly interface."
          imageUrl="https://placehold.co/600x400/D1E7DD/000000?text=Pioneer+Academy"
          tags={['Education', 'Web Development', 'Responsive Design']}
          projectUrl="https://pioneereliteacademy.vercel.app"
          primaryTextColorClass={primaryTextColorClass}
          cardBg={currentTheme.cardBg}
          cardBorder={currentTheme.cardBorder}
          textColor={currentTheme.textColor}
          headingColor={currentTheme.headingColor}
          primaryLightBgClass={currentTheme.bgPrimaryLight} // For tag background
          shadowHover={currentTheme.shadowHover}
        />
        <PortfolioCard
          title="Limros Academy Portal"
          description="An intuitive online portal for Limros Academy, facilitating student registration, course access, and administrative management."
          imageUrl="https://placehold.co/600x400/F8D7DA/000000?text=Limros+Academy"
          tags={['Education', 'Web Application', 'Student Management']}
          projectUrl="https://limrosacademy.vercel.app"
          primaryTextColorClass={primaryTextColorClass}
          cardBg={currentTheme.cardBg}
          cardBorder={currentTheme.cardBorder}
          textColor={currentTheme.textColor}
          headingColor={currentTheme.headingColor}
          primaryLightBgClass={currentTheme.bgPrimaryLight} // For tag background
          shadowHover={currentTheme.shadowHover}
        />
        <PortfolioCard
          title="Data Automation Script"
          description="Developed a robust Python-based automation bot that efficiently scrapes data from multiple online sources, processes it, and generates automated reports, significantly reducing manual effort and improving data accuracy."
          imageUrl="https://placehold.co/600x400/CCE5FF/000000?text=Automation+Script"
          tags={['Automation', 'Python', 'Data Processing']}
          projectUrl="#" // Placeholder for automation script
          primaryTextColorClass={primaryTextColorClass}
          cardBg={currentTheme.cardBg}
          cardBorder={currentTheme.cardBorder}
          textColor={currentTheme.textColor}
          headingColor={currentTheme.headingColor}
          primaryLightBgClass={currentTheme.bgPrimaryLight} // For tag background
          shadowHover={currentTheme.shadowHover}
        />
      </div>
      <p className={`mt-12 italic text-center ${currentTheme.textColor} text-lg animate-fade-in delay-200`}>More compelling case studies coming soon as we continue to innovate and deliver!</p>
    </section>
  );

  // Reusable Portfolio Card Component
  const PortfolioCard = ({ title, description, imageUrl, tags, projectUrl, primaryTextColorClass, cardBg, cardBorder, textColor, headingColor, primaryLightBgClass, shadowHover }) => (
    <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={`group ${cardBg} rounded-lg ${currentTheme.shadow} overflow-hidden ${shadowHover} transition-all duration-300 border ${cardBorder} transform hover:-translate-y-1 animate-fade-in block`}>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/E0E0E0/666666?text=Image+Unavailable"; }}
      />
      <div className="p-6">
        <h2 className={`text-2xl font-semibold ${headingColor} mb-3 group-hover:${primaryTextColorClass} transition-colors duration-300`}>{title}</h2>
        <p className={`text-md ${textColor} leading-relaxed mb-4`}>{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className={`${primaryLightBgClass} ${primaryTextColorClass} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );

  // Contact Page Component
  const Contact = () => {
    const [formStatus, setFormStatus] = useState('');
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [feedbackStatus, setFeedbackStatus] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      setFormStatus('Sending...');
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormStatus('Message sent successfully! We will get back to you shortly.');
        e.target.reset();
      } catch (error) {
        setFormStatus('Failed to send message. Please try again later.');
        console.error('Form submission error:', error);
      }
    };

    const handleFeedbackSubmit = async (e) => {
      e.preventDefault();
      setFeedbackStatus('Submitting feedback...');
      const feedbackData = {
        rating: rating,
        feedbackMessage: feedback,
        timestamp: new Date().toISOString(),
        emailRecipient: 'kipronoleleito594@gmail.com'
      };

      console.log('Feedback submitted:', feedbackData);
      // In a real application, you would send this data to a backend server for email delivery:
      /*
      fetch('/api/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Backend response for feedback:', data);
        setFeedbackStatus('Thank you for your feedback!');
        setRating(0); // Reset rating
        setFeedback(''); // Clear feedback text
      })
      .catch(error => {
        console.error('Error sending feedback to backend:', error);
        setFeedbackStatus('Failed to submit feedback. Please try again.');
      });
      */

      try {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network request
        setFeedbackStatus('Thank you for your feedback!');
        setRating(0); // Reset rating
        setFeedback(''); // Clear feedback text
      } catch (error) {
        setFeedbackStatus('Failed to submit feedback. Please try again.');
        console.error('Feedback submission error:', error);
      }
    };

    return (
      <section key="contact" className={`min-h-[calc(100vh-180px)] p-8 rounded-lg ${currentTheme.shadow} animate-fade-in bg-gradient-to-r ${currentTheme.bgPrimary50} ${currentTheme.bgSecondary50} transition-all duration-500`}>
        <h1 className={`text-4xl font-bold ${currentTheme.headingColor} mb-6 border-b-4 ${primaryBorderColorClass} pb-2 transition-colors duration-500`}>Let’s Build Together</h1>
        <p className={`text-lg ${currentTheme.textColor} leading-relaxed mb-10 animate-fade-in delay-100`}>
          Got a project idea, a challenging problem, or a digital transformation initiative you’d like to discuss? Get in touch with us today. We’re eager to hear about your vision and help you make it a reality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className={`text-3xl font-semibold ${currentTheme.headingColor} mb-6`}>Reach Out Directly</h2>
            <div className={`space-y-4 text-lg ${currentTheme.textColor}`}>
              <p className="flex items-center">
                <span className={`${primaryTextColorClass} mr-3 text-2xl`}>📧</span>
                Email: <a href="mailto:kipronoleleito594@gmail.com" className={`ml-2 ${primaryTextColorClass} hover:underline`}>kipronoleleito594@gmail.com</a>
              </p>
              <div className="flex items-start">
                <span className={`${primaryTextColorClass} mr-3 text-2xl`}>📞</span>
                <div className="flex flex-col">
                  <span className="block">WhatsApp/Call:</span>
                  <a href="https://wa.me/+254705926417" target="_blank" rel="noopener noreferrer" className={`block ${primaryTextColorClass} hover:underline`}>+254 705 926 417 (WhatsApp)</a>
                  <a href="tel:+254734746067" className={`block ${primaryTextColorClass} hover:underline`}>+254 734 746 067 (Call)</a>
                </div>
              </div>
              <p className="flex items-center">
                <span className={`${primaryTextColorClass} mr-3 text-2xl`}>🔗</span>
                LinkedIn: <a href="https://www.linkedin.com/search/results/all/?keywords=kipronoleleito594%40gmail.com" target="_blank" rel="noopener noreferrer" className={`ml-2 ${primaryTextColorClass} hover:underline`}>Find on LinkedIn</a>
              </p>
              <p className="flex items-center">
                <span className={`${primaryTextColorClass} mr-3 text-2xl`}>📍</span>
                Location: Nairobi, Kenya
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className={`text-3xl font-semibold ${currentTheme.headingColor} mb-6`}>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className={`block ${currentTheme.textColor} text-sm font-bold mb-2`}>Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className={`w-full p-3 border ${primaryMediumBorderClass} rounded-lg focus:ring-2 ${primaryFocusRingClass} focus:border-transparent transition-all duration-200 ${currentTheme.cardBg} ${currentTheme.textColor}`}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={`block ${currentTheme.textColor} text-sm font-bold mb-2`}>Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john.doe@example.com"
                  className={`w-full p-3 border ${primaryMediumBorderClass} rounded-lg focus:ring-2 ${primaryFocusRingClass} focus:border-transparent transition-all duration-200 ${currentTheme.cardBg} ${currentTheme.textColor}`}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className={`block ${currentTheme.textColor} text-sm font-bold mb-2`}>Your Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us what you think..."
                  rows="6"
                  className={`w-full p-3 border ${primaryMediumBorderClass} rounded-lg focus:ring-2 ${primaryFocusRingClass} focus:border-transparent transition-all duration-200 ${currentTheme.cardBg} ${currentTheme.textColor}`}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`px-8 py-3 ${primaryColorClass} text-white font-semibold rounded-full ${currentTheme.shadow} ${primaryHoverBgClass} transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 ${primaryFocusRingClass}`}
              >
                Send Message
              </button>
              {formStatus && (
                <p className={`mt-4 text-center text-lg ${formStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>

          {/* Rating and Feedback Section */}
          <div className={`mt-16 p-8 ${currentTheme.cardBg} rounded-lg shadow-inner border ${primaryLightBorderClass} transition-colors duration-500 animate-fade-in delay-200`}>
            <h2 className={`${primaryDarkTextColorClass} text-3xl font-bold mb-6 text-center`}>Share Your Feedback</h2>
            <p className={`text-lg ${currentTheme.textColor} text-center mb-6`}>
              We value your opinion! Please let us know how we're doing.
            </p>
            <form onSubmit={handleFeedbackSubmit} className="space-y-5 max-w-xl mx-auto">
              <div>
                <label className={`block ${currentTheme.textColor} text-sm font-bold mb-2`}>Rate Our Service:</label>
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`text-4xl ${star <= rating ? primaryTextColorClass : 'text-gray-400'} hover:${primaryTextColorClass} transition-colors duration-200 focus:outline-none`}
                      aria-label={`Rate ${star} stars`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="feedback" className={`block ${currentTheme.textColor} text-sm font-bold mb-2`}>Your Comments</label>
                <textarea
                  id="feedback"
                  placeholder="Tell us what you think..."
                  rows="4"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className={`w-full p-3 border ${primaryMediumBorderClass} rounded-lg focus:ring-2 ${primaryFocusRingClass} focus:border-transparent transition-all duration-200 ${currentTheme.cardBg} ${currentTheme.textColor}`}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`px-8 py-3 ${primaryColorClass} text-white font-semibold rounded-full ${currentTheme.shadow} ${primaryHoverBgClass} transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 ${primaryFocusRingClass}`}
              >
                Submit Feedback
              </button>
              {feedbackStatus && (
                <p className={`mt-4 text-center text-lg ${feedbackStatus.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
                  {feedbackStatus}
                </p>
              )}
            </form>
          </div>
      </section>
    );
  };

  // Main App Component Rendering
  return (
    <div className={`antialiased ${currentTheme.textColor} transition-colors duration-500`}>
      <Navbar />
      <div className="container mx-auto p-4 md:p-8">
        {/* Conditional rendering based on currentPage state, with keys for state preservation */}
        {(() => {
          switch (currentPage) {
            case 'home':
              return <Home key="home" />;
            case 'about':
              return <About key="about" />;
            case 'services':
              return <Services key="services" />;
            case 'portfolio':
              return <Portfolio key="portfolio" />;
            case 'contact':
              return <Contact key="contact" />;
            default:
              return <Home key="home" />; // Fallback to Home
          }
        })()}
      </div>
      <Footer />
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounce-once {
          0%, 100% { transform: translateY(0); }
          20% { transform: translateY(-5px); }
          40% { transform: translateY(0); }
          60% { transform: translateY(-2px); }
          80% { transform: translateY(0); }
        }

        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.7s ease-out forwards; }
        .animate-bounce-once { animation: bounce-once 1s ease-out; }

        /* Delay utilities for animations */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
}
