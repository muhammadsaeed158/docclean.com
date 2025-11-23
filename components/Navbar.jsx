"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  const active = (route) =>
    path === route ? "text-blue-600 font-semibold" : "text-gray-700";

  return (
    <nav className="w-full px-8 py-4 bg-white shadow flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        DocClean
      </Link>

      <div className="flex gap-6">
        <Link href="/" className={active("/")}>
          Home
        </Link>
        <Link href="/upload" className={active("/upload")}>
          Upload
        </Link>
        <Link href="/dashboard" className={active("/dashboard")}>
          Dashboard
        </Link>
        <Link href="/pricing" className={active("/pricing")}>
          Pricing
        </Link>
      </div>
    </nav>
  );
}