import styled from 'styled-components';

export const SearchInput = styled.input`
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

export const Heading = styled.h2`
  margin-left: 20px;
  font-weight: normal;
`;
