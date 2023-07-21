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
import SignIn from "~/components/ui/Signin";

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
          <SignIn />
          <div className="flex min-h-[600px] flex-wrap items-center justify-center gap-[20px] bg-forest">
            <HeroBanner
              className="px-4 text-beige"
              title="Become the GO-TO Platform for your profession"
              subtitle={`Move Udemy, SkillShare, Kajabi and all others aside. Own your data. Own your audience. Own your business.`}
              ctaLabel="Schedule to qualify"
              ctaOutSource
              ctaLink="https://tidycal.com/staxy/platform-chat"
              ctaMessage={`Only two businesses will enter the pool for the month of July`}
            />
          </div>
          <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-[10px] px-4 py-10">
            <SectionTitle
              className="uppercase"
              subtitle="Big names which have started with this platform:"
              subtitleClassName="text-center"
            />
            <CompaniesGrid />
          </div>
          <div className="w-full bg-beige" id="pitch">
            <div className="mx-auto w-full max-w-[1280px] px-4 py-10 text-forest">
              <SectionTitle title="You know that..." />
              <MediaAndText
                className="items-center justify-center"
                title="You could hire 6 different software agencies or tools and spend over $1.700,00/mo meanwhile you own NOTHING."
                description="Platform I'm offering is like multi platform in one. You'll get the approach exactly how to build courses, sell them, build community, spread your influence. ALL IN ONE PLACE. All that without spending a fortune hiring outside experts. I'm with you from 0 to a 100. I do not do this for anyone. I will provide you with my personal WhatsApp number."
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
          <div className="w-full bg-forest px-4 py-20">
            <SectionTitle
              className="text-center text-beige"
              title="Enrolment Steps"
              subtitle="Enrolment starting mid July"
            />
            <ListSteps className="max-w-[600px]" stepClass="my-24 text-beige" />
          </div>
          <div className="w-full px-4 py-10" id="contact">
            <SectionTitle
              className="mx-auto max-w-[600px] text-center"
              title="Understand WHY"
              titleClassName="text-forest"
              subtitle="Subscribe and I'll deliver curated emails weekly on why owning such a platform will be a profitable investment for your business. Emails will stricly contain how to use features in a profitable way."
            />
            <ContactForm formId="5358730" />
          </div>
          <CTA
            title="Ready to go live?"
            description="Scheduling the meeting does not secure your project. Please bring your A game to the meeting."
            message="first meeting is free."
            label="Reserve a seat"
            link="https://tidycal.com/staxy/platform-chat"
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
