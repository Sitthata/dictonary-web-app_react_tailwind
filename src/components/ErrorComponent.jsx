import React from "react";
import { WarningIcon } from "@chakra-ui/icons";

const ErrorComponent = () => {
  return (
    <div className="mt-5 text-center">
      <WarningIcon w={12} h={12} mb=".8rem" />
      <h1 className="text-xl font-bold leading-relaxed">
        No Definitions Found
      </h1>
      <p className="text-light-grey">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default ErrorComponent;
