import classNames from "classnames";
import { useState } from "react";
import InBoundLink from "./InBoundLink";
import { api } from "~/utils/api";
import { Icon } from "@iconify/react";
import Loaders from "./Loaders";

type FAQProps = {
  containerClass?: string;
};

type IsOpenState = {
  [index: number]: boolean;
};

const FAQ = ({ containerClass }: FAQProps) => {
  const [isOpen, setIsOpen] = useState<IsOpenState>({});
  const { data, isLoading, isError } = api.faqs.getFaqs.useQuery();

  const handleClick = (index: number) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const containerClasses = classNames(containerClass);
  const renderFAQ = data?.map((faq, index) => {
    const isFaqOpen = (isOpen[index] as boolean) ?? false;

    return (
      <>
        {faq?.question?.length > 5 && faq?.answer?.length > 5 && (
          <div
            key={index}
            className="my-2 w-full cursor-pointer overflow-hidden rounded bg-forest py-4 text-white"
            onClick={() => handleClick(index)}
          >
            <div className="flex w-full items-center justify-between gap-[10px] px-4">
              <h2
                className={`flex cursor-pointer items-center justify-between text-[20px] font-bold hover:underline ${
                  isFaqOpen ? "text-forestLight underline" : "text-white"
                }`}
              >
                {faq?.question}
              </h2>
              {isFaqOpen ? (
                <Icon
                  icon="solar:archive-up-minimlistic-broken"
                  className={`min-w-[32px] text-[32px] transition-all ${
                    isFaqOpen ? "text-forestLight" : "text-white"
                  }`}
                />
              ) : (
                <Icon
                  icon="solar:archive-down-minimlistic-broken"
                  className="min-w-[32px] text-[32px]"
                />
              )}
            </div>
            <div
              className={`${
                isFaqOpen ? "block" : "hidden"
              } p-4 text-[18px] font-[500]`}
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
      {renderFAQ}
      {(isError || isLoading || !renderFAQ?.length) && (
        <Loaders
          clones={3}
          minWidth="w-full"
          minHeight="min-h-[100px]"
          background="bg-forest"
          className="my-4"
        />
      )}
      <InBoundLink
        to="https://calendy.com/staxy"
        className="text-[14px] font-bold no-underline transition-all hover:opacity-75"
        outSource
      >
        Click here to schedule a call for more...
      </InBoundLink>
    </div>
  );
};

export default FAQ;
