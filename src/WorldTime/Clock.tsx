import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import * as React from 'react';
import styled from 'styled-components';
import { getUTCNow } from '../util';

const Container = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  justify-content: center;
`;

const CurrentDate = styled.div`
  color: #777;
  font-size: .7rem;
`;

interface Props {
  timezone: string;
}

const Clock: React.FC<Props> = ({ timezone }) => {
  const [time, setTime] = React.useState(utcToZonedTime(getUTCNow(), timezone));

  React.useEffect(() => {
    setTime(utcToZonedTime(getUTCNow(), timezone));
  }, [timezone]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(utcToZonedTime(getUTCNow(), timezone));
    }, 1000)

    return () => {
      clearInterval(interval);
    };
  }, [timezone]);

  const [date, currentTime, dow] = format(time, 'PP\' | \'HH:mm:ss\' | \'iiii').split(' | ');
  const [hh, mm, ss] = currentTime.split(':');
  const separator = Number(ss) & 1 ? ':' : ' ';

  return (
    <Container>
      <span>{hh}{separator}{mm}{separator}{ss}</span>
      <CurrentDate>{date}</CurrentDate>
      <CurrentDate>{dow}</CurrentDate>
    </Container>
  )
}

export default Clock;
