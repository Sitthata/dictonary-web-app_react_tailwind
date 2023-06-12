import "../dist/output.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import FontProvider from "./FontProvider";
import { useContext } from "react";
import { FontContext } from "./FontContext";
import { DarkMode } from "@chakra-ui/react";
import { DarkModeProvider } from "./DarkModeContext";

function App() {
  const fontMapping = {
    "San Serif": '"Roboto", sans-serif',
    Serif: "Georgia, serif",
    Mono: '"Space Mono", monospace',
  };

  return (
    <div className="w-screen h-screen bg-light dark:bg-dark-primary dark:text-white">
      <DarkModeProvider>
        <FontProvider>
          <AppContent fontMapping={fontMapping} />
        </FontProvider>
      </DarkModeProvider>
    </div>
  );
}

// Split into separate component to ensure FontContext is being used within FontProvider
const AppContent = ({ fontMapping }) => {
  const { font } = useContext(FontContext);

  const appStyle = {
    fontFamily: fontMapping[font],
  };

  return (
    <div style={appStyle} className="max-w-[47rem] justify-center mx-auto">
      <NavBar />
      <SearchBar />
    </div>
  );
};

export default App;
