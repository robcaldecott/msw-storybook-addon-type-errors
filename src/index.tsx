import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@keyloop/react";
import { App } from "./App";

// Mock the API
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start({ onUnhandledRequest: "bypass" });
}

const queryClient = new QueryClient();

// Render the app
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <IntlProvider locale="en-GB" defaultLocale="en-GB">
      <Router basename={process.env.PUBLIC_URL}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </IntlProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);
