import "styled-components";
import type { ColorType, FontType } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key in ColorType]: string };
    fonts: { [key in FontType]: string };
  }
}
