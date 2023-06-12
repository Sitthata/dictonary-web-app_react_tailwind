import React from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import Play from "../assets/images/icon-play.svg";
import useDictonary from "../hooks/useDictonary";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // search term
  const [searchResults, setSearchResults] = useState([]);
  const [loading, data, error] = useDictonary(searchTerm);

  const handleClick = () => {
    setSearchTerm(inputValue);
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
    <div className="mx-5">
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
            sx={{ bg: "transparent", _hover: { color: "purple" } }}
          >
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>

      {/* Conditionally render the extracted part only if search results exist */}
      <div className="mb-10">
        {searchResults.length > 0 && (
          <div className="flex justify-between">
            <div>
              <h2 className="text-5xl font-bold leading-relaxed">
                {searchResults[0].word}
              </h2>
              <h3 className="text-2xl text-light-utility">
                {searchResults[0].phonetic}
              </h3>
            </div>
            <button>
              <img src={Play} alt="" />
            </button>
          </div>
        )}

        {searchResults.length > 0 &&
          searchResults.map((result, index) => {
            const { meanings } = result;
            return (
              <div key={index} className="mb-10">
                {meanings.map((meaning, meaningIndex) => {
                  return (
                    <div key={meaningIndex}>
                      <div className="flex items-center my-8">
                        <h2 className="text-xl italic font-bold">
                          {meaning.partOfSpeech}
                        </h2>
                        <hr className="w-full my-auto ml-5" />
                      </div>
                      <div>
                        <p className="mb-4 text-light-grey-light">Meaning</p>

                        <UnorderedList>
                          {meaning.definitions.map((def, index) => {
                            return (
                              <ListItem key={index} color="#A445ED">
                                <p className="text-light-main">{def.definition}</p>
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
