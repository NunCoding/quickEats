"use client";

import Layout from "@/components/layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Truck,
  Star,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Search,
  Filter,
  Clock,
  Heart,
  ChefHat,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const restaurants = [
  {
    id: 1,
    name: "Burger Palace",
    cuisine: "American",
    rating: 4.8,
    time: "25-30 min",
    image: "/burger.jpg",
    featured: true,
    priceRange: "$$",
    distance: "0.5 km",
    tags: ["Burgers", "Fast Food", "American"],
    description: "Gourmet burgers made with premium ingredients",
  },
  {
    id: 2,
    name: "Pizza Corner",
    cuisine: "Italian",
    rating: 4.7,
    time: "20-25 min",
    image: "/fiesta.jpg",
    featured: false,
    priceRange: "$",
    distance: "1.2 km",
    tags: ["Pizza", "Italian", "Vegetarian"],
    description: "Authentic wood-fired pizzas with fresh toppings",
  },
  {
    id: 3,
    name: "Sushi Master",
    cuisine: "Japanese",
    rating: 4.9,
    time: "30-35 min",
    image: "/sushi.jpg",
    featured: true,
    priceRange: "$$$",
    distance: "2.1 km",
    tags: ["Sushi", "Japanese", "Fresh"],
    description: "Premium sushi and sashimi prepared by master chefs",
  },
  {
    id: 4,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.6,
    time: "15-20 min",
    image: "/pizza.jpg",
    featured: false,
    priceRange: "$",
    distance: "0.8 km",
    tags: ["Tacos", "Mexican", "Spicy"],
    description: "Authentic Mexican street food and traditional dishes",
  },
  {
    id: 5,
    name: "Dragon Garden",
    cuisine: "Chinese",
    rating: 4.5,
    time: "25-30 min",
    image: "/burger.jpg",
    featured: false,
    priceRange: "$$",
    distance: "1.5 km",
    tags: ["Chinese", "Noodles", "Dim Sum"],
    description: "Traditional Chinese cuisine with modern presentation",
  },
  {
    id: 6,
    name: "Curry House",
    cuisine: "Indian",
    rating: 4.7,
    time: "30-35 min",
    image: "/sushi.jpg",
    featured: true,
    priceRange: "$$",
    distance: "1.8 km",
    tags: ["Indian", "Curry", "Vegetarian"],
    description: "Aromatic curries and traditional Indian delicacies",
  },
  {
    id: 7,
    name: "Mediterranean Delight",
    cuisine: "Mediterranean",
    rating: 4.6,
    time: "20-25 min",
    image: "/fiesta.jpg",
    featured: false,
    priceRange: "$$",
    distance: "1.0 km",
    tags: ["Mediterranean", "Healthy", "Grilled"],
    description: "Fresh Mediterranean dishes with healthy options",
  },
  {
    id: 8,
    name: "BBQ Smokehouse",
    cuisine: "American",
    rating: 4.8,
    time: "35-40 min",
    image: "/pizza.jpg",
    featured: true,
    priceRange: "$$$",
    distance: "2.5 km",
    tags: ["BBQ", "Grilled", "Meat"],
    description: "Slow-smoked meats and traditional BBQ sides",
  },
];

const cuisineTypes = [
  "All",
  "American",
  "Italian",
  "Japanese",
  "Mexican",
  "Chinese",
  "Indian",
  "Mediterranean",
];

const Restaurant = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [sortBy, setSortBy] = useState("rating");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (restaurantId: number) => {
    setFavorites((prev) =>
      prev.includes(restaurantId)
        ? prev.filter((id) => id !== restaurantId)
        : [...prev, restaurantId]
    );
  };

  const filteredRestaurants = restaurants
    .filter((restaurant) => {
      const matchesSearch =
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCuisine =
        selectedCuisine === "All" || restaurant.cuisine === selectedCuisine;
      return matchesSearch && matchesCuisine;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "time":
          return Number.parseInt(a.time) - Number.parseInt(b.time);
        case "distance":
          return Number.parseFloat(a.distance) - Number.parseFloat(b.distance);
        default:
          return 0;
      }
    });
  return (
    <>
      <Layout>
        <div className="min-h-screen bg-white">

          {/* Hero Section */}
          <section className="pt-16 bg-gradient-to-br from-orange-50 via-white to-red-50">
            <div className="container mx-auto px-4 py-12">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  Discover Amazing
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Restaurants Near You
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Browse through hundreds of restaurants and find your next
                  favorite meal.
                </p>
              </div>

              {/* Search and Filters */}
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Search restaurants, cuisines, or dishes..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-12 border-gray-200 focus:border-orange-500"
                    />
                  </div>
                  <Select
                    value={selectedCuisine}
                    onValueChange={setSelectedCuisine}
                  >
                    <SelectTrigger className="w-full md:w-48 h-12">
                      <SelectValue placeholder="Cuisine Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {cuisineTypes.map((cuisine) => (
                        <SelectItem key={cuisine} value={cuisine}>
                          {cuisine}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full md:w-48 h-12">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="time">Fastest Delivery</SelectItem>
                      <SelectItem value="distance">Nearest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Quick Filters */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-orange-50 hover:border-orange-200"
                    onClick={() => setSelectedCuisine("All")}
                  >
                    All Restaurants
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-orange-50 hover:border-orange-200"
                    onClick={() => setSortBy("rating")}
                  >
                    Top Rated
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-orange-50 hover:border-orange-200"
                    onClick={() => setSortBy("time")}
                  >
                    Fast Delivery
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-orange-50 hover:border-orange-200"
                  >
                    Free Delivery
                  </Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Restaurants */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Featured Restaurants
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {restaurants
                  .filter((r) => r.featured)
                  .map((restaurant) => (
                    <Card
                      key={restaurant.id}
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative">
                        <Image
                          src={restaurant.image || "/placeholder.svg"}
                          alt={restaurant.name}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <Badge className="absolute top-3 left-3 bg-white text-gray-700">
                          <Clock className="w-3 h-3 mr-1" />
                          {restaurant.time}
                        </Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          className="absolute top-3 right-3 bg-white/90 border-0 hover:bg-white"
                          onClick={() => toggleFavorite(restaurant.id)}
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              favorites.includes(restaurant.id)
                                ? "text-red-500 fill-current"
                                : "text-gray-600"
                            }`}
                          />
                        </Button>
                        <Badge className="absolute bottom-3 left-3 bg-orange-500 text-white">
                          Featured
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">
                            {restaurant.name}
                          </h3>
                          <span className="text-sm text-gray-500">
                            {restaurant.priceRange}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          {restaurant.description}
                        </p>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">
                              {restaurant.rating}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <MapPin className="w-3 h-3" />
                            <span className="text-xs">
                              {restaurant.distance}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {restaurant.tags.slice(0, 2).map((tag, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Link href={`/restaurant/${restaurant.id}`}>
                          <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                            View Menu
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </section>

          {/* All Restaurants */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  All Restaurants ({filteredRestaurants.length})
                </h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Filter className="w-4 h-4" />
                  <span>Sorted by {sortBy}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredRestaurants.map((restaurant) => (
                  <Card
                    key={restaurant.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative">
                      <Image
                        src={restaurant.image || "/placeholder.svg"}
                        alt={restaurant.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-3 left-3 bg-white text-gray-700">
                        <Clock className="w-3 h-3 mr-1" />
                        {restaurant.time}
                      </Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-3 right-3 bg-white/90 border-0 hover:bg-white"
                        onClick={() => toggleFavorite(restaurant.id)}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            favorites.includes(restaurant.id)
                              ? "text-red-500 fill-current"
                              : "text-gray-600"
                          }`}
                        />
                      </Button>
                      {restaurant.featured && (
                        <Badge className="absolute bottom-3 left-3 bg-orange-500 text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {restaurant.name}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {restaurant.priceRange}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        {restaurant.cuisine}
                      </p>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">
                            {restaurant.rating}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500">
                          <MapPin className="w-3 h-3" />
                          <span className="text-xs">{restaurant.distance}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {restaurant.tags.slice(0, 2).map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full bg-white text-orange-600 border-orange-200 hover:bg-orange-50"
                      >
                        View Menu
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredRestaurants.length === 0 && (
                <div className="text-center py-12">
                  <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No restaurants found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filters to find more
                    restaurants.
                  </p>
                </div>
              )}
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

export default Restaurant;
