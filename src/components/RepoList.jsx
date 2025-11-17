import RepoCard from "./RepoCard";

export default function RepoList({ repos }) {
    if (!repos.length) return null;

    console.log("Length of repos", { repos });


    return (
        <div>
            {repos.map((repo) =>
            (
                <RepoCard key={repo.id} repo={repo} />
            ))}
        </div>
    );
}