# Penguin Pathways - GitHub Copilot Instructions

## Project Overview
This is **Penguin Pathways**, a React-based Linux education platform. The project serves comprehensive Linux learning content through an interactive web interface, covering everything from basic commands to advanced DevOps and cybersecurity concepts.

## Architecture & Tech Stack
- **Framework**: React 18 + TypeScript with Vite
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack React Query for server state
- **Routing**: React Router DOM with catch-all 404 handling
- **Package Manager**: Bun (note `bun.lockb` file)

## Key Patterns & Conventions

### Component Structure
- **UI Components**: Located in `src/components/ui/` - these are shadcn/ui components
- **Pattern**: Each UI component wraps Radix primitives with consistent styling using `cn()` utility
- **Example**: `<Button variant="outline" size="sm">` - all components support variant props

### Styling System
- **Utility Function**: `cn()` in `src/lib/utils.ts` combines `clsx` and `tailwind-merge`
- **Usage**: `className={cn("base-styles", conditionalStyles, className)}`
- **Theme**: CSS variables defined in Tailwind config (`hsl(var(--primary))`)
- **Dark Mode**: Uses `class` strategy for dark mode switching

### Component Development
```tsx
// Standard pattern for new components
const MyComponent = React.forwardRef<HTMLElement, Props>(
  ({ className, variant = "default", ...props }, ref) => (
    <Primitive.Root
      ref={ref}
      className={cn(componentVariants({ variant }), className)}
      {...props}
    />
  )
);
MyComponent.displayName = "MyComponent";
```

### Application Structure
- **App.tsx**: Root component with QueryClient, TooltipProvider, and routing setup
- **Pages**: `src/pages/Index.tsx` (main content), `NotFound.tsx` (404 handling)
- **Routing**: Add new routes ABOVE the catch-all `"*"` route in App.tsx
- **Toast System**: Dual setup with both shadcn/ui Toaster and Sonner

## Development Workflow

### Running the Project
```bash
bun dev          # Start development server on :8080
bun build        # Production build
bun build:dev    # Development build
bun lint         # ESLint checking
bun preview      # Preview production build
```

### Adding New Features
1. **UI Components**: Use existing shadcn/ui components from `src/components/ui/`
2. **New Pages**: Create in `src/pages/` and add route to App.tsx ABOVE catch-all
3. **Styling**: Use Tailwind classes, leverage theme CSS variables
4. **Icons**: Use Lucide React icons (already imported in many components)

### File Organization
- **Absolute Imports**: Use `@/` prefix (configured in Vite + TypeScript)
- **Component Exports**: Follow shadcn pattern - export all variants from single file
- **Type Definitions**: Co-locate with components, use React.ComponentProps patterns

## Content Strategy
The README.md contains extensive Linux learning material (3000+ lines) that should inform UI development. The platform aims to transform this content into an interactive learning experience.

## Common Gotchas
- **ESLint Config**: Uses flat config format, has `@typescript-eslint/no-unused-vars: "off"`
- **Toast Exports**: Both `@/components/ui/use-toast` and `@/hooks/use-toast` exist
- **Component Naming**: All components have `displayName` set for debugging
- **Server Config**: Vite serves on `::` (all interfaces) port 8080, not localhost

## Integration Points
- **TanStack Query**: Pre-configured QueryClient for API state management
- **React Router**: Browser routing with programmatic navigation
- **Form Handling**: React Hook Form + Zod validation ready (dependencies installed)
- **Charts**: Recharts integration for data visualization features
