import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Route";
import Layout from "../Layout/Layout";
import { authRoutes } from "./AuthRoutes";

export default function LayoutRoutes() {
  return (
    <Fragment>
      <Routes>
        {routes.map(({ path, element }, i) => (
          <Route element={<Layout />} key={i}>
            <Route path={path} element={element} />
          </Route>
        ))}
        {authRoutes.map(({ path, element }, i) => (
          <Route key={i} path={path} element={element} />
        ))}
      </Routes>
    </Fragment>

  );
}