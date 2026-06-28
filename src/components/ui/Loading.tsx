import React from "react";
import {
  Box,
  CircularProgress,
  LinearProgress,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";

type LoadingType =
  | "circular"
  | "linear"
  | "dots"
  | "lines"
  | "gradient"
  | "skeleton";

interface LoadingProps {
  type?: LoadingType;
  message?: string;
  className?: string;

  // Common props
  size?: number;

  // Linear
  barHeight?: number;

  // Skeleton
  skeletonWidth?: number | string;
  skeletonHeight?: number | string;
  skeletonVariant?: "text" | "rectangular" | "rounded" | "circular";
  skeletonCount?: number;
}

const customLoaderStyles = `
  @keyframes pulse {
    0%,100% { opacity:1; }
    50% { opacity:.5; }
  }

  @keyframes stretchdelay {
    0%,40%,100% { transform:scaleY(.4); }
    20% { transform:scaleY(1); }
  }

  @keyframes gradientSpin {
    0% { transform:rotate(0deg); }
    100% { transform:rotate(360deg); }
  }
`;

const Loading: React.FC<LoadingProps> = ({
  type = "circular",
  message = "Loading...",
  className = "",
  size = 60,
  barHeight = 4,
  skeletonWidth = "100%",
  skeletonHeight = 40,
  skeletonVariant = "rectangular",
  skeletonCount = 3,
}) => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

  const renderLoader = () => {
    switch (type) {
      case "linear": {
        return (
          <LinearProgress
            sx={{
              width: skeletonWidth,
              height: barHeight,
              borderRadius: 1,
              bgcolor: theme.palette.action.hover,
              "& .MuiLinearProgress-bar": {
                bgcolor: primaryColor,
              },
            }}
          />
        );
      }

      case "dots": {
        const dotSize = size / 5;

        return (
          <Box className="flex space-x-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: dotSize,
                  height: dotSize,
                  bgcolor: primaryColor,
                  borderRadius: "50%",
                  animation: "pulse 1.4s ease-in-out infinite both",
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </Box>
        );
      }

      case "lines": {
        const lineWidth = size / 10;
        const lineHeight = size;

        return (
          <Box
            className="flex justify-between items-end"
            sx={{
              width: size,
              height: lineHeight,
              overflow: "hidden",
            }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: lineWidth,
                  height: "100%",
                  bgcolor: primaryColor,
                  animation: "stretchdelay 1.2s ease-in-out infinite both",
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </Box>
        );
      }

      case "gradient": {
        return (
          <Box
            sx={{
              width: size,
              height: size,
              borderRadius: "50%",
              background: `conic-gradient(${primaryColor} 10%, transparent 100%)`,
              animation: "gradientSpin 1.2s linear infinite",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: size * 0.7,
                height: size * 0.7,
                borderRadius: "50%",
                bgcolor: theme.palette.background.default,
              }}
            />
          </Box>
        );
      }

      case "skeleton": {
        return (
          <Box sx={{ width: skeletonWidth }}>
            {Array.from({ length: skeletonCount }).map((_, i) => (
              <Skeleton
                key={i}
                variant={skeletonVariant}
                width={skeletonWidth}
                height={
                  i === 0 && typeof skeletonHeight === "number"
                    ? skeletonHeight * 1.5
                    : skeletonHeight
                }
                sx={{
                  mb: 1,
                  bgcolor: theme.palette.action.selected,
                }}
              />
            ))}
          </Box>
        );
      }

      case "circular":
      default: {
        return (
          <CircularProgress
            size={size}
            sx={{
              color: primaryColor,
            }}
          />
        );
      }
    }
  };

  return (
    <Box
      role="status"
      aria-live="polite"
      className={className}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100%",
        width: "100%",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: customLoaderStyles,
        }}
      />

      {renderLoader()}

      <Typography
        variant="h6"
        sx={{
          mt: 3,
          fontWeight: 500,
          color: theme.palette.text.primary,
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default Loading;
