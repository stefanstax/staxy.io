import Layout from "~/components/segments/Layout";
import TermsAndConditionsDocument from "./terms-and-conditions.mdx";
import ArticleMDX from "~/components/segments/ArticleMDX";
import { NextSeo } from "next-seo";

const TermsAndConditions = () => {
  const seoTitle = "Terms and Conditions";
  const seoDescription =
    "All legal terms and conditions regulations you would like to know regarding STAXY, you can by visiting this page.";
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
              url: "https://jhhqlpktefzuwshwfvcq.supabase.co/storage/v1/object/public/seo/terms-and-conditions-image.png",
              width: 1200,
              height: 630,
              alt: "Illustrated gradient image having text describing terms and conditions page with extra image of personnel",
            },
          ],
        }}
      />
      <Layout>
        <ArticleMDX>
          <TermsAndConditionsDocument />
        </ArticleMDX>
      </Layout>
    </>
  );
};

export default TermsAndConditions;
