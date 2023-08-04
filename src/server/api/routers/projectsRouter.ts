/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const projectRouter = createTRPCRouter({
  getProjects: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.project.findMany();
  }),

  createProject: publicProcedure
    .input(
      z.object({
        domain: z.string(),
        description: z.string(),
        country: z.string(),
        category: z.string(),
        budget: z.string(),
        users: z.string(),
        team_size: z.string(),
        payment_weekly: z.boolean(),
        payment_monthly: z.boolean(),
        payment_lifetime: z.boolean(),
        module_education: z.boolean(),
        module_commerce: z.boolean(),
        module_events: z.boolean(),
        module_forms: z.boolean(),
        revenue_expectation: z.string(),
        return_expectation: z.string(),
        email: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.project.create({
        data: {
          domain: input.domain,
          description: input.description,
          country: input.country,
          category: input.category,
          budget: input.budget,
          users: input.users,
          team_size: input.team_size,
          payment_weekly: input.payment_weekly,
          payment_monthly: input.payment_monthly,
          payment_lifetime: input.payment_lifetime,
          module_education: input.module_education,
          module_commerce: input.module_commerce,
          module_events: input.module_events,
          module_forms: input.module_forms,
          revenue_expectation: input.revenue_expectation,
          return_expectation: input.return_expectation,
          email: input.email,
        },
      });
    }),
});
