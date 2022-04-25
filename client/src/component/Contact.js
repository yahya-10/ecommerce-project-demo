import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";
import { motion } from "framer-motion";

const supportLinks = [
  {
    name: "Sales",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: PhoneIcon,
    phoneNumber: "Sales Phone Number",
  },
  {
    name: "Technical Support",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: SupportIcon,
    phoneNumber: "Technical Support Phone Number",
  },
  {
    name: "Media Inquiries",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: NewspaperIcon,
    phoneNumber: "Media Inquiries Phone Number",
  },
];
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      "Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 5,
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 6,
    question: "Why did the invisible man turn down the job offer?",
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

/**
 *
 * Create modals for each card!! """TRY TO USE ONE MODAL""" with dynamic content
 * to avoid the use of multiple modal and logic!!!
 *
 */

const Contact = ({ storedTheme }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header
        className={`${
          storedTheme === "light"
            ? "pb-36 bg-blue-gray-800 transition-colors duration-300"
            : "pb-36 bg-gray-800 transition-colors duration-300"
        }`}
      >
        <div className="relative inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-blue-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mt-24 max-w-md mx-auto px-4 pb-32 sm:max-w-3xl sm:px-6 md:mt-32 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-700 md:text-5xl lg:text-6xl">
            Support
          </h1>
          <p
            className={`${
              storedTheme === "light"
                ? "mt-6 max-w-3xl text-xl text-blue-gray-300"
                : "mt-6 max-w-3xl text-xl text-blue-gray-200"
            }`}
          >
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames. Dui, amet, nec sit pulvinar.
          </p>
        </div>
      </header>

      <main>
        <div
          className={`${
            storedTheme === "light" ? "bg-blue-gray-50" : "bg-gray-800"
          }`}
        >
          {/* Cards */}
          <section
            className="-mt-32 max-w-md mx-auto relative z-10 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
            aria-labelledby="contact-heading"
          >
            <h2 className="sr-only" id="contact-heading">
              Contact us
            </h2>
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
              {supportLinks.map((link, index) => (
                <div
                  key={index}
                  className={`${
                    storedTheme === "light"
                      ? "flex flex-col bg-white rounded-2xl shadow-xl"
                      : "flex flex-col bg-indigo-700 rounded-2xl shadow-xl"
                  }`}
                  // onClick={console.log(index)}
                >
                  <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                    <div className="absolute top-0 p-5 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2">
                      <link.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <h3
                      className={`${
                        storedTheme === "light"
                          ? "text-xl font-medium text-blue-gray-900"
                          : "text-xl font-medium text-white"
                      }`}
                    >
                      {link.name}
                    </h3>
                    <p
                      className={`${
                        storedTheme === "light"
                          ? "mt-4 text-base text-blue-gray-500"
                          : "mt-4 text-base text-blue-gray-200"
                      }`}
                    >
                      {link.description}
                    </p>
                  </div>
                  <div className="p-6 bg-blue-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                    <button
                      className={`${
                        storedTheme === "light"
                          ? "text-base font-medium text-blue-700 hover:text-blue-600"
                          : "text-base font-medium text-gray-50 hover:text-red-200"
                      }`}
                      onClick={() => alert(link.phoneNumber)}
                    >
                      Contact us<span aria-hidden="true"> &rarr;</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section
            className="max-w-md mx-auto py-24 px-4 divide-y-2 divide-blue-gray-200 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
            aria-labelledby="faq-heading"
          >
            <h2
              className={`${
                storedTheme === "light"
                  ? "text-3xl font-extrabold text-blue-gray-900"
                  : "text-3xl font-extrabold text-white"
              }`}
              id="faq-heading"
            >
              Frequently asked questions
            </h2>
            <div className="mt-6 pt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
                {faqs.map((faq) => (
                  <div key={faq.id}>
                    <dt
                      className={`${
                        storedTheme === "light"
                          ? "text-lg font-medium text-blue-gray-900"
                          : "text-lg font-medium text-gray-200"
                      }`}
                    >
                      {faq.question}
                    </dt>
                    <dd
                      className={`${
                        storedTheme === "light"
                          ? "mt-2 text-base text-blue-gray-500"
                          : "mt-2 text-base text-gray-400"
                      }`}
                    >
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section
          className={`${
            storedTheme === "light"
              ? "relative bg-white"
              : "relative bg-gray-800"
          }`}
          aria-labelledby="join-heading"
        >
          <div
            className="hidden absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:block"
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto bg-blue-600 lg:bg-transparent lg:px-8">
            <div className="lg:grid lg:grid-cols-12">
              <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                <div
                  className="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden"
                  aria-hidden="true"
                />
                <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                  <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                    <img
                      className="object-cover object-center rounded-3xl shadow-2xl"
                      src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="relative bg-blue-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
                <div
                  className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
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
                          className="text-blue-500"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={384}
                      fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                    />
                  </svg>
                  <svg
                    className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
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
                          className="text-blue-500"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={384}
                      fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                    />
                  </svg>
                </div>
                <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                  <h2
                    className="text-3xl font-extrabold text-white"
                    id="join-heading"
                  >
                    Join our team
                  </h2>
                  <p className="text-lg text-white">
                    Varius facilisi mauris sed sit. Non sed et duis dui leo,
                    vulputate id malesuada non. Cras aliquet purus dui laoreet
                    diam sed lacus, fames.
                  </p>
                  <a
                    className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-700 hover:bg-blue-gray-50 sm:inline-block sm:w-auto"
                    href="/"
                  >
                    Explore open positions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:flex lg:items-center"
          aria-labelledby="newsletter-heading"
        >
          <div className="lg:w-0 lg:flex-1">
            <h2
              className="text-3xl font-extrabold text-blue-gray-900 sm:text-4xl"
              id="newsletter-heading"
            >
              Sign up for our newsletter
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-blue-gray-500">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-blue-gray-300 shadow-sm placeholder-blue-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Notify me
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-blue-gray-500">
              We care about the protection of your data. Read our{" "}
              <a href="/" className="font-medium underline">
                Privacy Policy.
              </a>
            </p>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default Contact;
