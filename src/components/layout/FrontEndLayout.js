import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import routes from "../routes/FrontRoutes";
import PageNotFound from "../ui/404";
import Dashboard from "../Pages/Dashboard/Dashboard";

const FrontEndLayout = () => {
  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          {Array.isArray(routes) &&
            routes.map((route) => (
              <Route
                key={route?.id}
                path={route?.path}
                element={route?.component}
              />
            ))}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default FrontEndLayout;
