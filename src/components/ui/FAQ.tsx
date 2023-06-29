import classNames from "classnames";
import { useState } from "react";
import InBoundLink from "./InBoundLink";
import { api } from "~/utils/api";
import { Icon } from "@iconify/react";

type FAQProps = {
  containerClass?: string;
  subContainerClass?: string;
};

const FAQ = ({ containerClass, subContainerClass }: FAQProps) => {
  const [isOpen, setIsOpen] = useState({});

  const { data, isLoading, isError } = api.faqs.getFaqs.useQuery();

  const handleClick = (index: number) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  const containerClasses = classNames(containerClass);
  const renderFAQ = data?.map((faq, index) => {
    const isFaqOpen = isOpen[index] || false;

    return (
      <>
        {faq?.question?.length > 5 && faq?.answer?.length > 5 && (
          <div
            key={index}
            className={`my-2 h-[50px] w-full overflow-hidden rounded bg-purpy text-white duration-300 ease-in-out ${
              isFaqOpen ? "h-[150px]" : "h-[50px]"
            }`}
          >
            <h2
              className={`flex cursor-pointer items-center justify-between p-2 text-[20px] font-bold hover:underline ${
                isFaqOpen ? "text-slate-200 underline" : "text-white"
              }`}
              onClick={() => handleClick(index)}
            >
              {faq?.question}
              {isFaqOpen ? (
                <Icon
                  icon="solar:archive-down-minimlistic-broken"
                  className={`transition-all ${
                    isFaqOpen ? "text-slate-200" : "text-white"
                  }`}
                  fontSize={32}
                />
              ) : (
                <Icon
                  icon="solar:archive-up-minimlistic-broken"
                  fontSize={32}
                />
              )}
            </h2>
            <div
              className={`p-2 py-4 text-[18px] font-[500] underline no-underline transition-all duration-300 ease-in-out`}
            >
              <p>{faq?.answer}</p>
            </div>
          </div>
        )}
      </>
    );
  });

  return (
    <div className={containerClasses}>
      <div className={subContainerClass}>
        <h2 className="text-[40px] font-black">FAQ</h2>
        <p className="mb-8 text-[20px]">
          Below you can find questions I received in the previous weeks.
        </p>
        {renderFAQ}
        <InBoundLink
          to="https://calendy.com/staxy"
          className="text-[14px] font-light no-underline transition-all hover:opacity-75"
          outSource
        >
          Click here to schedule a call for more...
        </InBoundLink>
      </div>
    </div>
  );
};

export default FAQ;
