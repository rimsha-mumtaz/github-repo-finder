import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Router, Routes } from "react-router-dom";
import RepoCard from "./components/RepoCard";
import RepoList from "./components/RepoList";
import SearchBar from "./components/SearchBar";
import RepoDetail from "./components/RepoDetail";


export default function App() {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRepo = async () => {
    try {
      setLoading(true)

      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!res.ok) throw new Error("User not found");

      const data = await res.json();
      setRepos(data);
    }
    catch (err) {
      setError(err);
      setRepos([]);
    }
    finally { setLoading(false); }
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>GitHub Repository Finder</h1>
              <SearchBar username={username} setUsername={setUsername} fetchRepo={fetchRepo} />
              {loading && <p>Loading..</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}
              <RepoList repos={repos} />
            </div>
          }>
        </Route>
        <Route path="/repo/:id" element={RepoDetail} />
      </Routes>
    </BrowserRouter >
  );
}

