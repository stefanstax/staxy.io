import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <ClerkProvider>
      <Script
        strategy="beforeInteractive"
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/2b6b0ab2b70ad7a6db85e0c8/script.js"
      ></Script>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
