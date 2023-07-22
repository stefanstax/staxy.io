import classNames from "classnames";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { type ReactNode } from "react";
import RouteBlocker from "./RouteBlocker";

interface LayoutProps {
  className?: string;
  children: ReactNode;
}

const Layout = ({ className, children }: LayoutProps): JSX.Element => {
  const classes = classNames(className);
  return (
    <RouteBlocker>
      <section className={classes}>
        <Navigation />
        {children}
        <Footer />
      </section>
    </RouteBlocker>
  );
};

export default Layout;
