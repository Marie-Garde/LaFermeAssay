import header from "../assets/Photos/header.jpg";
import React, { useState, useEffect } from "react";

import {
  Background,
  Img,
  NavBar,
  Ul,
  Li,
  Logo,
  Ressources,
  Navigation,
  BurgerMenuContainer,
  Ul2,
  Li2,
  Barre,
  NavBis,
} from "../styled-components/Header.jsx";

export default function Header() {
  const [status, setStatus] = useState("close");
  return (
    <>
      <Background>
        <NavBar>
          <Logo to="/">Ferme d'Assay</Logo>
          <Ul>
            <Li>La ferme</Li>
            <Li>Médecine chinoise</Li>
            <Li to="/evenements">Evènements</Li>
            <Li>Nous contacter</Li>
          </Ul>
        </NavBar>
        <Img src={header} />
        <Ressources>Ressourcez-vous en pleine nature</Ressources>
      </Background>
    </>
  );
}
