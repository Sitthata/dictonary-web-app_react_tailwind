import "../dist/output.css";
import useDictionary from "./hooks/useDictonary";

function App() {
  const [ loading, data, error ] = useDictionary('hello');

  if (loading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>{data[0].word}</h1>
      {data[0].meanings.map((meaning, i) => (
        <div key={i}>
          <h2>{meaning.partOfSpeech}</h2>
          {meaning.definitions.map((def, j) => (
            <p key={j}>{def.definition}</p>
          ))}
        </div>
      ))}
      {/* render other data as needed */}
    </div>
  );
}

export default App;
