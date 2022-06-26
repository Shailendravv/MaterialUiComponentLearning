import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

// Card media is used to import images

export const MuiCard = () => {
  return (
    <Box width="300px">
      {/* Instead of div we are using Box  */}
      <Card>
        {/* It is Container */}
        <CardMedia
          // It contains images
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash Images"
        />
        <CardContent>
          {/* It contains the content */}
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a declarative, efficient, and flexible JavaScript library
            for building user interfaces. It lets you compose complex UIs from
            small and isolated pieces of code called “components”.
          </Typography>
        </CardContent>
        <CardActions>
          {/* It conains button todo actions */}
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
