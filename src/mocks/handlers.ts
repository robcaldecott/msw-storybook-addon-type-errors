import { DefaultRequestBody, rest } from "msw";
import { states } from "./states";

export const handlers = [
  rest.get<DefaultRequestBody, string[]>("/api/states", (req, res, ctx) => {
    return res(ctx.delay(2000), ctx.status(200), ctx.json(states));
  }),
];
