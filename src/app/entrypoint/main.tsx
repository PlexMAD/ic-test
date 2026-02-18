import { createRoot } from "react-dom/client";
import "../styles/index.css";
import MapPage from "@/pages/Map";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <MapPage />
  </QueryClientProvider>,
);
