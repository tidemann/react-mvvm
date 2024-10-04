import 'reflect-metadata';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from '@tanstack/react-router'
import {ErrorBoundary} from "react-error-boundary";
import {ErrorFallback} from "./components/ErrorFallback/ErrorFallback.tsx";
import {QueryClientProvider} from "@tanstack/react-query";
import './i18n';
import {queryClient} from "@api/queryClient.ts";
import router from './routes/router.ts';
import '@di/container.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}/>
            </QueryClientProvider>
        </ErrorBoundary>
    </React.StrictMode>
)
