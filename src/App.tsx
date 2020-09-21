import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { WorldTime } from './WorldTime';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const Presentation = styled.div`
  align-items: center;
  background: linear-gradient(-45deg, orangered, deeppink);
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 10%;
  width: 100vw;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Presentation>
        <WorldTime />
      </Presentation>
    </>
  );
};

export default App;
