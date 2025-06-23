import { appRouter, createContext } from "@repo/api";

export const serverApi = appRouter.createCaller(createContext);
