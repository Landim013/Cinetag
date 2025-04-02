import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/favoritos";
import * as S from "./styles";

function LayoutPage({ children }) {
  return (
    <S.Layout>
      <Cabecalho />
      <FavoritosProvider>
        <S.Content>{children}</S.Content>
      </FavoritosProvider>
      <Rodape />
    </S.Layout>
  );
}

export default LayoutPage;
