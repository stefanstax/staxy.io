import { createTRPCRouter, publicProcedure } from "../trpc";

export const faqRouter = createTRPCRouter({
  getFaqs: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.faq.findMany();
  }),
});
