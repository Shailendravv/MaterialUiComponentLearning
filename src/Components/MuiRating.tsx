import { Stack, Rating } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    //   "Precision Prop" It will show Multiple of 0.5 To change star to favourite icon we import icon star is default icon
    <Stack spacing={4}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        // ** props
        // readOnly
        // if You want to fix the rating to 3 set to "read only" and change the value of default state to 3 in place of null
        // ** Props
        // highlightSelectedOnly
        // It will select and color the required one single star or favourite It will be used when you are collecting feedback by using emojis
      />
    </Stack>
  );
};
