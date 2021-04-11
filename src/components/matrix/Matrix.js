import React from "react";
import styled from "styled-components";

const Matrix = ({ content }) => {
  return (
    <Background>
      {content.map((row, index1) => (
        <Row key={index1}>
          {row.map((letter, index2) => (
            <Letter key={index2}>{letter}</Letter>
          ))}
        </Row>
      ))}
    </Background>
  );
};

const Background = styled.div`
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
  padding: 5px 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
`;

const Letter = styled.div`
  padding: 10px 0;
  min-width: 30px;
  text-align: center;
`;

export default Matrix;
