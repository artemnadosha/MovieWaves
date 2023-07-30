import { FC, ReactNode } from "react";
import { Box, Typography, TypographyProps } from "@/UI-kit";

interface LabelFieldProps extends TypographyProps {
  control: ReactNode;
  label: string;
}

const LabelField: FC<LabelFieldProps> = ({ control, label, ...rest }) => {
  return (
    <Box
      component="label"
      sx={{ flex: 0 }}
      direction="row"
      justifyContent="space-between"
    >
      <Typography {...rest}>{label}</Typography>
      {control}
    </Box>
  );
};

export default LabelField;
