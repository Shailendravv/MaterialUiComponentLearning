import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={3}
        itemsAfterCollapse={0}
        itemsBeforeCollapse={2}
      >
        {/* seperator can be used to give spacin with symbols can beused as a prop inside Breadcrumbs */}
        {/* default it can be seperate up to 8 stages maxItems we can set manually */}
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Cataog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
