import * as React from "react";
import { Outlet, createRootRoute, useRouterState } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast"; // ✅ Correct import
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const router = useRouterState();

  const pathname = router.location.pathname;
  const hideLayout = pathname === "/login" || pathname === "/register";

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <React.Fragment>
      <Toaster position="top-center" reverseOrder={false} />
      {!hideLayout && <NavBar />}
      <Outlet />
      {!hideLayout && <Footer />}
    </React.Fragment>
  );
}
