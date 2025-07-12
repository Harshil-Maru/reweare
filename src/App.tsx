import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { BrowsePage } from './components/BrowsePage';
import { AddItemPage } from './components/AddItemPage';
import { ProfilePage } from './components/ProfilePage';
import { MessagesPage } from './components/MessagesPage';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const userPoints = 149;

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onViewChange={setCurrentView} />;
      case 'browse':
        return <BrowsePage />;
      case 'add-item':
        return <AddItemPage />;
      case 'profile':
        return <ProfilePage />;
      case 'messages':
        return <MessagesPage />;
      default:
        return <HomePage onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentView={currentView} 
        onViewChange={setCurrentView}
        userPoints={userPoints}
      />
      {renderCurrentView()}
    </div>
  );
}

export default App;