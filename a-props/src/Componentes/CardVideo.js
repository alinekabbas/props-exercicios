import React from "react";
import { InfosUsuario } from "./InfosUsuario";
import Usuario from "../Componentes/Usuario.png"

export function CardVideo(props) {
  const nomeUsuario = "Aline"

  function reproduzVideo() 
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      {props.imagem}
      <h4>{props.tituloDoVideo}</h4>
      <InfosUsuario
        imagemUsuario={<img src={Usuario} alt="imagem usuário" />}
        userName={nomeUsuario}
      />
    </div>
  )
}