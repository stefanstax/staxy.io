// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Layout from "~/components/segments/Layout";
import FeaturesCarousel from "~/components/ui/FeaturesCarousel";
import HeroBanner from "~/components/ui/HeroBanner";
import ScrollerCarousel from "~/components/ui/ScrollerCarousel";
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
        <Layout className="mt-[80px]">
          <div className="flex min-h-[600px] flex-wrap items-center justify-center gap-[20px] bg-yellow-400">
            <HeroBanner
              className="px-4 text-matte"
              title="Imagine a place"
              subtitle="Where you'll able to sell courses. Organize Events. Create Groups. Create Forums. Have personalized member profiles. And so much more!"
              ctaLabel="See if you qualify"
              ctaLink="https://calendly.com/staxy"
              ctaMessage={`New enrollment starts on 01/07/2023`}
            />
            <ScrollerCarousel
              options={{
                type: "loop",
                drag: "free",
                perPage: 5,
                perMove: 1,
                arrows: false,
                pagination: false,
                lazyLoad: true,
                autoStart: true,
                autoScroll: {
                  pauseOnHover: false,
                  pauseOnFocus: false,
                  rewind: false,
                  speed: 1,
                },
                gap: "2rem",
                breakpoints: {
                  640: {
                    perPage: 2,
                  },
                },
              }}
            />
          </div>
          <div className="bg-byzantine px-4 py-10 text-beige">
            <SectionTitle
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
                perPage: 4,
                perMove: 1,
                arrows: false,
                pagination: false,
                lazyLoad: true,
                flickPower: 1,
                gap: "2rem",
                padding: "4rem",
                slideFocus: true,
                breakpoints: {
                  640: {
                    perPage: 1,
                  },
                  1600: {
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
              subtitle="Enrolment starting on 01/07/2023"
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
          <FAQ
            containerClass="mx-auto w-full bg-gradient-to-b from-white from-[90%] to-yellow-400 to-[100%] drop-shadow-2xl"
            subContainerClass="max-w-[1024px] mx-auto py-40"
          />
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
