// import Image from "next/image";
import Link from "next/link";

const GetStarted = () => (
  <section className="bg-white" id="getstarted">
    <div
      className="max-w-3xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-0"
    >
      <div className="text-center pb-7 border-b border-gray-100">
        <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tighter lg:text-6xl">
          Getting Started
        </h1>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          I know, you&apos;re excited! However, take a moment, breathe, and
          follow the instructions to get the most out of the bot!
        </p>
      </div>
      <div className="get-started-instructions w-full text-center md:text-left">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row mt-10 justify-center">
          <div className="w-auto self-center md:w-1/12 -mb-5 md:mb-0 z-10">
            <span className="bg-indigo-700 text-lg w-11 h-11 rounded-full flex justify-center items-center text-white font-bold drop-shadow">
              1
            </span>
          </div>
          <div className="bg-gray-100 px-6 pb-4 pt-9 md:pt-4 rounded w-full self-center md:w-11/12 prose lg:prose-lg drop-shadow">
            <p className="mb-0 not-prose font-semibold">
              <a
                className="text-blue-600 font-bold"
                target="_blank"
                href="https://bit.ly/osrs-discord-bot"
                rel="noreferrer"
              >
                Add the bot
              </a>{" "}
              to your Discord server!
            </p>
          </div>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col md:flex-row mt-6 justify-center">
          <div className="w-auto self-center md:w-1/12 -mb-5 md:mb-0 z-10">
            <span className="bg-indigo-700 text-lg w-11 h-11 rounded-full flex justify-center items-center text-white font-bold drop-shadow">
              2
            </span>
          </div>
          <div className="bg-gray-100 px-6 pb-4 pt-9 md:pt-4 rounded w-full self-center md:w-11/12 prose lg:prose-lg drop-shadow">
            <p>Navigate to your desired text channel and subscribe:</p>
            <pre>
              <code>!osrs subscribe</code>
            </pre>
          </div>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col md:flex-row mt-6 justify-center">
          <div className="w-auto self-center md:w-1/12 -mb-5 md:mb-0 z-10">
            <span className="bg-indigo-700 text-lg w-11 h-11 rounded-full flex justify-center items-center text-white font-bold drop-shadow">
              3
            </span>
          </div>
          <div className="bg-gray-100 px-6 pb-4 pt-9 md:pt-4 rounded w-full self-center md:w-11/12 prose lg:prose-lg drop-shadow">
            <p>Add the RSN&apos;s you want to track!</p>
            <pre className="mb-4">
              <code>!osrs add &#123;rsn&#125;</code>
            </pre>
            <i>
              Note, if the RSN has spaces in it, use a &quot;<b>+</b>
              &quot; in place of a space:
            </i>
            <pre>
              <code>!osrs add zezima+is+lord</code>
            </pre>
          </div>
        </div>
        {/* Step 4 */}
        <div className="flex flex-col md:flex-row mt-10 justify-center">
          <div className="w-auto self-center md:w-1/12 -mb-5 md:mb-0 z-10">
            <span className="bg-indigo-700 text-lg w-11 h-11 rounded-full flex justify-center items-center text-white font-bold drop-shadow">
              4
            </span>
          </div>
          <div className="bg-gray-100 px-6 pb-4 pt-9 md:pt-4 rounded w-full self-center md:w-11/12 prose lg:prose-lg drop-shadow">
            <p className="font-semibold">All done!🎉</p>
            <i>The bot reports updates every 2 hours!</i>
          </div>
        </div>
      </div>
      {/* Command Push */}
      <div className="text-center mt-12">
        Now that you&apos;re all started, checkout the{" "}
        <Link href="/#commands">
          <a>commands</a>
        </Link>{" "}
        to take full advantage of OSRS Buddy!
      </div>
    </div>
  </section>
);

export default GetStarted;
