import header from "../assets/Photos/header.jpg";
import {
  Background,
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
