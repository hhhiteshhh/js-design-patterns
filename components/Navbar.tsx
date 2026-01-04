import Link from "next/link";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <div className="mt-4">
      <Link href={"/constructor-patterns"}>
        <Button>
          <Link href={"/constructor-patterns"}>Constructor Patterns</Link>
        </Button>
      </Link>
    </div>
  );
}

export default Navbar;
