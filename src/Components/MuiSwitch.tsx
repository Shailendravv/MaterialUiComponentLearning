import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  //   For Group refer to MuiCheckbox In control prop inplace of Checkbox use Switch
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        // Size and color props are used for different size and color 3 sizes and 6 color pallet
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="success"
          />
        }
      />
    </Box>
  );
};
