# Portfolio Backend Server

This is the backend server for the futuristic portfolio application. It provides a GraphQL API and REST endpoints for managing portfolio data.

## Technologies Used

- Node.js
- Express
- TypeScript
- Apollo Server (GraphQL)
- MongoDB with Mongoose
- JWT Authentication

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
2. Navigate to the server directory
3. Install dependencies

```bash
npm install
```

4. Create a `.env` file in the root directory with the following variables:

```
PORT=4000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:5173
```

### Development

Start the development server with hot-reloading:

```bash
npm run dev
```

### Production Build

Build the TypeScript project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## API Documentation

### GraphQL API

The GraphQL API is available at `/graphql`. You can use the GraphQL Playground to explore the API when running in development mode.

### REST API

#### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/auth/me` - Get current user (requires authentication)

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # REST API controllers
├── middleware/     # Express middleware
├── models/         # Mongoose models
├── routes/         # Express routes
├── schemas/        # GraphQL schemas and resolvers
├── services/       # Business logic
├── utils/          # Utility functions
└── index.ts        # Entry point
```

## License

MIT