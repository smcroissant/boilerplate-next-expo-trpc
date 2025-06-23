import { createTRPCReact } from '@trpc/react-query';
import { type AppRouter } from '@repo/api';

export const clientApi = createTRPCReact<AppRouter>();
