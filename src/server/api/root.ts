import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { featureRouter } from "./routers/featuresRouter";
import { stepRouter } from "./routers/stepsRouter";
import { faqRouter } from "./routers/faqsRouter";
import { companyRouter } from "./routers/companiesRouter";
import { contactRouter } from "./routers/contactRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  features: featureRouter,
  steps: stepRouter,
  faqs: faqRouter,
  companies: companyRouter,
  contacts: contactRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
