import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

// We can add css in "Box "in place of div which contain height and width "select prop" is use for dropdown select
export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  // fullWidth props is used to increase width of selection tag
  // For multiple selection use SelectProps={{}}
  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="PAK">Pakistan</MenuItem>
        <MenuItem value="US">USA</MenuItem>
      </TextField>
    </Box>
  );
};
