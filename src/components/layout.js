import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./navbar";
import Footer from "./footer";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Get Started", href: "/#getstarted" },
  { name: "Commands", href: "/#commands" },
  { name: "FAQ", href: "/#faq" },
];

export default function Layout({ children }) {
  const router = useRouter();
  const [activeHref, setActiveHref] = useState("/");

  useEffect(() => {
    const handleRouteChange = (url) => setActiveHref(url)

    // handle route update
    router.events.on('hashChangeComplete', handleRouteChange)

    return () => {
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <>
      <Navbar navigation={navigation} activeHref={activeHref} />
      <main>{children}</main>
      <Footer navigation={navigation} />
    </>
  );
}
