import {
  Card,
  CardContent,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useAuth } from "@/features/auth/hooks/useAuth";

const stats = [
  {
    title: "Projects",
    value: "12",
  },
  {
    title: "Tasks",
    value: "48",
  },
  {
    title: "Notifications",
    value: "7",
  },
  {
    title: "Storage",
    value: "82%",
  },
];

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <Stack spacing={4}>
      <Paper className="p-6">
        <Typography variant="h4" fontWeight={700}>
          Dashboard
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          mt={1}
        >
          Welcome back{" "}
          <strong>{user?.firstName ?? user?.email ?? "User"}</strong>.
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          mt={2}
        >
          <Chip
            label="Authenticated"
            color="success"
          />

          <Chip
            label="React 18"
            variant="outlined"
          />

          <Chip
            label="Material UI"
            variant="outlined"
          />

          <Chip
            label="Tailwind CSS"
            variant="outlined"
          />
        </Stack>
      </Paper>

      <Grid
        container
        spacing={3}
      >
        {stats.map((item) => (
          <Grid
            key={item.title}
            size={{ xs: 12, sm: 6, md: 3 }}
          >
            <Card className="h-full">
              <CardContent>
                <Typography
                  color="text.secondary"
                  gutterBottom
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="h3"
                  fontWeight={700}
                >
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card>
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
          >
            Recent Activity
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <Stack spacing={2}>
            <Typography color="text.secondary">
              • Authentication initialized successfully.
            </Typography>

            <Typography color="text.secondary">
              • Dashboard loaded.
            </Typography>

            <Typography color="text.secondary">
              • Ready for feature modules.
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Dashboard;