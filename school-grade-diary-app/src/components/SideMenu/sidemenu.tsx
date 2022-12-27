import React, { useState } from "react";
import { SidemenuContainer } from "./sidemenu.styles";

export const SideMenu = () => {
  const [startTransition, setStartTransition] = useState(false);
  return (
    <SidemenuContainer startTransition={startTransition}>
      SideMenu
      <button onClick={() => setStartTransition((prevState) => !prevState)}>
        {" "}
        click me{" "}
      </button>
    </SidemenuContainer>
  );
};
