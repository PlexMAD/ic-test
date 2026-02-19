import { MapPage } from "@/pages/map-temp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <MapPage />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);
