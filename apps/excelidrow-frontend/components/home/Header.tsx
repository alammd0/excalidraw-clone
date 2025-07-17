"use client";

import React from "react";
import { Palette, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@repo/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">
              Excelidrow
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Pricing
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/signin">
              <Button className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">
                Sign In
              </Button>
            </Link>

            <Link href="/signup">
              <Button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Get Started
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block text-gray-600">
              Features
            </a>
            <a href="#pricing" className="block text-gray-600">
              Pricing
            </a>
            <a href="#about" className="block text-gray-600">
              About
            </a>
            <a href="#contact" className="block text-gray-600">
              Contact
            </a>
            <div className="pt-3 border-t border-gray-100">
              <Link href="/signin">
                <Button className="block w-full text-left text-gray-600 mb-2">
                  Sign In
                </Button>
              </Link>

              <Link href="/login">
                <Button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
