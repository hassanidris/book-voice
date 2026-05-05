"use client";
import { cn } from "@/lib/utils";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Library",
    href: "/",
  },
  {
    label: "Add Book",
    href: "/books/new",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const { user } = useUser();
  return (
    <header
      className=" w-full fixed z-50"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className=" wrapper navbar-height py-4 flex justify-between items-center">
        <Link href="/" className=" flex gap-0.5 items-center">
          <Image
            src="/assets/logo.png"
            alt="Book Robot"
            width={42}
            height={26}
          />
          <span className="logo-text">Book Robot</span>
        </Link>

        <nav className=" w-fit flex gap-7.5 items-center">
          {navItems.map((item) => {
            const isActive =
              pathName === item.href ||
              (item.href !== "/" && pathName.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "nav-link-base",
                  isActive ? "nav-link-active" : " text-black hover:opacity-70",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex justify-end items-center gap-7.5 h-16 ">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="nav-link-base cursor-pointer hover:opacity-70">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button
                className="text-white rounded-lg px-4 py-2 cursor-pointer transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--accent-warm)" }}
              >
                Sign Up
              </button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            <UserButton />
            {user?.firstName && (
              <Link href="/subscriptions" className="nav-user-name">
                {user.firstName}
              </Link>
            )}
          </Show>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
