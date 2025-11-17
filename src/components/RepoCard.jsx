import { Link } from "react-router-dom"

export default function RepoCard({ repo }) {
    console.log("INSIDE RepoCArd");
    return (
        <div>
            <h2>{repo.name}</h2>
            <p>{repo.description || "No Description"}</p>

            <Link to={`/repo/${repo.id}`}>View Details</Link>
        </div>
    );
}