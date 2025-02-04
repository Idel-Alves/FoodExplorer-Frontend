import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit/:id" element={<EditDish />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/favorites" element={<Favorites />} />

      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}