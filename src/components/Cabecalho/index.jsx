import * as S from "./styles";

import CabecalhoLink from "components/CabecalhoLink/index";
import { Link } from "react-router-dom";
import logo from "../../assets/imagens/logo.png";
function Cabecalho() {
  return (
    <S.HeaderCustom>
      <Link to="/">
        <img src={logo} alt="Logo cinetag"></img>
      </Link>
      <nav>
        <CabecalhoLink url={"./"}>Home</CabecalhoLink>
        <CabecalhoLink url={"./Favoritos"}>Favoritos</CabecalhoLink>
      </nav>
    </S.HeaderCustom>
  );
}

export default Cabecalho;
