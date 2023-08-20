import { CSSValues, TAGValues } from "./index";
import { InputType } from "@storybook/types";
import { darkTheme } from "@/UI-kit";
import {
  ColorKeysProps,
  SizeProps,
  VariantButton,
  VariantLink,
} from "@/UI-kit/types";
import { PaletteConfigType, PaletteName, PaletteType } from "@/UI-kit/theme";

const direction: InputType = {
  type: "string",
  control: "select",
  description: "CSS Properties direction",
  options: CSSValues.direction,
  table: {
    type: { summary: CSSValues.direction.join(",\n") },
    defaultValue: { summary: "column" },
  },
};

const justifyContent: InputType = {
  type: "string",
  control: "select",
  description: "CSS Properties justify-content",
  options: CSSValues.justifyContent,
  table: {
    type: { summary: CSSValues.justifyContent.join(",\n") },
    defaultValue: { summary: "none" },
  },
};

const alignItems: InputType = {
  type: "string",
  control: "select",
  description: "CSS Properties align-items",
  options: CSSValues.alignItems,
  table: {
    type: { summary: CSSValues.alignItems.join(",\n") },
    defaultValue: { summary: "none" },
  },
};

const sx: InputType = {
  table: {
    type: { summary: "CSS Properties" },
    defaultValue: { summary: "none" },
  },
};

const colorKeys = (
  defaultValue?: keyof PaletteConfigType | string
): InputType => ({
  type: "string",
  options: Object.keys(darkTheme.palette) as ColorKeysProps["color"][],
  control: "select",
  description: "Use of colors that are set in the theme",
  table: {
    type: {
      summary: "All options",
      detail: Object.keys(darkTheme.palette).join(",\n"),
    },
    defaultValue: { summary: defaultValue || "primary" },
  },
});

const paletteArray = Object.keys(darkTheme.palette).reduce(
  (acc: string[], key) => {
    if (!acc.includes(key)) {
      acc.push(key);
    }

    const paletteType: PaletteType =
      darkTheme.palette[key as keyof PaletteConfigType];
    const typeKeys = Object.keys(paletteType);

    const keysToAdd = typeKeys.includes("main") ? [...typeKeys, key] : typeKeys;

    const typeValues = keysToAdd.map((typeKey) => `${key}.${typeKey}`);
    return [...acc, ...typeValues];
  },
  []
);

const colorNames = (defaultValue?: keyof PaletteName | string): InputType => ({
  type: "string",
  options: paletteArray,
  control: "select",
  description: "The color scheme and nesting is assigned by the theme",
  table: {
    type: {
      summary: "All options",
      detail: paletteArray.join(",\n"),
    },
    defaultValue: { summary: defaultValue || "primary" },
  },
});

const children: InputType = {
  type: "string",
  description: "Props Children",
  table: {
    type: { summary: "string, React component" },
    defaultValue: { summary: "none" },
  },
};

const size = ({ size: defaultValue }: SizeProps): InputType => ({
  type: "string",
  options: Object.keys(darkTheme.size),
  control: "radio",
  description: "Use of size that are set in the theme",
  table: {
    type: { summary: Object.keys(darkTheme.size).join(",\n") },
    defaultValue: { summary: defaultValue || "medium" },
  },
});

const sizeAnother: InputType = {
  type: "string",
  options: ["small", "large"],
  control: "radio",
  description: "Use of size that are set in the badge",
  table: {
    type: { summary: "small, large" },
    defaultValue: { summary: "large" },
  },
};

const variantButton = ({ variant }: VariantButton): InputType => ({
  type: "string",
  options: ["contained", "outlined", "text", "defaultText"],
  control: "select",
  description: "Use of variant that are set in the theme",
  table: {
    type: { summary: "contained, outlined, text, defaultText" },
    defaultValue: { summary: variant || "contained" },
  },
});

const variantLink = ({ variant: defaultValue }: VariantLink): InputType => ({
  type: "string",
  options: ["tab", "contained", "outlined", "text", "defaultText"],
  control: "select",
  description: "Use of variant that are set in the theme",
  table: {
    type: { summary: "tab, contained, outlined, text, defaultText" },
    defaultValue: { summary: defaultValue || "text" },
  },
});

const variantCheckRadio: InputType = {
  type: "string",
  options: ["contained", "outlined"],
  control: "radio",
  description: "Use of variant that are set in the theme",
  table: {
    type: { summary: "contained, outlined" },
    defaultValue: { summary: "contained" },
  },
};

const variantInput: InputType = {
  type: "string",
  options: ["contained in progress", "outlined"],
  control: "radio",
  description: "Use of variant that are set in the theme",
  table: {
    type: { summary: "contained, outlined" },
    defaultValue: { summary: "contained" },
  },
};

const variantTypography: InputType = {
  type: "string",
  options: TAGValues.typographyVariant,
  control: "select",
  description: "Use of variant that are set in the theme",
  table: {
    type: {
      summary: "All variant",
      detail: TAGValues.typographyVariant.join(",\n"),
    },
    defaultValue: { summary: "p" },
  },
};

const icon: InputType = {
  options: ["😄"],
  control: "check",
  table: {
    type: { summary: "React SVG Component" },
    defaultValue: { summary: "none" },
  },
};

const radius: InputType = {
  type: "string",
  description: "Use a string value that accepts border radius",
  table: {
    type: { summary: "string" },
    defaultValue: { summary: "none" },
  },
};

const hidden: InputType = (defaultValue: boolean) => ({
  type: "boolean",
  description: "Ability to hide component",
  table: {
    type: { summary: "boolean" },
    defaultValue: { summary: defaultValue || false },
  },
});

const label: InputType = {
  type: "string",
  description: "The text in the component",
  table: {
    type: { summary: "string | number" },
    defaultValue: { summary: "none" },
  },
};

const position: InputType = {
  description: "An object that takes in a horizontal and vertical value",
  options: ["top-left", "top-right", "bottom-left", "bottom-right"],
  mapping: {
    "top-left": {
      horizontal: "left",
      vertical: "top",
    },
    "top-right": {
      horizontal: "right",
      vertical: "top",
    },
    "bottom-left": {
      horizontal: "left",
      vertical: "bottom",
    },
    "bottom-right": {
      horizontal: "right",
      vertical: "bottom",
    },
  },
  table: {
    type: {
      summary: "Position Props",
      detail: `{ vertical: 'top' | 'bottom', horizontal: 'left' | 'right' }`,
    },
    defaultValue: {
      summary: `horizontal:left, vertical:top`,
    },
  },
};

const positionSx: InputType = {
  description: "An object that accepts values to fine-tune the badge",
  table: {
    type: {
      summary: "PositionSX Props",
      detail: `{ top: CSSProperties["top"] | bottom: CSSProperties["bottom"] | left: CSSProperties["left"] | right: CSSProperties["right"] }`,
    },
    defaultValue: { summary: "none" },
  },
};

const typeCheckRadio: InputType = {
  type: {
    name: "string",
    required: true,
  },
  options: ["checkbox", "radio"],
  control: "radio",
  description: "The type that defines the component will be checkbox or radio",
  table: {
    type: { summary: "checkbox, radio" },
    defaultValue: { summary: "none" },
  },
};

const border: InputType = {
  type: "string",
  options: ["5px solid"],
  control: "check",
  description:
    'You can draw a border using the border property without color "1px solid" along with borderColor or with color if you don\'t want to use the theme palette',
  table: {
    type: { summary: "CSSProperties border" },
    defaultValue: { summary: "none" },
  },
};

const componentBox: InputType = {
  type: "string",
  options: TAGValues.box,
  control: "select",
  description: "Ability to pass a component tag to retrieve semantics",
  table: {
    type: { summary: "All tag", detail: TAGValues.box.join(",\n") },
    defaultValue: { summary: "div" },
  },
};

const componentTypography: InputType = {
  type: "string",
  options: TAGValues.typography,
  control: "select",
  description: "Ability to pass a component tag to retrieve semantics",
  table: {
    type: { summary: "All tag", detail: TAGValues.typography.join(",\n") },
    defaultValue: { summary: "p" },
  },
};

const spacing: InputType = {
  type: "number",
  description:
    "The distance between the parent's children. Use numbers if you want to use the ( themeSize * number ) formula specified in the topic, if not, use regular pixels or other units of measure.",
  table: {
    defaultValue: { summary: "none" },
  },
};

const indents: InputType = {
  type: "number",
  description:
    "You can pass here an array [2, 3, 2] for fine-tuning or just a single number.",
  table: {
    defaultValue: { summary: "none" },
  },
};

const disabledInTable: InputType = {
  table: { disable: true },
};

const href: InputType = {
  type: {
    name: "string",
    required: true,
  },
  description: "Props accepting the reference ",
  table: {
    defaultValue: { summary: "none" },
  },
};

type BooleanPropsType = {
  defaultValue?: boolean | string;
  required?: boolean;
};
const booleanProps = ({
  defaultValue,
  required,
}: BooleanPropsType): InputType => ({
  type: {
    name: "boolean",
    required: required || false,
  },
  description: "Rendering by state",
  table: {
    defaultValue: { summary: defaultValue || false },
  },
});

export const argTypes = {
  direction,
  alignItems,
  justifyContent,
  sx,
  colorKeys,
  colorNames,
  children,
  size,
  sizeAnother,
  variantButton,
  variantCheckRadio,
  variantInput,
  variantTypography,
  variantLink,
  icon,
  radius,
  hidden,
  label,
  position,
  positionSx,
  typeCheckRadio,
  border,
  componentBox,
  componentTypography,
  spacing,
  indents,
  disabledInTable,
  href,
  booleanProps,
};
