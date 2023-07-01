import classNames from "classnames";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { type ReactNode } from "react";

interface LayoutProps {
  className?: string;
  children: ReactNode;
}

const Layout = ({ className, children }: LayoutProps): JSX.Element => {
  const classes = classNames(className);
  return (
    <section className={classes}>
      <Navigation />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
