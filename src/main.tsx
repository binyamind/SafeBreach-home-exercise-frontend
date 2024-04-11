import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosInterceptor } from "./requests/axiosInstace";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AxiosInterceptor>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AxiosInterceptor>
);
