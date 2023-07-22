/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { createTRPCRouter, publicProcedure } from "../trpc";

export const restrictedPathRouter = createTRPCRouter({
  getRestrictedPaths: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.restrictedPath.findMany();
  }),
});
