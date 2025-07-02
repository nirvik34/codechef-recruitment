# CIMP Admin Portal

A modern React-based admin portal for managing technical and cultural clubs at CIMP.

## Features
- View lists of technical and cultural clubs
- Expandable club details with president and faculty info
- Responsive, modern UI with Tailwind CSS
- Sidebar navigation

## Tech Stack
- React (Vite)
- Tailwind CSS
- React Icons

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd cimp-admin-portal
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```sh
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173` by default.

### Building for Production
```sh
npm run build
# or
yarn build
```

### Linting
```sh
npm run lint
# or
yarn lint
```

## Folder Structure
```
src/
  components/      # Reusable UI components
  context/         # React context providers
  pages/           # Main page components (Clubs, Dashboard, etc.)
  routes/          # App route definitions
  assets/          # Static assets
  App.jsx          # Main app component
  main.jsx         # Entry point
```

## Customization
- To add or edit clubs, modify the arrays in `src/pages/Clubs.jsx`.
- Tailwind CSS classes can be adjusted for custom theming.
