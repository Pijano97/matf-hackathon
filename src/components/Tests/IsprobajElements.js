import styled from "styled-components";

export const Isprobaj = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  background: #000;

  @media screen and (max-width: 768px) {
    height: 150vh;
    flex-direction: column;
  }
`;

export const IsprobajWeather = styled.div`
  justify-content: center;
  align-items: center;
  background: #292a2b;
  flex: 1;

  @media screen and (max-width: 768px) {
    height: 401px;
    margin-top: 60px;
    background: none;
  }
`;

export const WeatherTest = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeatherWrapper = styled.div`
  background: #292a2b;
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex: 1;

  @media screen and (max-width: 768px) {
    margin-top: 60px;
    background: #292a2b;
  }
`;

export const WeatherContainerOne = styled.div`
  display: flex;
`;

export const WeatherContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
  justify-self: flex-end;
  text-align: right;
`;

export const WeatherImg = styled.img`
  padding: 5px;
`;

export const WeatherTemperature = styled.h1`
  padding: 2px;
  color: #afafaf;
`;

export const WeatherInfo = styled.p`
  padding: 2px;
  color: #afafaf;
`;

export const IsprobajInputNaslov = styled.h1`
  margin-bottom: 0.7rem;
  color: #afafaf;
`;

export const WeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IsprobajResultsContainer = styled.div`
  flex: 1;
  max-width: 50%;

  @media screen and (max-width: 480px) {
    flex: none;
  }
`;

export const IsprobajInputContainer = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  justify-content: center;
`;

export const IsprobajInput = styled.form`
  background: #292a2b;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px 20px;
  width: 60%;
  display: grid;
  border-radius: 10px;
  grid-template-columns: 250px;
  grid-template-rows: repeat(7, 80px);
  text-align: center;

  &::placeholder {
    color: inherit;
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    flex: none;
  }
`;

export const IsprobajWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
`;

export const LoadingBarTitle = styled.h1`
  color: #afafaf;
  width: 300px;
`;

export const InputTemperatura = styled.input`
  color: #afafaf;
  width: 100%;
  line-height: 1.5;
  padding: 15px 10px;
  border: 1px solid hsl(0, 0%, 10%);
  background: hsl(0, 0%, 14%);

  transition: background-color 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25),
    transform 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);
  /* padding: 0.5em;
  margin: 0.5em;
  color: black;
  background: #fff;
  border: none;
  border-radius: 5px; */
  &:focus {
    background: hsl(0, 7%, 20%);
    transform: scale(1.02);
  }
`;

export const Select = styled.select`
  padding: 15px 10px;
  border: 1px solid hsl(0, 0%, 10%);
  background: hsl(0, 0%, 14%);
  color: #afafaf;
  font-size: 14px;
  border: none;
  option {
    color: #afafaf;
    background: hsl(0, 0%, 14%);
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

  &:focus {
    transform: scale(1.02);

    background: hsl(0, 7%, 20%);
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 15px;
  line-height: 1.5;
  padding: 15px 10px;
  border: 1px solid hsl(0, 0%, 10%);
  color: #afafaf;
  background: hsl(0, 0%, 14%);
  transition: background-color 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25),
    transform 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);

  &:hover {
    color: #000;
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
  &:enabled:focus {
    background: hsl(0, 7%, 20%);
  }

  &:disabled {
    cursor: default;
    filter: blur(2px);
  }
`;
