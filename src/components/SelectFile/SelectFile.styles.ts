import styled from 'styled-components';

export const Select = styled.label`
  line-height: 1.499;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  touch-action: manipulation;
  height: 25px;
  padding: 3px 15px 0;
  width: 100px;
  font-size: 14px;
  border-radius: 4px;
  display: block;
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;
export const Heading = styled.h3`
  font-weight: normal;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  margin-left: 20px;
`;
export const Loading = styled.span`
  font-size: 14px;
  line-height: 30px;
`;
export const Error = styled(Loading)`
  color: red;
`;
