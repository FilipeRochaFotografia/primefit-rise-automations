# Overview

This is a modern full-stack web application built with React, TypeScript, and Express.js. The project appears to be a business automation platform called "TRUE RISE COMPANY" that focuses on AI-powered automation solutions for businesses. It features a corporate landing page showcasing automation services, case studies, and interactive mockups of various business tools including WhatsApp automation, social media studio, and analytics dashboards.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for client-side routing with a simple, hook-based API
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack React Query for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API development
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database ORM**: Drizzle ORM for type-safe database operations with PostgreSQL
- **Session Management**: In-memory storage with plans for PostgreSQL session store
- **Development Server**: Custom Vite integration for hot module replacement in development

## Database Design
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL for scalable cloud hosting
- **Current Schema**: User management system with username/password authentication

## Design System
- **Component Library**: Custom implementation based on shadcn/ui with Radix UI primitives
- **Theme**: Dark theme with red accent colors, glass morphism effects
- **Typography**: Inter font family for modern, readable text
- **Icons**: Font Awesome for comprehensive icon coverage
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

## Development Workflow
- **Package Management**: npm with comprehensive dependency management
- **Build Process**: Separate client and server builds with optimized production outputs
- **Development**: Hot reload for both frontend and backend development
- **Type Checking**: Strict TypeScript configuration with shared types between client and server

## External Dependencies

### Database & Storage
- **Neon Database**: Serverless PostgreSQL hosting for production database
- **Drizzle ORM**: Type-safe database operations and migrations
- **Connect PG Simple**: PostgreSQL session store for authentication persistence

### UI & Design
- **Radix UI**: Unstyled, accessible UI primitives for custom component development
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Animation library for smooth transitions and interactions
- **Font Awesome**: Comprehensive icon library for UI elements
- **Google Fonts**: Inter font family for typography

### Development Tools
- **Vite**: Fast build tool with hot module replacement
- **TypeScript**: Static type checking for improved code quality
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with autoprefixer for browser compatibility

### React Ecosystem
- **TanStack React Query**: Data fetching and caching for API interactions
- **React Hook Form**: Form state management with validation
- **Wouter**: Lightweight routing library for single-page applications
- **React Day Picker**: Date selection components for forms