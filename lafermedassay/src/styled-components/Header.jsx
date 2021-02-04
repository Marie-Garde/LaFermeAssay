import styled from "styled-components";
import { Link } from "react-router-dom";
import { Device } from "../assets/Device/Device";

export const Background = styled.div`
  height: 100%;
  background-color: #ece2d8;
`;

export const Img = styled.img`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  top: 0;
  @media ${Device.mobile} {
    height: 30vh;
  }
`;

export const NavBar = styled.div`
  display: flex;
  height: 8vh;
  align-items: center;
  font-family: "Josefin Sans";
  background-color: #7e5e4b;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  overflow: hidden;
  width: 100%;
  z-index: 10;
  @media ${Device.mobile} {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const Logo = styled(Link)`
  flex: 1;
  padding-left: 4vw;
  color: white;
  font-size: 1.8rem;
  text-decoration: none;
  @media ${Device.mobile} {
    font-size: 1.2rem;
    padding-top: 1vh;
  }
`;

export const Ul = styled.ul`
  flex: 2;
  display: flex;
  justify-content: space-around;
  color: white;
  font-size: 1.5rem;
  @media ${Device.mobile} {
    font-size: 0.8rem;
    padding-top: 1vh;
    width: 95vw;
  }
`;

export const Li = styled(Link)`
  list-style: none;
  display: inline-block;
  color: white;
  text-decoration: none;
`;

export const Ressources = styled.p`
  font-size: 3rem;
  color: white;
  font-family: "Josefin Sans";
  position: absolute;
  top: 94vh;
  left: 26vw;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const BurgerMenuContainer = styled.p`
  display: flex;
  flex-direction: column;
  i {
    background-color: gray;
    width: 32px;
    height: 4px;
    margin: 4px;
    border-radius: 2px;
    transition: all ease 0.5s;
  }

  .open:nth-child(1) {
    transform: rotate(45deg) translateY(16px);
  }
  .open:nth-child(2) {
    opacity: 0;
  }
  .open:nth-child(3) {
    transform: rotate(-45deg) translateY(-16px);
  }
  .close:nth-child(1) {
    transform: rotate(0) translateY(0);
  }
  .close:nth-child(2) {
    opacity: 1;
  }
  .close:nth-child(3) {
    transform: rotate(0) translateY(0);
  }
`;

export const Barre = styled.div`
  ul {
    background-color: gray;
    width: 20vw;
    height: 50vh;
    z-index: 500;
    position: relative;
    top: 8vh;
    right: 0;
  }
  .open:nth-child() {
    transform: translateX(10vw);
  }
  .close:nth-child() {
    transform: translateY(0);
  }
`;

export const Ul2 = styled.ul`
  list-style: none;
  height: 50vh;
`;

export const Li2 = styled.li`
  list-style: none;
  padding-bottom: 10vh;
`;
