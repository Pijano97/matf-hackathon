import styled from "styled-components";

export const Problems = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  /* background: #010606; */
  background: #fff;
`;

export const ProblemTitle = styled.h1`
  font-size: 74px;
  color: #fff;
  z-index: 999;
`;

export const ProblemBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ProblemImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
