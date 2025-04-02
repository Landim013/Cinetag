import { useFavoritoContext } from "contextos/favoritos";
import iconUnchecked from "../../assets/imagens/favorite.png";
import iconChecked from "../../assets/imagens/favorite_outline.png";
import * as S from "./styles";

function Card({ id, capa, titulo }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const clickFavorito = favorito.some((item) => item.id === id);
  const iconHeart = clickFavorito ? iconUnchecked : iconChecked;
  console.log(favorito, "aqui");
  return (
    <S.Container>
      <S.CustomLink to={`/${id}`}>
        <S.Capa src={capa} alt={titulo} />
        <S.Title>{titulo}</S.Title>
      </S.CustomLink>

      <S.Icon
        src={iconHeart}
        alt="Favoritar"
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </S.Container>
  );
}

export default Card;
