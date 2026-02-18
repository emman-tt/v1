# Professional Dashboard Application - Internship Project

## Project Overview
This application is a modern, responsive web dashboard built with React. It features a secure login interface, a dynamic main feed displaying data fetched from a public REST API, and a detailed view for individual items. The project focuses on clean architecture, scalable component structures, and efficient state management.

# Live Demo - [https://you-bloom-beta.vercel.app]

## Technical Stack
- **Frontend Framework**: React 19 (Vite-powered)
- **State Management**: Redux Toolkit
- **Routing**: React Router 7
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Data Fetching**: Axios
- **Testing**: Vitest & React Testing Library

## Navigation and Routing
The application utilizes a centralized routing configuration in `App.jsx`. Access to different parts of the application is managed through defined routes:
- `/auth`: Landing and authentication page.
- `/home`: The main dashboard featuring a list of items and search functionality.
- `/details/:id`: Dynamic route for viewing specific item details.
- `*`: Catch-all route that redirects users back to the root or authentication page.

## Data Architecture and Flow
Data is managed through a structured layer of services and a centralized Redux store.

### API Services
Located in `src/services/`, these modules handle all external communication:
- `PostService.js`: Manages data fetching for posts and users using Axios.
- `DetailsService.js`: Handles specific item retrieval logic.

### State Management
The application uses Redux Toolkit (see `src/store/Store.js`) for predictable state transitions:
- `PostSlice`: Manages the global state for posts, user data, loading status, and search filters.
- **Data Hydration**: Data fetched via services is dispatched to the store, making it accessible throughout the component tree.

## Component Structure
The project follows a modular pattern for component organization:
- **Pages**: Top-level containers located in `src/pages/` (e.g., `LoginPage`, `MainPage`, `DetailPage`).
- **Feature Components**: Components tied to specific pages, grouped under `src/components/Mainpage/` or `src/components/Detailspage/`.
- **UI Components**: Generic, reusable building blocks (buttons, inputs) located in `src/components/ui/`.

### Component Communication
- **Props**: Used for passing local state and static data down the hierarchy.
- **Redux Hooks**: `useSelector` and `useDispatch` are used for accessing and updating global state, ensuring decoupling between deeply nested components.

## Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm run dev
```

### Running Tests
To execute the unit test suite:
```bash
npm run test
```
