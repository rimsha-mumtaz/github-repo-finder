import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function RepoDetail() {
    const { id } = useParams();
    const [repo, setRepo] = useState(null);

    useEffect(() => {

        console.log("Fetching repo with id ", { id });

        const fetchRepo = async () => {
            const res = await fetch(`https://api.github.com/repositories/${id}`);

            console.log("Response of the api", { res });

            const data = await res.json();

            console.log("Json data of the api", { data });

            setRepo(data);
        };
        fetchRepo();
    }, [id]);

    if (!repo) return <p>Loading...</p>

    return (
        <div>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank">Open on GitHub</a>
        </div>
    );
}