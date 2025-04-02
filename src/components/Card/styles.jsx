import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.div`
  padding: 0 0 1em 0;
  margin-top: 0.5em;
  width: 282px;
  background-color: #e2e2e2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Capa = styled.img`
  width: 100%;
`;

export const Title = styled.h2`
  padding: 0 27px;
`;

export const Icon = styled.img`
  width: 25px;
  padding: 0 27px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
  text-align: left;
`;
