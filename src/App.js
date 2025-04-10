import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/header";  // Import the static header
import routes from "./routesConfig";  // Import the routes configuration

function App() {
  return (
   <>
     {/* This makes sure the Header is static on all pages */}
  
      {/* Main content area where routes will be rendered */}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
   </>
  );
}

export default App;
