import React, { useState } from 'react';
import styled from 'styled-components';

type SelectFileProps = {
  onFileSelect: Function;
};

const Select = styled.label`
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
const Heading = styled.h3`
  font-weight: normal;
  margin-bottom: 10px;
`;

const Container = styled.div`
  margin-left: 20px;
`;
const Loading = styled.span`
  font-size: 14px;
  line-height: 30px;
`;
const Error = styled(Loading)`
  color: red;
`;

const SelectFile: React.FC<SelectFileProps> = ({ onFileSelect }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    setError('');
    setLoading(true);
    const [file] = e.target.files;
    onFileSelect(null);
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e1: any) => {
        const text = e1.target.result;
        try {
          const json = JSON.parse(text);
          onFileSelect(json);
          setLoading(false);
        } catch (err) {
          setLoading(false);
          setError('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    }
  };
  return (
    <Container>
      <Heading>Select JSON file</Heading>
      <Select>
        <input
          type='file'
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        Select json file
      </Select>
      {loading && <Loading>Loading file...</Loading>}
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default SelectFile;
