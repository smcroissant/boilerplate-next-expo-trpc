import { router } from './trpc';
import { exampleRouter } from './routers/example';

export const appRouter = router({
  example: exampleRouter,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
