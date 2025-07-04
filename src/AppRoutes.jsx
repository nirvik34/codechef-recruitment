import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// Placeholder imports for other pages
const Clubs = React.lazy(() => import("./pages/Clubs"));
const Members = React.lazy(() => import("./pages/Members"));
const Roles = React.lazy(() => import("./pages/Roles"));
const Calendar = React.lazy(() => import("./pages/Calendar"));
const CreateClub = React.lazy(() => import("./pages/CreateClub"));

const AppRoutes = () => (
  <React.Suspense fallback={<div className="p-8">Loading...</div>}>
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clubs" element={<Clubs />} />
      <Route path="/members" element={<Members />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/create" element={<CreateClub />} /> {/* Added route for CreateClub */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  </React.Suspense>
);

export default AppRoutes;
