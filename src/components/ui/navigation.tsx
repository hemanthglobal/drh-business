import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const services = [
  { name: 'Consultancy', href: '/services#consultancy' },
  { name: 'Finance & Tax', href: '/services#finance' },
  { name: 'Managed Services', href: '/services#managed' },
];

export function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b transition-all duration-300',
      isScrolled ? 'h-16' : 'h-20'
    )}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-foreground">
          DRH
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              isActive('/') ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseEnter={() => setIsDropdownOpen(true)}
              className={cn(
                'flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary',
                isActive('/services') ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <span>Services</span>
              <ChevronDown className={cn(
                'h-4 w-4 transition-transform',
                isDropdownOpen && 'rotate-180'
              )} />
            </button>

            {isDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-48 bg-popover border rounded-lg shadow-elegant animate-slide-in-down"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block px-4 py-3 text-sm text-popover-foreground hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/industries"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              isActive('/industries') ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            Industries
          </Link>

          <Link
            to="/about"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              isActive('/about') ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            About
          </Link>

          <Link
            to="/careers"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              isActive('/careers') ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            Careers
          </Link>

          <Button asChild variant="default" size="sm">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="space-y-1">
              <div className="py-2 text-sm font-medium text-muted-foreground">Services</div>
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Link
              to="/industries"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Industries
            </Link>

            <Link
              to="/about"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            <Link
              to="/careers"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>

            <div className="pt-2">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}