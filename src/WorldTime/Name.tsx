import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1.5;
  flex-flow: column nowrap;
  justify-content: center;
`;

const Region = styled.span`
  color: #777;
  font-size: .7rem;
  margin-bottom: .3rem;

  & > span {
    background-color: #aaa;
    border-radius: .25rem;
    color: white;
    font-size: .6rem;
    margin: 0 0 0 .5rem;
    padding: .2rem;
  }
`;

interface Props {
  children: string;
  isDST?: boolean;
}

const Name: React.FC<Props> = ({ children, isDST }) => {
  const [region, name] = children.replace('/', '-').replace(/_/g, ' ').split('-');

  return (
    <Container>
      <Region>{region}{isDST && <span>DST</span>}</Region>
      <span>{name}</span>
    </Container>
  );
};

export default Name;
