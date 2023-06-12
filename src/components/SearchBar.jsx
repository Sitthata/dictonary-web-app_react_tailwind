import React from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import Play from "../assets/images/icon-play.svg";
import useDictonary from "../hooks/useDictonary";
import ErrorComponent from "./ErrorComponent";
import ResultHeader from "./ResultHeader";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { useDarkMode } from "../DarkModeContext";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // search term
  const [searchResults, setSearchResults] = useState([]);
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [loading, data, error] = useDictonary(searchTerm);
  const { darkMode } = useDarkMode();

  const switchColor = darkMode ? "white" : "black";
  

  const handleClick = () => {
    setSearchTerm(inputValue);
    setSearchResults([]);
    setSearchAttempted(true);
    console.log(searchResults);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (data) {
      setSearchResults(data);
    }
  }, [data]);

  return (
    <div className="mx-5 dark:bg-dark-primary">
      <InputGroup size="lg" mt="4" mb="12">
        <Input
          pr="4.5rem"
          borderRadius="1rem"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter any word to search..."
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            onClick={handleClick}
            size="sm"
            color={switchColor}
            sx={{ bg: "transparent", _hover: { color: "purple" } }}
          >
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>

      {/* Conditionally render the extracted part only if search results exist */}
      <div className="mb-10 dark:text-white">
        {loading ? (
          <p>Loading...</p>
        ) : searchAttempted ? (
          searchResults.length > 0 ? (
            <ResultHeader searchResults={searchResults} />
          ) : (
            <ErrorComponent />
          )
        ) : null}

        {searchResults.length > 0 &&
          searchResults.map((result, index) => {
            const { meanings } = result;
            return (
              <div key={index} className="mb-10 dark:text-white">
                {meanings.map((meaning, meaningIndex) => {
                  return (
                    <div key={meaningIndex}>
                      <div className="flex items-center my-8">
                        <h2 className="font-sans text-xl italic font-bold dark:text-white">
                          {meaning.partOfSpeech}
                        </h2>
                        <hr className="w-full my-auto ml-5" />
                      </div>
                      <div>
                        <p className="mb-4 text-light-grey-light">Meaning</p>

                        <UnorderedList p="10px">
                          {meaning.definitions.map((def, index) => {
                            return (
                              <ListItem key={index} color="#A445ED">
                                <p className="text-light-main dark:text-white">
                                  {def.definition}
                                </p>
                              </ListItem>
                            );
                          })}
                        </UnorderedList>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
