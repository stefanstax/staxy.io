import Layout from "~/components/segments/Layout";
import TermsAndConditionsDocument from "./terms-and-conditions.mdx";
import ArticleMDX from "~/components/segments/ArticleMDX";
import MetaData from "~/components/seo/MetaData";
import { TermsAndConditionsPage } from "~/components/seo/pagesSEO";

const TermsAndConditions = () => {
  return (
    <>
      <MetaData
        type={TermsAndConditionsPage?.type}
        title={TermsAndConditionsPage?.title}
        description={TermsAndConditionsPage?.description}
        imageUrl={TermsAndConditionsPage?.imageUrl}
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
