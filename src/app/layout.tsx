import { FC, PropsWithChildren } from "react";
import "./globals.css";
import { fontConfig } from "@/UI-kit/theme";
import { LayoutMain } from "../app-pages";
import { StyledComponentsRegistry, StyledThemeProvider } from "@/providers";

export const metadata = {
  title: "Films",
  description: "Generated by create next app",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <StyledThemeProvider>
          <body className={fontConfig.className}>
            <LayoutMain>{children}</LayoutMain>
            <div id="modal"></div>
          </body>
        </StyledThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
};

export default RootLayout;
