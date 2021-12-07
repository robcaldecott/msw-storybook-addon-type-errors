import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider, setLogger } from "react-query";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { CssBaseline } from "@mui/material";

// Disable `react-query` error logging when running tests.
if (process.env.NODE_ENV === "test") {
  setLogger({
    log: (...args) => console.log(...args),
    warn: (...args) => console.warn(...args),
    error: () => {},
  });
}

initialize({ onUnhandledRequest: "bypass" });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  mswDecorator,
  (Story) => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchIntervalInBackground: false,
          retry: false,
        },
      },
    });

    return (
      <QueryClientProvider client={queryClient}>
        <IntlProvider locale="en">
          <MemoryRouter>
            <CssBaseline />
            <Story />
          </MemoryRouter>
        </IntlProvider>
      </QueryClientProvider>
    );
  },
];
