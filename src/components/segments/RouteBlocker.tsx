import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { type ReactNode, useEffect } from "react";
import { api } from "~/utils/api";

type RouteBlockerProps = {
  children: ReactNode;
};

const RouteBlocker = ({ children }: RouteBlockerProps) => {
  const { userId, isLoaded } = useAuth();

  const router = useRouter();

  const login = router?.route === "/login";

  const { data } = api.restrictedPaths.getRestrictedPaths.useQuery();

  const lockedPaths: string[] = [];

  data?.forEach((url) => {
    const { locked, path } = url;
    if (locked === true) {
      lockedPaths.push(path);
    }
  });

  const currentlyOnRestricted = lockedPaths.some((path) =>
    window.location.pathname.includes(path)
  );

  useEffect(() => {
    const isUserRestricted =
      userId !== process.env.NEXT_PUBLIC_RESTRICT_USER_ID || !userId;

    if (
      currentlyOnRestricted &&
      isUserRestricted &&
      isLoaded &&
      !lockedPaths?.includes("maintenance")
    ) {
      void router.push("/404");
    }

    if (lockedPaths?.includes("maintenance") && isUserRestricted && isLoaded) {
      void router.push("/maintenance");
    }
  }, [userId, currentlyOnRestricted]);

  return <main className="min-h-screen scroll-smooth">{children}</main>;
};

export default RouteBlocker;
