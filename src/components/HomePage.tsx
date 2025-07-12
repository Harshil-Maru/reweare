import React from 'react';
import { Leaf, Recycle, Users, Award, ArrowRight, Star } from 'lucide-react';

interface HomePageProps {
  onViewChange: (view: string) => void;
}

export function HomePage({ onViewChange }: HomePageProps) {
  const featuredItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      brand: "Levi's",
      size: "M",
      condition: "Excellent",
      points: 35,
      image: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=300",
      user: "Sarah M."
    },
    {
      id: 2,
      title: "Wool Winter Coat",
      brand: "Zara",
      size: "L",
      condition: "Very Good",
      points: 45,
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300",
      user: "Alex K."
    },
    {
      id: 3,
      title: "Summer Floral Dress",
      brand: "H&M",
      size: "S",
      condition: "Good",
      points: 25,
      image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=300",
      user: "Emma L."
    }
  ];

  const stats = [
    { icon: Recycle, value: "12,453", label: "Items Exchanged", color: "text-green-600" },
    { icon: Users, value: "3,847", label: "Active Members", color: "text-blue-600" },
    { icon: Leaf, value: "2.3M", label: "CO₂ Saved (kg)", color: "text-emerald-600" },
    { icon: Award, value: "847K", label: "Points Earned", color: "text-yellow-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <Leaf className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Give Your Clothes a
              <span className="text-green-600"> Second Life</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the sustainable fashion revolution. Exchange, swap, and discover pre-loved clothing 
              while earning points and reducing textile waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onViewChange('browse')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Start Browsing</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => onViewChange('add-item')}
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                List Your Items
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Items</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover amazing pre-loved pieces from our community members
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    {item.points} pts
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">4.8</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-1">{item.brand} • Size {item.size}</p>
                  <p className="text-sm text-green-600 font-medium mb-3">Condition: {item.condition}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">by {item.user}</span>
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onViewChange('browse')}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View All Items
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How ReWear Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to start your sustainable fashion journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">List Your Items</h3>
              <p className="text-gray-600">
                Upload photos and details of clothes you no longer wear. Earn points for each listing.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Browse & Exchange</h3>
              <p className="text-gray-600">
                Discover amazing pieces and propose direct swaps or use points to acquire items.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Exchange</h3>
              <p className="text-gray-600">
                Coordinate pickup/delivery and enjoy your new-to-you wardrobe additions!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}