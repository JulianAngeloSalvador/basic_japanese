import ThemeToggler from "./ThemeToggler";

export default function Header() {
  return (
    <header className="flex justify-between w-fluid-1200 mx-auto py-4 px-4 xl:px-0">
      <h1 className=" text-main-fs">KotoRaku</h1>
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
