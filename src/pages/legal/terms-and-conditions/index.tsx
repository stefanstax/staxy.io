import Layout from "~/components/segments/Layout";
import TermsAndConditionsDocument from "./terms-and-conditions.mdx";
import ArticleMDX from "~/components/segments/ArticleMDX";

const TermsAndConditions = () => {
  return (
    <Layout>
      <ArticleMDX className="mx-auto my-48 w-full max-w-[1024px]">
        <TermsAndConditionsDocument />
      </ArticleMDX>
    </Layout>
  );
};

export default TermsAndConditions;
