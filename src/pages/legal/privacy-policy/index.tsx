import Layout from "~/components/segments/Layout";
import PrivacyPolicyDocument from "./privacy-policy.mdx";
import ArticleMDX from "~/components/segments/ArticleMDX";
import { NextSeo } from "next-seo";

const PrivacyPolicy = () => {
  const seoTitle = "Privacy Policy";
  const seoDescription =
    "All legal privacy policy regulations you would like to know regarding STAXY, you can by visiting this page.";
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
              url: "https://jhhqlpktefzuwshwfvcq.supabase.co/storage/v1/object/public/seo/privacy-policy-image.png",
              width: 1200,
              height: 630,
              alt: "Illustrated gradient image having text describing privacy policy page with extra image of personnel",
            },
          ],
        }}
      />
      <Layout>
        <ArticleMDX>
          <PrivacyPolicyDocument />
        </ArticleMDX>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
