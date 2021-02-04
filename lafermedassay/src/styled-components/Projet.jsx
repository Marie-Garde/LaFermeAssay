import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Flex = styled.div`
  background-image: url("https://images.pexels.com/photos/1094544/pexels-photo-1094544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  height: 90vh;
  opacity: 0.8;
  @media ${Device.mobile} {
    height: 140vh;
  }
`;

export const FlexTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8vh;
  padding-top: 15vh;
  justify-content: space-around;
`;

export const Trait = styled.div`
  background-color: white;
  height: 1px;
  width: 30%;
  margin-top: 1vh;
`;

export const Trait2 = styled.div`
  background-color: white;
  height: 1px;
  width: 30%;
  margin-top: 1vh;
`;

export const P = styled.p`
  font-family: "Josefin Sans";
  font-size: 2rem;
  color: white;
  @media ${Device.mobile} {
    font-size: 1.2rem;
  }
`;

export const Text = styled.p`
  font-family: "Josefin Sans";
  font-size: 1.5rem;
  color: white;
  text-align: center;
  padding-right: 10vw;
  padding-left: 10vw;
  padding-top: 10vh;
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const Text2 = styled.p`
  font-family: "Josefin Sans";
  font-size: 1.5rem;
  color: white;
  text-align: center;
  padding-right: 10vw;
  padding-left: 10vw;
  padding-top: 2vh;
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;
