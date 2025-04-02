import Banner from "components/Banner";
import Titulo from "components/Titulo";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imgPlayer from "../../assets/imagens/banner-player.png";
import * as S from "./styles";
function Player() {
  const params = useParams();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${params.id}`
    )
      .then((resposta) => resposta.json())
      .then((dados) => setVideo(...dados));
  }, [params]);

  if (!video || !params) {
    return <NaoEncontrada />;
  }
  return (
    <S.Container>
      <Banner imagem={imgPlayer} />
      <Titulo>
        <S.Title>Player </S.Title>
      </Titulo>
      <S.ConatinerPlayer>
        <S.IframePlayer
          width="100%"
          height="100vh"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></S.IframePlayer>
      </S.ConatinerPlayer>
    </S.Container>
  );
}

export default Player;
