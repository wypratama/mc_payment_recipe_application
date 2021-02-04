import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link className="nav-left" to="/">
      <h1>Recipe Book</h1>
      <span>Find Recipe Online</span>
    </Link>
  );
}
