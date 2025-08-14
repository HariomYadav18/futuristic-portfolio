import React from 'react';
import { usePreferences } from '../context/PreferencesContext';

const Settings: React.FC = () => {
  const { preferences, toggleDarkMode, toggleAnimations, updateAnimations, updateTheme } = usePreferences();

  return (
    <div className="fixed top-4 right-4 z-50">
      <button 
        onClick={() => {
          const settingsPanel = document.getElementById('settings-panel');
          if (settingsPanel) {
            settingsPanel.classList.toggle('translate-x-full');
          }
        }}
        className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
        aria-label="Settings"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      <div 
        id="settings-panel" 
        className="fixed top-0 right-0 h-full w-80 bg-black/80 backdrop-blur-xl transform translate-x-full transition-transform duration-300 ease-in-out p-6 overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Settings</h2>
          <button 
            onClick={() => {
              const settingsPanel = document.getElementById('settings-panel');
              if (settingsPanel) {
                settingsPanel.classList.add('translate-x-full');
              }
            }}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Close settings"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          {/* Theme Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Theme</h3>
            
            <div className="flex items-center justify-between">
              <span className="text-white">Dark Mode</span>
              <button 
                onClick={toggleDarkMode}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${preferences.theme.darkMode ? 'bg-blue-500' : 'bg-gray-600'}`}
                aria-pressed={preferences.theme.darkMode}
              >
                <span className="sr-only">Toggle dark mode</span>
                <span 
                  className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${preferences.theme.darkMode ? 'translate-x-6' : 'translate-x-1'}`} 
                />
              </button>
            </div>

            <div className="space-y-2">
              <label className="block text-white text-sm">Primary Color</label>
              <div className="flex space-x-2">
                {['#1e90ff', '#ff6a88', '#00fff7', '#9c27b0', '#4caf50'].map(color => (
                  <button
                    key={color}
                    onClick={() => updateTheme({ primaryColor: color })}
                    className={`w-8 h-8 rounded-full ${preferences.theme.primaryColor === color ? 'ring-2 ring-white' : ''}`}
                    style={{ backgroundColor: color }}
                    aria-label={`Set primary color to ${color}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Animation Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Animations</h3>
            
            <div className="flex items-center justify-between">
              <span className="text-white">Enable Animations</span>
              <button 
                onClick={toggleAnimations}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${preferences.animations.enabled ? 'bg-blue-500' : 'bg-gray-600'}`}
                aria-pressed={preferences.animations.enabled}
              >
                <span className="sr-only">Toggle animations</span>
                <span 
                  className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${preferences.animations.enabled ? 'translate-x-6' : 'translate-x-1'}`} 
                />
              </button>
            </div>

            {preferences.animations.enabled && (
              <div className="space-y-2">
                <label className="block text-white text-sm">Animation Intensity</label>
                <div className="flex items-center space-x-4">
                  {['low', 'medium', 'high'].map((intensity) => (
                    <button
                      key={intensity}
                      onClick={() => updateAnimations({ intensity: intensity as 'low' | 'medium' | 'high' })}
                      className={`px-3 py-1 rounded-full text-xs ${preferences.animations.intensity === intensity ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
                    >
                      {intensity.charAt(0).toUpperCase() + intensity.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-700">
          <button 
            onClick={() => {
              localStorage.removeItem('userPreferences');
              window.location.reload();
            }}
            className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
          >
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;