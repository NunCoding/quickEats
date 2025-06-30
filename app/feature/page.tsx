"use client"

import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  Clock,
  Shield,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  ChefHat,
  ArrowRight,
  CheckCircle,
  CreditCard,
  Bell,
  Users,
  Award,
  Zap,
  Heart,
  Globe,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Feature = () => {
  return (
    <>
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="pt-16 bg-gradient-to-br from-orange-50 via-white to-red-50">
            <div className="container mx-auto px-4 py-20">
              <div className="text-center max-w-4xl mx-auto">
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-6">
                  🚀 Advanced Features
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Everything You Need for
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Perfect Food Delivery
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Discover all the powerful features that make QuickEats the
                  best choice for food delivery. From lightning-fast delivery to
                  advanced tracking, we have got you covered.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                >
                  Start Ordering <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Core Features */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Core Features
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  The essential features that make your food delivery experience
                  exceptional.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Lightning Fast Delivery
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Get your food delivered in 30 minutes or less with our
                      optimized delivery network and real-time route
                      optimization.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Average delivery time: 25 minutes
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Real-time route optimization
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Priority delivery available
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Real-Time Tracking
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Track your order from kitchen to doorstep with live GPS
                      tracking and instant notifications.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Live GPS tracking
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Order status updates
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Delivery ETA notifications
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Secure Payments
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Multiple payment options with bank-level security and
                      instant transaction processing.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Credit/Debit cards
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Digital wallets
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Cash on delivery
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                      <Bell className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Smart Notifications
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Stay informed with intelligent notifications about your
                      orders, deals, and favorite restaurants.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Order confirmations
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Delivery updates
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Exclusive deals
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Every restaurant partner is vetted and regularly reviewed
                      to ensure the highest food quality standards.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Restaurant verification
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Quality monitoring
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Customer feedback system
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                      <Headphones className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      24/7 Support
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Round-the-clock customer support to help you with any
                      questions or issues you might have.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Live chat support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Phone support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Email support
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Advanced Features */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Advanced Features
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Cutting-edge technology and innovative features that set us
                  apart from the competition.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      AI-Powered Recommendations
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our advanced AI algorithm learns your preferences and
                    suggests personalized food recommendations based on your
                    order history, dietary preferences, and current trends.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Personalized meal suggestions
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Dietary restriction filtering
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Trending food discovery
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <Image
                    src="/features-ai.png"
                    alt="AI Recommendations"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <Image
                    src="/food-group.png"
                    alt="Group Ordering"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Group Ordering
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Perfect for office lunches or family dinners. Create group
                    orders where multiple people can add items to the same cart
                    and split the bill automatically.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Collaborative cart building
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Automatic bill splitting
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Individual payment options
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose QuickEats?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Join millions of satisfied customers who trust QuickEats for
                  their food delivery needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Wide Coverage
                  </h3>
                  <p className="text-gray-600">
                    Available in 50+ cities with expanding coverage every month.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Customer Love
                  </h3>
                  <p className="text-gray-600">
                    4.8/5 average rating from over 100,000 customer reviews.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ChefHat className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Restaurant Partners
                  </h3>
                  <p className="text-gray-600">
                    500+ verified restaurant partners offering diverse cuisines.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Safe & Secure
                  </h3>
                  <p className="text-gray-600">
                    Bank-level security with contactless delivery options.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the Best Food Delivery?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers and discover why QuickEats
                is the #1 choice for food delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100"
                >
                  Start Ordering Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600"
                >
                  Download App
                </Button>
              </div>
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

export default Feature;
