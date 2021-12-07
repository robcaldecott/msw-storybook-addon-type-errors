import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DefaultRequestBody, PathParams, rest } from "msw";
import { states } from "./states";
import { Sample } from "./Sample";

export default {
  title: "Sample",
  component: Sample,
} as ComponentMeta<typeof Sample>;

const Template: ComponentStory<typeof Sample> = () => <Sample />;

export const Loading = Template.bind({});
Loading.parameters = {
  msw: [rest.get("/api/states", (req, res, ctx) => res(ctx.delay("infinite")))],
};

export const Data = Template.bind({});
Data.parameters = {
  msw: [
    rest.get<DefaultRequestBody, PathParams, string[]>(
      "/api/states",
      (req, res, ctx) => res(ctx.json(states))
    ),
  ],
};

export const Error = Template.bind({});
Error.parameters = {
  msw: [rest.get("/api/states", (req, res, ctx) => res(ctx.status(500)))],
};
