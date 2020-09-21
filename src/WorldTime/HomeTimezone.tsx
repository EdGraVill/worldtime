import { utcToZonedTime } from 'date-fns-tz';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCurrentTimezone } from '../api';
import { getUTCNow, remSize } from '../util';
import Selector from './Selector';
import { homeTimezoneSelector } from './selectors';
import { timeActions } from './slicer';
import Timezone from './Timezone';

const Container = styled.div`
  position: relative;
`;

const HomeTimezone: React.FC = () => {
  const dispatch = useDispatch();
  const homeTimezone = useSelector(homeTimezoneSelector);
  const [localTime, setLocalTime] = React.useState(new Date());

  React.useEffect(() => {
    if (!homeTimezone) {
      getCurrentTimezone().then((timezone) => {
        dispatch(timeActions.fulfillTimezone(timezone));
        dispatch(timeActions.setHomeTimezone(timezone.timezone));
      });
    } else {
      setTimeout(() => {
        (document.getElementsByClassName('worldtime-graph')[0] as HTMLDivElement).scrollTo({
          behavior: 'auto',
          left: localTime.getHours() * remSize * 2,
        });
        (document.getElementsByClassName('worldtime-graph')[0] as HTMLDivElement).dispatchEvent(new Event('scroll'));
      }, 10);
    }
  }, [dispatch, homeTimezone, localTime]);

  React.useEffect(() => {
    if (homeTimezone) {
      setLocalTime(utcToZonedTime(getUTCNow(), homeTimezone.timezone))
    }
  }, [homeTimezone])

  if (!homeTimezone) {
    return <div>Loading</div>;
  }

  return (
    <Container>
      <Timezone isHome timezone={homeTimezone.timezone} />
      <Selector localTime={localTime} />
    </Container>
  );
};

export default HomeTimezone;
