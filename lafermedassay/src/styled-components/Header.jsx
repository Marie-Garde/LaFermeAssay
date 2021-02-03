import styled from "styled-components";

export const Background = styled.div`
  height: 100%;
  background-color: #ece2d8;
`;

export const Img = styled.img`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  top: 0;
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
`;

export const Logo = styled.h1`
  flex: 1;
  padding-left: 4vw;
  color: white;
  font-size: 1.8rem;
`;
export const Ul = styled.ul`
  flex: 2;
  display: flex;
  justify-content: space-around;
  color: white;
  font-size: 1.5rem;
`;
export const Li = styled.li`
  list-style: none;
  display: inline-block;
`;

export const Ressources = styled.p`
  font-size: 3rem;
  color: white;
  font-family: "Josefin Sans";
  position: absolute;
  top: 94vh;
  left: 27vw;
`;
