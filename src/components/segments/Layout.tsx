import classNames from "classnames";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  className: string;
  children: any;
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
