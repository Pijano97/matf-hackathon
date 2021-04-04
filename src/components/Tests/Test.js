import React, { useEffect, useState } from "react";
import LoadingBar from "../LoadingBar/LoadingBar";
import {
  Isprobaj,
  IsprobajWrapper,
  LoadingBarTitle,
  IsprobajInput,
  InputTemperatura,
  Select,
  Button,
  IsprobajInputContainer,
  IsprobajInputNaslov,
  IsprobajWeather,
  WeatherImg,
  WeatherTemperature,
  WeatherInfo,
  WeatherContainerOne,
  WeatherInfoContainer,
  WeatherContainerTwo,
  WeatherWrapper,
  WeatherTest,
} from "./IsprobajElements";

function Test() {
  const [temperature, setTemperature] = useState("");
  const [weatherTemperature, setWeatherTemperature] = useState("");
  const [pritisak, setPritisak] = useState("");
  const [vlaznost, setVlaznost] = useState("");
  const [brzinaVetra, setBrzinaVetra] = useState("");
  const [oblacnost, setOblacnost] = useState("");
  const [dan, setDan] = useState("");
  const [mesec, setMesec] = useState("");
  const [barPercentage, setbarPercentage] = useState(0);

  const [loading, setLoading] = useState(false);
  const [weatherImg, setWeatherImg] = useState("");
  const [precipitation, setPrecipitation] = useState("");
  const [visibility, setVisibility] = useState("");
  const [preassure, setPreassure] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
  const [weatherDesc, setWeatherDesc] = useState("");

  const URL =
    "http://api.weatherstack.com/current?access_key=c2c58ca6c51f7422ed48bd46ba4baf7f&query=Belgrade";
  const PyURL = `http://24.135.203.92:8080/hackathon/api/airquality/quality?vreme=21&temperatura=${temperature}&vlaznost=${vlaznost}&pritisak=${pritisak}&brzina=${brzinaVetra}&oblacnost=${oblacnost}&danUNedelji=${dan}&mesec=${mesec}`;

  const temperatureChange = (e) => {
    e.preventDefault();
    setTemperature(e.target.value);
  };

  const vlaznostChange = (e) => {
    e.preventDefault();
    setVlaznost(e.target.value);
  };

  const pritisakChange = (e) => {
    e.preventDefault();
    setPritisak(e.target.value);
  };

  const brzinaVetraChange = (e) => {
    e.preventDefault();
    setBrzinaVetra(e.target.value);
  };

  const oblacnostChange = (e) => {
    e.preventDefault();
    setOblacnost(e.target.value);
  };

  const danChange = (e) => {
    e.preventDefault();
    setDan(e.target.value);
  };

  const mesecChange = (e) => {
    e.preventDefault();
    setMesec(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(!loading);
  };

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setWeatherImg(data.current.weather_icons[0]);
        setWeatherTemperature(data.current.temperature);
        setPrecipitation(data.current.precip);
        setVisibility(data.current.visibility);
        setPreassure(data.current.pressure);
        setCountry(data.location.country);
        setCity(data.location.name);
        setTime(data.current.observation_time);
        setWeatherDesc(data.current.weather_descriptions[0]);
      })
      .catch((e) => console.log(e));

    fetch(PyURL)
      .then((response) => response.json())
      .then((data) => {
        setbarPercentage(data.PM10);
      })
      .catch((e) => console.log(e));
  }, [loading]);

  return (
    <>
      <Isprobaj id="isprobaj">
        <IsprobajInputContainer>
          <IsprobajInput onSubmit={handleSubmit}>
            <IsprobajInputNaslov>Unesi podatke</IsprobajInputNaslov>
            <InputTemperatura
              value={temperature}
              onChange={temperatureChange}
              placeholder="Temperatura"
              type="text"
              required
            ></InputTemperatura>
            <InputTemperatura
              onChange={vlaznostChange}
              value={vlaznost}
              placeholder="Vlaznost"
              type="text"
              required
            ></InputTemperatura>
            <InputTemperatura
              onChange={pritisakChange}
              value={pritisak}
              placeholder="Pritisak"
              type="text"
              required
            ></InputTemperatura>
            <InputTemperatura
              onChange={brzinaVetraChange}
              value={brzinaVetra}
              placeholder="Brzina vetra km/h"
              type="text"
              required
            ></InputTemperatura>
            <InputTemperatura
              onChange={oblacnostChange}
              value={oblacnost}
              placeholder="Oblacnost"
              type="text"
              required
            ></InputTemperatura>
            <Select value={dan} onChange={danChange} required>
              <option value="">Dan</option>
              <option value="1">Ponedeljak</option>
              <option value="2">Utorak</option>
              <option value="3">Sreda</option>
              <option value="4">Četvrtak</option>
              <option value="5">Petak</option>
              <option value="6">Subota</option>
              <option value="7">Nedelja</option>
            </Select>
            <Select value={mesec} onChange={mesecChange} required>
              <option value="">Mesec</option>
              <option value="1">Januar</option>
              <option value="2">Februar</option>
              <option value="3">Mart</option>
              <option value="4">April</option>
              <option value="5">Maj</option>
              <option value="6">Jun</option>
              <option value="7">Jul</option>
              <option value="8">Avgust</option>
              <option value="9">Septembar</option>
              <option value="10">Oktobar</option>
              <option value="11">Novebar</option>
              <option value="12">Decebar</option>
            </Select>

            <Button type="submit">Generiši</Button>
          </IsprobajInput>
        </IsprobajInputContainer>
        <WeatherTest>
          <IsprobajWrapper>
            <LoadingBarTitle>PM10</LoadingBarTitle>
            <LoadingBar
              min_progress="0"
              max_progress="50"
              title="Temperature"
              done={barPercentage}
            />
          </IsprobajWrapper>
          <IsprobajWeather>
            <WeatherWrapper>
              <WeatherContainerOne>
                <WeatherImg src={weatherImg}></WeatherImg>
                <WeatherTemperature>{weatherTemperature}°</WeatherTemperature>
                <WeatherInfoContainer>
                  <WeatherInfo>Precipitation: {precipitation}%</WeatherInfo>
                  <WeatherInfo>Visibility: {visibility}</WeatherInfo>
                  <WeatherInfo>Preassure: {preassure}</WeatherInfo>
                </WeatherInfoContainer>
              </WeatherContainerOne>
              <WeatherContainerTwo>
                <WeatherInfoContainer>
                  <WeatherInfo>{country}</WeatherInfo>
                  <WeatherInfo>{city}</WeatherInfo>
                  <WeatherInfo>Nedelja {time}</WeatherInfo>
                  <WeatherInfo>{weatherDesc}</WeatherInfo>
                </WeatherInfoContainer>
              </WeatherContainerTwo>
            </WeatherWrapper>
          </IsprobajWeather>
        </WeatherTest>
      </Isprobaj>
    </>
  );
}

export default Test;
