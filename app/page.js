import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Assignments</h1>
      <Link href="./week-2">Week 2</Link>
    </main>
  );
}
