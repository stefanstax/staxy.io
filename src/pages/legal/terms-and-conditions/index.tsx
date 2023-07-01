import Layout from "~/components/segments/Layout";
import TermsAndConditionsDocument from "./terms-and-conditions.mdx";
import ArticleMDX from "~/components/segments/ArticleMDX";

const TermsAndConditions = () => {
  return (
    <Layout>
      <ArticleMDX>
        <TermsAndConditionsDocument />
      </ArticleMDX>
    </Layout>
  );
};

export default TermsAndConditions;
