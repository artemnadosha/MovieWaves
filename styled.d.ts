import { ThemeType } from "@/UI-kit";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
