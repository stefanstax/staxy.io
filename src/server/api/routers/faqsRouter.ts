import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const faqRouter = createTRPCRouter({
  getFaqs: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.faq.findMany();
  }),

  createFaq: publicProcedure
    .input(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.faq.create({
        data: {
          question: input.question,
          answer: input.answer,
        },
      });
    }),

  updateFaqById: publicProcedure
    .input(
      z.object({
        identifier: z.string(),
        question: z.string(),
        answer: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { identifier } = input;
      return await ctx.prisma.faq.update({
        where: {
          identifier,
        },
        data: {
          question: input.question,
          answer: input.answer,
        },
      });
    }),

  deleteFaqById: publicProcedure
    .input(z.object({ identifier: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { identifier } = input;
      return await ctx.prisma.faq.delete({
        where: {
          identifier,
        },
      });
    }),

  getFaqById: publicProcedure
    .input(z.object({ identifier: z.string() }))
    .query(async ({ ctx, input }) => {
      const { identifier } = input;
      return await ctx.prisma.faq.findUnique({
        where: {
          identifier,
        },
      });
    }),
});
