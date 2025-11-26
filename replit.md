# BenefitsBridge Partners - Pharmacy Benefit Management Consulting Platform

## Overview

BenefitsBridge Partners is a pharmacy benefit management (PBM) consulting platform powered by Ringmaster Technologies. The application provides transparency, cost savings analysis, and contract compliance monitoring for large public employers. It features a modern marketing website with pages covering solutions, services, company information, insights, and contact capabilities.

The platform is built as a full-stack TypeScript application using a monorepo structure with shared code between client and server, emphasizing PBM evaluation, claims monitoring, and cost containment strategies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TailwindCSS v4 for styling with custom design system
- Shadcn UI component library (New York variant) with Radix UI primitives
- Lucide React for iconography
- TanStack Query (React Query) for server state management

**Design Decisions:**
- **Component Library Choice**: Uses Shadcn UI for a consistent, accessible component system with extensive Radix UI primitives for dialogs, dropdowns, popovers, and other interactive elements
- **Styling Approach**: TailwindCSS v4 with CSS variables for theming, enabling dark mode support and consistent design tokens
- **Routing**: Wouter chosen for its minimal footprint compared to React Router
- **State Management**: React Query handles server state, local component state via React hooks
- **Type Safety**: Full TypeScript coverage across all components and pages

**Page Structure:**
- Home: Hero section with PBM focus, solutions overview
- Solutions: RingmasterRx platform details and PBM evaluation features
- Services: Enhanced reporting capabilities (Stewardship, Top Drugs, Large Claimant reports)
- About: Company information powered by Ringmaster Technologies, SOC 2 trust criteria
- Insights: Blog/articles covering PBM oversight, cost savings, contract analysis
- Contact: Contact form for prospective clients

**Asset Management:**
- Custom logo assets loaded from `@assets` alias
- Generated images for hero sections and data visualizations

### Backend Architecture

**Technology Stack:**
- Express.js for HTTP server
- TypeScript with ESM modules
- Development and production server separation
- In-memory storage implementation (MemStorage class)

**Design Decisions:**
- **Development vs Production**: Separate entry points (`index-dev.ts` and `index-prod.ts`) for different environments
  - Development mode integrates Vite middleware for HMR
  - Production mode serves pre-built static assets
- **Modular Architecture**: Route registration separated into `routes.ts`, storage abstraction in `storage.ts`
- **Storage Abstraction**: IStorage interface allows swapping storage implementations (currently in-memory, designed to support database later)
- **Request Logging**: Custom logging middleware captures API requests with response bodies and timing
- **Raw Body Access**: Express configured to preserve raw request bodies for webhook/signature verification scenarios

**API Structure:**
- Routes prefixed with `/api`
- Storage interface provides CRUD operations (getUser, getUserByUsername, createUser)
- Currently minimal API surface - designed for expansion

### Database & Schema

**ORM & Database:**
- Drizzle ORM for type-safe database interactions
- PostgreSQL as the target database (via Neon serverless driver)
- Schema-first approach with migrations in `/migrations` directory

**Schema Design:**
- Users table with UUID primary keys, unique usernames, password storage
- Drizzle-Zod integration for runtime validation schemas
- Type inference for Insert and Select operations

**Design Decisions:**
- **Database Selection**: PostgreSQL chosen for relational data with ACID guarantees
- **Neon Serverless**: Enables serverless PostgreSQL with connection pooling
- **Schema Location**: Shared schema in `/shared/schema.ts` accessible to both client and server
- **Migration Strategy**: Drizzle Kit manages schema changes with push command
- **Type Safety**: Full TypeScript types derived from schema definitions

**Current Implementation:**
- Basic user schema as foundation
- Ready for expansion with PBM-specific tables (contracts, claims, reports, etc.)

### Build & Development

**Build Pipeline:**
- Client: Vite builds React app to `dist/public`
- Server: esbuild bundles Express app to `dist/index.js`
- Separate development and production configurations

**Development Experience:**
- Hot module replacement via Vite
- TypeScript checking via `tsc --noEmit`
- Path aliases: `@/` for client code, `@shared/` for shared code, `@assets/` for assets
- Replit-specific plugins for development banner, error overlay, and cartographer

**Environment Configuration:**
- `NODE_ENV` determines development vs production mode
- Database URL from `DATABASE_URL` environment variable
- Vite runs on port 5000 in development

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives (accordion, alert-dialog, avatar, checkbox, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, toggle, tooltip)
- **Shadcn UI**: Pre-styled components built on Radix UI with Tailwind
- **CMDK**: Command menu component for keyboard-driven interfaces
- **Embla Carousel**: Touch-friendly carousel component
- **Vaul**: Drawer component for mobile interfaces
- **Input-OTP**: One-time password input component

### State & Data Management
- **TanStack Query**: Server state management, caching, and synchronization
- **React Hook Form**: Form state management with validation
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries
- **Zod**: Schema validation (via Drizzle-Zod)

### Database & Backend
- **Drizzle ORM**: Type-safe SQL query builder and ORM
- **Neon Serverless**: Serverless PostgreSQL client optimized for edge/serverless environments
- **Connect-PG-Simple**: PostgreSQL session store for Express (session management ready)

### Styling
- **TailwindCSS**: Utility-first CSS framework
- **Autoprefixer**: CSS vendor prefix automation
- **Class Variance Authority**: Variant-based component styling utility
- **clsx & tailwind-merge**: Conditional class merging utilities
- **tw-animate-css**: Tailwind animation utilities

### Utilities
- **date-fns**: Modern date utility library
- **nanoid**: Unique ID generation
- **wouter**: Minimalist routing library

### Development Tools
- **Vite**: Build tool and development server
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution for development server
- **TypeScript**: Type system and compiler
- **Replit Plugins**: Development banner, runtime error modal, cartographer (Replit-specific development tools)

### Design Tokens & Theming
- Custom CSS variables for colors, borders, and spacing
- HSL color system for easy theme manipulation
- Dark mode support via CSS custom properties
- Chart colors for data visualization (chart-1 through chart-5)
- Sidebar-specific color tokens for navigation UI