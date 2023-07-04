/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const contactRouter = createTRPCRouter({
  getContacts: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.contact.findMany();
  }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.contact.create({
        data: {
          name: input.name,
          email: input.email,
        },
      });
    }),
});
