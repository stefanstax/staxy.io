import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Script from "next/script";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Script
        strategy="beforeInteractive"
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/2b6b0ab2b70ad7a6db85e0c8/script.js"
      ></Script>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
