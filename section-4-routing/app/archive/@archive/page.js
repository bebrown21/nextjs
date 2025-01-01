import { getAvailableNewsYears } from "@/lib/news";

export default function ArchivePage() {
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((year) => (
            <li key={year}>
              <a href={`/archive/${year}`}>{year}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
