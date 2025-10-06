import React, { useState } from 'react';
import { MagicButton } from './components/MagicButton';
import { GoogleTheme } from './components/themes/GoogleTheme';
import { NetflixTheme } from './components/themes/NetflixTheme';
import { UberTheme } from './components/themes/UberTheme';
import { WhatsAppTheme } from './components/themes/WhatsAppTheme';
import { portfolioData } from './data/portfolio';
import { ThemeType } from './types/portfolio';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('google');

  const themes: ThemeType[] = ['google', 'netflix', 'uber', 'whatsapp'];

  const handleThemeChange = () => {
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentTheme(themes[nextIndex]);
  };

  const renderTheme = () => {
    switch (currentTheme) {
      case 'google':
        return <GoogleTheme data={portfolioData} />;
      case 'netflix':
        return <NetflixTheme data={portfolioData} />;
      case 'uber':
        return <UberTheme data={portfolioData} />;
      case 'whatsapp':
        return <WhatsAppTheme data={portfolioData} />;
      default:
        return <GoogleTheme data={portfolioData} />;
    }
  };

  return (
    <div className="min-h-screen">
      <MagicButton currentTheme={currentTheme} onThemeChange={handleThemeChange} />
      {renderTheme()}
    </div>
  );
}