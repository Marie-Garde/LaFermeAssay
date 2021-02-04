import React, { useState, useEffect } from "react";

import { Nav, BurgerMenuContainer } from "../styled-components/BurgerMenu";

export default function BurgerMenu() {
  const [status, setStatus] = useState("close");

  return (
    <nav>
      <BurgerMenuContainer
        role="button"
        onClick={() => setStatus(status === "open" ? "close" : "open")}
      >
        <i className={status}></i>
        <i className={status}></i>
        <i className={status}></i>
      </BurgerMenuContainer>
    </nav>
  );
}
