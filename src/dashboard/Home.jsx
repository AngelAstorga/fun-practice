import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1>Hello Team</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/fashcards">Flashcards</Link>
      </nav>
    </>
  );
}
