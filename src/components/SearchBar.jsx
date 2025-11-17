

export default function SearchBar({ username, setUsername, fetchRepo }) {
    return (
        <div>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter github username" />
            <button onClick={fetchRepo}>Seacrh</button>
        </div>
    );
}
