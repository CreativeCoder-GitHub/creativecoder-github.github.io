import { useEffect } from 'react';

function ThemeToggle() {
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleToggle = () => {
    document.documentElement.classList.toggle('dark');
    
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button onClick={handleToggle} id="theme-toggle" className="bg-orange-500 hover:bg-blue-700 dark:bg-gray-500 dark:hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Toggle Dark Mode</button>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500 dark:bg-black text-white p-4 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center">
            <span className="flex items-center">
            <a href="#"><img src="favicon.svg" alt="Shaurya Sharma's Logo" width="50" /></a>
               
            <a href="#" className="text-xl font-bold" style={{paddingLeft: '0.5em'}}>Shaurya Sharma</a>
            </span>
            <ul className="flex space-x-4">
                <li><a href="#about" className="hover:text-blue-200">About Me</a></li>
                <li><a href="#projects" className="hover:text-blue-200">Projects</a></li>
                <li><a href="#certificates" className="hover:text-blue-200">Certificates & Awards</a></li>
            </ul>
            <ThemeToggle />
        </div>
    </nav>
  )
}

export default Navbar;