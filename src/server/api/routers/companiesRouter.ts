import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const companyRouter = createTRPCRouter({
  getCompanies: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.company.findMany();
  }),

  createCompany: publicProcedure
    .input(
      z.object({
        title: z.string(),
        image: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.company.create({
        data: {
          title: input.title,
          image: input.image,
        },
      });
    }),

  updateCompany: publicProcedure
    .input(
      z.object({
        identifier: z.string(),
        title: z.string(),
        image: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { identifier } = input;
      return await ctx.prisma.company.update({
        where: {
          identifier,
        },
        data: {
          title: input.title,
          image: input.image,
        },
      });
    }),

  getCompany: publicProcedure
    .input(z.object({ identifier: z.string() }))
    .query(async ({ ctx, input }) => {
      const { identifier } = input;
      return await ctx.prisma.company.findUnique({
        where: {
          identifier,
        },
      });
    }),
});
