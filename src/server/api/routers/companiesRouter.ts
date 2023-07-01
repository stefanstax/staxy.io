/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { createTRPCRouter, publicProcedure } from "../trpc";

export const companyRouter = createTRPCRouter({
  getCompanies: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.company.findMany();
  }),
});
