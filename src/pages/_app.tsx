import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://staxy.io` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  console.log(canonicalUrl);

  return (
    <ClerkProvider>
      <Script
        strategy="beforeInteractive"
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/2b6b0ab2b70ad7a6db85e0c8/script.js"
      ></Script>
      <DefaultSeo
        title="Become the GO-TO for your profession"
        description="Move Udemy, SkillShare, Kajabi and all others aside. Own your data. Own your audience. Own your business."
        canonical={canonicalUrl}
        openGraph={{
          type: "website",
          locale: "en",
          url: canonicalUrl,
          siteName: "STAXY | AIO Stop",
          images: [{ url: "", width: 0, height: 0, alt: "" }],
        }}
      />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
