import * as React from 'react';
import { useSelector } from 'react-redux';
import { syncScrolls } from '../util';
import { selectedTimezoneSelector, timezoneListSelector } from './selectors';
import Timezone from './Timezone';

const Timezones: React.FC = () => {
  const selected = useSelector(selectedTimezoneSelector);
  const list = useSelector(timezoneListSelector);

  React.useEffect(() => {
    syncScrolls();
  }, [selected, list]);

  return (
    <>{selected.map(timezone => timezone && <Timezone key={timezone} timezone={timezone} />)}</>
  )
};

export default Timezones;
