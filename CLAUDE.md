# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based family trip planning web application for a 2026 Japan trip (Sendai/Yamagata region). The app features itinerary management, todo lists, expense tracking, and coupon storage with Firebase Firestore backend and Firebase Hosting deployment.

## Commands

### Development
```bash
npm run dev          # Start Vite dev server (default: http://localhost:5173)
npm run build        # Build for production (outputs to ./dist)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

### Deployment
```bash
npm run ship         # One-command deploy script: builds, deploys to Firebase, and commits to git
firebase deploy      # Deploy to Firebase Hosting only
```

The `ship.sh` script is a convenience wrapper that:
1. Runs `npm run build`
2. Deploys to Firebase Hosting
3. Prompts for a git commit message
4. Commits and pushes to GitHub

## Architecture

### Tech Stack
- **Frontend**: React 19 + Vite
- **Routing**: React Router v6 (client-side routing with SPA)
- **Backend**: Firebase Firestore (real-time database)
- **Styling**: Tailwind CSS with custom sage green/milk color palette
- **Drag & Drop**: @dnd-kit for itinerary reordering
- **Icons**: lucide-react
- **Date handling**: date-fns

### Authentication Pattern
The app uses a **custom localStorage-based authentication** (`src/context/AuthContext.jsx`), NOT Firebase Auth:
- User "MT" with password "snorlax" gets `role: "admin"`
- Other users get `role: "user"`
- User data stored in `localStorage` key: `familyAppUser`
- Admin role enables edit/delete permissions across components

### Data Flow Architecture

**Initial Data Pattern**:
- Static reference data defined in `src/data/initialData.js` (itinerary items, default todos, coupons)
- On first load, components check Firestore; if empty, seed with initial data
- `TRIP_YEAR` constant controls all date generation

**Real-time Sync**:
- All components use Firestore `onSnapshot()` for real-time updates
- Changes are immediately reflected across all connected clients
- No local state persistence beyond Firebase

### Component Structure

**Layout Hierarchy**:
```
App.jsx (React Router)
  ├── Login.jsx (public route)
  └── Layout.jsx (protected route wrapper with navigation)
      ├── Itinerary.jsx (/)
      ├── TodoList.jsx (/todos)
      ├── Expenses.jsx (/expenses)
      └── Coupons.jsx (/coupons)
```

**Protected Routes**:
- `<ProtectedRoute>` wrapper checks `user` from `AuthContext`
- Redirects to `/login` if not authenticated
- All app routes are nested under this wrapper

### Firestore Collections

| Collection | Document Structure | Used By |
|------------|-------------------|---------|
| `itinerary` | `{date, time, title, note, group?, lat?, lng?, details?, image?}` | Itinerary.jsx |
| `todos` | `{text, completed, createdAt}` | TodoList.jsx |
| `transactions` | `{type, amount, description, category, image?, createdAt}` | Expenses.jsx |
| `coupons` | `{title, desc, link, category, used}` | Coupons.jsx |

**Important**: Firestore indexes are auto-generated. No manual index configuration needed for current queries.

### Firebase Configuration

**Hosting**:
- Public directory: `dist/` (Vite build output)
- SPA rewrite: All routes (`**`) rewrite to `/index.html` for client-side routing
- Firebase config in `firebase.json`

**Security Note**: Firebase API keys are exposed in `src/firebase.js`. This is normal for client-side Firebase apps, but Firestore Security Rules should be configured properly in Firebase Console to restrict write access.

## Key Features & Patterns

### 1. Itinerary Component
- Displays trip schedule with date grouping
- Uses `@dnd-kit` for drag-and-drop reordering within same date
- Optional group filtering (A/B) for alternate route planning
- Supports lat/lng for map links, images, and expandable details
- Admin can reset to initial data via batch write

### 2. Expense Tracker
- Income/expense transaction logging
- Image upload support (base64 stored in Firestore)
- Real-time balance calculation
- Category-based filtering

### 3. Todo List
- Shared checklist for all users
- Any user can check/uncheck items
- Admin can add/delete todos

### 4. Coupons
- Static coupon list with "used" toggle
- Links to external coupon images/websites
- Category filtering (藥妝, 電器/百貨, etc.)

## Styling Conventions

The app uses a **Japanese aesthetic** with custom Tailwind theme:
- Primary color: `sage-500` (#6B9185) - for buttons, active states
- Background: `milk-50/milk-100` - clean off-white
- Text: `coffee-900` (dark) / `coffee-800` (secondary)
- Font: Hiragino Maru Gothic ProN (rounded Japanese sans-serif)

**Common Patterns**:
- Cards: `bg-milk-100 rounded-2xl shadow-sm`
- Buttons: `bg-sage-500 hover:bg-sage-600 text-white`
- Inputs: `rounded-xl border-sage-200 focus:ring-sage-500`

## Development Notes

### Adding New Features
1. Check if data should be in Firestore (dynamic) or `initialData.js` (static reference)
2. Use `onSnapshot()` for real-time sync if using Firestore
3. Add admin-only actions with `{user?.role === 'admin' && ...}` guard
4. Follow existing component patterns for consistency

### Image Handling
Images are stored as **base64 strings directly in Firestore** (Expenses, Itinerary). For production scale, consider migrating to Firebase Storage.

### Date Handling
- Use `date-fns` for parsing/formatting (already imported in most components)
- Trip year controlled by `TRIP_YEAR` constant in `initialData.js`
- Dates stored as strings in `YYYY-MM-DD` format

## Deployment Workflow

Standard workflow:
```bash
npm run ship
# Prompts for commit message, then:
# 1. Builds production bundle
# 2. Deploys to Firebase Hosting
# 3. Commits and pushes to git
```

Manual workflow:
```bash
npm run build
firebase deploy
git add .
git commit -m "message"
git push
```

## Firebase Project
- Project ID: `sdj-2026`
- Hosting URL: Check `.firebaserc` for current site name
- Region: Default (likely asia-northeast1)
