import React from "react";
import Layout from "~/components/segments/Layout";
import SectionTitle from "~/components/ui/SectionTitle";
import ProjectScope from "~/components/ui/forms/ProjectScope";

const Contact = () => {
  return (
    <Layout>
      <div className="mx-auto flex max-w-[800px] flex-col items-center justify-center px-4 py-40">
        <SectionTitle
          title="Start Your Project Today"
          subtitle="Please fill information below as accurate as you can. You are able to send multiple project scope(s). We accept just two companies for the month of August."
        />
        <ProjectScope />
      </div>
    </Layout>
  );
};

export default Contact;
