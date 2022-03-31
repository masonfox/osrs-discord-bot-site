/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "How often does the bot generate progress updates?",
    answer:
      "<p>It runs on a 2-hour cadence. You can see the next time it will run by using the <span class='inline-code'>!osrs when</span> command. Note, the bot's cadence can be altered from time-to-time depending on redeploys.</p>"
  },
  {
    question: "I progressed, but the bot didn't catch it! What gives?",
    answer:
      "<p>The bot is driven by Jagex's <a href='https://secure.runescape.com/m=hiscore_oldschool/overall'>hiscore</a> data source. If you're unfamiliar, the hiscore table only updates <b>once you log out</b> from an active session; it doesn't update during your game session. Therefore, even if you progress your account but don't logout before the bot runs, the hiscores will not reflect your updates and the bot can't either.</p><br/><p>If you do believe there is an error, please open an issue in the <a href='https://github.com/masonfox/osrs-discord-bot/issues'>Github repo</a>.</p>"
  },
  {
    question: "How do I rename a player I am tracking?",
    answer: "<p>This can be done by removing the player with the <span class='inline-code'>!osrs remove {old name}</span> command and then adding them back with the <span class='inline-code'>!osrs add {new name}</span> command by their nnew name.</p><br/><p>A note about this, doing this does remove that player's associated history. This can effect (the future) recap command's ability to provide results before the name change.</p><br/><p>While there is an open <a href='https://github.com/masonfox/osrs-discord-bot/issues/4'>issue</a> for this feature, it is unlikely to be developed due to the complexity and cascading effects against the data set. The players list is shared amongst all bot users, so granting overwrite-like functionality has dangerous potential. Many other systems similar to this simply do not allow it or have an approval process associated with it. </p>",
  },
  {
    question: "How do I change the channel I receive progress updates in?",
    answer:
      "<p>This can be done using the <span class='inline-code'>!osrs subscribe</span> command. Simply use it in the text channel you want to receive updates in and it'll overwrite the previous channel configuration.</p>"
  },
  {
    question: "How does the bot work? What do you do with the data?",
    answer:
      "<p>The idea is really simple: it retains a 'last state' representation of your skills, bosses, and clue scroll data from Jagex's <a href='https://secure.runescape.com/m=hiscore_oldschool/overall'>hiscore</a> data, and when the bot runs, it simply compares the two to identify what progress you've made within that period of time.</p><br><p>The only OSRS data that is retained is your hiscore data (skill levels, boss kill counts, and clue scroll). From Discord, only the necessary identifiers are names for logging information are retained.</p>"
  },
  {
    question: "I have a bug or a feature request: how do I submit it?",
    answer:
      "<p>First off - thank you! Please utilize the <a href='https://github.com/masonfox/osrs-discord-bot/issues'>Github repo's issue section</a> to submit either of these.</p><br><p>Also, if you're a developer yourself and you'd like to contribute, please make a PR! Thanks for your interest in making the bot better!</p>"
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const faq = () => (
  <section className="bg-gray-50">
    <div
      className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8"
      id="faq"
    >
      <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tighter">
          Frequently Asked Questions
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <div dangerouslySetInnerHTML={{ __html:faq.answer }}></div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default faq;
