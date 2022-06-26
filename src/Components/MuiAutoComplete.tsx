import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["HTMl", "CSS", "JavaScript", "React", "TypeScript"];
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log(skill);
  return (
    <Stack spacing={2} width="250px">
      {/* Autocomplete has two mandatory props first one is "Options" which should be an array of Strings "RenderInput" */}
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        // To allow free text or any text we use "FreeSolo prop" this scenario is use for like Google search
        // freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => {
          setSkill(newValue);
        }}
      />
    </Stack>
  );
};
