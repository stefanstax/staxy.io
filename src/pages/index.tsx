// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Layout from "~/components/segments/Layout";
import HeroBanner from "~/components/ui/HeroBanner";
import SectionTitle from "~/components/ui/SectionTitle";
import ListSteps from "~/components/ui/ListSteps";
import CTA from "~/components/ui/CTA";
import FAQ from "~/components/ui/FAQ";
import ContactForm from "~/components/ui/ContactForm";
import CompaniesGrid from "~/components/ui/CompaniesGrid";
import MediaAndText from "~/components/ui/MediaAndText";
import FeaturesGrid from "~/components/ui/FeaturesGrid";

export default function Home() {
  return (
    <>
      <Head>
        <title>STAXY | AIO Stop</title>
        <meta
          name="description"
          content="Staxy Agency designed to fullfil all your E-Learning and Community needs. One stop shop for your business."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Layout className="mt-[60px]">
          <div className="flex min-h-[600px] flex-wrap items-center justify-center gap-[20px] bg-forest">
            <HeroBanner
              className="px-4 text-beige"
              title="Become the GO-TO Platform for your profession"
              subtitle={`Move Udemy, SkillShare, Kajabi and all others aside. Own your data. Own your audience. Own your business.`}
              ctaLabel="Schedule to qualify"
              ctaLink="https://calendly.com/staxy"
              ctaMessage={`Only two businesses will enter the pool for the month of July`}
            />
          </div>
          <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-[10px] px-4 py-10">
            <SectionTitle
              className="uppercase"
              subtitle="You've used services from some of these businesses:"
              subtitleClassName="text-center"
            />
            <CompaniesGrid />
          </div>
          <div className="w-full bg-beige">
            <div className="mx-auto w-full max-w-[1280px] px-4 py-10 text-forest">
              <MediaAndText
                title="You could hire 6 different software agencies for $1.700,00/mo and not own anything or you can use my platform, own everything and get it for $1........"
                description="Platform I'm offering is like multi platform in one. You'll get the approach exactly how to build courses, sell them, build community, spread your influence. ALL IN ONE PLACE. All that without spending a fortune hiring outside experts. I'm with you from 0 to a 100. You'll even get my WhatsApp number for direct contact."
                mediaSrc="line-md:check-list-3-twotone"
                mediaFirst={false}
              />
            </div>
          </div>
          <div className="mx-auto w-full max-w-[1280px] px-4 py-10">
            <SectionTitle
              title="Here's what I got for you"
              subtitle="To and above expectations"
            />
            <FeaturesGrid />
          </div>
          <div className="w-full bg-forest p-10">
            <SectionTitle
              className="text-center text-beige"
              title="Enrolment Steps"
              subtitle="Enrolment starting mid July"
            />
            <ListSteps className="max-w-[600px]" stepClass="my-24 text-beige" />
          </div>
          <div className="w-full px-4 py-10">
            <SectionTitle
              className="mx-auto max-w-[600px] text-center"
              title="Not right now?"
              titleClassName="text-forest"
              subtitle="Subscribe and I'll deliver curated emails weekly on why owning such a platform will be a profitable investment for your business. Emails will stricly contain how to use features in a profitable way."
            />
            <ContactForm />
          </div>
          <CTA
            title="Ready to go live?"
            description="Scheduling the meeting does not secure your project. Please bring your A game to the meeting."
            message="first meeting is free."
            label="Reserve a seat"
            link="https://calendly.com/staxy"
            ctaOutSource
          />
          <div className="mx-auto w-full items-center justify-center py-40 text-center drop-shadow-2xl">
            <h2 className="text-[40px] font-black">FAQ</h2>
            <p className="mb-8 text-[20px]">
              Below you can find questions I received in the previous weeks.
            </p>
            <FAQ containerClass="mx-auto px-4 w-full max-w-[800px] text-left" />
          </div>
        </Layout>
      </main>
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
