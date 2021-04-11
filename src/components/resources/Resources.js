import React, { useState, useEffect } from "react";
import styled from "styled-components";
import API from "../../api";

const Resources = ({ onSetResource, selectedResource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    API.getResources()
      .then(resources => setResources(resources))
      .catch(_error => {
        // Next steps: Handle and log errors
      });
  });

  const isSelected = index => {
    return resources[index] === selectedResource;
  };

  return (
    <Nav>
      <Title>Resources</Title>
      {resources.map((resource, index) => {
        return (
          <Resource
            selected={isSelected(index)}
            key={index}
            onClick={() => onSetResource(resource)}
          >
            Resource {index}
          </Resource>
        );
      })}
    </Nav>
  );
};

const Nav = styled.div`
  background-color: #464d59;
  width: 15vw;
  padding-top: 10px;
  color: white;
  text-shadow: 1px 1px grey;
`;

const Resource = styled.div`
  background-color: ${props => (props.selected ? "#282c34" : "#626977")};
  padding: 20px;

  &:hover {
    border: 1px solid #626977;
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-weight: bold;
  padding: 15px;
  font-size: 20px;
  margin-bottom: 10px;
`;

export default Resources;
