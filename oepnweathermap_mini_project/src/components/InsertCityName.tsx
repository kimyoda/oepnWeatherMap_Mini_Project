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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      clickChangeCtiy();
    }
  };

  return (
    <Container>
      <InputCityNmae
        type="text"
        onChange={changeCityName}
        onKeyPress={handleKeyPress}
        value={city}
      />
      <SearchButton onClick={clickChangeCtiy}>{`날씨 보기`}</SearchButton>
    </Container>
  );
};

export default InsertCityName;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InputCityNmae = styled.input`
  border: none;
  border-radius: 10px;
  font-size: 20px;
`;
const SearchButton = styled.button`
  background-color: #81d1ff;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-5px);
  }
`;
