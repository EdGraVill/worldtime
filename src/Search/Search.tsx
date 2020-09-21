import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { suggestionsSelector } from './selectors';
import { searchActions } from './slicer';

const Input = styled.input`
  border-radius: .5rem;
  max-width: 15rem;
  padding: .3rem .75rem;
  width: 50%;

  &:focus {
    outline: none;
  }
`;

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const suggestions = useSelector(suggestionsSelector);
  const unique = 'WorldTime_suggestionlist';

  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    dispatch(searchActions.fetchSuggestions());
  }, [dispatch]);

  const onChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  }, [])

  const onKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const isValid = suggestions.indexOf(value) >= 0;

      if (isValid) {
        dispatch(searchActions.setLastSelection(value));
      }
    }
  }, [dispatch, suggestions, value]);

  const onInput = React.useCallback((event: React.FormEvent<HTMLInputElement>) => {
    if (!(event.nativeEvent instanceof InputEvent)) {
      dispatch(searchActions.setLastSelection(event.currentTarget.value));
      setTimeout(() => setValue(''), 1000);
    }
  }, [dispatch]);

  return (
    <>
      <Input
        list={unique}
        onChange={onChange}
        onInputCapture={onInput}
        onKeyDown={onKeyDown}
        placeholder="Find timezone"
        value={value}
      />
      <datalist id={unique}>
        {suggestions.map(suggestion => <option key={suggestion}>{suggestion}</option>)}
      </datalist>
    </>
  );
};

export default Search;
