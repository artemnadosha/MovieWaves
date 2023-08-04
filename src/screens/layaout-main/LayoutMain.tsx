"use client";
import { ReactNode } from "react";
import { Sidebar } from "@/components";
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
      {children}
    </Box>
  );
};

export default LayoutMain;
