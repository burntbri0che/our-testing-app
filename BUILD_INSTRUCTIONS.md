# Build Instructions for Multi-Container Setup

This app is configured to build different versions for different environments using Vite build modes.

## Available Build Modes

### 1. Development Version (`/dev/`)
```bash
npm run build:dev
```
- Base path: `/dev/`
- Environment: Development
- Title: "Our Testing App - Development"

### 2. Test Version (`/tests/`)
```bash
npm run build:test
```
- Base path: `/tests/`
- Environment: Test
- Title: "Our Testing App - Test"

### 3. Production Version (`/`)
```bash
npm run build
```
- Base path: `/`
- Environment: Production
- Title: "Our Testing App"

## Environment Variables

The app automatically loads environment variables based on the build mode:

- **Development**: Uses `env.development` file
- **Test**: Uses `env.test` file
- **Production**: Uses default values

## Key Features

- **HashRouter**: Uses hash-based routing for better subdirectory compatibility
- **Dynamic Titles**: App title changes based on build mode
- **Mode Indicator**: Shows current mode in the navbar (except production)
- **Base Path Support**: Automatically handles different base paths for routing

## Docker Integration

Each build mode produces a different version that can be containerized separately:

1. **Development Container**: Built with `npm run build:dev` → serves at `/dev/`
2. **Test Container**: Built with `npm run build:test` → serves at `/tests/`
3. **Main Container**: Built with `npm run build` → serves at `/`

## Nginx Routing

The app is ready for nginx reverse proxy routing:
- `/dev/*` → Development container
- `/tests/*` → Test container
- `/*` → Main container
