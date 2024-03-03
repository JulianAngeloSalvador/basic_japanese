import ThemeToggler from "./ThemeToggler";

export default function LandingHeader() {
  return (
    <header className="flex justify-between py-6 px-4 md:px-24 ">
      <h1 className=" text-main-fs font-lexend">KotoRaku</h1>
      <div className="flex items-center gap-4">
        {/* <ThemeToggler /> */}
        <div className="rounded-full flex items-center gap-4 children:text-sm children:font-600 children:py-1">
          <button className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:scale-x-0 after:bg-secondary hocus:after:left-0 hocus:after:scale-100 after:transition-transform after:ease-in-out after:duration-100 hocus:-translate-y-0.5 transition-transform duration-100 ease-in-out delay-75">
            Log In
          </button>
          <button className=" bg-cta px-2 rounded-md text-light-theme hocus:-translate-y-0.5 transition-transform duration-100 ease-in-out delay-75">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
