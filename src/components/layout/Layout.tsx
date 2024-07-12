import { FC, ReactNode } from "react";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useAuth } from "../providers/useAuth";

interface ILayoutProps {
  children?: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  const { user } = useAuth();
  return (
    <>
      <Header />
      <Grid container spacing={2} marginX={5} marginTop={2}>
        {user && (
          <Grid item md={3}>
            <Sidebar />
          </Grid>
        )}
        <Grid item md={user ? 9 : 12}>
          {children || <Outlet />}
        </Grid>
      </Grid>
    </>
  );
};