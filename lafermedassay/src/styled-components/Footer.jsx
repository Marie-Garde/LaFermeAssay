import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Background = styled.div`
  height: 15vh;
  background-color: #7e5e4b;
`;

export const Adresse = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: 30vw;
  padding-left: 30vw;
  padding-top: 3vh;
  @media ${Device.mobile} {
    width: 90vw;
    padding-left: 6vw;
    text-align: center;
  }
`;

export const Contact = styled.p`
  font-size: 1.5rem;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const Lieu = styled.p`
  font-size: 1.3rem;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  padding-left: 37vw;
  padding-top: 6vh;
  @media ${Device.mobile} {
    padding-left: 10vw;
    padding-top: 3vh;
  }
`;

export const Mentions = styled.p`
  font-size: 1rem;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const Author = styled.p`
  font-size: 1rem;
  font-family: "Josefin Sans";
  padding-left: 1vw;
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;
