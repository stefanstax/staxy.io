/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const featureRouter = createTRPCRouter({
  getFeatures: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.feature.findMany();
  }),

  // createFeature: publicProcedure
  //   .input(
  //     z.object({
  //       title: z.string(),
  //       image: z.string(),
  //       extraClass: z.string(),
  //     })
  //   )
  //   .mutation(async ({ ctx, input }) => {
  //     return await ctx.prisma.feature.create({
  //       data: {
  //         title: input.title,
  //         image: input.image,
  //         extraClass: input.extraClass,
  //       },
  //     });
  //   }),

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

  // getFeatureById: publicProcedure
  //   .input(z.object({ featureId: z.number() }))
  //   .query(async ({ ctx, input }) => {
  //     const { featureId } = input;
  //     return await ctx.prisma.feature.findUnique({
  //       where: {
  //         id: featureId,
  //       },
  //     });
  //   }),
});
