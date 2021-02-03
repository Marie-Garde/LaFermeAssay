import ferme from "../assets/Photos/main/ferme.jpg";
import medecine from "../assets/Photos/main/medecine.jpg";
import chambre from "../assets/Photos/main/chambre.jpg";

import React from "react";
import Carousel from "nuka-carousel";

import {
  CarouselComplet,
  Slide,
  Img,
  P,
} from "../styled-components/MainPage.jsx";

export default function MainPage() {
  return (
    <CarouselComplet>
      <Carousel>
        <Slide>
          <Img src={ferme} />
          <P>blabla</P>
        </Slide>
        <Slide>
          <Img src={medecine} />
          <P>blabla</P>
        </Slide>
        <Slide>
          <Img src={chambre} />
          <P>blabla</P>
        </Slide>
      </Carousel>
    </CarouselComplet>
  );
}
