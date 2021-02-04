import inscription from "../assets/Photos/event/inscription.jpg";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Inscription } from "../styled-components/Evenements.jsx";

import {
  Background,
  FlexBox1,
  P,
  Formulaire,
  DivLabel,
  Label,
  Input,
  Select,
  StyledButton,
  Filter,
} from "../styled-components/InscriptionAtelier.jsx";

export default function Header() {
  const [evenements, setEvenements] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/evenements`,
    }).then((res) => {
      setEvenements(res.data);
    });
  }, [setEvenements]);
  console.log(evenements);

  return (
    <>
      <Background>
        <Filter>
          <FlexBox1>
            <P>
              Remplissez les champs suivants pour vous inscrire à un évènement :
            </P>
            <Formulaire>
              <fieldset>
                <DivLabel>
                  <Label>Nom Prénom *</Label>
                  <Input
                    type="text"
                    name="nom"
                    placeholder="nom prénom"
                    required
                  />
                </DivLabel>
                <DivLabel>
                  <Label>Email *</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </DivLabel>
                <DivLabel>
                  <Label>Atelier</Label>
                  <Select>
                    {evenements.map((event, i) => (
                      <option value={i} key={i}>
                        {event.titre} - {event.date}
                      </option>
                    ))}
                  </Select>
                </DivLabel>
                <StyledButton type="submit" value="Envoyer">
                  Enregistrer
                </StyledButton>
              </fieldset>
            </Formulaire>
          </FlexBox1>
        </Filter>
      </Background>
    </>
  );
}
