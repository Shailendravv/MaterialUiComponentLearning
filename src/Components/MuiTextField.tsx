import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  // for Css use Stack instead of div
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        {/* We have 3 variants the Outline is default variant  Outlined, filled and standard** size can be small, medium and large ** color can be 6 type*/}

        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="small secondary"
          size="small"
          color="secondary"
        ></TextField>
      </Stack>
      {/* Form props required(*), helper Text props it is used to give feedback of validation, disabled prop to Disable, Input props is used for read only work */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        ></TextField>
        <TextField
          label="password"
          type="password"
          helperText="Do not share your password with anyone"
          disabled
        ></TextField>
        <TextField
          label="Read only"
          InputProps={{ readOnly: true }}
        ></TextField>
      </Stack>
      {/* For prefix and suffix we import InputAdornment $ and Kg example $12 and 15kg*/}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        ></TextField>
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        ></TextField>
      </Stack>
    </Stack>
  );
};
