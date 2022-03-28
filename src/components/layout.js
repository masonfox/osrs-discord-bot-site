import Navbar from './navbar'
import Footer from './footer'

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Get Started", href: "/#getstarted", current: false },
  { name: "Commands", href: "/#commands", current: false },
  { name: "FAQ", href: "/#faq", current: false },
  { name: "About", href: "/#about", current: false },
];

export default function Layout({ children }) {
  return (
    <>
      <Navbar navigation={navigation} />
      <main>{children}</main>
      <Footer navigation={navigation} />
    </>
  )
}