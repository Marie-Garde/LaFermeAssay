import couple from "../assets/Photos/main/couple.jpg";

import {
  FlexTitle,
  Trait,
  Trait2,
  P,
  Text,
  Img,
} from "../styled-components/Histoire.jsx";

export default function Histoire() {
  return (
    <>
      <FlexTitle>
        <Trait></Trait>
        <P>Notre histoire</P>
        <Trait2></Trait2>
      </FlexTitle>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor i Lorem
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet,
        consecteturdo eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        i Lorem
      </Text>
      <Img src={couple} />
    </>
  );
}
