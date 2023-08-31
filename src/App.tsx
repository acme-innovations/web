import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/theme/theme';

import { ReactQueryDevTools } from '@/components/DevTools/ReactQueryDevTools';
import Loading from '@/components/Loading';
import AppRoutes from '@/routes/AppRoutes';

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<Loading />}>
      {import.meta.env.DEV && <ReactQueryDevTools />}
      <BrowserRouter basename={import.meta.env.VITE_APP_BASE_URL}>
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  </QueryClientProvider>
);

export default App;
