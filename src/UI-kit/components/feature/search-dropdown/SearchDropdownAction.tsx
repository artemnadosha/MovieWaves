import { FC } from "react";
import { Box, Link } from "@/UI-kit/components";

interface SearchDropdownAction {
  actionLink: string;
  actionTitle: string;
}

const SearchDropdownAction: FC<SearchDropdownAction> = ({
  actionLink,
  actionTitle,
}) => {
  return (
    <Box
      borderTop="1px solid"
      borderColor="border"
      sx={{ height: "40px", position: "fixed", bottom: "0" }}
      color="background.dark"
      justifyContent="center"
      alignItems="center"
    >
      <Link
        href={actionLink || "/"}
        variant="defaultText"
        sx={{ width: "100%", height: "100%" }}
      >
        {actionTitle}
      </Link>
    </Box>
  );
};

export default SearchDropdownAction;
