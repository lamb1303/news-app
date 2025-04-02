import { Outlet } from "react-router-dom";

import Navbar from "@/components/shared/Navbar";

const RootLayout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <main className="flex flex-1 h-full pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
