import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Stack
    spacing={2}
    alignItems="center"
    justifyContent="center"
    minHeight="70vh"
  >
    <Typography variant="h2">
      404
    </Typography>

    <Typography>
      Page not found.
    </Typography>

    <Button
      component={Link}
      to="/"
      variant="contained"
    >
      Go Home
    </Button>
  </Stack>
);

export default NotFound;