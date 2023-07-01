// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Layout from "~/components/segments/Layout";
import FeaturesCarousel from "~/components/ui/FeaturesCarousel";
import HeroBanner from "~/components/ui/HeroBanner";
import CompaniesCarousel from "~/components/ui/CompaniesCarousel";
import StaxyPlatformOverview from "~/assets/images/staxy-platform-overview.png";
import ImageBanner from "~/components/ui/ImageBanner";
import SectionTitle from "~/components/ui/SectionTitle";
import ListSteps from "~/components/ui/ListSteps";
import CTA from "~/components/ui/CTA";
import FAQ from "~/components/ui/FAQ";

export default function Home() {
  return (
    <>
      <Head>
        <title>STAXY by Stefan Stax</title>
        <meta
          name="description"
          content="Staxy Agency website built and provided by Stefan Stax"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Layout className="mt-[60px]">
          <div className="flex min-h-[600px] flex-wrap items-center justify-center gap-[20px] bg-yellow-400">
            <HeroBanner
              className="px-4 text-matte"
              title="Imagine a place"
              subtitle="Where you'll able to sell courses. Organize Events. Create Groups. Create Forums. Have personalized member profiles. And so much more!"
              ctaLabel="See if you qualify"
              ctaLink="https://calendly.com/staxy"
              ctaMessage={`New enrollment starts on 15/07/2023`}
            />
            <CompaniesCarousel
              options={{
                type: "loop",
                drag: false,
                perPage: 2,
                perMove: 1,
                arrows: false,
                pagination: false,
                lazyLoad: true,
                autoStart: true,
                mediaQuery: "min",
                gap: "2rem",
                autoScroll: {
                  pauseOnHover: false,
                  speed: 1,
                },
                breakpoints: {
                  768: {
                    perPage: 3,
                  },
                  1024: {
                    perPage: 4,
                  },
                  1366: {
                    perPage: 5,
                  },
                  1920: {
                    perPage: 7,
                  },
                },
              }}
            />
          </div>
          <div className="bg-byzantine px-4 py-10 text-beige">
            <SectionTitle
              className="mb-4"
              title="Platform Overview"
              subtitle="Gain a small glipse into your future"
            />
            <ImageBanner src={StaxyPlatformOverview?.src} />
          </div>
          <div className="w-full px-4 py-10">
            <SectionTitle
              title="Feature Packed"
              subtitle="To and above expectations"
            />
            <FeaturesCarousel
              options={{
                perPage: 1,
                perMove: 1,
                arrows: false,
                pagination: false,
                lazyLoad: true,
                flickPower: 1,
                gap: "2rem",
                padding: "4rem",
                slideFocus: true,
                mediaQuery: "min",
                breakpoints: {
                  768: {
                    perPage: 2,
                  },
                  1024: {
                    perPage: 4,
                  },
                  1920: {
                    perPage: 6,
                  },
                },
              }}
            />
          </div>
          <div className="w-full bg-byzantine p-10">
            <SectionTitle
              className="text-beige"
              title="Enrolment Steps"
              subtitle="Enrolment starting on 15/07/2023"
            />
            <ListSteps className="max-w-[600px]" stepClass="my-24 text-beige" />
          </div>
          <CTA
            title="Ready to go live?"
            description="Scheduling the meeting does not secure your project. Please bring your A game to the meeting."
            message="first meeting is free."
            label="Reserve a seat"
            link="https://calendly.com/staxy"
            ctaOutSource
          />
          <div className="mx-auto w-full items-center justify-center bg-gradient-to-b from-white  from-[90%] to-yellow-400 to-[100%] py-40 text-center drop-shadow-2xl">
            <h2 className="text-[40px] font-black">FAQ</h2>
            <p className="mb-8 text-[20px]">
              Below you can find questions I received in the previous weeks.
            </p>
            <FAQ containerClass="mx-auto px-4 w-full max-w-[800px] flex flex-col gap-[20px]" />
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
