import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Phone, Menu, X, Home, Activity, Image, Users } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/services', label: 'Services', icon: Activity },
    { path: '/impact', label: 'Our Impact', icon: Heart },
    { path: '/gallery', label: 'Gallery', icon: Image },
    { path: '/contact', label: 'Contact', icon: Phone }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                className="h-14 w-auto"
                src="/images/logo.webp"
                alt="Rudhirsetu Logo"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-[#9B2C2C]">
                  Rudhirsetu
                </span>
                <span className="text-xs text-gray-600">
                  Seva Sanstha
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    isActive(item.path)
                      ? 'bg-[#9B2C2C] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <a
              href="/contact"
              className="ml-4 px-5 py-2 rounded-lg text-sm font-medium bg-[#9B2C2C] text-white hover:bg-[#8B1C1C] transition-colors duration-200 flex items-center space-x-2"
            >
              <Users className="w-4 h-4" />
              <span>Get Involved</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
              aria-label="Menu"
            >
              {!isOpen ? (
                <Menu className="w-6 h-6" />
              ) : (
                <X className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive(item.path)
                      ? 'bg-[#9B2C2C] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <a
              href="/contact"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium bg-[#9B2C2C] text-white hover:bg-[#8B1C1C]"
              onClick={() => setIsOpen(false)}
            >
              <Users className="w-5 h-5" />
              <span>Get Involved</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 