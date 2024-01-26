import { PiBooksThin } from "react-icons/pi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-purple-100 text-purple-950 font-mono">
      <div className="flex max-w-5xl w-full items-center justify-end font-mono text-sm">
        <div className="flex items-center">
          OpenBook <PiBooksThin size={24} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>Level up finding your new favorite book.</div>
        <div>
          <div className="font-bold">Goodreads pain points?</div>
          <li>SLOW</li>
          <li>API seems to have missing books</li>
          <li>Just kind of boring</li>
        </div>
        <div>
          <div className="font-bold">Needs?</div>
          <li>CRUD Bookshelves</li>
          <li>API with library-worthy book selection</li>
          <li>Search for books by title, author, category</li>
          <li>Progress tracking</li>
          <li>Limit social interactions</li>
          <li>Rating systems (stars, spice, etc.)</li>
          <li>
            &quot;Because you rated ... 5 stars, read this next:&quot; Kind of
            suggestions
          </li>
        </div>
      </div>
      <iframe src="https://lottie.host/embed/ae84ac13-6400-4cd2-86e0-13314b32a38f/r8mKTr2G3t.json"></iframe>
      <div>
        <div>Small App idea: Generate a &quot;read this next&quot; AI bot</div>
        <div>Small App idea: Otter pop-up to deliver your notifications</div>
      </div>
      <div className="relative flex font-mono text-sm place-items-center">
        Mariah Grey · 2024
      </div>
    </main>
  );
}
