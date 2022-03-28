/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "How often does the bot generate progress updates?",
    answer:
      "<p>It runs on a 2-hour cadence. You can see the next time it will run by using the <span class='inline-code'>!osrs when</span> command. Note, the bot's cadence can be altered from time-to-time.</p>"
  },
  {
    question: "Yes?",
    answer: "Yes",
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
