/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const stepRouter = createTRPCRouter({
  getSteps: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.step.findMany();
  }),

  createStep: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        highlight: z.string(),
        mediaSrc: z.string(),
        mediaFirst: z.boolean(),
        endBlock: z.boolean(),
        order: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.step.create({
        data: {
          title: input.title,
          description: input.description,
          highlight: input.highlight,
          mediaSrc: input.mediaSrc,
          mediaFirst: input.mediaFirst,
          endBlock: input.endBlock,
          order: input.order,
        },
      });
    }),

  editStep: publicProcedure
    .input(
      z.object({
        identifier: z.string(),
        title: z.string(),
        description: z.string(),
        highlight: z.string(),
        mediaSrc: z.string(),
        mediaFirst: z.boolean(),
        endBlock: z.boolean(),
        order: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { identifier } = input;
      return await ctx.prisma.step.update({
        where: {
          identifier,
        },
        data: {
          title: input.title,
          description: input.description,
          highlight: input.highlight,
          mediaSrc: input.mediaSrc,
          mediaFirst: input.mediaFirst,
          endBlock: input.endBlock,
          order: input.order,
        },
      });
    }),

  deleteStep: publicProcedure
    .input(
      z.object({
        identifier: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { identifier } = input;
      return await ctx.prisma.step.delete({
        where: {
          identifier,
        },
      });
    }),

  getStep: publicProcedure
    .input(z.object({ identifier: z.string() }))
    .query(async ({ ctx, input }) => {
      const { identifier } = input;
      return await ctx.prisma.step.findUnique({
        where: {
          identifier,
        },
      });
    }),
});
