import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

// If you use CSS/SCSS vs. styled components

function Layout() {
  return (
    <div>
      <Header />

      {/* An <Outlet> renders whatever child route is currently active in App.js */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
