import Link from "next/link";
import { useRouter } from "next/router";
export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <span>Home</span>
      </Link>
      <Link href="/about">
        <span>about</span>
      </Link>
    </nav>
  );
}