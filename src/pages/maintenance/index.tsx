import Image from "next/image";
import React from "react";
import InBoundLink from "~/components/ui/InBoundLink";
import MaintenanceImage from "~/assets/images/maintenance-db.svg";

const Maintenace = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-[20px] bg-gradient-to-t from-forest to-matte px-4 py-40 text-beige">
      <Image src={MaintenanceImage as string} width={400} height={400} alt="" />
      <h1 className="text-[25px]">
        Database upgrade in progress. We&apos;ll be back shortly.
      </h1>
      <InBoundLink primary to="mailto:contact@staxy.io">
        Urgent Inquiry
      </InBoundLink>
    </section>
  );
};

export default Maintenace;
