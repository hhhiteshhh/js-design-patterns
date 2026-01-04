"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
interface Pattern {
  id: number;
  path: string;
  name: string;
}
const patterns: Pattern[] = [
  {
    id: 1,
    path: "/constructor-patterns",
    name: "Constructor Patterns",
  },
  {
    id: 2,
    path: "/singleton-patterns",
    name: "Singleton Patterns",
  },
];
function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div className="mt-4 flex gap-2">
      {!isHome && <BackButton />}
      {patterns.map((pattern) => (
        <LinkButton key={pattern.id} pattern={pattern} />
      ))}
    </div>
  );
}

export default Navbar;

function LinkButton({ pattern }: { pattern: Pattern }) {
  const pathname = usePathname();
  const isActive = pathname === pattern.path;
  return (
    <Link href={pattern.path}>
      <Button variant={isActive ? "default" : "secondary"}>
        {pattern.name}
      </Button>
    </Link>
  );
}

function BackButton() {
  return (
    <Link href="/">
      <Button variant={"outline"}>
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back
      </Button>
    </Link>
  );
}
