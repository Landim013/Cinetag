import * as S from "./styles";

function CabecalhoLink({ url, children }) {
  return <S.LinkCustom to={url}>{children}</S.LinkCustom>;
}

export default CabecalhoLink;
