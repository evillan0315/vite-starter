import {
  Avatar,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import { useAuth } from "@/features/auth/hooks/useAuth";

const Profile: React.FC = () => {
  const { user } = useAuth();

  const initials =
    user?.firstName?.charAt(0).toUpperCase() ??
    user?.email?.charAt(0).toUpperCase() ??
    "U";

  return (
    <Stack spacing={4}>
      <Card>
        <CardContent>
          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            spacing={4}
            alignItems="center"
          >
            <Avatar
              sx={{
                width: 96,
                height: 96,
                fontSize: 36,
              }}
            >
              {initials}
            </Avatar>

            <Stack spacing={1}>
              <Typography variant="h4" fontWeight={700}>
                {user?.firstName ?? "User"}
              </Typography>

              <Typography color="text.secondary">{user?.email}</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Account Information
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <List disablePadding>
            <ListItem>
              <ListItemText
                primary="First Name"
                secondary={user?.firstName ?? "-"}
              />
            </ListItem>

            <ListItem>
              <ListItemText primary="Email" secondary={user?.email ?? "-"} />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Authentication"
                secondary="Authenticated"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Profile;
