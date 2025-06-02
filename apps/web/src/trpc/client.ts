import { createTRPCReact } from '@trpc/react-query';
import { type AppRouter } from '@repo/trpc';

export const api = createTRPCReact<AppRouter>();
