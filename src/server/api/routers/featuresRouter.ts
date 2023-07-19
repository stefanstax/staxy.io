/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
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
        order: z.number(),
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
          order: input.order,
        },
      });
    }),

  // deleteFeature: publicProcedure.mutation(async ({ ctx }) => {
  //   return await ctx.prisma.feature.deleteMany({});
  // }),

  // deleteFeatureById: publicProcedure
  //   .input(z.object({ featureId: z.number() }))
  //   .mutation(async ({ ctx, input }) => {
  //     const { featureId } = input;
  //     return await ctx.prisma.feature.delete({
  //       where: {
  //         id: featureId,
  //       },
  //     });
  //   }),

  getFeatureById: publicProcedure
    .input(z.object({ featureId: z.string() }))
    .query(async ({ ctx, input }) => {
      const { featureId } = input;
      return await ctx.prisma.feature.findUnique({
        where: {
          identifier: featureId,
        },
      });
    }),
});
