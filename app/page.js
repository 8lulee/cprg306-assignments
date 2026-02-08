// app/page.jsx
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <h1>CPRG 306 Assignments</h1>
        <p>Welcome to my Next.js assignment site.</p>
      </header>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/week-2">Week 2</Link>
          </li>
           <li>
            <Link href="/week-3">Week 3</Link>
          </li>
          <li>
            <Link href="/week-4">Week 4</Link>
          </li>
        </ul>
      </nav>

      <section>
        <h2>Landing Page</h2>
        <p>
          This site is used to host my CPRG 306 weekly assignments. Use the
          navigation above to view the different weeks.
        </p>
      </section>
    </main>
  );
}
