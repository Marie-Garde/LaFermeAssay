import button from "../assets/Photos/event/button.jpg";

import axios from "axios";
import React, { useState, useEffect } from "react";

import {
  Background,
  DivCard,
  H1,
  P,
  Title,
  Array,
  H2,
  H3,
  P2,
  P3,
  P4,
  P5,
  P6,
  Trait,
  Button,
  P1,
  Inscription,
} from "../styled-components/Evenements.jsx";

export default function Evenements() {
  const [evenements, setEvenements] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `http://localhost:3001/evenements`,
    }).then((res) => {
      setEvenements(res.data);
      setLoading(false);
    });
  }, [setEvenements]);

  return (
    <Background>
      <>
        <Title>Retrouvez les prochains cours et ateliers</Title>
        <Array>
          <H2>Titre</H2>
          <H2>Date</H2>
          <H2>Heure</H2>
          <H2>Durée</H2>
          <H3>Description</H3>
          <H2>Nombre de places</H2>
          <H2>Prérequis</H2>
        </Array>
        <Trait></Trait>
        {evenements.map((event, i) => (
          <DivCard key={i}>
            <H1>{event.titre}</H1>
            <P>{event.date}</P>
            <P2>{event.heure}</P2>
            <P3>{event.duree}</P3>
            <P4>{event.description}</P4>
            <P5>{event.nbPlaces}</P5>
            <P6>{event.prerequis}</P6>
          </DivCard>
        ))}
        <Button>
          <Inscription src={button}></Inscription>
          <P1>Un atelier vous intéresse ? Inscrivez vous</P1>
        </Button>
      </>
    </Background>
  );
}
