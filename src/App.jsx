import "../dist/output.css";
import useDictionary from "./hooks/useDictonary";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

function App() {
  const [loading, data, error] = useDictionary("hello");

  if (loading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="w-screen h-screen max-w-[47rem] justify-center mx-auto">
      <NavBar />
      <SearchBar />
    </div>
  );
}

export default App;
