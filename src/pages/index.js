import Head from "next/head";
import Link from "next/link";

import HomeHero from "../components/homehero";
import GetStarted from "../components/getstarted";
import Features from "../components/features";
import Commands from "../components/commands";
import FAQ from "../components/faq";

export default function Home() {
  return (
    <div>
      <Head>
        <title>OSRS Buddy</title>
        <meta name="description" content="A Simple Discord Bot for Sharing OSRS Gains" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero */}
        <HomeHero />

        {/* Features */}
        <Features />

        {/* Get Started */}
        <GetStarted />

        {/* Commands */}
        <Commands />

        {/* CTA */}
        <div className="bg-indigo-100">
          <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span>Let&apos;s get started!</span>
              <span className="ml-3 text-indigo-600">It&apos;s <span className="underline">free</span>!</span>
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link href="/#getstarted">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Get started
                  </a>
                </Link>
              </div>
              <div className="ml-3 inline-flex">
                <Link href="/#features">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-200">
                    Learn more
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <FAQ />
      </main>
    </div>
  );
}
