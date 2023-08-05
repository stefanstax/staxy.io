import { DefaultSeo, NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { type FC } from "react";
import { FallbackSEO } from "./pagesSEO";

type MetaData = {
  type: string;
  title: string;
  description: string;
  imageUrl: string;
};

const MetaData: FC<MetaData> = ({ type, title, description, imageUrl }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://staxy.io` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  console.log(canonicalUrl);

  return (
    <>
      {process.env.NODE_ENV === "development" &&
        (!canonicalUrl?.includes("/dashboard") ||
          !canonicalUrl?.includes("/login") ||
          !canonicalUrl?.includes("/register")) && (
          <DefaultSeo
            title={FallbackSEO?.title}
            description={FallbackSEO?.description}
            canonical={canonicalUrl}
            openGraph={{
              type: FallbackSEO?.type,
              locale: "en",
              url: canonicalUrl,
              siteName: "STAXY | AIO Stop",
              images: [{ url: "", width: 0, height: 0, alt: "" }],
            }}
          />
        )}
      {process.env.NODE_ENV === "development" && (
        <NextSeo
          title={title}
          description={description}
          openGraph={{
            type,
            title,
            description,
            images: [
              {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: "Illustrated gradient image having text describing terms and conditions page with extra image of personnel",
              },
            ],
          }}
        />
      )}
    </>
  );
};

export default MetaData;
