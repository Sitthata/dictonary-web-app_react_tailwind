import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState("San serif");
  const handleMenuItemClick = (e) => {
    setSelectedItem(e.target.textContent);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} px={4} py={2} minW="auto" background="white">
        {selectedItem}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleMenuItemClick}>San Serif</MenuItem>
        <MenuItem onClick={handleMenuItemClick}>Serif</MenuItem>
        <MenuItem onClick={handleMenuItemClick}>Mono</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
