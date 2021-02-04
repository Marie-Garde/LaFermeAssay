import styled from "styled-components";
import { Link } from "react-router-dom";
import { Device } from "../assets/Device/Device";

export const Background = styled.div`
  height: 100%;
  background-color: #ece2d8;
`;

export const DivCard = styled.div`
  height: 30vh;
  font-family: "Josefin Sans";
  display: flex;
  flex-direction: row;
  width: 90vw;
  margin-left: 5vw;
  padding-top: 2vh;
  background-color: #d1c3bb;
  box-shadow: 7px 9px 38px 0px rgba(110, 110, 110, 0.6);
  @media ${Device.mobile} {
    height: 12vh;
  }
`;

export const Array = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 5vw;
  padding-bottom: 2vh;
  padding-top: 3vh;
`;

export const H2 = styled.h2`
  font-size: 1.6rem;
  font-family: "Josefin Sans";
  font-weight: bold;
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const H3 = styled.h2`
  font-size: 1.6rem;
  font-family: "Josefin Sans";
  text-align: center;
  font-weight: bold;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 1.4rem;
  width: 9vw;
  padding-left: 0.7vw;
  text-align: center;
  @media ${Device.mobile} {
    font-size: 0.8rem;
    width: 10vw;
  }
`;

export const P = styled.p`
  font-size: 1.2rem;
  padding-left: 2vw;
  text-align: center;
  @media ${Device.mobile} {
    padding-left: 13vw;
    font-size: 0.8rem;
  }
`;

export const P2 = styled.p`
  font-size: 1.2rem;
  padding-left: 6vw;
  text-align: center;
  @media ${Device.mobile} {
    padding-left: 10vw;
    font-size: 0.8rem;
  }
`;

export const P3 = styled.p`
  font-size: 1.2rem;
  padding-left: 8.8vw;
  text-align: center;
  @media ${Device.mobile} {
    padding-left: 18vw;
    font-size: 0.8rem;
  }
`;

export const P4 = styled.p`
  font-size: 1.2rem;
  padding-left: 3.8vw;
  width: 16vw;
  text-align: center;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const P5 = styled.p`
  font-size: 1.2rem;
  padding-left: 8.6vw;
  text-align: center;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const P6 = styled.p`
  font-size: 1.2rem;
  padding-left: 12vw;
  text-align: center;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const Trait = styled.div`
  background-color: #7e5e4b;
  box-shadow: 7px 9px 38px 0px rgba(110, 110, 110, 0.6);
  height: 4px;
  width: 90.75%;
  margin-top: 1vh;
  margin-left: 5vw;
`;

export const Title = styled.h1`
  color: #7e5e4b;
  font-size: 3rem;
  font-family: "Josefin Sans";
  font-weight: bold;
  width: 100%;
  text-align: center;
  padding-top: 7vh;
  padding-bottom: 3vh;
  @media ${Device.mobile} {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  position: relative;
  margin-left: 38vw;
  background-color: black;
  border: solid 1px black;
  width: 22vw;
  height: 18vh;
  margin-top: 4vh;
  margin-bottom: 4vh;
  box-shadow: 7px 9px 38px 0px rgba(110, 110, 110, 0.6);
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
  }
  @media ${Device.mobile} {
    width: 60vw;
    height: 10vh;
    margin-left: 20vw;
  }
`;

export const P1 = styled(Link)`
  font-size: 1.6rem;
  font-family: "Josefin Sans";
  position: absolute;
  left: 2%;
  top: 30%;
  color: white;
  text-decoration: none;
  @media ${Device.mobile} {
    font-size: 1rem;
    top: 25%;
  }
`;

export const Inscription = styled.img`
  width: 22vw;
  height: 18vh;
  opacity: 50%;
  left: 0;
  top: 0;
  position: absolute;
  @media ${Device.mobile} {
    width: 60vw;
    height: 10vh;
  }
`;
