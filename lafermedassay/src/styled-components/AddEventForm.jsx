import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Background = styled.div`
  height: 100%;
  background-color: #ece2d8;
  display: flex;
  flex-direction: row;
`;

export const FlexBox1 = styled.div`
  height: 100vh;
  padding-right: 3vw;
  padding-left: 3vw;
  padding-top: 8vh;
  width: 50vw;
`;

export const FlexBox2 = styled.div`
  height: 94vh;
`;

export const P = styled.h1`
  font-size: 1.5rem;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    margin-left: 2vw;
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

export const LabelPlaces = styled.label`
  font-size: 1rem;
  color: black;
  margin-bottom: 0.5vw;
  margin-top: 2.5vh;
  width: 30%;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    display: none;
  }
`;

export const Input = styled.input`
  width: 50%;
  text-align: center;
  font-family: "Josefin Sans";
  opacity: 0.6;
  @media ${Device.mobile} {
    width: 82vw;
  }
`;
export const Textarea = styled.textarea`
  width: 51.5%;
  height: 30vh;
  font-family: "Josefin Sans";
  text-align: center;
  margin-bottom: 40vh;
  opacity: 0.6;
  @media ${Device.mobile} {
    width: 86vw;
  }
`;

export const StyledButton = styled.button`
  padding: 2 2vw;
  font-size: 1.5rem;
  font-family: "Josefin Sans";
  border: none;
  background: #7e5e4b;
  color: #c4c1c7;
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
    color: #d7d0db;
    cursor: pointer;
  }
  @media ${Device.mobile} {
    margin-left: 27vw;
    margin-bottom: 4vh;
    height: 9vw;
  }
`;
