import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const history = useHistory();
  const [input, setInput] = useState('');
  const searchQuery = (e) => {
    e.preventDefault();
    setInput('');
    history.push(`/search?q=${input}`);
  };

  return (
    <div className="navbar">
      <div className="nav-content">
        <Link className="nav-left" to="/">
          <h1>Recipe Book</h1>
          <span>Find Recipe Online</span>
        </Link>
        <div className="nav-middle">
          <input
            type="text"
            placeholder="Search Here"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button onClick={searchQuery}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="nav-right">
          <img
            src="https://rapidapi.com/static-assets/default/logo.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
