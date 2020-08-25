import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import styled from 'styled-components';
import getPathAction from '../../store/jsonpath/action';

type SearchProps = {
  getPath: Function;
  json: any;
};

const SearchInput = styled.input`
  list-style: none;
  position: relative;
  display: inline-block;
  width: 300px;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin-left: 20px;
  outline: none;
  &:focus,
  &:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }
`;

const Heading = styled.h2`
  margin-left: 20px;
  font-weight: normal;
`;

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

const mapDispatchToProps = (dispatch: Function) => ({
  getPath: (data: string, json: any) => dispatch(getPathAction(data, json)),
});

export default connect(null, mapDispatchToProps)(Search);
