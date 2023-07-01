import InBoundLink from "./InBoundLink";
import classNames from "classnames";
import { Icon } from "@iconify/react";

type MediaAndTextProps = {
  title: string;
  description: string;
  url: string;
  label: string;
  className: string;
  mediaSrc: string;
  mediaFirst: boolean;
  endBlock: boolean;
};

const MediaAndText = ({
  mediaFirst,
  mediaSrc,
  endBlock,
  title,
  description,
  url,
  label,
  className,
}: MediaAndTextProps) => {
  const classes = classNames(className, `mx-auto`);
  const endBlockImage = classNames(endBlock && `mx-auto`);
  const endBlockContent = classNames(
    endBlock ? `w-full justify-center items-center` : `w-7/12 md:w-5/12`
  );
  const endBlockContainer = classNames(
    endBlock ? `justify-between items-center` : `justify-center items-center`
  );

  return (
    <div
      className={`${classes} ${endBlockContainer} my-12 flex w-full flex-wrap items-center justify-between gap-[40px] px-4`}
    >
      {/* Media */}
      {mediaSrc && (
        <Icon
          icon={mediaSrc}
          fontSize={128}
          className={`${endBlockImage} w-3/12 max-w-[200px] shadow-red-700 drop-shadow-2xl md:w-5/12 ${
            mediaFirst ? "order-0" : "order-1"
          }`}
        />
      )}
      {/* Content */}
      <div className={`${endBlockContent} flex flex-col`}>
        {title && (
          <h3 className="text-[25px] font-black lg:text-[45px]">{title}</h3>
        )}
        {description && <p className="text-[20px]">{description}</p>}
        {url && label && <InBoundLink to={url}>{label}</InBoundLink>}
      </div>
    </div>
  );
};

export default MediaAndText;
