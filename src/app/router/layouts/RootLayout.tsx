import { Outlet } from "react-router-dom";

import { Navbar } from "@/widgets/navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default RootLayout;