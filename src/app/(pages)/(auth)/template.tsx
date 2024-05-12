"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [
  { name: "login", page: "/login" },
  { name: "register", page: "/register" },
  { name: "forgot-password", page: "/forgot-password" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [inputText, setInputText] = useState<string>("");
  const pathName = usePathname();
  return (
    <div>
      {links.map((item) => {
        const isActive = pathName.startsWith(item.page);
        return (
          <Link
            href={item.page}
            key={item.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {item.name}
          </Link>
        );
      })}
      <div>
        <input
          className="m-3 border-current border-solid border-2"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      {children}
    </div>
  );
}
