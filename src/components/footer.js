import Link from "next/link";

const Footer = ({ navigation }) => (
  <footer className="bg-gray-700">
    <div className="max-w-7xl mx-auto py-10 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav
        className="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        {navigation.map((item) => (
          <div key={item.name} className="px-5 py-2">
            <Link href={item.href}>
              <a className="text-base text-white hover:text-indigo-300">
                {item.name}
              </a>
            </Link>
          </div>
        ))}
      </nav>
      <p className="mt-8 text-center text-base text-gray-300">
        &copy; {new Date().getFullYear()} Mason Fox. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
