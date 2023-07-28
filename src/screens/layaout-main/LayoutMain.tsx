"use client";
import { ReactNode } from "react";
import { Box } from "@/UI-kit";
import { Sidebar } from "@/components";

const LayoutMain = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      component="main"
      direction="row"
      justifyContent="flex-start"
      sx={{ padding: 0 }}
    >
      <Sidebar />
      {children}
    </Box>
  );
};

export default LayoutMain;
