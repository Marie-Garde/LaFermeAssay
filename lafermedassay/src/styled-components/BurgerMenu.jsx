import styled from "styled-components";
import { Link } from "react-router-dom";

export const P = styled.p`
  font-size: 4rem;
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
