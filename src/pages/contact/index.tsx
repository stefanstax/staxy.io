import { NextSeo } from "next-seo";
import React from "react";
import Layout from "~/components/segments/Layout";
import SectionTitle from "~/components/ui/SectionTitle";
import ProjectScope from "~/components/ui/forms/ProjectScope";

const Contact = () => {
  const seoTitle = "Start Your Project";
  const seoDescription =
    "You can easily start your project with our custom form which will allow you to tailor the project you would like to have before we have a meeting.";
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        openGraph={{
          type: "website",
          title: seoTitle,
          description: seoDescription,
          images: [
            {
              url: "https://jhhqlpktefzuwshwfvcq.supabase.co/storage/v1/object/public/seo/contact-image.png",
              width: 1200,
              height: 630,
              alt: "Illustrated gradient image having text describing contact page with extra image of personnel",
            },
          ],
        }}
      />
      <Layout>
        <div className="mx-auto flex max-w-[800px] flex-col items-center justify-center px-4 py-40">
          <SectionTitle
            title="Start Your Project Today"
            subtitle="Please fill information below as accurate as you can. You are able to send multiple project scope(s). We accept just two companies for the month of August."
          />
          <ProjectScope />
        </div>
      </Layout>
    </>
  );
};

export default Contact;
