import Layout from "~/components/segments/Layout";
import PrivacyPolicyDocument from "./privacy-policy.mdx";
import ArticleMDX from "~/components/segments/ArticleMDX";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <ArticleMDX className="mx-auto my-48 w-full max-w-[1024px]">
        <PrivacyPolicyDocument />
      </ArticleMDX>
    </Layout>
  );
};

export default PrivacyPolicy;
