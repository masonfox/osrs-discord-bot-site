import Navbar from "./navbar";
import Footer from "./footer";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Get Started", href: "/#getstarted" },
  { name: "Commands", href: "/#commands" },
  { name: "FAQ", href: "/#faq" },
  { name: "About", href: "/#about" },
];

export default function Layout({ children }) {
  return (
    <>
      <Navbar navigation={navigation} />
      <main>{children}</main>
      <Footer navigation={navigation} />
    </>
  );
}
