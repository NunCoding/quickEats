"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Truck,
  Star,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Clock,
  Heart,
  Plus,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import { useCart } from "@/contexts/cart-context";
import { useCart } from "@/app/contexts/cart-sidebar";
import { CartSidebar } from "@/components/cart-sidebar";
// import type { MenuItem } from "@/types/cart";
import type { MenuItem } from "@/app/types/cart";
import Layout from "@/components/layout";
// Mock restaurant data - in real app this would come from API
const restaurant = {
  id: 1,
  name: "Burger Palace",
  cuisine: "American",
  rating: 4.8,
  time: "25-30 min",
  image: "/sale-restauran-benner.png",
  description:
    "Gourmet burgers made with premium ingredients and served with crispy fries",
  address: "123 Main Street, Downtown",
  phone: "+1 (555) 123-4567",
  priceRange: "$$",
  distance: "0.5 km",
};

const menuItems: MenuItem[] = [
  {
    id: "burger-1",
    name: "Classic Cheeseburger",
    description:
      "Juicy beef patty with cheese, lettuce, tomato, and our special sauce",
    price: 12.99,
    image: "/burger.jpg",
    category: "Burgers",
    popular: true,
  },
  {
    id: "burger-2",
    name: "BBQ Bacon Burger",
    description:
      "Beef patty with crispy bacon, BBQ sauce, onion rings, and cheddar cheese",
    price: 15.99,
    image: "/fiesta.jpg",
    category: "Burgers",
    popular: true,
  },
  {
    id: "burger-3",
    name: "Veggie Deluxe",
    description: "Plant-based patty with avocado, sprouts, and herb mayo",
    price: 13.99,
    image: "/fiesta.jpg",
    category: "Burgers",
    vegetarian: true,
  },
  {
    id: "side-1",
    name: "Crispy Fries",
    description: "Golden crispy fries seasoned with sea salt",
    price: 4.99,
    image: "/sushi.jpg",
    category: "Sides",
  },
  {
    id: "side-2",
    name: "Onion Rings",
    description: "Beer-battered onion rings served with ranch dipping sauce",
    price: 6.99,
    image: "/pizza.jpg",
    category: "Sides",
  },
  {
    id: "drink-1",
    name: "Craft Cola",
    description: "House-made cola with natural ingredients",
    price: 3.99,
    image: "/burger.jpg",
    category: "Drinks",
  },
  {
    id: "drink-2",
    name: "Fresh Lemonade",
    description: "Freshly squeezed lemonade with mint",
    price: 4.99,
    image: "/sushi.jpg",
    category: "Drinks",
  },
];

const categories = ["All", "Burgers", "Sides", "Drinks"];
const RestaurantDetailPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFavorite, setIsFavorite] = useState(false);
  const { addItem } = useCart();

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description,
    });
  };
  return (
    <>
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Header */}
          <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  QuickEats
                </span>
              </Link>

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
                  href="/#how-it-work"
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
                  href="/#contact"
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
                <CartSidebar />
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                  Order Now
                </Button>
              </div>
            </div>
          </header>

          {/* Restaurant Header */}
          <section className="pt-16">
            <div className="relative h-64 md:h-80">
              <Image
                src={restaurant.image || "/sale-restauran-benner.png"}
                alt={restaurant.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute top-4 left-4">
                <Link href="/restaurants">
                  <Button variant="outline" size="sm" className="bg-white/90">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                </Link>
              </div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {restaurant.name}
                </h1>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{restaurant.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{restaurant.distance}</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/90"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isFavorite ? "text-red-500 fill-current" : "text-gray-600"
                    }`}
                  />
                </Button>
              </div>
            </div>
          </section>

          {/* Restaurant Info */}
          <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    About {restaurant.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{restaurant.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{restaurant.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{restaurant.phone}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Delivery Info
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Delivery Time</span>
                          <span className="font-medium">{restaurant.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Delivery Fee</span>
                          <span className="font-medium">$2.99</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Minimum Order</span>
                          <span className="font-medium">$15.00</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Menu */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Menu</h2>

              <Tabs
                value={selectedCategory}
                onValueChange={setSelectedCategory}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <Card
                      key={item.id}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative">
                        <Image
                          src={item.image || "/sale-restauran-benner.png"}
                          alt={item.name}
                          width={200}
                          height={150}
                          className="w-full h-40 object-cover rounded-t-lg"
                        />
                        {item.popular && (
                          <Badge className="absolute top-3 left-3 bg-orange-500 text-white">
                            Popular
                          </Badge>
                        )}
                        {item.vegetarian && (
                          <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                            Vegetarian
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-gray-900">
                            ${item.price.toFixed(2)}
                          </span>
                          <Button
                            size="sm"
                            onClick={() => handleAddToCart(item)}
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                          >
                            <Plus className="w-4 h-4 mr-1" />
                            Add
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </Tabs>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <Link href="/" className="flex items-center space-x-2 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <Truck className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold">QuickEats</span>
                  </Link>
                  <p className="text-gray-400 mb-6">
                    Delivering happiness, one meal at a time. Fast, fresh, and
                    always delicious.
                  </p>
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-transparent border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-transparent border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-transparent border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <Instagram className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6">Company</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Press
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6">Support</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Safety
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6">Contact</h3>
                  <div className="space-y-3 text-gray-400">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4" />
                      <span>support@quickeats.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4" />
                      <span>123 Food Street, City, State 12345</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>
                  &copy; {new Date().getFullYear()} QuickEats. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </Layout>
    </>
  );
};

export default RestaurantDetailPage;
