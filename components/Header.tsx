"use client";
import { cn, getInitials } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Session } from "next-auth";

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname();

  return (
    <header className="my-10 flex items-center justify-between gap-5">
      {/* Logo on the left */}
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={70} height={40} />
      </Link>

      {/* Links and avatar on the right */}
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/products"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/products"
                ? "text-blue-900 font-bold"
                : "text-gray-500"
            )}
          >
            Products
          </Link>
        </li>
        <li>
          <Link href="/my-profile">
            <Avatar>
              <AvatarFallback className="bg-amber-100">
                {getInitials(session?.user?.name || "IN")}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
