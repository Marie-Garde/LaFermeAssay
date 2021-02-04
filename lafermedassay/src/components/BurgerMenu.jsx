import React, { useState, useEffect } from "react";

import {
  BurgerMenuContainer,
  Navigation,
  Ul,
  Li,
} from "../styled-components/BurgerMenu";

export default function BurgerMenu() {
  const [status, setStatus] = useState("close");

  return (
    <>
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
      <Navigation>
        <Ul>
          <Li>La ferme</Li>
          <Li>Médecine chinoise</Li>
          <Li>Evènements</Li>
          <Li>Contactez nous</Li>
        </Ul>
      </Navigation>
    </>
  );
}
