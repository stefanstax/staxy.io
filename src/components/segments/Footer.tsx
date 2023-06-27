import Image from "next/image";
import StaxyLogo from "../../assets/images/staxy-logo.png";
import InBoundLink from "../ui/InBoundLink";

const Footer = () => {
  return (
    <section className="mx-auto w-full bg-racingYellow p-10 text-matte drop-shadow-2xl">
      <div className="mx-auto max-w-[1140px]">
        <div className="flex flex-wrap items-start justify-between gap-[20px]">
          <div className="basis-full lg:basis-2/12">
            <Image
              className="invert-[100]"
              idth={125}
              height={65}
              src={StaxyLogo}
              alt=""
            />
            <p className="mt-4 text-[12px]">
              Community - Educational - Event Managment | Revenue 25x in the
              first 6-8 months.
            </p>
          </div>

          <div className="my-8 flex basis-full flex-col items-start justify-start lg:my-0 lg:basis-2/12">
            <h3 className="text-2xl font-black">Legal</h3>
            <InBoundLink footerLink to="/legal/privacy-policy">
              Privacy Policy
            </InBoundLink>
            <InBoundLink footerLink to="/legal/terms-and-conditions">
              Terms and Conditions
            </InBoundLink>
          </div>
          <div className="flex basis-full flex-col items-start justify-start lg:basis-6/12">
            <h3 className="text-2xl font-black">Scheduling</h3>
            <InBoundLink footerLink outSource to="https://calendly.com/staxy">
              Schedule a Zoom Meeting
            </InBoundLink>
            <InBoundLink footerLink outSource to="https://calendly.com/staxy">
              Schedule a Google Meet Meeting
            </InBoundLink>
            <InBoundLink footerLink outSource to="mailto:contact@staxy.io">
              Send an Email
            </InBoundLink>
            <InBoundLink footerLink outSource to="https://wa.me/+381691920124">
              Send WhatsApp message
            </InBoundLink>
          </div>
          <div className="my-8 flex basis-full flex-col gap-[20px]">
            <span>Brought online with ❤️ from Belgrade.</span>
            <span>This site does not track you.</span>
            <span>MIT © 2023 - </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
