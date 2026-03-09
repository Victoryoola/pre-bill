# Pre-Billing Notification System

A distributed, event-driven notification system that schedules and delivers notifications to users before subscription billing events.

## Features

- REST API for scheduling and managing notifications
- Redis-based message queue for reliable job persistence
- Horizontally scalable worker services
- Multi-channel delivery (email, webhook, SMS)
- Automatic retry with exponential backoff
- Comprehensive monitoring and health checks

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **API Framework**: Express
- **Message Queue**: Redis (using ioredis)
- **Testing**: Jest with fast-check for property-based testing

## Project Structure

```
src/
├── api/         # REST API endpoints
├── worker/      # Background worker service
├── queue/       # Redis queue operations
├── channels/    # Notification delivery channels
├── models/      # Data models and types
└── utils/       # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- Redis 6+

### Installation

```bash
npm install
```

### Development

```bash
# Build the project
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Start API server (development)
npm run dev:api

# Start worker service (development)
npm run dev:worker
```

## Configuration

Configuration is managed through environment variables. See `.env.example` for available options.

## Testing

The project uses a dual testing approach:

- **Unit Tests**: Verify specific examples and edge cases
- **Property-Based Tests**: Verify universal properties across randomized inputs using fast-check

Run tests with:
```bash
npm test
```

## License

MIT
