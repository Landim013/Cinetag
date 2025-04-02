import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 240px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ img }) => `url('${img}')`};
`;
