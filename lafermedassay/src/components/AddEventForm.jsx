import axios from "axios";
import useForm from "./AddEvent.jsx";
import React, { useState, useEffect } from "react";

import DeleteEvent from "./DeleteEvent";

import {
  Background,
  FlexBox1,
  FlexBox2,
  P,
  Formulaire,
  DivLabel,
  Label,
  Input,
  StyledButton,
  Textarea,
  LabelPlaces,
} from "../styled-components/AddEventForm.jsx";

export default function AddEvenements() {
  const { handleChange, values, handleSubmit } = useForm();
  return (
    <Background>
      <FlexBox1>
        <P>Remplissez les champs suivants pour ajouter un évènement :</P>
        <Formulaire onSubmit={handleSubmit}>
          <fieldset>
            <DivLabel>
              <Label>Titre *</Label>
              <Input
                type="text"
                name="titre"
                placeholder="titre"
                value={values.titre}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Date *</Label>
              <Input
                type="text"
                name="date"
                placeholder="JJ/MM/AAAA"
                value={values.date}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Heure *</Label>
              <Input
                type="text"
                name="heure"
                placeholder="HHhMM"
                value={values.heure}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Durée *</Label>
              <Input
                type="text"
                name="duree"
                placeholder="durée"
                value={values.duree}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Description *</Label>
              <Textarea
                type="text"
                name="description"
                placeholder="description"
                value={values.description}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <LabelPlaces>Nombre de places *</LabelPlaces>
              <Input
                type="text"
                name="nbPlaces"
                placeholder="nombre de places"
                value={values.nbPlaces}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <LabelPlaces>Prérequis</LabelPlaces>
              <Input
                type="text"
                name="prerequis"
                placeholder="prérequis"
                value={values.prerequis}
                onChange={handleChange}
              />
            </DivLabel>
            <StyledButton type="submit" value="Envoyer">
              Enregistrer
            </StyledButton>
          </fieldset>
        </Formulaire>
      </FlexBox1>
      <FlexBox2>
        <DeleteEvent />
      </FlexBox2>
    </Background>
  );
}
