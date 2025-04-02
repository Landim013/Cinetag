import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import imgHome from "../../assets/imagens/banner-home.png";
// import videos from "../../json/db.json";
import { useEffect, useState } from "react";
import * as S from "./styles";

function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/monicahillman/cinetag-api/videos"
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  return (
    <>
      <Banner imagem={imgHome} />
      <Titulo>
        <S.Title>Um lugar para guardar seus vídeos e filmes!</S.Title>
      </Titulo>
      <S.ContainerCard>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </S.ContainerCard>
    </>
  );
}

export default Inicio;
