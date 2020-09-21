import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import Clock from './Clock';
import Graph from './Graph';
import Name from './Name';
import { timezoneSelector } from './selectors';
import { timeActions } from './slicer';

const Container = styled.div`
  align-items: stretch;
  display: flex;
  flex-flow: row nowrap;
  margin: 2rem 0;
`;

const Buttons = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  width: 2rem;
`;

const AbbreviationContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 6rem;
`;

const Abbreviation = styled.div`
  align-items: center;
  background-color: #e0e0e0;
  border: 0;
  border-radius: 50%;
  color: #999;
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  height: 4rem;
  justify-content: center;
  width: 4rem;
`;

const HomeIcon = styled.i`
  align-items: center;
  background: linear-gradient(-45deg, #f39c12, #f1c40f);
  border-radius: 50%;
  color: white;
  display: flex;
  height: 2rem;
  justify-content: center;
  width: 2rem;
`;

const IconButton = styled.button<{ color: string }>`
  ${({ color }) => css`
    border: 0;
    border-radius: .5rem;
    color: #999;
    cursor: pointer;
    height: 1.5rem;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 1.5rem;

    &:hover {
      background-color: ${color}56;
      color: ${color};
    }

    &:active, &:focus {
      outline: none;
    }
  `}
`;

interface Props {
  isHome?: boolean;
  timezone: string;
}

export const Timezone: React.FC<Props> = ({ isHome, timezone }) => {
  const dispatch = useDispatch();
  const current = useSelector(timezoneSelector(timezone))

  React.useEffect(() => {
    if (!current) {
      dispatch(timeActions.fetchTimezone(timezone));
    }
  }, [current, dispatch, timezone]);

  const switchTimezone = React.useCallback(() => {
    dispatch(timeActions.switchTimezone(timezone));
  }, [dispatch, timezone]);

  const setHome = React.useCallback(() => {
    dispatch(timeActions.setHomeTimezone(timezone));
  }, [dispatch, timezone]);

  return (
    <Container>
      <Buttons>
        {isHome ? (
          <HomeIcon className="icon-home" />
        ) : (
          <IconButton color="#f1c40f" onClick={setHome}>
            <i className="icon-home" />
          </IconButton>
        )}
        {!isHome && (
          <IconButton color="#e74c3c" onClick={switchTimezone}>
            <i className="icon-remove" />
          </IconButton>
        )}
      </Buttons>
      <AbbreviationContainer>
        <Abbreviation>{current?.abbreviation}</Abbreviation>
      </AbbreviationContainer>
      <Name isDST={current?.dst}>{timezone}</Name>
      <Clock timezone={timezone} />
      <Graph isDST={current?.dst} timezone={timezone} />
    </Container>
  )
}

export default Timezone
