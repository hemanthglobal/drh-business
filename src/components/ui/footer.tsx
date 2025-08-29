import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-subtle border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <span className="text-lg font-bold text-foreground">DRH</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering businesses through strategic consulting, finance solutions, and managed services.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Vidisha, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Services</h4>
            <div className="space-y-2">
              <Link to="/services#consultancy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Consultancy
              </Link>
              <Link to="/services#finance" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Finance & Tax
              </Link>
              <Link to="/services#managed" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Managed Services
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/industries" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Industries
              </Link>
              <Link to="/careers" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@drhcs.com" 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@drhcs.com</span>
              </a>
              <a 
                href="https://linkedin.com/company/drh-consulting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 DRH Consulting Services. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}