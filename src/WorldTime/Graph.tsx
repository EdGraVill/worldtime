import { format, differenceInMinutes, subMinutes, addHours } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import * as React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { getUTCNow } from '../util';
import { homeTimezoneSelector } from './selectors';

const backgroundGetter = (hour: number) => {
  if (hour >= 21 || hour <= 5) {
    return '#34495e';
  }

  if (hour >= 18 || hour <= 7) {
    return '#DBEDFF';
  }
  
  return 'white';
}

const colorGetter = (hour: number) => hour >= 21 || hour <= 5 ? 'white' : 'black';

const Container = styled.div`
  flex: 6;
  margin-left: 2rem;
  margin-right: .5rem;
  max-width: 48rem;
  overflow: overlay;
`;

const Content = styled.div`
  align-items: stretch;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  width: auto;
`;

const Hour = styled.div<{ date: Date, hour: number, isDST?: boolean }>`
  ${({ date, hour, isDST }) => {
    const [day, month] = format(date, 'd MMM').split(' ');

    return css`
      align-items: center;
      background: ${backgroundGetter(isDST ? hour - 1 : hour)};
      color: ${colorGetter(isDST ? hour - 1 : hour)};
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      min-width: ${hour === 0 || hour === 23 ? '1.9rem' : '2rem'};
      ${hour === 0 ? 'margin-left: .1rem;' : ''}
      ${hour === 23 ? 'margin-right: .1rem;' : ''}

      border-radius: ${hour === 0 ? '.7rem' : 0} ${hour === 23 ? '.7rem' : 0} ${hour === 23 ? '.7rem' : 0} ${hour === 0 ? '.7rem' : 0};

      &::before {
        content: '${hour === 0 ? day : hour}';
        font-size: ${hour === 0 ? '.6rem' : '.8rem'};
      }

      &::after {
        content: '${hour === 0 ? month : 'hrs'}';
        font-size: .6rem;
        margin: .2rem 0;
      }
    `;
  }}
`;

interface Props {
  isDST?: boolean;
  timezone: string;
}

const Graph: React.FC<Props> = ({ isDST, timezone }) => {
  const homeTimezone = useSelector(homeTimezoneSelector);

  const tzCurrent = utcToZonedTime(getUTCNow(), timezone);
  const tzHome = utcToZonedTime(getUTCNow(), homeTimezone!.timezone);

  const diff = React.useMemo(() => differenceInMinutes(tzCurrent, tzHome), [tzCurrent, tzHome]);

  return (
    <Container className="worldtime-graph">
      <Content>
        {Array(24).fill(null).map((_, ix) => {
          const refHour = ix + Math.round(diff / 60);
          const hourCalc = refHour % 24;
          const hour = hourCalc >= 0 ? hourCalc : 24 + hourCalc;

          return (
            <Hour
              date={subMinutes(addHours(tzCurrent, refHour), diff)}
              hour={hour}
              isDST={isDST}
              key={ix}
            />
          );
        })}
      </Content>
    </Container>
  );
};

export default Graph;
