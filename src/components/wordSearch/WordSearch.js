import React from "react";
import styled from "styled-components";
import Matrix from "../matrix";
import OieCounter from "../oieCounter";

function WordSearch({ resource }) {
  return (
    <Content>
      {resource.length === 0 ? (
        <EmptyStateTitle>Select a Resource to start.</EmptyStateTitle>
      ) : (
        <section>
          <Title>
            <OieCounter matrix={resource} />
          </Title>
          <Matrix content={resource} />
        </section>
      )}
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  width: 100%;
  margin: auto;
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
`;

const EmptyStateTitle = styled(Title)`
  padding: 20px 50px;
  border: 1px dashed white;
`;

export default WordSearch;
