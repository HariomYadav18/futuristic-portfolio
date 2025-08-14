import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  initialView = 'login' 
}) => {
  const [view, setView] = useState<'login' | 'register'>(initialView);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="relative w-full max-w-md">
        {view === 'login' ? (
          <Login 
            onClose={onClose} 
            onSwitchToRegister={() => setView('register')} 
          />
        ) : (
          <Register 
            onClose={onClose} 
            onSwitchToLogin={() => setView('login')} 
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;