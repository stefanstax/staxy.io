import React from "react";
import InBoundLink from "~/components/ui/InBoundLink";

const Maintenace = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-[20px] bg-gradient-to-t from-forest to-matte px-4 py-40 text-beige">
      <h1 className="text-[25px] lg:text-[40px]">
        We&apos;re currently working on few updates. We&apos;ll be back soon!
      </h1>
      <p className="text-[20px]">
        In case your inquiry can not wait; by all means,
        <InBoundLink inline to="mailto:contact@staxy.io">
          email
        </InBoundLink>{" "}
        us
      </p>
    </section>
  );
};

export default Maintenace;
