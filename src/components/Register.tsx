import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface RegisterProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const Register: React.FC<RegisterProps> = ({ onClose, onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // Validate password strength
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await register(name, email, password);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="bg-black bg-opacity-80 backdrop-blur-sm p-8 rounded-xl border border-neon-blue shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Register</h2>
      
      {error && (
        <div className="bg-red-900 bg-opacity-50 text-red-200 p-3 rounded-md mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-gray-300 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="confirmPassword" className="block text-gray-300 mb-1">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent"
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-neon-blue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <p className="text-gray-400">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-neon-blue hover:text-blue-400 focus:outline-none"
          >
            Login
          </button>
        </p>
      </div>
      
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Register;