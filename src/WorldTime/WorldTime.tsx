import * as React from 'react';
import styled from 'styled-components';
import { Search } from '../Search';
import { StoreProvider } from '../store';
import HomeTimezone from './HomeTimezone';
import '../icons.css';
import Timezones from './Timezones';

export const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 1rem;
  box-sizing: border-box;
  padding: 2rem 3rem;
  width: 100%;

  & * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    user-select: none;
  }
`;

export const Content = styled.div`
  overflow: hidden;
`;

const WorldTime: React.FC = () => (
  <StoreProvider>
    <Container>
      <Search />
      <Content>
        <HomeTimezone />
        <Timezones />
      </Content>
    </Container>
  </StoreProvider>
);

export default WorldTime;
