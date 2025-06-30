import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
import Link from "next/link";
const NavBar = () => {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">QuickEats</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/feature"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/how-it-work"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="/restaurant"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Restaurants
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden sm:flex bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
              Order Now
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
