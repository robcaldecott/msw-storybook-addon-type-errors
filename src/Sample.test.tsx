import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import { getWorker } from "msw-storybook-addon";
import * as stories from "./Sample.stories";

const { Data, Error } = composeStories(stories);

afterAll(() => {
  // ts(2339) error
  getWorker().close();
});

it("renders data", async () => {
  render(<Data />);
  // Testing by role
  expect(
    screen.getByRole("heading", { name: /react query sample page/i })
  ).toBeInTheDocument();
  // Initially loading
  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
  // Wait for the API call to finish
  expect(await screen.findByText(/california/i)).toBeInTheDocument();
  // There should be 59 states in the list
  expect(screen.queryAllByRole("listitem")).toHaveLength(59);
});

it("handles API errors", async () => {
  render(<Error />);
  expect(await screen.findByText(/an error occurred!/i)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /try again/i })
  ).toBeInTheDocument();
});
