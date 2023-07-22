import { createTRPCRouter, publicProcedure } from "../trpc";

export const companyRouter = createTRPCRouter({
  getCompanies: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.company.findMany();
  }),
});
