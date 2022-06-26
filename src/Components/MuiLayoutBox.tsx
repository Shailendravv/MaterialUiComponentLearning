import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

//"Box Layout " serves as a wrapper component for most of your css utility needs
// Box component is replacement to the basic tags div
// we donot use other HTML element because Box element accepts a prop called "sx" which can be used for defining a custom style that has access to the theme
// In HTML tag we can not access the theme and hover
//  As a CSS utility component you can a lot of css property directly on the component

export const MuiLayoutBox = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      {/* Paper Component is Surface Related component.*/}
      {/* Assume you have some signIn form or some card with elevation and shadow */}
      {/* Paper add white background */}
      <Stack
        // StackComponent is use to manage component in  one direction either along vertical or Horizontal axis
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Codevolution
        </Box>
        {/* Directly add few style props that material UI support 
      MUI have some shorter property bgcolor =BackgroundColor & p is for padding by default multiply by 8 px p={2} that mean 16 px*/}
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      {/* Grid component has 2 variation rid Container for the parent Grid Item for the children */}
      {/* Grid component under the hood uses the flexbox module.*/}
      {/* The Grid consists of 12 columns */}
      {/* Each item in the grid can take up one or more columns as its width */}
      {/* There are five breakpoints each corresponding to a certain device width "xs for mobile device  size" "sm" for tablet, "md" for desktop, lg and xl for larger monitors */}
      {/* We ca assign integers values to each breakpoint which indicates how many of the 12 available columns are occupied by that item when the viewport satisfies that breakpoint constraints */}
      <Grid container my={4} spacing={2}>
        {/* Spacig will create space between the element */}
        {/* We can seperate spacing for row and coloumn for row prop is rowSpacing for Coloumn prop is coloumnSpacing  */}
        <Grid item xs={12} sm={6}>
          {/* xs = 6 means mobile sizes and above assign 6 out of 12 coloumns for the grid item */}
          <Box bgcolor="primary.light" p={2}>
            Item-1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* 50% percent of vertical area xs=6 means for 100% xs=12*/}
          {/*  *********for making device more responsive we can use grid like that xs=12 means cover whole size and sm = 6***** */}
          <Box bgcolor="primary.light" p={2}>
            Item-2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/*  xs=9 means 75% Area of total */}
          {/* IF we want all item of Equal width just write xs */}
          {/* if we write xs={auto } it wil take only necessary width */}

          <Box bgcolor="primary.light" p={2}>
            Item-3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* xs=3 means 25% Area  of total */}
          <Box bgcolor="primary.light" p={2}>
            Item-4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
