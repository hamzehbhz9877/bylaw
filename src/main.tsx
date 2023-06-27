import React from 'react'
import ReactDOM from 'react-dom/client'
import { queryClient } from "Store";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../public/css/main.css";
import App from "./app"

ReactDOM.createRoot(document.getElementById('root')!).render(
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools />
        </QueryClientProvider>
)
