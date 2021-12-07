import { Meta } from "@storybook/react";
import { rest } from "msw";
import { states } from "./mocks/states";
import { Sample } from "./Sample";

export default {
  title: "Sample",
} as Meta;

export const Loading = () => <Sample />;
Loading.parameters = {
  msw: [rest.get("/api/states", (req, res, ctx) => res(ctx.delay("infinite")))],
};

export const Data = () => <Sample />;
Data.parameters = {
  msw: [rest.get("/api/states", (req, res, ctx) => res(ctx.json(states)))],
};

export const Error = () => <Sample />;
Error.parameters = {
  msw: [rest.get("/api/states", (req, res, ctx) => res(ctx.status(500)))],
};
