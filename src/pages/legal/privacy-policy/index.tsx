import Layout from "~/components/segments/Layout";
import PrivacyPolicyDocument from "./privacy-policy.mdx";
import ArticleMDX from "~/components/segments/ArticleMDX";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <ArticleMDX>
        <PrivacyPolicyDocument />
      </ArticleMDX>
    </Layout>
  );
};

export default PrivacyPolicy;
