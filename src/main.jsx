import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import * as Sentry from "@sentry/react";

/**
 * Initializes Sentry for error tracking and performance monitoring.
 *
 * - `dsn`: The unique identifier for the Sentry project.
 * - `integrations`: Configures Sentry's browser tracing, replay, and other integrations.
 * - `tracesSampleRate`: Defines the sampling rate for tracing.
 * - `tracePropagationTargets`: Specifies which network requests should include trace headers.
 * - `replaysSessionSampleRate`: The rate at which session replays are sampled.
 * - `replaysOnErrorSampleRate`: The rate at which session replays are captured when an error occurs.
 */
Sentry.init({
  dsn: "https://3d03dc1c7d56a900d396f0a6a549b326@o4508931696427008.ingest.de.sentry.io/4508931698982992",
  integrations: [
    Sentry.browserTracingIntegration(),
    // Sentry.metrics.metricsAggregatorIntegration(),
    // Sentry.reactRouterV6BrowserTracingIntegration({
    //   useEffect: React.useEffect,
    // }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

/**
 * Renders the main React application into the DOM.
 *
 * - Uses `React.StrictMode` for highlighting potential problems.
 * - Mounts the `App` component inside the root element.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
