# Next.js 15 + tRPC Monorepo Boilerplate

A modern, full-stack TypeScript monorepo boilerplate featuring Next.js 15 with App Router, tRPC for type-safe APIs, and a React Native mobile app. Built with Turborepo for efficient workspace management.

## Features

- 🏗️ **Monorepo Structure**: Organized with Turborepo for optimal workspace management
- ⚡ **Next.js 15**: Utilizing the latest App Router and React Server Components
- 🔄 **tRPC**: End-to-end type-safe APIs shared between web and mobile
- 📱 **React Native**: Mobile app setup with shared API layer
- 🎨 **UI Package**: Shared components between web and mobile
- 🔧 **Type Safety**: Strict TypeScript configuration across all packages

## Project Structure

```
├── apps/
│   ├── web/                 # Next.js 15 application
│   │   ├── src/
│   │   │   ├── app/        # Next.js App Router pages
│   │   │   └── trpc/       # tRPC client setup
│   │   └── ...
│   └── mobile/             # React Native application
│       ├── app/
│       └── trpc/           # tRPC client setup
├── packages/
│   ├── trpc/               # Shared tRPC routers
│   ├── ui/                 # Shared UI components
│   ├── eslint-config/      # Shared ESLint configurations
│   └── typescript-config/  # Shared TypeScript configurations
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/monsieursam/boilerplate-next-expo-trpc.git
cd boilerplate-next-expo-trpc
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:

Create `.env` files in both web and mobile applications:

**For web (`apps/web/.env`):**
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
# Add other web-specific environment variables
```

**For mobile (`apps/mobile/.env`):**
```env
API_URL=http://localhost:3000
# Add other mobile-specific environment variables
```

4. Start the development servers:

- For web application:
```bash
pnpm --filter web dev
```

- For mobile application:
```bash
pnpm --filter mobile dev
```

## Available Scripts

- `pnpm build`: Build all applications and packages
- `pnpm dev`: Start all applications in development mode
- `pnpm lint`: Run ESLint across all projects
- `pnpm type-check`: Run TypeScript type checking

## Package Overview

### Web Application (`apps/web`)
- Next.js 15 with App Router
- tRPC client integration
- Server and Client Components examples
- TailwindCSS for styling

### Mobile Application (`apps/mobile`)
- React Native with Expo
- tRPC client integration
- Shared API layer with web

### tRPC Package (`packages/trpc`)
- Shared API routes and procedures
- Type-safe API layer
- Example routers included

### UI Package (`packages/ui`)
- Shared React components
- Platform-agnostic design
- TypeScript strict mode

## Development Workflow

1. Define your API routes in `packages/trpc/src/routers`
2. Create shared UI components in `packages/ui/src`
3. Implement web features in `apps/web/src/app`
4. Implement mobile features in `apps/mobile/app`

## Type Safety

This boilerplate is configured for maximum type safety:

- Strict TypeScript configuration
- tRPC for type-safe API calls
- Shared types between packages
- ESLint with TypeScript integration

## Contributing

Contributions are welcome! Please read our contributing guidelines for details.

## License

MIT
