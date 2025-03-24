import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-evenly items-center p-4">
    <Link href="/signIn" className=" hover:underline pr-12">
      Login
    </Link>
    <Link href="/card" className=" hover:underline">
      Card
    </Link>
  </div>
  

  );
}

