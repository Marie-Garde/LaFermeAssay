import axios from "axios";
import useForm from "./AddEvent.jsx";
import React, { useState, useEffect } from "react";

import DeleteEvent from "./DeleteEvent";

import {
  Flex,
  P,
  DivCard,
  H1,
  Button,
  FlexBox1,
} from "../styled-components/DeleteEvent.jsx";

export default function DeleteEvenements() {
  const [evenements, setEvenements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `http://localhost:3001/evenements`,
    }).then((res) => {
      setEvenements(res.data);
      setLoading(false);
    });
  }, [evenements]);

  const removeEvent = (idEvenements) => {
    let url = `http://localhost:3001/evenements/${idEvenements}`;
    axios.delete(url).then((res) => {
      const del = evenements.filter(
        (evenements) => idEvenements !== evenements.idEvenements
      );
      setEvent(del);
    });
  };

  return (
    <Flex>
      {evenements.map(({ idEvenements, titre, date }) => (
        <DivCard key={idEvenements}>
          <FlexBox1>
            <H1>{titre}</H1>
            <P>{date}</P>
          </FlexBox1>
          <Button onClick={() => removeEvent(idEvenements)}>Supprimer</Button>
        </DivCard>
      ))}
    </Flex>
  );
}
