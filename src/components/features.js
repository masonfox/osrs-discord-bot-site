import {
  NewspaperIcon,
  ShieldExclamationIcon,
  FireIcon,
  BellIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

const features = [
  {
    id: 1,
    name: "Skilling",
    description:
      "Your friends keep asking you when you're going to leave Wintertodt? Well, no more questions - they'll see when you hit that sweet, sweet 99 FM!",
    icon: FireIcon,
  },
  {
    id: 2,
    name: "Bosses / Raids",
    description:
      "Are you beyond skilling? Bossing is an amazing test of your prowess - flex on your friends with you boss KC!",
    icon: ShieldExclamationIcon,
  },
  {
    id: 3,
    name: "Clue Scrolls",
    description:
      "From easy to master, clue scrolls take some time to rack up those completions! Make every one as visible as possible!",
    icon: NewspaperIcon,
  },
];
const managementFeatures = [
  {
    id: 1,
    name: "Crispy updates in image form!",
    description:
      "Each run generates an image that lists all the progress updates by player!",
    icon: BellIcon,
  },
  {
    id: 2,
    name: "Add / Remove Players to Track",
    description:
      "Only receive progress updates for the players you want to see! This is excellent for creating and uniting a small community of OSRS players!",
    icon: UserGroupIcon,
  },
];

const Features = () => {
  return (
    <section
      className="py-16 bg-gray-50 overflow-hidden lg:py-24"
      id="features"
    >
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Features
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-2xl text-indigo-500 font-semibold">
            An OSRS Bot that is anything but old school!
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              You play - we share your progress!
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Whether you&apos;re woodcutting, crushing ToB, or completing clue
              scrolls, OSRS Buddy watches for player updates that you track on a
              2-hour cadence and shares those progress updates in your favorite
              Discord channel!
            </p>

            <dl className="mt-10 space-y-10">
              {features.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-1 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <div className="flex justify-center drop-shadow-2xl">
              <Image
                height={612}
                width={450}
                src="/images/Cron-Output.png"
                alt="Example image output from the bot"
              />
            </div>
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Manage everything in Discord
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                You control who you want to track updates on and this can
                managed entirely in Discord! This is perfect for creating and
                bolstering that local OSRS community in your Discord server!
              </p>

              <dl className="mt-10 space-y-10">
                {managementFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <div className="flex justify-center drop-shadow-2xl">
              <Image
                height={288}
                width={445}
                className="rounded"
                src="/images/Command-Examples.png"
                alt="Example of bot commands for adding and removing players"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesOld = () => (
  <section
    className="border-b bg-indigo-100 border-gray-200 py-12"
    id="features"
  >
    {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center pb-7 border-b border-indigo-200">
        <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tighter lg:text-6xl">
          Features
        </h1>
        <h3 className="font- mt-4 max-w-2xl text-xl text-indigo-500 lg:mx-auto">
          An OSRS Bot that is anything but old school!
        </h3>
      </div>

      <div className="mt-10">
        <ul role="list" className="space-y-10">
          {features.map((feature, index) => (
            <li
              key={index}
              className="bg-white shadow rounded-md flex"
            >
              <div className="px-6 py-4 w-1/2">
                <h3 className="text-xl font-bold">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="w-1/2 h-10">
                <img className="rounded -mt-5 h-52" src={feature.img} alt={`Image for ${feature.name}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div> */}
  </section>
);

export default Features;
