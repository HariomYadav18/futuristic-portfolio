import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { typeDefs } from './schemas/typeDefs';
import { resolvers } from './schemas/resolvers';
import { connectDatabase } from './config/database';
import { authenticate } from './middleware/auth';
import authRoutes from './routes/authRoutes';
import dotenv from 'dotenv';
import { logger } from './utils/logger';

// Load environment variables
dotenv.config();

// Create Express application
const app = express();

// Apply middleware
app.use(cors());
app.use(express.json());
app.use(authenticate); // Apply authentication middleware globally

// API Routes
app.use('/api/auth', authRoutes);

// Create HTTP server
const httpServer = http.createServer(app);

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

async function startServer() {
  // Connect to MongoDB
  await connectDatabase();
  
  // Start Apollo Server
  await server.start();
  server.applyMiddleware({ app });

  // Start the server
  const PORT = process.env.PORT || 4000;
  httpServer.listen(PORT, () => {
    logger.info(`Server running at http://localhost:${PORT}`);
    logger.info(`GraphQL endpoint: http://localhost:${PORT}${server.graphqlPath}`);
    logger.info(`REST API endpoint: http://localhost:${PORT}/api`);
  });
}
}

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Start the server
startServer().catch((error) => {
  logger.error('Failed to start server:', error);
});