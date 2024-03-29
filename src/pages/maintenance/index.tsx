import React from "react";
import InBoundLink from "~/components/ui/InBoundLink";

const Maintenace = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-[20px] bg-gradient-to-t from-forest to-matte px-4 py-40 text-beige">
      <div className="flex w-full max-w-[600px] flex-col items-center gap-[20px]">
        <h1 className="max-w-[300px] self-start rounded-[20px] bg-forest p-2 text-[20px]">
          Why did the web developer go broke?
        </h1>
        <h2 className="max-w-[300px] self-end rounded-[20px] bg-forestLight p-2 text-[20px]">
          Because he couldn&apos;t find time for website maintenance he kept
          putting it on his &ldquo;broken links&ldquo; to-do list!
        </h2>
        <InBoundLink
          primary
          to="/"
          className="min-w-[300px] self-end rounded-[20px] bg-forest text-[20px]"
        >
          Back to HOME pls
        </InBoundLink>
      </div>
    </section>
  );
};

export default Maintenace;
