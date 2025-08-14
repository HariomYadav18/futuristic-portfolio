import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { client } from './services/api'
import './index.css'
import App from './App'
import { PreferencesProvider } from './context/PreferencesContext'
import { AuthProvider } from './context/AuthContext'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <PreferencesProvider>
          <App />
        </PreferencesProvider>
      </AuthProvider>
    </ApolloProvider>
  </StrictMode>,
)