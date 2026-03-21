import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-zinc-200 dark:border-zinc-800">
      <div className="text-lg font-bold tracking-tight">
        just_<span className="text-primary">grassy</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
        <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
        <a href="#connect" className="text-sm font-medium hover:text-primary transition-colors">Connect</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
