import React from 'react';
import { Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SignupCounter from './SignupCounter';
interface HeaderProps {
  onRequestDemo: () => void;
}
const Header = ({
  onRequestDemo
}: HeaderProps) => {
  return <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              SkillSync
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white-700 hover:text-purple-600 transition-colors font-medium">
              Features
            </a>
            <a href="#testimonials" className="text-slate-700 hover:text-purple-600 transition-colors font-medium">
              Testimonials
            </a>
            <a href="#faq" className="text-slate-700 hover:text-purple-600 transition-colors font-medium">
              FAQ
            </a>
          </nav>

          {/* Request Demo Button and Signup Counter */}
          <div className="flex items-center space-x-4">
            <Button variant="default" size="sm" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 shadow-lg rounded-xl hover:scale-105 hover:shadow-xl transition-transform" onClick={onRequestDemo}>
              Request Demo
            </Button>
            <div className="hidden lg:block">
              <SignupCounter />
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;