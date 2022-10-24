import React from "react";
import { LayoutCardGrande } from "./styles";
import { ImgCardGrande } from "./styles";
import { TituloCardGrande } from "./styles";
import { InfosCardGrande } from "./styles";

function CardGrande(props) {
  return (
    <LayoutCardGrande>
      <ImgCardGrande src={props.imagem} />
      <InfosCardGrande>
        <TituloCardGrande>{props.nome}</TituloCardGrande>
        <p>{props.descricao}</p>
      </InfosCardGrande>
    </LayoutCardGrande>
  );
}

export default CardGrande;
