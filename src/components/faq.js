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
    question: "How do I rename a player I am tracking?",
    answer: "<p>This can be done removing the player via their old name using the <span class='inline-code'>!osrs remove {old name}</span> and then adding the player by their new name through the <span class='inline-code'>!osrs add {new name}</span> commands.</p><br/><p>While there is an open <a href='https://github.com/masonfox/osrs-discord-bot/issues/4'>issue</a> for this feature, it is unlikely to be developed due to the complexity and cascading effects against the data set. The players list is shared amongst all bot users, so granting overwrite-like functionality has dangerous potential. Many other systems similar to this simply do not allow it or have an approval process associated with it. </p>",
  },
  {
    question: "I have a bug or a feature request: how do I submit it?",
    answer:
      "<p>First off - thank you! Please utilize the <a href='https://github.com/masonfox/osrs-discord-bot/issues'>Github repo's issue section</a> to submit either of these.</p><br><p>Also, if you're a developer yourself and you'd like to contribute, please make a PR! Thanks for your interest in making the bot better!</p>"
  },
  // More questions...
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
