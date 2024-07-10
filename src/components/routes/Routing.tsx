import { FC } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./list";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/home/Home"; // Adjust import paths accordingly

export const Routing: FC = () => {
  const isAuth = true;

  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          if (route.auth && !isAuth) {
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
    </Router>
  );
};