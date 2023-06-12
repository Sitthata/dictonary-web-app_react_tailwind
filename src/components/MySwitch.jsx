import { FormControl, Switch } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";
import { useState } from "react";
import { DarkModeProvider, useDarkMode } from "../DarkModeContext";


const MySwitch = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();

  const handleToggle = (e) => {
    setIsToggled(e.target.checked);
    setDarkMode(!darkMode);
  };

  return (
    <FormControl
      display="flex"
      alignItems="center"
      onChange={handleToggle}
    >
      <Switch id="email-alerts" colorScheme="purple" mx="4"/>
      {isToggled ? <MoonIcon /> : <SunIcon />}
    </FormControl>
  );
};

export default MySwitch;
