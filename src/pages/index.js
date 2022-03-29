import Head from "next/head";
import HomeHero from "../components/homehero";
import GetStarted from "../components/getstarted";
import Link from "next/link";
import FAQ from "../components/faq";
import Commands from "../components/commands";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero */}
        <HomeHero />

        {/* Get Started */}
        <GetStarted />

        {/* Commands */}
        <Commands />

        {/* FAQ */}
        <FAQ />
      </main>
    </div>
  );
}
