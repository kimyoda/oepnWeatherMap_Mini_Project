import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  setCityname: React.Dispatch<React.SetStateAction<string>>;
}

const InsertCityName = ({ setCityname }: Props) => {
  const [city, setCity] = useState("seoul");

  const changeCityName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const clickChangeCtiy = () => {
    setCityname(city);

    setCity("");
  };

  return (
    <Container>
      <InputCityNmae type="text" onChange={changeCityName} value={city} />
      <SearchButton onClick={clickChangeCtiy}>{`날씨 보기`}</SearchButton>
    </Container>
  );
};

export default InsertCityName;

const Container = styled.div``;
const InputCityNmae = styled.input``;
const SearchButton = styled.button``;
