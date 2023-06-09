import Image from "next/image";
import StaxyLogo from "../../assets/images/staxy-logo.png";
import InBoundLink from "../ui/InBoundLink";
import TrustPilot from "../../assets/images/trustpilot-logo.png";
import MasterCard from "../../assets/images/mastercard-logo.png";
import VisaCard from "../../assets/images/visa-logo.png";
import AmericanCard from "../../assets/images/american-logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="mx-auto w-full bg-forest p-10 text-beige drop-shadow-2xl">
      <div className="mx-auto max-w-[1140px]">
        <div className="flex flex-wrap items-start justify-between gap-[20px]">
          <div className="basis-full lg:basis-2/12">
            <Image width={125} height={65} src={StaxyLogo} alt="" />
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
            <InBoundLink
              footerLink
              outSource
              to="https://tidycal.com/staxy/platform-chat"
            >
              Schedule a 90 minute meeting
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
          <div className="flex w-full flex-wrap items-center justify-start">
            <InBoundLink
              outSource
              to="https://www.trustpilot.com/review/staxy.io"
            >
              <Image src={TrustPilot} alt="" width={200} height={200} />
            </InBoundLink>
            <Image src={MasterCard} alt="" width={75} height={75} />
            <Image src={VisaCard} alt="" width={75} height={75} />
            <Image src={AmericanCard} alt="" width={75} height={75} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
