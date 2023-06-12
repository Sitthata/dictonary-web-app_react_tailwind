import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { FontContext } from "../FontContext";
import React, { useContext } from "react";
import { useDarkMode } from "../DarkModeContext";

const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState("San serif");
  const { font, setFont } = useContext(FontContext);
  const { darkMode, setDarkMode } = useDarkMode();

  const switchColor = darkMode ? "white" : "black";
  const switchBgColor = darkMode ? "#050505" : "white";

  const handleMenuItemClick = (e) => {
    setSelectedItem(e.target.textContent);
    setFont(e.target.textContent);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        px={4}
        py={2}
        minW="auto"
        background={switchBgColor}
        color={switchColor}
        sx={{
          _hover: {
            bg: "transparent",
            color: switchColor,
          },
        }}
      >
        {selectedItem}
      </MenuButton>
      <MenuList color={switchColor}>
        <MenuItem onClick={handleMenuItemClick}>San Serif</MenuItem>
        <MenuItem onClick={handleMenuItemClick}>Serif</MenuItem>
        <MenuItem onClick={handleMenuItemClick}>Mono</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
