"use client";

import { useState } from "react";
import { ArrowUpRight, Close, Github, Linkedin, Menu } from "@/components/icons";
import { Logo } from "@/components/logo";
import { navLinks, site } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-ink/65 transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-sun transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-3 border-r border-line pr-5">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink/50 transition-colors hover:text-ink"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink/50 transition-colors hover:text-ink"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
          </div>
          <a
            href="#contact"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-cream transition-colors hover:bg-ink/85"
          >
            Contact Me
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink lg:hidden"
        >
          {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-cream px-5 pb-6 pt-4 sm:px-8 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-3 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink/60"
              >
                <Github className="h-[18px] w-[18px]" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink/60"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-cream"
            >
              Contact Me
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
