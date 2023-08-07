"use client";
import { ReactNode } from "react";
import { Header, Sidebar } from "@/components";
import { Box } from "@/UI-kit/components";

const LayoutMain = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      component="main"
      direction="row"
      justifyContent="flex-start"
      color="background.main"
    >
      <Sidebar />
      <Box sx={{ width: "calc(100% - 300px)" }}>
        <Header />
        {children}
      </Box>
    </Box>
  );
};

export default LayoutMain;
