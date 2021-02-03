import ferme from "../assets/Photos/main/ferme.jpg";
import medecine from "../assets/Photos/main/medecine.jpg";
import chambre from "../assets/Photos/main/chambre.jpg";

import Histoire from "./Histoire";
import Projet from "./Projet";

import React from "react";
import Carousel from "nuka-carousel";

import {
  Background,
  CarouselComplet,
  Slide,
  Img,
  Text,
  H1,
  P,
  Link,
} from "../styled-components/MainPage.jsx";

export default function MainPage() {
  return (
    <>
      <Background>
        <CarouselComplet>
          <Carousel>
            <Slide>
              <Img src={ferme} />
              <Text>
                <H1>La ferme</H1>
                <P>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor i Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor i
                </P>
                <Link>En savoir plus...</Link>
              </Text>
            </Slide>
            <Slide>
              <Img src={medecine} />
              <Text>
                <H1>Médecine chinoise</H1>
                <P>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor i Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor i
                </P>
                <Link>En savoir plus...</Link>
              </Text>
            </Slide>
            <Slide>
              <Img src={chambre} />
              <Text>
                <H1>Auberge</H1>
                <P>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor i Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor i
                </P>
                <Link>En savoir plus...</Link>
              </Text>
            </Slide>
          </Carousel>
        </CarouselComplet>
        <Histoire />
        <Projet />
      </Background>
    </>
  );
}
