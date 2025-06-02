import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({
      text: z.string(),
    }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
        time: new Date().toISOString(),
      };
    }),

  add: publicProcedure
    .input(z.object({
      x: z.number(),
      y: z.number(),
    }))
    .mutation(({ input }) => {
      return input.x + input.y;
    }),
});
