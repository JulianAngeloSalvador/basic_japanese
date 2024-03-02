import ThemeToggler from "./ThemeToggler";

export default function Header() {
  return (
    <header className="flex justify-between w-fluid-1200 mx-auto py-4 px-4 xl:px-0">
      <h1 className=" text-main-fs">KotoRaku</h1>
      <ThemeToggler />
    </header>
  );
}
