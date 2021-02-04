import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Background = styled.div`
  height: 100%;
  background-color: #ece2d8;
`;

export const CarouselComplet = styled.div`
  padding-top: 15vh;
  margin-bottom: 5vh;
  @media ${Device.mobile} {
    padding-top: 7vh;
    margin-bottom: 2vh;
  }
`;

export const Carousel2 = styled.div`
  width: 40vw;
  height: 50vh;
`;

export const Slide = styled.div`
  width: 80vw;
  height: 50vh;
  padding-left: 10vw;
  padding-right: 10vw;
  display: flex;
  flex-direction: row;
  @media ${Device.mobile} {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  flex: 1;
  width: 50vw;
  box-shadow: 7px 9px 38px 0px rgba(110, 110, 110, 0.6);
  @media ${Device.mobile} {
    width: 60vw;
    margin-left: 5.5vw;
  }
`;

export const Text = styled.div`
  flex: 1.5;
  padding-left: 5vw;
  padding-top: 5vh;
`;

export const H1 = styled.h1`
  font-family: "Josefin Sans";
  font-size: 2rem;
  @media ${Device.mobile} {
    font-size: 1.5rem;
  }
`;

export const P = styled.p`
  font-family: "Josefin Sans";
  padding-top: 5vh;
  font-size: 1.3rem;
  @media ${Device.mobile} {
    font-size: 0.8rem;
    padding-top: 2vh;
  }
`;

export const Link = styled.p`
  font-family: "Josefin Sans";
  padding-top: 5vh;
  font-size: 1.3rem;
  @media ${Device.mobile} {
    font-size: 0.6rem;
    padding-top: 1vh;
  }
`;
