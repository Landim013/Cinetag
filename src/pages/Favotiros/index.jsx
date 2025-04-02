import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useFavoritoContext } from "contextos/favoritos";
import imgFavoritos from "../../assets/imagens/banner-favoritos.png";
import * as S from "./styles";

function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <S.Container>
      <>
        <Banner imagem={imgFavoritos} />
        <Titulo>
          <S.Title>Um lugar para guardar seus vídeos e filmes!</S.Title>
        </Titulo>
        <S.ContainerCard>
          {favorito.map((fav) => {
            return <Card {...fav} key={fav.id} />;
          })}
        </S.ContainerCard>
      </>
    </S.Container>
  );
}

export default Favoritos;
