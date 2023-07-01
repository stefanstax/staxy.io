import classNames from "classnames";
import Image from "next/image";

type ImageBannerProps = {
  src: string;
  className?: string;
};

const ImageBanner = ({ src, className }: ImageBannerProps) => {
  const classes = classNames(className);

  return (
    <div
      className={`mx-auto flex w-full items-center justify-center md:p-10 ${classes}`}
    >
      <Image
        className="object-fit glass-angle h-full w-full max-w-[1140px] object-contain md:rounded-[40px]"
        src={src}
        width={1280}
        height={650}
        alt=""
      />
    </div>
  );
};

export default ImageBanner;
