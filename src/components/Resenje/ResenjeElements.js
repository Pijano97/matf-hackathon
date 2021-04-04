import styled from "styled-components";

export const AboutUsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const AboutUsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    max-width: 1000px;
  }
`;

export const AboutUsCard = styled.div`
  background: #fff;
  display: flex;
  color: #36454f;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-put;
    cursor: pointer;
  }
`;

export const AboutUsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  border-radius: 50%;
`;

export const AboutUsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    margin-bottom: 14px;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 64px;
  }
`;

export const AboutUsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 480px) {
  }
`;

export const AboutUsP = styled.p`
  font-size: 1rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;