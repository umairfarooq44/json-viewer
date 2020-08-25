import React, { useEffect } from 'react';
import debounce from 'lodash.debounce';
import { Heading, SearchInput } from './Search.styles';

type SearchProps = {
  getPath: Function;
  json: any;
};

const Search: React.FC<SearchProps> = ({ getPath, json }) => {
  useEffect(() => {
    getPath('', []);
  }, []);

  const handleChange = (e: any) => {
    const value = e.target.value;
    onChange(value);
  };
  const onChange = debounce((val) => getPath(val, json), 300, { maxWait: 500 });
  return (
    <>
      <Heading>Please enter json path </Heading>
      <SearchInput onChange={handleChange} placeholder='Enter jsonpath' />
    </>
  );
};

export default Search;
