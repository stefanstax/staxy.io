import React from "react";
import InBoundLink from "~/components/ui/InBoundLink";

const NotFound = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-[20px] bg-gradient-to-t from-forest to-matte px-4 py-40 text-beige">
      <div className="flex w-full max-w-[600px] flex-col items-center gap-[20px]">
        <h1 className="max-w-[300px] self-start rounded-[20px] bg-forest p-2 text-[20px]">
          Why did the webpage go to therapy?
        </h1>
        <h2 className="max-w-[300px] self-end rounded-[20px] bg-forestLight p-2 text-[20px]">
          Because it had too many 404 issues and couldn&apos;t find its way in
          life!
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

export default NotFound;
