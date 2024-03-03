import LandingHeader from "../components/LandingHeader";

export default function Landing() {
  return (
    <section className="guide1 min-h-dvh grid grid-cols-1 grid-rows-[auto_1fr] overflow-hidden">
      <LandingHeader />
      <main className="bg-secondary relative">
        <article className="w-fluid-500 text-primary p-4 2xl:px-0 absolute top-1/2 -translate-y-1/2 sm:top-1/3 sm:-translate-y-1/3 md:left-20 2xl:left-28">
          <h1 className="text-subheadline ">
            Conquer the Basics of Japanese Language
          </h1>
          <p className="text-main-fs text-primary/85 text-balance">
            Speak and understand basic Japanese with confidence in everyday
            situations.
          </p>
          <button className="bg-cta text-light-theme px-4 py-2 rounded-md mt-6">
            Get Started
          </button>
        </article>
      </main>
    </section>
  );
}
