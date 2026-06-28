import { Box, Typography } from "@mui/material";

import { useAuth } from "@/features/auth/hooks/useAuth";

export const HomePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <Box className="flex flex-col items-center justify-center flex-1">
      <Typography variant="h3">
        Welcome
      </Typography>

      <Typography>
        {user
          ? `Hello ${user.firstName ?? user.email}`
          : "Guest"}
      </Typography>
    </Box>
  );
};
