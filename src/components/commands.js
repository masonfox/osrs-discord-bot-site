import { classNames } from "../utilities";

const commandList = [
  {
    command: "/subscribe",
    description:
      "Subscribes your Discord server and the channel this message is entered into to receive updates of the players you track. If you simply want to change the channel updates are sent to, you can use this command in the new channel.",
    examples: [],
  },
  {
    command: "/unsubscribe",
    description:
      "The opposite of the command above - player progression updates will no longer be shared to your Discord server.",
    examples: [],
  },
  {
    command: "/players",
    description:
      "Lists all of the active OSRS players that your Discord server is tracking.",
    examples: [],
  },
  {
    command: '/track',
    description:
      "Adds new OSRS players to track on your Discord server.",
    examples: [],
  },
  {
    command: '/drop',
    description:
      "Removes OSRS players you're currently tracking on your Discord server.",
    examples: [],
  },
  {
    command: '/recap',
    description: "Returns an image of progress history for a given player over the following timeframe options: day, week, month. This works off of history data and is primarily dependent on the players you are tracking.",
    examples: []
  },
  {
    command: "/when",
    description:
      "Returns the time that the bot will run again, rendering updates. This is in Eastern Standard Time.",
    examples: [],
  },
  {
    command: "/status",
    description:
      "This is a dump of the bot's data associated with your Discord server.",
    examples: [],
  },
  {
    command: "/donate",
    description:
      "❤️ Provides information about how you can donate!",
    examples: [],
  },
];

const Commands = () => (
  <section className="bg-indigo-700">
    <div
      className="max-w-7xl py-14 px-4 sm:px-6 lg:py-16 lg:px-8 mx-auto"
      id="commands"
    >
      <div className="lg:grid lg:grid-cols-3">
        <div className="pl-0 lg:pl-20">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-5xl">
            Commands
          </h1>
          <p className="mt-3 text-md lg:text-lg text-indigo-300">
            The OSRS Buddy commands are there to manage your engagement with the bot! And the best part: you never have to leave Discord!
          </p>
        </div>
        <div className="mt-10 lg:-mt-4 lg:col-span-2 mx-auto">
          <dl className="space-y-6 mx-auto lg:mx-0 prose">
            {commandList.map((item) => (
              <div key={item.command} className="drop-shadow-xl">
                <pre className="rounded-b-none mb-0 font-bold text-base text-white">
                  <code>{item.command}</code>
                </pre>
                <div
                  className={classNames(
                    item.examples.length > 0 ? "" : "rounded-b",
                    "bg-gray-200 px-4 py-2"
                  )}
                >
                  {item.description}
                  {item.examples.length > 0 && (
                    <div className="mt-1">
                      <b>Examples</b>:
                    </div>
                  )}
                </div>
                {item.examples.length > 0 && (
                  <div className="rounded-b-lg bg-gray-700 pb-4">
                    {item.examples.map((example, index) => (
                      <pre
                        className="text-white text-sm rounded-none mt-0 mb-0 pb-0 bg-transparent"
                        key={index}
                      >
                        <code>{example}</code>
                      </pre>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
);

export default Commands;
