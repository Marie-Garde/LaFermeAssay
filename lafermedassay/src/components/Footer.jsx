import {
  Background,
  Adresse,
  Contact,
  Lieu,
  Flex,
  Mentions,
  Author,
} from "../styled-components/Footer.jsx";

export default function MainPage() {
  return (
    <>
      <Background>
        <Adresse>
          <Contact>Nous retrouver</Contact>
          <Lieu>12 rue des Fauvettes, 37890 Assay</Lieu>
        </Adresse>
        <Flex>
          <Mentions>Mentions légales </Mentions>
          <Author>Designed by Magicians</Author>
        </Flex>
      </Background>
    </>
  );
}
