import React, { useState } from "react";
import styled from "styled-components";
import Resources from "./components/resources";
import WordSearch from "./components/wordSearch";

function App() {
  const [resource, setResource] = useState([]);

  return (
    <Main>
      <Resources onSetResource={setResource} selectedResource={resource} />
      <WordSearch resource={resource} />
    </Main>
  );
}

const Main = styled.div`
  background-color: #282c34;
  height: 100vh;
  display: flex;
`;

export default App;
