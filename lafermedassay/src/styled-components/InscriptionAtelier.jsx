import styled from "styled-components";
import { Device } from "../assets/Device/Device";
import inscription from "../assets/Photos/event/inscription.jpg";

export const Background = styled.div`
  height: 100%;
  background-color: #ece2d8;
  display: flex;
  flex-direction: row;
  background-image: url(${inscription});
  @media ${Device.mobile} {
    height: 80vh;
  }
`;

export const Filter = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const FlexBox1 = styled.div`
  height: 100vh;
  padding-right: 3vw;
  padding-left: 3vw;
  padding-top: 8vh;
  width: 50vw;
  @media ${Device.mobile} {
    width: 70vw;
    height: 50vh;
  }
`;

export const P = styled.h1`
  font-size: 1.5rem;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    margin-left: 2vw;
    font-size: 1.2rem;
  }
`;

export const Formulaire = styled.form`
  width: 65vw;
  margin-top: 8vh;
  margin-right: 2vw;
  display: flex;
  font-size: 1.5em;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
  @media ${Device.mobile} {
    margin-left: 2vw;
  }
`;

export const DivLabel = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-bottom: 6vh;
  width: 100%;
  height: 2.7vh;
  @media ${Device.mobile} {
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  color: black;
  margin-bottom: 0.5vw;
  width: 30%;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    display: none;
  }
`;

export const Select = styled.select`
  font-size: 1rem;
  color: black;
  margin-bottom: 0.5vw;
  width: 51.8%;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    width: 86vw;
  }
`;

export const Input = styled.input`
  width: 50%;
  text-align: center;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    width: 82vw;
  }
`;

export const StyledButton = styled.button`
  padding: 2 2vw;
  font-size: 1.5rem;
  font-family: "Josefin Sans";
  border: none;
  background: #7e5e4b;
  color: white;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  border-bottom: 2px solid transparent;
  outline: none;
  height: 4vh;
  border-radius: 5px;
  margin-top: 10vh;
  margin-bottom: 20vh;
  &:hover {
    background: #d1c3bb;
    color: white;
    cursor: pointer;
  }
  @media ${Device.mobile} {
    margin-left: 20vw;
    margin-bottom: 4vh;
    height: 9vw;
  }
`;
