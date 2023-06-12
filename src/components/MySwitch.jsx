import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";
import { useState } from "react";

const MySwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <FormControl
      display="flex"
      alignItems="center"
      onChange={(e) => setIsToggled(e.target.checked)}
    >
      <Switch id="email-alerts" colorScheme="purple" mx="4"/>
      {isToggled ? <MoonIcon /> : <SunIcon />}
    </FormControl>
  );
};

export default MySwitch;
