import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./list";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/home/Home"; // Adjust import paths accordingly
import { useAuth } from "../providers/useAuth";

export const Routing: FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {routes.map((route) => {
        if (route.auth && !user) {
          return <Route key={route.path} path={route.path} element={<Navigate to="/auth" />} />;
        }
        return (
          <Route key={route.path} path={route.path} element={<Layout />}>
            <Route index element={<route.component />} />
          </Route>
        );
      })}
      <Route path="/auth" element={<Home />} />
    </Routes>
  );
};