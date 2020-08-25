import React, { useState } from 'react';
import {
  Container,
  Heading,
  Loading,
  Select,
  Error,
} from './SelectFile.styles';

type SelectFileProps = {
  onFileSelect: Function;
};

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
