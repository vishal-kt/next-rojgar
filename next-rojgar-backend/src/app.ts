
import express from "express";

export const app = express();

app.use(express.json());

app.get("/api/v1/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "NextRojgar backend is running!",
    timestamp: new Date().toISOString(),
  });
});

// Handle unknown routes.
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Centralized error handler.
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error(err.message);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  },
);
