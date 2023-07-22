import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { type ReactNode, useEffect } from "react";
import { api } from "~/utils/api";

type RouteBlockerProps = {
  children: ReactNode;
};

const RouteBlocker = ({ children }: RouteBlockerProps) => {
  const { data: session } = useSession();
  const router = useRouter();

  const { data } = api.restrictedPaths.getRestrictedPaths.useQuery();

  const lockedPaths: string[] = [];

  data?.forEach((url) => {
    const { locked, path } = url;
    if (locked === true) {
      lockedPaths.push(path);
    }
  });

  useEffect(() => {
    if (
      session &&
      session?.user?.email !== process.env.NEXT_PUBLIC_RESTRICT_EMAIL &&
      lockedPaths.some((path) => window.location.pathname.includes(path))
    ) {
      void router.push("/signin");
    }
  }, [session]);

  return <main className="min-h-screen scroll-smooth">{children}</main>;
};

export default RouteBlocker;
