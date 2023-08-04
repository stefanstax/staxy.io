import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const featureRouter = createTRPCRouter({
  getFeatures: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.feature.findMany();
  }),

  createFeature: publicProcedure
    .input(
      z.object({
        image: z.string(),
        title: z.string(),
        description: z.string(),
        category: z.string(),
        extraClass: z.string(),
        parent: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.feature.create({
        data: {
          image: input.image,
          title: input.title,
          description: input.description,
          category: input.category,
          extraClass: input.extraClass,
          parent: input.parent,
        },
      });
    }),

  updateFeature: publicProcedure
    .input(
      z.object({
        identifier: z.string(),
        image: z.string(),
        title: z.string(),
        description: z.string(),
        category: z.string(),
        extraClass: z.string(),
        parent: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { identifier } = input;
      return await ctx.prisma.feature.update({
        where: {
          identifier: identifier,
        },
        data: {
          image: input.image,
          title: input.title,
          description: input.description,
          category: input.category,
          extraClass: input.extraClass,
          parent: input.parent,
        },
      });
    }),

  // ! Probably won't ever be used
  // deleteFeature: publicProcedure.mutation(async ({ ctx }) => {
  //   return await ctx.prisma.feature.deleteMany({});
  // }),

  deleteFeatureById: publicProcedure
    .input(z.object({ identifier: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { identifier } = input;
      return await ctx.prisma.feature.delete({
        where: {
          identifier,
        },
      });
    }),

  getFeatureById: publicProcedure
    .input(z.object({ identifier: z.string() }))
    .query(async ({ ctx, input }) => {
      const { identifier } = input;
      return await ctx.prisma.feature.findUnique({
        where: {
          identifier,
        },
      });
    }),
});
