import { useRouter } from "next/router";
import Button from "./Button";
import { Icon } from "@iconify/react";

const PageBack = () => {
  const router = useRouter();
  const basePath = ["/features", "/company", "/faq"];
  return (
    <Button onClick={() => router.back()}>
      <Icon icon="solar:rewind-back-broken" fontSize={32} />
    </Button>
  );
};

export default PageBack;
