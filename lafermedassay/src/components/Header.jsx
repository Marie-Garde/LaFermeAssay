import header from "../assets/Photos/header.jpg";
import {
  Img,
  NavBar,
  Ul,
  Li,
  Logo,
  Ressources,
} from "../styled-components/Header.jsx";

export default function Header() {
  return (
    <>
      <NavBar>
        <Logo>Ferme d'Assay</Logo>
        <Ul>
          <Li>La ferme</Li>
          <Li>Médecine chinoise</Li>
          <Li>Evènements</Li>
          <Li>Nous contacter</Li>
        </Ul>
      </NavBar>
      <Img src={header} />
      <Ressources>Ressourcez-vous en pleine nature</Ressources>
    </>
  );
}
