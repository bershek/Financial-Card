import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";

export const apiClient = new QueryClient();

const RatingsDashboard = lazy(() =>
  import("@/features/ratingsDashboard/RatingsDashboard").then((module) => ({
    default: module.RatingsDashboard,
  })),
);

export const App = () => {
  return (
    <QueryClientProvider client={apiClient}>
      <Suspense fallback={<div>Loading dashboard...</div>}>
        <RatingsDashboard />
      </Suspense>
    </QueryClientProvider>
  );
};
